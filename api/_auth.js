// Minimal, real auth for the admin dashboard: an HMAC-signed, expiring token
// stored in an HttpOnly cookie. No third-party service — secrets come from
// ADMIN_PASSWORD + SESSION_SECRET env vars.
import crypto from "node:crypto";

export const COOKIE = "jp_admin";
const TTL_MS = 1000 * 60 * 60 * 12; // 12 hours

function secret() {
  return process.env.SESSION_SECRET || "";
}

export function makeToken(now) {
  const exp = String(now + TTL_MS);
  const sig = crypto.createHmac("sha256", secret()).update(exp).digest("hex");
  return `${exp}.${sig}`;
}

export function verifyToken(token, now) {
  if (!token || !secret()) return false;
  const [exp, sig] = String(token).split(".");
  if (!exp || !sig) return false;
  const expected = crypto.createHmac("sha256", secret()).update(exp).digest("hex");
  let ok = false;
  try {
    ok = crypto.timingSafeEqual(Buffer.from(sig, "hex"), Buffer.from(expected, "hex"));
  } catch {
    return false;
  }
  return ok && Number(exp) > now;
}

export function isAuthed(req) {
  const token = (req.cookies && req.cookies[COOKIE]) || readCookie(req, COOKIE);
  return verifyToken(token, Date.now());
}

// Fallback cookie parse if the platform helper isn't present.
function readCookie(req, name) {
  const header = (req.headers && req.headers.cookie) || "";
  for (const part of header.split(";")) {
    const i = part.indexOf("=");
    if (i > 0 && part.slice(0, i).trim() === name) return decodeURIComponent(part.slice(i + 1).trim());
  }
  return null;
}
