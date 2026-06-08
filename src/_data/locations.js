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
    permitRule: {
      en: "Beltsville is unincorporated — permits fall under Prince George's County. Dumpsters on private driveways don't need a permit. If the container has to sit in the public right-of-way, the county requires a Use & Occupancy permit.",
      es: "Beltsville no está incorporada — los permisos dependen del condado de Prince George's. Los contenedores en entradas privadas no necesitan permiso. Si el contenedor tiene que quedar en la vía pública, el condado exige un permiso de Uso y Ocupación."
    },
    driveTimeMin: 0,
    driveTimeText: {
      en: "This is our home base — Beltsville addresses are first out the gate every morning.",
      es: "Esta es nuestra base — las direcciones de Beltsville son las primeras en salir cada mañana."
    },
    neighbors: ["greenbelt", "college-park", "laurel", "hyattsville"],
    positioning: {
      en: "Headquartered right here in Beltsville. Next-day delivery to 20704, 20705, and every ZIP within the I-95 / Route 1 corridor (same-day may be available depending on location and schedule).",
      es: "Con sede aquí mismo en Beltsville. Entrega al día siguiente a 20704, 20705 y cada ZIP dentro del corredor de la I-95 / Route 1 (el mismo día puede estar disponible según la ubicación y el horario)."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "bladensburg",
    name: "Bladensburg",
    county: "Prince George's County",
    zips: ["20710"],
    neighborhoods: ["Port Towns", "Anacostia tributary corridor", "Edmonston border"],
    permitRule: {
      en: "The Town of Bladensburg requires a permit for dumpsters in the street or right-of-way. Driveway placement is permit-free. The town hall is responsive and turnaround is generally same-week.",
      es: "El pueblo de Bladensburg exige un permiso para contenedores en la calle o vía pública. La colocación en la entrada no necesita permiso. El ayuntamiento responde rápido y el trámite suele resolverse en la misma semana."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["hyattsville", "cheverly", "riverdale", "landover"],
    positioning: {
      en: "Serving historic Bladensburg, the Port Towns area, the Anacostia tributary corridor, and the Edmonston border. ZIP 20710. Bilingual office — atendemos en español.",
      es: "Atendemos el histórico Bladensburg, la zona de Port Towns, el corredor del afluente del Anacostia y la frontera con Edmonston. ZIP 20710. Oficina bilingüe — atendemos en español."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "bowie",
    name: "Bowie",
    county: "Prince George's County",
    zips: ["20715", "20716", "20720", "20721"],
    neighborhoods: ["Belair", "Mitchellville", "Pointer Ridge", "Bowie State area"],
    permitRule: {
      en: "The City of Bowie requires a right-of-way permit if the dumpster sits in a city street. Driveways and HOA-approved staging do not. Bowie's permit application is straightforward — we can hand it to you with your delivery confirmation.",
      es: "La ciudad de Bowie exige un permiso de vía pública si el contenedor queda en una calle de la ciudad. Las entradas y los espacios aprobados por la HOA no lo necesitan. La solicitud de permiso de Bowie es sencilla — te la podemos entregar junto con la confirmación de tu entrega."
    },
    driveTimeMin: 25,
    driveTimeText: {
      en: "About 25 minutes via Route 197 or the BW Parkway.",
      es: "Unos 25 minutos por la Route 197 o la BW Parkway."
    },
    neighbors: ["upper-marlboro", "lanham", "greenbelt", "beltsville"],
    positioning: {
      en: "From the Levitt-built Belair neighborhoods to Mitchellville, Pointer Ridge, and the newer developments near Bowie State. Covering 20715, 20716, 20720, and 20721 with next-day delivery on most addresses (same-day may be available depending on location and schedule).",
      es: "Desde los vecindarios Belair construidos por Levitt hasta Mitchellville, Pointer Ridge y los desarrollos más nuevos cerca de Bowie State. Cubrimos 20715, 20716, 20720 y 20721 con entrega al día siguiente en la mayoría de las direcciones (el mismo día puede estar disponible según la ubicación y el horario)."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "cheverly",
    name: "Cheverly",
    county: "Prince George's County",
    zips: ["20785"],
    neighborhoods: [],
    permitRule: {
      en: "The Town of Cheverly requires a permit if a dumpster is placed in the street or right-of-way. Most renovations here place on the driveway, which is permit-free. Town hall is responsive — typically 24–48 hour turnaround.",
      es: "El pueblo de Cheverly exige un permiso si el contenedor se coloca en la calle o vía pública. La mayoría de las renovaciones aquí se colocan en la entrada, que no necesita permiso. El ayuntamiento responde rápido — normalmente en 24 a 48 horas."
    },
    driveTimeMin: 20,
    driveTimeText: {
      en: "Cheverly is a 20-minute run from Beltsville.",
      es: "Cheverly está a 20 minutos de Beltsville."
    },
    neighbors: ["landover", "hyattsville", "bladensburg", "riverdale"],
    positioning: {
      en: "A small, tree-lined bedroom town of historic single-family homes. Tighter streets and protected trees mean careful placement — that's exactly what we do. ZIP 20785.",
      es: "Un pequeño pueblo residencial arbolado de casas unifamiliares históricas. Las calles estrechas y los árboles protegidos exigen una colocación cuidadosa — eso es justo lo que hacemos. ZIP 20785."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "college-park",
    name: "College Park",
    county: "Prince George's County",
    zips: ["20740", "20742", "20783"],
    neighborhoods: ["Berwyn", "Old Town", "Hollywood", "Calvert Hills", "Route 1 development strip", "UMD campus corridor"],
    permitRule: {
      en: "The City of College Park requires a right-of-way permit if the dumpster sits in the street. Permits are issued through the Department of Public Works and we can help you apply. Driveways and private lots are permit-free.",
      es: "La ciudad de College Park exige un permiso de vía pública si el contenedor queda en la calle. Los permisos se emiten a través del Departamento de Obras Públicas y te podemos ayudar a solicitarlo. Las entradas y los lotes privados no necesitan permiso."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "greenbelt", "hyattsville", "laurel"],
    positioning: {
      en: "Serving the UMD campus corridor, Berwyn, Old Town, Hollywood, Calvert Hills, and the Route 1 development strip. 20740, 20742, 20783. Built for the move-out rush and the contractor calendar.",
      es: "Atendemos el corredor del campus de UMD, Berwyn, Old Town, Hollywood, Calvert Hills y la franja de desarrollo de Route 1. 20740, 20742, 20783. Hechos para la temporada de mudanzas y el calendario de los contratistas."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "greenbelt",
    name: "Greenbelt",
    county: "Prince George's County",
    zips: ["20770", "20768"],
    neighborhoods: ["Old Greenbelt", "Greenbelt East", "Greenbriar", "Hunting Ridge", "Goddard / Capital Office Park corridor"],
    permitRule: {
      en: "The City of Greenbelt requires a permit if a dumpster sits on a city street or right-of-way — that includes most of the Old Greenbelt court parking. Driveways and HOA-approved staging areas typically don't. We can pull the permit on your behalf or coach you through it.",
      es: "La ciudad de Greenbelt exige un permiso si el contenedor queda en una calle de la ciudad o vía pública — eso incluye la mayoría del estacionamiento de los courts de Old Greenbelt. Las entradas y los espacios aprobados por la HOA normalmente no lo necesitan. Podemos tramitar el permiso por ti o guiarte en el proceso."
    },
    driveTimeMin: 10,
    driveTimeText: {
      en: "Beltsville's ten minutes away — your dumpster's not far behind.",
      es: "Beltsville está a diez minutos — tu contenedor no se queda atrás."
    },
    neighbors: ["beltsville", "college-park", "hyattsville", "laurel"],
    positioning: {
      en: "Serving Old Greenbelt, Greenbelt East, Greenbriar, Hunting Ridge, and the Goddard / Capital Office Park corridor. 20770 and 20768. Beltsville's ten minutes away — your dumpster's not far behind.",
      es: "Atendemos Old Greenbelt, Greenbelt East, Greenbriar, Hunting Ridge y el corredor de Goddard / Capital Office Park. 20770 y 20768. Beltsville está a diez minutos — tu contenedor no se queda atrás."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "hyattsville",
    name: "Hyattsville",
    county: "Prince George's County",
    zips: ["20781", "20782", "20783", "20784"],
    neighborhoods: ["Hyattsville Arts District", "West Hyattsville", "University Hills", "Castle Manor", "Riverdale border"],
    permitRule: {
      en: "The City of Hyattsville requires a Right-of-Way Use permit if a dumpster sits in the street or unpaved shoulder. Private driveways and back-yard placement don't require it. We can help you file with the City's DPW.",
      es: "La ciudad de Hyattsville exige un permiso de Uso de Vía Pública si el contenedor queda en la calle o en el arcén sin pavimentar. Las entradas privadas y la colocación en el patio trasero no lo necesitan. Te podemos ayudar a tramitarlo con el DPW de la ciudad."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "college-park", "greenbelt", "laurel"],
    positioning: {
      en: "Bilingual service across the Hyattsville Arts District, West Hyattsville, University Hills, Castle Manor, and the Riverdale border. 20781, 20782, 20783, 20784 — next-day delivery (same-day may be available depending on location and schedule).",
      es: "Servicio bilingüe en el Hyattsville Arts District, West Hyattsville, University Hills, Castle Manor y la frontera con Riverdale. 20781, 20782, 20783, 20784 — entrega al día siguiente (el mismo día puede estar disponible según la ubicación y el horario)."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "landover",
    name: "Landover",
    county: "Prince George's County",
    zips: ["20784", "20785"],
    neighborhoods: ["FedExField / future Commanders site corridor", "Landover Hills", "Glenarden border", "Route 202 industrial strip"],
    permitRule: {
      en: "Landover is unincorporated PG County — county rules apply. Right-of-way placement requires a county permit; private property does not. Landover Hills (the small incorporated town) has its own town permit for street placement.",
      es: "Landover no está incorporada y pertenece al condado de PG — aplican las reglas del condado. La colocación en la vía pública requiere un permiso del condado; la propiedad privada no. Landover Hills (el pequeño pueblo incorporado) tiene su propio permiso municipal para la colocación en la calle."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["cheverly", "hyattsville", "lanham", "bladensburg"],
    positioning: {
      en: "Serving the FedExField / future Commanders site corridor, Landover Hills, the Glenarden border, and the Route 202 industrial strip. ZIPs 20784 and 20785.",
      es: "Atendemos el corredor de FedExField / el futuro sitio de los Commanders, Landover Hills, la frontera con Glenarden y la franja industrial de Route 202. ZIPs 20784 y 20785."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "lanham",
    name: "Lanham",
    county: "Prince George's County",
    zips: ["20706"],
    neighborhoods: ["Seabrook", "Greenway Center corridor", "NASA Goddard / Glenarden border"],
    permitRule: {
      en: "Lanham is unincorporated PG County. Right-of-way permits are required for street placement; private driveways are not. We can walk you through the county application if needed.",
      es: "Lanham no está incorporada y pertenece al condado de PG. Se requieren permisos de vía pública para la colocación en la calle; las entradas privadas no. Te podemos guiar en la solicitud del condado si lo necesitas."
    },
    driveTimeMin: 15,
    driveTimeText: {
      en: "15 minutes via Route 450 or the BW Parkway.",
      es: "15 minutos por la Route 450 o la BW Parkway."
    },
    neighbors: ["bowie", "landover", "greenbelt", "beltsville"],
    positioning: {
      en: "Serving Lanham, Seabrook, the Greenway Center corridor, and the NASA Goddard / Glenarden border. ZIP 20706 — about 15 minutes from our Beltsville yard.",
      es: "Atendemos Lanham, Seabrook, el corredor de Greenway Center y la frontera con NASA Goddard / Glenarden. ZIP 20706 — a unos 15 minutos de nuestro patio en Beltsville."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "laurel",
    name: "Laurel",
    county: "Prince George's County / Howard County / Anne Arundel County / Montgomery County",
    zips: ["20707", "20708", "20723", "20724"],
    neighborhoods: ["North Laurel", "South Laurel", "Russett", "Maryland City"],
    permitRule: {
      en: "The City of Laurel requires a permit for any dumpster placed in a public right-of-way. Howard, PG, and Anne Arundel County roads have separate rules. Driveways and private property are typically permit-free. Call us with your address and we'll spell it out.",
      es: "La ciudad de Laurel exige un permiso para cualquier contenedor colocado en la vía pública. Las carreteras de los condados de Howard, PG y Anne Arundel tienen reglas distintas. Las entradas y la propiedad privada normalmente no necesitan permiso. Llámanos con tu dirección y te lo explicamos en detalle."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["beltsville", "greenbelt", "college-park", "hyattsville"],
    positioning: {
      en: "Laurel sits at the crossroads of four counties — PG, Howard, Anne Arundel, and Montgomery. We cover all of it. Next-day delivery to 20707, 20708, 20723, and 20724 across North Laurel, South Laurel, Russett, and Maryland City (same-day may be available depending on location and schedule).",
      es: "Laurel está en el cruce de cuatro condados — PG, Howard, Anne Arundel y Montgomery. Cubrimos todo. Entrega al día siguiente a 20707, 20708, 20723 y 20724 en North Laurel, South Laurel, Russett y Maryland City (el mismo día puede estar disponible según la ubicación y el horario)."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "riverdale",
    name: "Riverdale Park",
    county: "Prince George's County",
    zips: ["20737"],
    neighborhoods: ["Town of Riverdale Park", "Town Center / MARC station area", "historic Riversdale Mansion neighborhoods"],
    permitRule: {
      en: "The Town of Riverdale Park requires a permit for dumpsters in the public right-of-way. Town hall is responsive and turnaround is usually 1–2 business days. Driveways are typically permit-free.",
      es: "El pueblo de Riverdale Park exige un permiso para contenedores en la vía pública. El ayuntamiento responde rápido y el trámite suele tardar de 1 a 2 días hábiles. Las entradas normalmente no necesitan permiso."
    },
    driveTimeMin: 10,
    driveTimeText: {
      en: "ZIP 20737, ten minutes from our Beltsville yard.",
      es: "ZIP 20737, a diez minutos de nuestro patio en Beltsville."
    },
    neighbors: ["hyattsville", "college-park", "beltsville", "bladensburg"],
    positioning: {
      en: "Serving the Town of Riverdale Park, the Town Center / MARC station area, and the older neighborhoods around the historic Riversdale Mansion. ZIP 20737, ten minutes from our Beltsville yard.",
      es: "Atendemos el pueblo de Riverdale Park, la zona del Town Center / estación MARC y los vecindarios más antiguos alrededor de la histórica Riversdale Mansion. ZIP 20737, a diez minutos de nuestro patio en Beltsville."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "rockville",
    name: "Rockville",
    county: "Montgomery County",
    zips: ["20850", "20852", "20853", "20855"],
    neighborhoods: ["Twinbrook", "King Farm", "Rockville Town Center", "North Bethesda border", "Derwood"],
    permitRule: {
      en: "The City of Rockville requires a permit for any dumpster placed in a city street or right-of-way. Driveways and private property are permit-free. Rockville's permit office is responsive and turnaround is usually 2–3 business days.",
      es: "La ciudad de Rockville exige un permiso para cualquier contenedor colocado en una calle de la ciudad o vía pública. Las entradas y la propiedad privada no necesitan permiso. La oficina de permisos de Rockville responde rápido y el trámite suele tardar de 2 a 3 días hábiles."
    },
    driveTimeMin: 45,
    driveTimeText: {
      en: "About 45 minutes via I-495 or Route 200.",
      es: "Unos 45 minutos por la I-495 o la Route 200."
    },
    neighbors: ["silver-spring", "takoma-park", "beltsville"],
    positioning: {
      en: "Serving Twinbrook, King Farm, Rockville Town Center, the North Bethesda border, and Derwood. ZIPs 20850, 20852, 20853, 20855. Next-day delivery standard (same-day may be available depending on location and schedule).",
      es: "Atendemos Twinbrook, King Farm, Rockville Town Center, la frontera con North Bethesda y Derwood. ZIPs 20850, 20852, 20853, 20855. Entrega al día siguiente como estándar (el mismo día puede estar disponible según la ubicación y el horario)."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "silver-spring",
    name: "Silver Spring",
    county: "Montgomery County",
    zips: ["20901", "20902", "20903", "20904", "20905", "20906", "20910"],
    neighborhoods: ["Downtown Silver Spring", "Four Corners", "Forest Glen", "Woodside", "Kemp Mill", "Wheaton border"],
    permitRule: {
      en: "Silver Spring is unincorporated Montgomery County — permits go through MCDPS. Right-of-way placement requires a Public Right-of-Way Permit; private driveways do not. We can walk you through it before delivery.",
      es: "Silver Spring no está incorporada y pertenece al condado de Montgomery — los permisos se tramitan a través de MCDPS. La colocación en la vía pública requiere un permiso de Vía Pública; las entradas privadas no. Te podemos guiar en el proceso antes de la entrega."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["takoma-park", "hyattsville", "beltsville", "rockville"],
    positioning: {
      en: "Covering downtown SS, Four Corners, Forest Glen, Woodside, Kemp Mill, and out toward Wheaton. ZIPs 20901 through 20910. Bilingual office — atendemos en español.",
      es: "Cubrimos el centro de SS, Four Corners, Forest Glen, Woodside, Kemp Mill y hasta Wheaton. ZIPs 20901 al 20910. Oficina bilingüe — atendemos en español."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "takoma-park",
    name: "Takoma Park",
    county: "Montgomery County / Prince George's County",
    zips: ["20912"],
    neighborhoods: ["Old Takoma", "North Takoma", "Hampshire Knolls", "Maple Avenue corridor"],
    permitRule: {
      en: "The City of Takoma Park requires a permit for any dumpster placed in the street or right-of-way, and many blocks ban street placement entirely. The city's permit office is responsive — we'll point you at the application.",
      es: "La ciudad de Takoma Park exige un permiso para cualquier contenedor colocado en la calle o vía pública, y muchas cuadras prohíben por completo la colocación en la calle. La oficina de permisos de la ciudad responde rápido — te indicamos dónde está la solicitud."
    },
    driveTimeMin: null,
    driveTimeText: null,
    neighbors: ["silver-spring", "hyattsville", "college-park", "beltsville"],
    positioning: {
      en: "Serving Old Takoma, North Takoma, Hampshire Knolls, and the Maple Avenue corridor — plus the small slice on the Prince George's County side. ZIP 20912.",
      es: "Atendemos Old Takoma, North Takoma, Hampshire Knolls y el corredor de Maple Avenue — además de la pequeña franja del lado del condado de Prince George's. ZIP 20912."
    },
    transferStation: null,
    premium: true
  },
  {
    slug: "upper-marlboro",
    name: "Upper Marlboro",
    county: "Prince George's County",
    zips: ["20772", "20774"],
    neighborhoods: ["Westphalia", "Marlton"],
    permitRule: {
      en: "The Town of Upper Marlboro (the small historic core) has its own permit; the rest of 20772/20774 falls under PG County. Right-of-way placement requires a permit in both cases. Private property typically does not.",
      es: "El pueblo de Upper Marlboro (el pequeño núcleo histórico) tiene su propio permiso; el resto de 20772/20774 pertenece al condado de PG. La colocación en la vía pública requiere un permiso en ambos casos. La propiedad privada normalmente no."
    },
    driveTimeMin: 35,
    driveTimeText: {
      en: "About 35 minutes via Route 4 or the Capital Beltway.",
      es: "Unos 35 minutos por la Route 4 o el Capital Beltway."
    },
    neighbors: ["bowie", "lanham", "landover", "cheverly"],
    positioning: {
      en: "The PG County seat — and one of the most varied service zones in the DMV. Historic downtown, new construction in Westphalia and Marlton, and large-lot homes throughout 20772 and 20774.",
      es: "La capital del condado de PG — y una de las zonas de servicio más variadas del DMV. Centro histórico, construcción nueva en Westphalia y Marlton, y casas de lotes grandes por todo 20772 y 20774."
    },
    transferStation: null,
    premium: true
  }
];
