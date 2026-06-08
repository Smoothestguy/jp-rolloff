// Cross-product of neighborhood × size for nested pages, CONTENT-GATED:
// a page is emitted ONLY when a deep body exists at
//   /content/neighborhoods/<neighborhoodSlug>-<yd>.md
// so we never publish thin name-swap clones. The content factory writes those .md
// files; until one exists for a given neighborhood×size, that page simply isn't built.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import neighborhoods from "./neighborhoods.js";
import sizes from "./sizes.js";
import locations from "./locations.js";

const here = path.dirname(fileURLToPath(import.meta.url));
const dir = path.resolve(here, "../../content/neighborhoods");
const cityBySlug = Object.fromEntries(locations.map((c) => [c.slug, c]));
const titleCase = (slug) =>
  slug.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

let bodies = {};
let bodiesEs = {};
try {
  for (const f of fs.readdirSync(dir)) {
    // ES siblings (<slug>-<yd>.es.md) must be checked BEFORE the generic .md test,
    // since ".es.md" also ends with ".md". EN body gates the page; ES is optional.
    if (f.endsWith(".es.md")) {
      bodiesEs[f.replace(/\.es\.md$/, "")] = fs.readFileSync(path.join(dir, f), "utf8");
    } else if (f.endsWith(".md")) {
      bodies[f.replace(/\.md$/, "")] = fs.readFileSync(path.join(dir, f), "utf8");
    }
  }
} catch {
  /* folder not created yet → no neighborhood pages */
}

export default neighborhoods.flatMap((n) => {
  const city = cityBySlug[n.city];
  if (!city) return [];
  return sizes
    .filter((size) => size.combo !== false)
    .map((size) => {
      const body = bodies[`${n.slug}-${size.yd}`];
      if (!body) return null; // content-gated: no body → no page
      const bodyEs = bodiesEs[`${n.slug}-${size.yd}`] || null; // optional ES translation
      return { city, neighborhood: { ...n, name: titleCase(n.slug) }, size, body, bodyEs };
    })
    .filter(Boolean);
});
