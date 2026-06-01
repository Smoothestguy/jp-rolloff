// Cross-product of every city × every dumpster size → one entry per combo page.
// Eleventy pagination is one-dimensional, so we flatten the two datasets here and
// let the template in src/combo/ paginate over the result (size: 1 → one page each).
//
// Scale check: 15 cities × 5 sizes = 75 pages today. Add cities to locations.js and
// this grows automatically — ~40 cities → 200 pages (Tier 2 target), no template change.
import locations from "./locations.js";
import sizes from "./sizes.js";

const bySlug = Object.fromEntries(locations.map((c) => [c.slug, c]));

export default locations.flatMap((city) =>
  sizes.map((size) => ({
    city,
    size,
    // Resolve neighbor slugs → {slug, name} so the template can link to nearby
    // same-size combos without a lookup. All neighbors exist in locations.js.
    neighbors: (city.neighbors || [])
      .map((s) => bySlug[s])
      .filter(Boolean)
      .map((c) => ({ slug: c.slug, name: c.name }))
  }))
);
