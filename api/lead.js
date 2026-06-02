// POST /api/lead — save a website lead to the database (Supabase/any Postgres via
// DATABASE_URL) AND email the office a notification (Resend via RESEND_API_KEY).
// Both are independent: a lead succeeds if EITHER the save or the email works, so
// the site keeps working as you connect each integration. If neither is configured,
// it returns an error and the website forms fall back to a prefilled email draft.
import { getPool, ensureSchema } from "./_db.js";

const clip = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");
const esc = (s) => String(s == null ? "" : s).replace(/[&<>]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));

async function saveLead(lead) {
  await ensureSchema();
  await getPool().query(
    `INSERT INTO leads (name, phone, email, address, size, source, notes)
     VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [lead.name, lead.phone, lead.email, lead.address, lead.size, lead.source, lead.notes]
  );
}

async function emailLead(lead) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;
  const from = process.env.RESEND_FROM || "JP Roll-Off Website <leads@jprolloff.net>";
  const to = (process.env.LEADS_TO || "Office@jprolloff.net").split(",").map((s) => s.trim());
  const rows = [
    ["Name", lead.name], ["Phone", lead.phone], ["Email", lead.email],
    ["Service address", lead.address], ["Dumpster size", lead.size],
    ["Source", lead.source], ["Notes", lead.notes],
  ];
  const html =
    '<h2 style="font-family:sans-serif">New quote request</h2>' +
    '<table style="font-family:sans-serif;border-collapse:collapse">' +
    rows.map(([k, v]) => `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${esc(v) || "—"}</strong></td></tr>`).join("") +
    "</table>";
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      subject: `New lead — ${lead.name || "Website"}${lead.size ? " (" + lead.size + ")" : ""}`,
      html,
      reply_to: lead.email || undefined,
    }),
  });
  return res.ok;
}

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let body;
  try { body = req.body || {}; } catch { return res.status(400).json({ error: "Invalid body" }); }

  const lead = {
    name: clip(body.name, 200).trim(),
    phone: clip(body.phone, 50).trim(),
    email: clip(body.email, 200),
    address: clip(body.address, 300),
    size: clip(body.size, 50),
    source: clip(body.source, 50) || "web",
    notes: clip(body.notes, 2000),
  };
  if (!lead.name || !lead.phone) return res.status(400).json({ error: "Name and phone are required" });

  let saved = false, emailed = false;
  try { await saveLead(lead); saved = true; } catch (e) { /* DB not configured / unreachable */ }
  try { emailed = await emailLead(lead); } catch (e) { /* email not configured / failed */ }

  if (saved || emailed) return res.status(200).json({ ok: true, saved, emailed });
  return res.status(500).json({ error: "Lead capture not configured" });
}
