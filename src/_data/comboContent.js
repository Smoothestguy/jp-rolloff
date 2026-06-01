// Loads long-form combo bodies from /content/combos/<city>-<yd>.md (project root,
// OUTSIDE src/ so Eleventy never renders them as standalone pages).
//
// Key = "<citySlug>-<yd>"  e.g. "bowie-20".  Value = raw markdown string.
// The combo template (src/combo/size-in-city.njk) renders this through the
// `markdown` filter when a matching body exists, and falls back to the short
// data-driven sections when it doesn't. The content factory just drops .md files
// in that folder to "deepen" a page — no template changes needed.
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
    return out; // folder not created yet → no deep bodies, template falls back
  }
  for (const f of files) {
    if (!f.endsWith(".md")) continue;
    out[f.replace(/\.md$/, "")] = fs.readFileSync(path.join(dir, f), "utf8");
  }
  return out;
})();
