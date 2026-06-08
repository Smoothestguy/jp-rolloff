// Loads SPANISH long-form combo bodies from /content/combos/<city>-<yd>.es.md
// (project root, OUTSIDE src/). Mirror of comboContent.js for the ES side of the
// language toggle. Key = "<citySlug>-<yd>" (e.g. "bowie-20"); value = raw markdown.
// The combo template renders this in a [data-lang-block="es"] block when present,
// falling back to the EN body otherwise.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, "../../content/combos");

export default (() => {
  const out = {};
  let files = [];
  try {
    files = fs.readdirSync(dir);
  } catch {
    return out; // folder not created yet → no ES bodies, template falls back to EN
  }
  for (const f of files) {
    if (!f.endsWith(".es.md")) continue;
    out[f.replace(/\.es\.md$/, "")] = fs.readFileSync(path.join(dir, f), "utf8");
  }
  return out;
})();
