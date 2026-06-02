// Neighborhoods within a parent city, for the nested neighborhood pages
// (/locations/<city>/<neighborhood>/<yd>-yard). `city` is a slug that must exist
// in locations.js — the parent city's permit rule, drive time, and ZIPs are reused.
//
// High-confidence, web-verified Bowie neighborhoods (the 16 Levitt "Belair" sections
// + the distinct communities). Add more cities' neighborhoods here over time — REAL,
// verifiable names only. A neighborhood only becomes live PAGES once the content
// factory has written deep bodies for it (see neighborhoodPages.js — pages are
// content-gated, so we never ship thin name-swap clones).
export default [
  { slug: "somerset",          city: "bowie", zip: "20715", oneLine: "Original 1960 Levitt Cape Cods and ranchers; S-named streets" },
  { slug: "buckingham",        city: "bowie", zip: "20715", oneLine: "Early-1960s Levitt section, B-named streets" },
  { slug: "kenilworth",        city: "bowie", zip: "20715", oneLine: "Early-1960s Levitt homes, K-named streets" },
  { slug: "foxhill",           city: "bowie", zip: "20715", oneLine: "Early-1960s Levitt F-section, completed 1964" },
  { slug: "tulip-grove",       city: "bowie", zip: "20715", oneLine: "Early-1960s Levitt T-section with larger eastward lots" },
  { slug: "long-ridge",        city: "bowie", zip: "20715", oneLine: "1960s Levitt L-section, slightly larger lots" },
  { slug: "meadowbrook",       city: "bowie", zip: "20716", oneLine: "Mid-1960s Levitt M-section, tree-lined streets" },
  { slug: "chapel-forge",      city: "bowie", zip: "20715", oneLine: "Mid-1960s Levitt C-section single-family homes" },
  { slug: "whitehall",         city: "bowie", zip: "20716", oneLine: "Mid-1960s Levitt W-section near Bowie Golf Club" },
  { slug: "rockledge",         city: "bowie", zip: "20716", oneLine: "Mid-1960s Levitt R-section single-family homes" },
  { slug: "overbrook",         city: "bowie", zip: "20715", oneLine: "Mid-1960s Levitt O-section, tree-shaded streets" },
  { slug: "yorktown",          city: "bowie", zip: "20715", oneLine: "Mid-to-late-1960s Levitt Y-section" },
  { slug: "idlewild",          city: "bowie", zip: "20715", oneLine: "Late-1960s Levitt I-section, 1966-1968" },
  { slug: "victoria-heights",  city: "bowie", zip: "20715", oneLine: "Late-1960s Levitt V-section, final Belair wave" },
  { slug: "heather-hills",     city: "bowie", zip: "20715", oneLine: "Mid-1960s Levitt H-section, oak-shaded lots with park access" },
  { slug: "glenridge",         city: "bowie", zip: "20715", oneLine: "1969 Levitt G-section, only ~22 homes built" },
  { slug: "belair-town",       city: "bowie", zip: "20715", oneLine: "~300 townhomes built 1968-1970 in two phases" },
  { slug: "old-town-bowie",    city: "bowie", zip: "20715", oneLine: "Historic pre-Levitt district around the train station; small lots" },
  { slug: "mitchellville",     city: "bowie", zip: "20721", oneLine: "Newer, affluent larger colonials on big lots; some gated" },
  { slug: "pointer-ridge",     city: "bowie", zip: "20716", oneLine: "1970s-80s ranches/ramblers/colonials; all-P streets" },
  { slug: "fairwood",          city: "bowie", zip: "20716", oneLine: "Mid-2000s master-planned upscale homes and townhomes" },
  { slug: "saddle-brook",      city: "bowie", zip: "20716", oneLine: "Suburban homes near the former race track; equestrian street names" },
  { slug: "collington-station",city: "bowie", zip: "20721", oneLine: "1990s Colonial Revival homes near Oak Creek" },
  { slug: "collington-manor",  city: "bowie", zip: "20721", oneLine: "1990s-2000s large single-family homes and townhomes" },
  { slug: "northridge",        city: "bowie", zip: "20720", oneLine: "1992+ master-planned contemporary homes with amenities" },
  { slug: "woodmore",          city: "bowie", zip: "20720", oneLine: "Gated luxury golf community, country club" },
  { slug: "woodmore-north",    city: "bowie", zip: "20720", oneLine: "Stewart's Landing; 2002-2011 contemporary homes" },
  { slug: "jericho-park",      city: "bowie", zip: "20715", oneLine: "Midcentury and custom homes near Bowie State University; large lots" },
  { slug: "grovehurst",        city: "bowie", zip: "20715", oneLine: "1990s Colonials near parks, golf, and shopping" },
  { slug: "old-stage",         city: "bowie", zip: "20715", oneLine: "1980s-2000s split-levels and colonials" },
  { slug: "two-rivers",        city: "bowie", zip: "20720", oneLine: "Established family-friendly neighborhood" },
  { slug: "glen-allen",        city: "bowie", zip: "20715", oneLine: "Brick colonials and Craftsman homes" },
  { slug: "amber-meadows",     city: "bowie", zip: "20715", oneLine: "1980s-90s midsize homes west of US 301" },
  { slug: "willow-wood-estates",city: "bowie", zip: "20715", oneLine: "Established midsize-home community" }
];
