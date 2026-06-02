// Shared Postgres pool for the serverless API. Works with any Postgres
// connection string (Vercel Postgres / Neon / Supabase / etc.) via DATABASE_URL.
import pg from "pg";

let pool;
export function getPool() {
  if (!pool) {
    const connectionString =
      process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.POSTGRES_PRISMA_URL;
    if (!connectionString) throw new Error("No database connection string configured");
    pool = new pg.Pool({
      connectionString,
      ssl: { rejectUnauthorized: false },
      max: 3,
    });
  }
  return pool;
}

// Create the leads table on first use (idempotent).
let schemaReady;
export function ensureSchema() {
  if (!schemaReady) {
    schemaReady = getPool().query(`
      CREATE TABLE IF NOT EXISTS leads (
        id          SERIAL PRIMARY KEY,
        name        TEXT,
        phone       TEXT,
        email       TEXT,
        address     TEXT,
        size        TEXT,
        source      TEXT,
        notes       TEXT,
        status      TEXT NOT NULL DEFAULT 'new',
        created_at  TIMESTAMPTZ NOT NULL DEFAULT now()
      );
    `);
  }
  return schemaReady;
}
