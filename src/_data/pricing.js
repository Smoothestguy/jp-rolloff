// ★ REAL pricing, transcribed from JP Roll-Off's official price list (verified by owner).
// Pricing is PER-MATERIAL, not flat per size. Heavy aggregates (dirt, concrete,
// asphalt, granite) are only offered in 10/15/20 yard. `null` = not available.
// Sizes offered: 10, 15, 20, 25, 30 (NO 40-yard).
//
// Rental, weight, and fee TERMS are real too — do NOT reintroduce "flat-rate /
// no overage / 7-day" copy; construction debris is NOT flat-rate.
export default {
  sizeCols: [10, 15, 20, 25, 30],
  tonnage: {
    10: "1 Ton",
    15: "1.5 Tons",
    20: "2 Tons",
    25: "2 Tons",
    30: "3 Tons",
  },
  materials: [
    { name: { en: "Construction Debris", es: "Escombros de construcción" }, prices: { 10: 550, 15: 595, 20: 620, 25: 640, 30: 665 } },
    { name: { en: "Brush / Tree Stumps", es: "Maleza / Troncos" },           prices: { 10: 550, 15: 600, 20: 625, 25: 650, 30: 700 } },
    { name: { en: "Dirt", es: "Tierra" },                                    prices: { 10: 550, 15: 650, 20: 750, 25: null, 30: null } },
    { name: { en: "Concrete (no rebar)", es: "Concreto (sin varilla)" },     prices: { 10: 550, 15: 650, 20: 750, 25: null, 30: null } },
    { name: { en: "Asphalt", es: "Asfalto" },                                prices: { 10: 550, 15: 650, 20: 750, 25: null, 30: null } },
    { name: { en: "Granite", es: "Granito" },                                prices: { 10: 575, 15: 650, 20: 750, 25: null, 30: null } },
    { name: { en: "Metal", es: "Metal" },                                    prices: { 10: 275, 15: 275, 20: 275, 25: 275, 30: 275 } },
  ],
  terms: [
    { en: "Rental period: 14 days included. Additional days are $5.00 per day.",
      es: "Periodo de renta: 14 días incluidos. Días adicionales a $5.00 por día." },
    { en: "Construction-debris dumpsters are NOT flat-rate — each size includes a set tonnage limit (shown above). Excess weight is $105.00 per additional ton.",
      es: "Los contenedores de escombros NO son tarifa fija — cada tamaño incluye un límite de tonelaje (arriba). El peso excedente cuesta $105.00 por tonelada adicional." },
    { en: "Pickup is on request — customers must call to schedule. Dumpsters are not picked up automatically.",
      es: "La recogida es a solicitud — el cliente debe llamar para agendar. Los contenedores no se recogen automáticamente." },
    { en: "20-yard dumpsters used for aggregates (dirt, concrete, asphalt, brick) must be filled one foot below the top to meet DOT regulations.",
      es: "Los contenedores de 20 yardas para agregados (tierra, concreto, asfalto, ladrillo) deben llenarse un pie por debajo del borde para cumplir con DOT." },
    { en: "Trip charge: $250 if the dumpster is inaccessible or overfilled. Overfilled dumpsters will NOT be picked up — material must stay level with the top.",
      es: "Cargo por viaje: $250 si el contenedor es inaccesible o está sobrellenado. Los contenedores sobrellenados NO se recogen — el material debe quedar al nivel del borde." },
    { en: "Prohibited items: $75.00 each for mattresses and tires. No hazardous materials (propane tanks, refrigerators, etc.).",
      es: "Artículos prohibidos: $75.00 cada uno por colchones y llantas. Sin materiales peligrosos (tanques de propano, refrigeradores, etc.)." },
  ],
};
