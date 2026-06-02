// POST /api/login — exchange the admin password for a session cookie.
import { makeToken, COOKIE } from "./_auth.js";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const expected = process.env.ADMIN_PASSWORD;
  const sessionSecret = process.env.SESSION_SECRET;
  if (!expected || !sessionSecret) {
    return res.status(500).json({ error: "Admin login is not configured yet (set ADMIN_PASSWORD and SESSION_SECRET)." });
  }

  const password = (req.body && req.body.password) || "";
  if (password !== expected) return res.status(401).json({ error: "Incorrect password" });

  const token = makeToken(Date.now());
  res.setHeader(
    "Set-Cookie",
    `${COOKIE}=${token}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=43200`
  );
  return res.status(200).json({ ok: true });
}
