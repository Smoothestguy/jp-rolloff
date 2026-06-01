// ★ SINGLE SOURCE OF TRUTH for every dumpster size on the site.
// Prices, specs, and copy live here once. services / pricing / detail pages all read from this.
// Bilingual fields use { en, es } because the site's language toggle is client-side
// (js/main.js swaps data-en / data-es). Templates emit BOTH languages as attributes.
export default [
  {
    yd: 10,
    slug: "10-yard-dumpster",
    popular: false,
    price: { low: 350, high: 425 },
    tons: 1,
    lbs: 2000,
    dims: "12 ft × 8 ft × 3.5 ft",
    loads: 3,
    title: { en: "Garage cleanout", es: "Limpieza de garaje" },
    homeMeta: {
      en: "12 ft × 8 ft × 3.5 ft · Holds ~3 pickup loads",
      es: "12 ft × 8 ft × 3.5 ft · Cabe ~3 cargas de pickup"
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
      "12 ft × 8 ft × 3.5 ft · ~3 pickup truck loads. Fits a single car spot. Built for the garage cleanout, the single-bathroom remodel, the yard-waste haul, and the estate downsize. Our smallest container and our cheapest quote."
  },
  {
    yd: 15,
    slug: "15-yard-dumpster",
    popular: false,
    price: { low: 425, high: 485 },
    tons: 1.5,
    lbs: 3000,
    dims: "14 ft × 8 ft × 4 ft",
    loads: 4.5,
    title: { en: "Single room reno", es: "Renovación de cuarto" },
    homeMeta: {
      en: "14 ft × 8 ft × 4 ft · Holds ~4.5 pickup loads",
      es: "14 ft × 8 ft × 4 ft · Cabe ~4.5 cargas"
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
      "14 ft × 8 ft × 4 ft · ~4.5 pickup loads. The middle-ground container — bigger than a 10 but still driveway-friendly for most homes. Kitchen remodels, roofing tear-offs, two-bath gut jobs, basement cleanouts."
  },
  {
    yd: 20,
    slug: "20-yard-dumpster",
    popular: true,
    price: { low: 450, high: 525 },
    tons: 2,
    lbs: 4000,
    dims: "16 ft × 8 ft × 5 ft",
    loads: 6,
    title: { en: "Whole-house cleanout", es: "Limpieza de casa" },
    homeMeta: {
      en: "16 ft × 8 ft × 5 ft · Holds ~6 pickup loads",
      es: "16 ft × 8 ft × 5 ft · Cabe ~6 cargas"
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
      en: "The size most customers end up choosing — and rarely regret. Fits most two-car driveways with room to spare.",
      es: "El tamaño que la mayoría termina eligiendo — y rara vez se arrepiente. Cabe en la mayoría de las entradas de dos autos."
    },
    servicesBlurb:
      "16 ft × 8 ft × 5 ft · ~6 pickup loads. The size we drop more than any other. Fits most two-car driveways. Whole-house cleanouts, multi-room remodels, mid-size roofing, estate cleanouts."
  },
  {
    yd: 25,
    slug: "25-yard-dumpster",
    popular: false,
    price: { low: 525, high: 625 },
    tons: 2.5,
    lbs: 5000,
    dims: "20 ft × 8 ft × 5 ft",
    loads: 7.5,
    title: { en: "Major construction", es: "Construcción mayor" },
    homeMeta: {
      en: "20 ft × 8 ft × 5 ft · Holds ~7.5 pickup loads",
      es: "20 ft × 8 ft × 5 ft · Cabe ~7.5 cargas"
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
      en: "For longer driveways and bigger builds — measure twice before booking. Commercial accounts get net-15 terms.",
      es: "Para entradas largas y proyectos grandes — mide dos veces antes de reservar. Cuentas comerciales con términos net-15."
    },
    servicesBlurb:
      "20 ft × 8 ft × 5 ft · ~7.5 pickup loads. The contractor's container. Home additions, whole-house remodels, large roofing jobs, commercial cleanouts. Measure your driveway twice — this one is long."
  },
  {
    yd: 30,
    slug: "30-yard-dumpster",
    popular: false,
    price: { low: 595, high: 725 },
    tons: 3,
    lbs: 6000,
    dims: "22 ft × 8 ft × 6 ft",
    loads: 9,
    title: { en: "Commercial & demo", es: "Comercial y demolición" },
    homeMeta: {
      en: "22 ft × 8 ft × 6 ft · Holds ~9 pickup loads",
      es: "22 ft × 8 ft × 6 ft · Cabe ~9 cargas"
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
      en: "Maximum capacity — for jobs where a smaller bin would mean a second haul. Needs a long run-up to place.",
      es: "Capacidad máxima — para trabajos donde un contenedor más pequeño significaría un segundo viaje. Requiere espacio largo para colocar."
    },
    servicesBlurb:
      "22 ft × 8 ft × 6 ft · ~9 pickup loads. Maximum volume. Full demolitions, commercial sites, bulk waste hauls, multi-family cleanouts. Needs a long run-up to place — call us if you're not sure it fits."
  }
];
