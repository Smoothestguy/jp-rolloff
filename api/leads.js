// GET  /api/leads        — list leads (auth required)
// PATCH /api/leads        — update a lead's status  { id, status }
import { getPool, ensureSchema } from "./_db.js";
import { isAuthed } from "./_auth.js";

const STATUSES = ["new", "contacted", "quoted", "booked", "customer", "lost"];

export default async function handler(req, res) {
  if (!isAuthed(req)) return res.status(401).json({ error: "Unauthorized" });

  try {
    await ensureSchema();

    if (req.method === "PATCH") {
      const { id, status } = req.body || {};
      if (!id || !STATUSES.includes(status)) return res.status(400).json({ error: "Bad request" });
      await getPool().query("UPDATE leads SET status = $1 WHERE id = $2", [status, Number(id)]);
      return res.status(200).json({ ok: true });
    }

    if (req.method === "GET") {
      const { rows } = await getPool().query(
        "SELECT id, name, phone, email, address, size, source, notes, status, created_at FROM leads ORDER BY created_at DESC LIMIT 500"
      );
      const counts = rows.reduce((acc, r) => ((acc[r.status] = (acc[r.status] || 0) + 1), acc), {});
      return res.status(200).json({ leads: rows, counts, total: rows.length });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    return res.status(500).json({ error: "Could not load leads" });
  }
}
