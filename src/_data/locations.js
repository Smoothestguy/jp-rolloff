// ★ SINGLE SOURCE OF TRUTH for every city/service area on the site.
//
// The first 15 entries were extracted verbatim from the original hand-written
// location pages (their bespoke prose still lives in src/locations/<slug>.njk —
// those remain the "premium" tier). This dataset powers:
//   • the Size × Location combo pages  (/locations/<slug>/<yd>-yard)
//   • the generated sitemap
//   • internal linking between hubs, sizes, and neighbors
//
// TO ADD A NEW CITY: append an object with the same shape. Use REAL data only —
// real ZIPs, real county, the actual local permit rule. Empty/unknown fields
// should be null or [], never invented. A combo page is only worth publishing if
// its local facts are true; that is what keeps these pages out of Google's
// "scaled content / doorway" bucket.
//
// Fields:
//   slug          URL segment + filename of the hand-written hub (if any)
//   name          Display name
//   county        County (use " / " to list multiple for border towns)
//   zips          Array of ZIP codes actually served
//   neighborhoods Named areas/neighborhoods within the city
//   permitRule    The real local permit rule, one sentence/paragraph
//   driveTimeMin  Integer minutes from the Beltsville yard, or null
//   driveTimeText The exact drive-time sentence, or null
//   neighbors     Slugs of adjacent cities (must exist in this dataset)
//   positioning   One-line characterization used in headers/intros
//   transferStation  Nearest transfer/landfill station, or null
//   premium       true if a hand-written hub page exists at /locations/<slug>
export default [
  {
    slug: "beltsville",
    name: "Beltsville",
    county: "Prince George's County",
    zips: ["20704", "20705"],
    neighborhoods: ["Powder Mill", "Cherry Hill", "Sellman", "BARC corridor", "Calverton", "Beltsville Industrial Park", "Vansville"],
    permitRule: "Beltsville is unincorporated — permits fall under Prince George's County. Dumpsters on private driveways don't need a permit. If the container has to sit in the public right-of-way, the county requires a Use & Occupancy permit.",
    driveTimeMin: 0,
    driveTimeText: "This is our home base — Beltsville addresses are first out the gate every morning.",
    neighbors: ["greenbelt", "college-park", "laurel", "hyattsville"],
    positioning: "Headquartered right here in Beltsville. Same-day delivery to 20704, 20705, and every ZIP within the I-95 / Route 1 corridor.",
    transferStation: null,
    premium: true
  },
  {
    slug: "bladensburg",
    name: "Bladensburg",
    county: "Prince George's County",
    zips: ["20710"],
    neighborhoods: ["Port Towns", "Anacostia tributary corridor", "Edmonston border"],
    permitRule: "The Town of Bladensburg requires a permit for dumpsters in the street or right-of-way. Driveway placement is permit-free. The town hall is responsive and turnaround is generally same-week.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["hyattsville", "cheverly", "riverdale", "landover"],
    positioning: "Serving historic Bladensburg, the Port Towns area, the Anacostia tributary corridor, and the Edmonston border. ZIP 20710. Bilingual office — atendemos en español.",
    transferStation: null,
    premium: true
  },
  {
    slug: "bowie",
    name: "Bowie",
    county: "Prince George's County",
    zips: ["20715", "20716", "20720", "20721"],
    neighborhoods: ["Belair", "Mitchellville", "Pointer Ridge", "Bowie State area"],
    permitRule: "The City of Bowie requires a right-of-way permit if the dumpster sits in a city street. Driveways and HOA-approved staging do not. Bowie's permit application is straightforward — we can hand it to you with your delivery confirmation.",
    driveTimeMin: 25,
    driveTimeText: "About 25 minutes via Route 197 or the BW Parkway.",
    neighbors: ["upper-marlboro", "lanham", "greenbelt", "beltsville"],
    positioning: "From the Levitt-built Belair neighborhoods to Mitchellville, Pointer Ridge, and the newer developments near Bowie State. Covering 20715, 20716, 20720, and 20721 with same-day delivery on most addresses.",
    transferStation: null,
    premium: true
  },
  {
    slug: "cheverly",
    name: "Cheverly",
    county: "Prince George's County",
    zips: ["20785"],
    neighborhoods: [],
    permitRule: "The Town of Cheverly requires a permit if a dumpster is placed in the street or right-of-way. Most renovations here place on the driveway, which is permit-free. Town hall is responsive — typically 24–48 hour turnaround.",
    driveTimeMin: 20,
    driveTimeText: "Cheverly is a 20-minute run from Beltsville.",
    neighbors: ["landover", "hyattsville", "bladensburg", "riverdale"],
    positioning: "A small, tree-lined bedroom town of historic single-family homes. Tighter streets and protected trees mean careful placement — that's exactly what we do. ZIP 20785.",
    transferStation: null,
    premium: true
  },
  {
    slug: "college-park",
    name: "College Park",
    county: "Prince George's County",
    zips: ["20740", "20742", "20783"],
    neighborhoods: ["Berwyn", "Old Town", "Hollywood", "Calvert Hills", "Route 1 development strip", "UMD campus corridor"],
    permitRule: "The City of College Park requires a right-of-way permit if the dumpster sits in the street. Permits are issued through the Department of Public Works and we can help you apply. Driveways and private lots are permit-free.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "greenbelt", "hyattsville", "laurel"],
    positioning: "Serving the UMD campus corridor, Berwyn, Old Town, Hollywood, Calvert Hills, and the Route 1 development strip. 20740, 20742, 20783. Built for the move-out rush and the contractor calendar.",
    transferStation: null,
    premium: true
  },
  {
    slug: "greenbelt",
    name: "Greenbelt",
    county: "Prince George's County",
    zips: ["20770", "20768"],
    neighborhoods: ["Old Greenbelt", "Greenbelt East", "Greenbriar", "Hunting Ridge", "Goddard / Capital Office Park corridor"],
    permitRule: "The City of Greenbelt requires a permit if a dumpster sits on a city street or right-of-way — that includes most of the Old Greenbelt court parking. Driveways and HOA-approved staging areas typically don't. We can pull the permit on your behalf or coach you through it.",
    driveTimeMin: 10,
    driveTimeText: "Beltsville's ten minutes away — your dumpster's not far behind.",
    neighbors: ["beltsville", "college-park", "hyattsville", "laurel"],
    positioning: "Serving Old Greenbelt, Greenbelt East, Greenbriar, Hunting Ridge, and the Goddard / Capital Office Park corridor. 20770 and 20768. Beltsville's ten minutes away — your dumpster's not far behind.",
    transferStation: null,
    premium: true
  },
  {
    slug: "hyattsville",
    name: "Hyattsville",
    county: "Prince George's County",
    zips: ["20781", "20782", "20783", "20784"],
    neighborhoods: ["Hyattsville Arts District", "West Hyattsville", "University Hills", "Castle Manor", "Riverdale border"],
    permitRule: "The City of Hyattsville requires a Right-of-Way Use permit if a dumpster sits in the street or unpaved shoulder. Private driveways and back-yard placement don't require it. We can help you file with the City's DPW.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "college-park", "greenbelt", "laurel"],
    positioning: "Bilingual service across the Hyattsville Arts District, West Hyattsville, University Hills, Castle Manor, and the Riverdale border. 20781, 20782, 20783, 20784 — entrega el mismo día disponible.",
    transferStation: null,
    premium: true
  },
  {
    slug: "landover",
    name: "Landover",
    county: "Prince George's County",
    zips: ["20784", "20785"],
    neighborhoods: ["FedExField / future Commanders site corridor", "Landover Hills", "Glenarden border", "Route 202 industrial strip"],
    permitRule: "Landover is unincorporated PG County — county rules apply. Right-of-way placement requires a county permit; private property does not. Landover Hills (the small incorporated town) has its own town permit for street placement.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["cheverly", "hyattsville", "lanham", "bladensburg"],
    positioning: "Serving the FedExField / future Commanders site corridor, Landover Hills, the Glenarden border, and the Route 202 industrial strip. ZIPs 20784 and 20785.",
    transferStation: null,
    premium: true
  },
  {
    slug: "lanham",
    name: "Lanham",
    county: "Prince George's County",
    zips: ["20706"],
    neighborhoods: ["Seabrook", "Greenway Center corridor", "NASA Goddard / Glenarden border"],
    permitRule: "Lanham is unincorporated PG County. Right-of-way permits are required for street placement; private driveways are not. We can walk you through the county application if needed.",
    driveTimeMin: 15,
    driveTimeText: "15 minutes via Route 450 or the BW Parkway.",
    neighbors: ["bowie", "landover", "greenbelt", "beltsville"],
    positioning: "Serving Lanham, Seabrook, the Greenway Center corridor, and the NASA Goddard / Glenarden border. ZIP 20706 — about 15 minutes from our Beltsville yard.",
    transferStation: null,
    premium: true
  },
  {
    slug: "laurel",
    name: "Laurel",
    county: "Prince George's County / Howard County / Anne Arundel County / Montgomery County",
    zips: ["20707", "20708", "20723", "20724"],
    neighborhoods: ["North Laurel", "South Laurel", "Russett", "Maryland City"],
    permitRule: "The City of Laurel requires a permit for any dumpster placed in a public right-of-way. Howard, PG, and Anne Arundel County roads have separate rules. Driveways and private property are typically permit-free. Call us with your address and we'll spell it out.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "greenbelt", "college-park", "hyattsville"],
    positioning: "Laurel sits at the crossroads of four counties — PG, Howard, Anne Arundel, and Montgomery. We cover all of it. Same-day delivery to 20707, 20708, 20723, and 20724 across North Laurel, South Laurel, Russett, and Maryland City.",
    transferStation: null,
    premium: true
  },
  {
    slug: "riverdale",
    name: "Riverdale Park",
    county: "Prince George's County",
    zips: ["20737"],
    neighborhoods: ["Town of Riverdale Park", "Town Center / MARC station area", "historic Riversdale Mansion neighborhoods"],
    permitRule: "The Town of Riverdale Park requires a permit for dumpsters in the public right-of-way. Town hall is responsive and turnaround is usually 1–2 business days. Driveways are typically permit-free.",
    driveTimeMin: 10,
    driveTimeText: "ZIP 20737, ten minutes from our Beltsville yard.",
    neighbors: ["hyattsville", "college-park", "beltsville", "bladensburg"],
    positioning: "Serving the Town of Riverdale Park, the Town Center / MARC station area, and the older neighborhoods around the historic Riversdale Mansion. ZIP 20737, ten minutes from our Beltsville yard.",
    transferStation: null,
    premium: true
  },
  {
    slug: "rockville",
    name: "Rockville",
    county: "Montgomery County",
    zips: ["20850", "20852", "20853", "20855"],
    neighborhoods: ["Twinbrook", "King Farm", "Rockville Town Center", "North Bethesda border", "Derwood"],
    permitRule: "The City of Rockville requires a permit for any dumpster placed in a city street or right-of-way. Driveways and private property are permit-free. Rockville's permit office is responsive and turnaround is usually 2–3 business days.",
    driveTimeMin: 45,
    driveTimeText: "About 45 minutes via I-495 or Route 200.",
    neighbors: ["silver-spring", "takoma-park", "beltsville"],
    positioning: "Serving Twinbrook, King Farm, Rockville Town Center, the North Bethesda border, and Derwood. ZIPs 20850, 20852, 20853, 20855. Next-day standard, same-day available on most addresses.",
    transferStation: null,
    premium: true
  },
  {
    slug: "silver-spring",
    name: "Silver Spring",
    county: "Montgomery County",
    zips: ["20901", "20902", "20903", "20904", "20905", "20906", "20910"],
    neighborhoods: ["Downtown Silver Spring", "Four Corners", "Forest Glen", "Woodside", "Kemp Mill", "Wheaton border"],
    permitRule: "Silver Spring is unincorporated Montgomery County — permits go through MCDPS. Right-of-way placement requires a Public Right-of-Way Permit; private driveways do not. We can walk you through it before delivery.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["takoma-park", "hyattsville", "beltsville", "rockville"],
    positioning: "Covering downtown SS, Four Corners, Forest Glen, Woodside, Kemp Mill, and out toward Wheaton. ZIPs 20901 through 20910. Bilingual office — atendemos en español.",
    transferStation: null,
    premium: true
  },
  {
    slug: "takoma-park",
    name: "Takoma Park",
    county: "Montgomery County / Prince George's County",
    zips: ["20912"],
    neighborhoods: ["Old Takoma", "North Takoma", "Hampshire Knolls", "Maple Avenue corridor"],
    permitRule: "The City of Takoma Park requires a permit for any dumpster placed in the street or right-of-way, and many blocks ban street placement entirely. The city's permit office is responsive — we'll point you at the application.",
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["silver-spring", "hyattsville", "college-park", "beltsville"],
    positioning: "Serving Old Takoma, North Takoma, Hampshire Knolls, and the Maple Avenue corridor — plus the small slice on the Prince George's County side. ZIP 20912.",
    transferStation: null,
    premium: true
  },
  {
    slug: "upper-marlboro",
    name: "Upper Marlboro",
    county: "Prince George's County",
    zips: ["20772", "20774"],
    neighborhoods: ["Westphalia", "Marlton"],
    permitRule: "The Town of Upper Marlboro (the small historic core) has its own permit; the rest of 20772/20774 falls under PG County. Right-of-way placement requires a permit in both cases. Private property typically does not.",
    driveTimeMin: 35,
    driveTimeText: "About 35 minutes via Route 4 or the Capital Beltway.",
    neighbors: ["bowie", "lanham", "landover", "cheverly"],
    positioning: "The PG County seat — and one of the most varied service zones in the DMV. Historic downtown, new construction in Westphalia and Marlton, and large-lot homes throughout 20772 and 20774.",
    transferStation: null,
    premium: true
  }
];
