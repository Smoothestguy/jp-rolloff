// POST /api/lead — public endpoint that saves a website lead to the database.
// The website forms also keep a mailto fallback, so if this isn't configured yet
// (no DATABASE_URL) the user experience still works.
import { getPool, ensureSchema } from "./_db.js";

const clip = (v, n) => (typeof v === "string" ? v.slice(0, n) : "");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  let body;
  try {
    body = req.body || {};
  } catch {
    return res.status(400).json({ error: "Invalid body" });
  }

  const name = clip(body.name, 200).trim();
  const phone = clip(body.phone, 50).trim();
  if (!name || !phone) return res.status(400).json({ error: "Name and phone are required" });

  try {
    await ensureSchema();
    await getPool().query(
      `INSERT INTO leads (name, phone, email, address, size, source, notes)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [
        name,
        phone,
        clip(body.email, 200),
        clip(body.address, 300),
        clip(body.size, 50),
        clip(body.source, 50) || "web",
        clip(body.notes, 2000),
      ]
    );
    return res.status(200).json({ ok: true });
  } catch (e) {
    return res.status(500).json({ error: "Could not save lead" });
  }
}
