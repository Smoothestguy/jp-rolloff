// ★ SINGLE SOURCE OF TRUTH for every dumpster size on the site.
// Specs and copy live here once. services / detail / combo / neighborhood pages all read from this.
// Bilingual fields use { en, es } because the site's language toggle is client-side
// (js/main.js swaps data-en / data-es). Templates emit BOTH languages as attributes.
//
// Dimensions & "pickup loads held" were corrected by the owner (2026-06). 40-yard added.
// price.from is retained for any legacy reference but is NO LONGER rendered on the site
// (visible pricing was removed at the owner's request).
export default [
  {
    yd: 10,
    slug: "10-yard-dumpster",
    popular: false,
    price: { from: 550 },
    tons: 1,
    lbs: 2000,
    dims: "12 ft × 8 ft × 4 ft",
    loads: 3,
    title: { en: "Garage cleanout", es: "Limpieza de garaje" },
    homeMeta: {
      en: "12 ft × 8 ft × 4 ft · Holds ~3 pickup loads",
      es: "12 ft × 8 ft × 4 ft · Cabe ~3 cargas de pickup"
    },
    features: [
      { en: "Small remodels", es: "Remodelaciones pequeñas" },
      { en: "Yard waste", es: "Desechos de jardín" },
      { en: "Driveway-friendly", es: "Cabe en entrada" }
    ],
    bestFor: [
      { en: "Garage cleanout", es: "Limpieza de garaje" },
      { en: "Bathroom remodel", es: "Remodelación de baño" },
      { en: "Yard waste & trees", es: "Desechos de jardín y árboles" },
      { en: "Estate downsize", es: "Reducción de patrimonio" }
    ],
    why: {
      en: "The smallest footprint — fits a single car spot and handles a one-room cleanout without overpaying for unused space.",
      es: "La huella más pequeña — cabe en un espacio de auto y maneja la limpieza de una habitación sin pagar de más por espacio sin usar."
    },
    servicesBlurb:
      "12 ft × 8 ft × 4 ft · ~3 pickup truck loads. Fits a single car spot. Built for the garage cleanout, the single-bathroom remodel, the yard-waste haul, and the estate downsize. Our smallest container."
  },
  {
    yd: 15,
    slug: "15-yard-dumpster",
    popular: false,
    price: { from: 595 },
    tons: 1.5,
    lbs: 3000,
    dims: "16 ft × 8 ft × 4 ft",
    loads: 7,
    title: { en: "Single room reno", es: "Renovación de cuarto" },
    homeMeta: {
      en: "16 ft × 8 ft × 4 ft · Holds ~7 pickup loads",
      es: "16 ft × 8 ft × 4 ft · Cabe ~7 cargas"
    },
    features: [
      { en: "Kitchen / bath", es: "Cocina / baño" },
      { en: "Roofing tear-off", es: "Remoción de techo" },
      { en: "Heavy debris ok", es: "Escombros pesados" }
    ],
    bestFor: [
      { en: "Kitchen remodel", es: "Remodelación de cocina" },
      { en: "Roofing tear-off", es: "Remoción de techo" },
      { en: "Two-bath gut", es: "Demolición de dos baños" },
      { en: "Basement cleanout", es: "Limpieza de sótano" }
    ],
    why: {
      en: "The in-between size — bigger than 10 but still driveway-friendly for most homes.",
      es: "El tamaño intermedio — más grande que 10 pero aún cabe en la mayoría de las entradas."
    },
    servicesBlurb:
      "16 ft × 8 ft × 4 ft · ~7 pickup loads. The middle-ground container — bigger than a 10 but still driveway-friendly for most homes. Kitchen remodels, roofing tear-offs, two-bath gut jobs, basement cleanouts."
  },
  {
    yd: 20,
    slug: "20-yard-dumpster",
    popular: false,
    price: { from: 620 },
    tons: 2,
    lbs: 4000,
    dims: "22 ft × 8 ft × 4 ft",
    loads: 9,
    title: { en: "Whole-house cleanout", es: "Limpieza de casa" },
    homeMeta: {
      en: "22 ft × 8 ft × 4 ft · Holds ~9 pickup loads",
      es: "22 ft × 8 ft × 4 ft · Cabe ~9 cargas"
    },
    features: [
      { en: "Multi-room remodel", es: "Remodelación multi-cuarto" },
      { en: "Estate cleanout", es: "Limpieza de patrimonio" },
      { en: "Roofing < 30 sq", es: "Techo < 30 cuadros" }
    ],
    bestFor: [
      { en: "Whole-house cleanout", es: "Limpieza de casa completa" },
      { en: "Multi-room remodel", es: "Remodelación de varias habitaciones" },
      { en: "Estate cleanout", es: "Limpieza de patrimonio" },
      { en: "Mid-size roofing", es: "Trabajo de techo mediano" }
    ],
    why: {
      en: "A whole-house favorite — and our top pick for aggregates, since heavy material is limited to the 10/15/20-yard bins.",
      es: "Un favorito para casas completas — y nuestra mejor opción para agregados, ya que el material pesado se limita a los contenedores de 10/15/20 yardas."
    },
    servicesBlurb:
      "22 ft × 8 ft × 4 ft · ~9 pickup loads. A whole-house workhorse. Whole-house cleanouts, multi-room remodels, mid-size roofing, estate cleanouts — and our go-to size for aggregates."
  },
  {
    yd: 25,
    slug: "25-yard-dumpster",
    popular: false,
    price: { from: 640 },
    tons: 2,
    lbs: 4000,
    dims: "18 ft × 8 ft × 6 ft",
    loads: 10.5,
    title: { en: "Major construction", es: "Construcción mayor" },
    homeMeta: {
      en: "18 ft × 8 ft × 6 ft · Holds ~10.5 pickup loads",
      es: "18 ft × 8 ft × 6 ft · Cabe ~10.5 cargas"
    },
    features: [
      { en: "New builds", es: "Construcción nueva" },
      { en: "Additions", es: "Adiciones" },
      { en: "Large tear-outs", es: "Demoliciones grandes" }
    ],
    bestFor: [
      { en: "Home addition", es: "Ampliación de casa" },
      { en: "Whole-house remodel", es: "Remodelación de casa completa" },
      { en: "Large roofing", es: "Trabajo de techo grande" },
      { en: "Commercial cleanout", es: "Limpieza comercial" }
    ],
    why: {
      en: "For bigger builds and tear-outs — taller walls mean more volume in a shorter footprint. Commercial accounts welcome.",
      es: "Para construcciones y demoliciones más grandes — paredes más altas significan más volumen en una huella más corta. Cuentas comerciales bienvenidas."
    },
    servicesBlurb:
      "18 ft × 8 ft × 6 ft · ~10.5 pickup loads. The contractor's container. Home additions, whole-house remodels, large roofing jobs, commercial cleanouts. Taller walls pack more volume into a shorter footprint."
  },
  {
    yd: 30,
    slug: "30-yard-dumpster",
    popular: true,
    price: { from: 665 },
    tons: 3,
    lbs: 6000,
    dims: "22 ft × 8 ft × 6 ft",
    loads: 14,
    title: { en: "Commercial & demo", es: "Comercial y demolición" },
    homeMeta: {
      en: "22 ft × 8 ft × 6 ft · Holds ~14 pickup loads",
      es: "22 ft × 8 ft × 6 ft · Cabe ~14 cargas"
    },
    features: [
      { en: "Demolition", es: "Demolición" },
      { en: "Commercial sites", es: "Sitios comerciales" },
      { en: "Bulk waste", es: "Desechos en volumen" }
    ],
    bestFor: [
      { en: "Full demolition", es: "Demolición completa" },
      { en: "Commercial site", es: "Sitio comercial" },
      { en: "Bulk waste haul", es: "Transporte de residuos a granel" },
      { en: "Multi-family cleanout", es: "Limpieza multifamiliar" }
    ],
    why: {
      en: "Our most popular size — big capacity for jobs where a smaller bin would mean a second haul. Needs a long run-up to place.",
      es: "Nuestro tamaño más popular — gran capacidad para trabajos donde un contenedor más pequeño significaría un segundo viaje. Requiere espacio largo para colocar."
    },
    servicesBlurb:
      "22 ft × 8 ft × 6 ft · ~14 pickup loads. Our most popular size — high volume. Full demolitions, commercial sites, bulk waste hauls, multi-family cleanouts. Needs a long run-up to place — call us if you're not sure it fits."
  },
  {
    yd: 40,
    slug: "40-yard-dumpster",
    popular: false,
    // Excluded from auto-generated city/neighborhood combo pages for now (avoids
    // thin pages); still appears on the fleet, quote wizard, services index & FAQ.
    combo: false,
    price: { from: 0 },
    tons: 4,
    lbs: 8000,
    dims: "22 ft × 8 ft × 8 ft",
    loads: 17,
    title: { en: "Commercial & demo", es: "Comercial y demolición" },
    homeMeta: {
      en: "22 ft × 8 ft × 8 ft · Holds ~17 pickup loads",
      es: "22 ft × 8 ft × 8 ft · Cabe ~17 cargas"
    },
    features: [
      { en: "Major demolition", es: "Demolición mayor" },
      { en: "Commercial jobs", es: "Trabajos comerciales" },
      { en: "Largest capacity", es: "Mayor capacidad" }
    ],
    bestFor: [
      { en: "Major demolition", es: "Demolición mayor" },
      { en: "Commercial site", es: "Sitio comercial" },
      { en: "Large construction", es: "Construcción grande" },
      { en: "Bulk waste haul", es: "Transporte de residuos a granel" }
    ],
    why: {
      en: "Our largest container — the most volume we offer for major demolition and commercial jobs. Needs a long, clear run-up to place.",
      es: "Nuestro contenedor más grande — el mayor volumen que ofrecemos para demoliciones mayores y trabajos comerciales. Requiere un espacio largo y despejado para colocarlo."
    },
    servicesBlurb:
      "22 ft × 8 ft × 8 ft · ~17 pickup loads. Our largest container — maximum volume for major demolition and commercial jobs. The 8-foot walls need a long, clear run-up to place; call us to confirm it fits."
  }
];
