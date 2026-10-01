// ★ SINGLE SOURCE OF TRUTH for every dumpster size on the site.
// Specs and copy live here once. services / detail / combo / neighborhood pages all read from this.
// Bilingual fields use { en, es } because the site's language toggle is client-side
// (js/main.js swaps data-en / data-es). Templates emit BOTH languages as attributes.
//
// Dimensions & "pickup loads held" were corrected by the owner (2026-06). 40-yard added.
// clientCopy (uses / accepted / aggregateRule / restricted / rental) is the client's
// size-level boilerplate from the 2026-09 Word docs, rendered on every size page.
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
      { en: "Driveway-friendly", es: "Cabe en parqueo" }
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
      "12 ft × 8 ft × 4 ft · ~3 pickup truck loads. Fits a single car spot. Built for the garage cleanout, the single-bathroom remodel, the yard-waste haul, and the estate downsize. Our smallest container.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Garage and basement cleanouts",
          es: "Limpiezas de garaje y sótano"
        },
        {
          en: "Household junk removal",
          es: "Retiro de basura del hogar"
        },
        {
          en: "Small bathroom renovations",
          es: "Renovaciones pequeñas de baño"
        },
        {
          en: "Flooring and tile removal",
          es: "Remoción de pisos y azulejo"
        },
        {
          en: "Moving and downsizing",
          es: "Mudanzas y reducción de espacio"
        },
        {
          en: "Brush and tree debris",
          es: "Maleza y restos de árboles"
        },
        {
          en: "Small construction projects",
          es: "Proyectos pequeños de construcción"
        }
      ],
      accepted: [
        {
          label: {
            en: "Household debris",
            es: "Escombros del hogar"
          },
          text: {
            en: "Furniture, boxes, household goods, and general cleanout debris.",
            es: "Muebles, cajas, artículos del hogar y escombros generales de limpieza."
          }
        },
        {
          label: {
            en: "Light construction debris",
            es: "Escombros ligeros de construcción"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, tile, and similar renovation materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos, azulejo y materiales de renovación similares."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Heavy debris",
          es: "Escombros pesados"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry are accepted in designated aggregate dumpsters and must be kept separate from general trash. If you're disposing of heavy material, let us know when requesting your quote so we can provide the appropriate dumpster and pricing.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería se aceptan en contenedores designados para agregados y deben mantenerse separados de la basura general. Si vas a desechar material pesado, avísanos al solicitar tu cotización para que podamos ofrecerte el contenedor y la cotización adecuados."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Your 10-yard dumpster rental includes 14 days. Additional rental days are available for an added daily charge.",
            es: "Tu renta de contenedor de 10 yardas incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. Finished with your project? Call our office to request pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. ¿Terminaste tu proyecto? Llama a nuestra oficina para solicitar la recogida."
          }
        ]
      }
    }
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
      es: "El tamaño intermedio — más grande que 10 pero aún cabe en la mayoría de los parqueos."
    },
    servicesBlurb:
      "16 ft × 8 ft × 4 ft · ~7 pickup loads. Bigger than a 10 but still driveway-friendly for most homes. Kitchen remodels, roofing tear-offs, two-bath gut jobs, basement cleanouts.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Home and apartment cleanouts",
          es: "Limpiezas de casa y apartamento"
        },
        {
          en: "Garage and basement cleanouts",
          es: "Limpiezas de garaje y sótano"
        },
        {
          en: "Kitchen and bathroom renovations",
          es: "Renovaciones de cocina y baño"
        },
        {
          en: "Flooring removal",
          es: "Remoción de pisos"
        },
        {
          en: "Moving and downsizing",
          es: "Mudanzas y reducción de espacio"
        },
        {
          en: "Brush and tree debris",
          es: "Maleza y restos de árboles"
        },
        {
          en: "Construction and remodeling projects",
          es: "Proyectos de construcción y remodelación"
        }
      ],
      accepted: [
        {
          label: {
            en: "Household debris",
            es: "Escombros del hogar"
          },
          text: {
            en: "Furniture, boxes, household goods, and general cleanout materials.",
            es: "Muebles, cajas, artículos del hogar y materiales generales de limpieza."
          }
        },
        {
          label: {
            en: "Construction & remodeling debris",
            es: "Escombros de construcción y remodelación"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, tile, and similar renovation materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos, azulejo y materiales de renovación similares."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Heavy debris",
          es: "Escombros pesados"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry are accepted in designated aggregate dumpsters and must be kept separate from general trash. If you're disposing of heavy material, let us know when requesting your quote so we can provide the appropriate dumpster and pricing.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería se aceptan en contenedores designados para agregados y deben mantenerse separados de la basura general. Si vas a desechar material pesado, avísanos al solicitar tu cotización para que podamos ofrecerte el contenedor y la cotización adecuados."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Our standard rental includes 14 days. Additional rental days are available for an added daily charge.",
            es: "Nuestra renta estándar incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. When your project is complete, call our office to request pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. Cuando tu proyecto esté terminado, llama a nuestra oficina para solicitar la recogida."
          }
        ]
      }
    }
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
      "22 ft × 8 ft × 4 ft · ~9 pickup loads. A whole-house workhorse. Whole-house cleanouts, multi-room remodels, mid-size roofing, estate cleanouts — and our go-to size for aggregates.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Larger household cleanouts",
          es: "Limpiezas grandes del hogar"
        },
        {
          en: "Multi-room renovations",
          es: "Renovaciones de varias habitaciones"
        },
        {
          en: "Kitchen remodeling projects",
          es: "Proyectos de remodelación de cocina"
        },
        {
          en: "Flooring and construction debris",
          es: "Escombros de pisos y construcción"
        },
        {
          en: "Property cleanouts",
          es: "Limpiezas de propiedades"
        },
        {
          en: "Contractor projects",
          es: "Proyectos de contratistas"
        },
        {
          en: "Brush and tree debris",
          es: "Maleza y restos de árboles"
        }
      ],
      accepted: [
        {
          label: {
            en: "Household & cleanout debris",
            es: "Escombros del hogar y de limpieza"
          },
          text: {
            en: "Furniture, boxes, household goods, and general cleanout materials.",
            es: "Muebles, cajas, artículos del hogar y materiales generales de limpieza."
          }
        },
        {
          label: {
            en: "Construction & remodeling debris",
            es: "Escombros de construcción y remodelación"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, tile, and similar construction materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos, azulejo y materiales de construcción similares."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Aggregate materials",
          es: "Materiales de agregado"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry can be accepted in designated 20-yard aggregate dumpsters and must remain separate from general trash. The 20-yard is also the largest dumpster size we offer for aggregate materials. Let us know you're disposing of aggregate material when requesting your quote so we can provide the appropriate dumpster and pricing.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería pueden aceptarse en contenedores de 20 yardas designados para agregados y deben permanecer separados de la basura general. El de 20 yardas es también el tamaño más grande que ofrecemos para materiales de agregado. Avísanos que vas a desechar material de agregado al solicitar tu cotización para que podamos ofrecerte el contenedor y la cotización adecuados."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Your dumpster rental includes 14 days. Additional rental days are available for an added daily charge.",
            es: "Tu renta de contenedor incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. Call our office when you're ready for pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. Llama a nuestra oficina cuando estés listo para la recogida."
          }
        ]
      }
    }
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
      "18 ft × 8 ft × 6 ft · ~10.5 pickup loads. Home additions, whole-house remodels, large roofing jobs, commercial cleanouts. Taller walls pack more volume into a shorter footprint.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Larger home cleanouts",
          es: "Limpiezas grandes de casa"
        },
        {
          en: "Multi-room renovations",
          es: "Renovaciones de varias habitaciones"
        },
        {
          en: "Property cleanouts",
          es: "Limpiezas de propiedades"
        },
        {
          en: "New construction and new builds",
          es: "Construcción nueva y obras nuevas"
        },
        {
          en: "Moving and downsizing",
          es: "Mudanzas y reducción de espacio"
        },
        {
          en: "Contractor projects",
          es: "Proyectos de contratistas"
        },
        {
          en: "Construction debris",
          es: "Escombros de construcción"
        }
      ],
      accepted: [
        {
          label: {
            en: "Household & bulk debris",
            es: "Escombros del hogar y voluminosos"
          },
          text: {
            en: "Furniture, boxes, household goods, and general cleanout materials.",
            es: "Muebles, cajas, artículos del hogar y materiales generales de limpieza."
          }
        },
        {
          label: {
            en: "Construction & remodeling debris",
            es: "Escombros de construcción y remodelación"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, tile, and similar construction materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos, azulejo y materiales de construcción similares."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Heavy materials",
          es: "Materiales pesados"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry are not accepted in our 25-yard dumpsters. Aggregate materials must be placed in a designated 10-, 15-, or 20-yard container. Not sure whether your material belongs in a 25-yard? Call before ordering and we'll help you choose the appropriate dumpster.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería no se aceptan en nuestros contenedores de 25 yardas. Los materiales de agregado deben colocarse en un contenedor designado de 10, 15 o 20 yardas. ¿No estás seguro de si tu material va en uno de 25 yardas? Llama antes de ordenar y te ayudaremos a elegir el contenedor adecuado."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Our standard dumpster rental includes 14 days. Additional rental days are available for an added daily charge.",
            es: "Nuestra renta estándar de contenedor incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. When you're finished loading, call our office to request pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. Cuando termines de cargar, llama a nuestra oficina para solicitar la recogida."
          }
        ]
      }
    }
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
      "22 ft × 8 ft × 6 ft · ~14 pickup loads. Our most popular size — high volume. Full demolitions, commercial sites, bulk waste hauls, multi-family cleanouts. Needs a long run-up to place — call us if you're not sure it fits.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Large home cleanouts",
          es: "Limpiezas grandes de casa"
        },
        {
          en: "Estate and property cleanouts",
          es: "Limpiezas de patrimonio y propiedades"
        },
        {
          en: "Major renovations",
          es: "Renovaciones mayores"
        },
        {
          en: "Construction projects",
          es: "Proyectos de construcción"
        },
        {
          en: "Demolition debris",
          es: "Escombros de demolición"
        },
        {
          en: "Commercial cleanouts",
          es: "Limpiezas comerciales"
        },
        {
          en: "Bulk waste",
          es: "Residuos a granel"
        }
      ],
      accepted: [
        {
          label: {
            en: "Household & bulk debris",
            es: "Escombros del hogar y voluminosos"
          },
          text: {
            en: "Furniture, boxes, household goods, and materials from larger cleanouts.",
            es: "Muebles, cajas, artículos del hogar y materiales de limpiezas más grandes."
          }
        },
        {
          label: {
            en: "Construction & demolition debris",
            es: "Escombros de construcción y demolición"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, and similar construction and demolition materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos y materiales similares de construcción y demolición."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Heavy materials",
          es: "Materiales pesados"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry are not accepted in our 30-yard dumpsters. Aggregate materials require a designated 10-, 15-, or 20-yard container.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería no se aceptan en nuestros contenedores de 30 yardas. Los materiales de agregado requieren un contenedor designado de 10, 15 o 20 yardas."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Your 30-yard dumpster rental includes 14 days. Additional rental days are available for an added daily charge.",
            es: "Tu renta de contenedor de 30 yardas incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. When your project is complete, call our office to request pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. Cuando tu proyecto esté terminado, llama a nuestra oficina para solicitar la recogida."
          }
        ]
      }
    }
  },
  {
    yd: 40,
    slug: "40-yard-dumpster",
    popular: false,
    // City combo pages enabled (2026-09) — seeded from the client's 40-yard docs
    // in content/combos/<city>-40.md. Neighborhood×40 pages stay content-gated.
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
      "22 ft × 8 ft × 8 ft · ~17 pickup loads. Our largest container — maximum volume for major demolition and commercial jobs. The 8-foot walls need a long, clear run-up to place; call us to confirm it fits.",
    // Client size-level boilerplate (lifted from the 2026-09 Word docs; EN/ES).
    // Rendered on every city×size and neighborhood×size page via _includes/client-copy.njk.
    clientCopy: {
      uses: [
        {
          en: "Major home cleanouts",
          es: "Limpiezas mayores de casa"
        },
        {
          en: "Large property cleanouts",
          es: "Limpiezas de propiedades grandes"
        },
        {
          en: "Commercial cleanouts",
          es: "Limpiezas comerciales"
        },
        {
          en: "Large construction projects",
          es: "Proyectos grandes de construcción"
        },
        {
          en: "Demolition projects",
          es: "Proyectos de demolición"
        },
        {
          en: "Bulk waste",
          es: "Residuos a granel"
        },
        {
          en: "High-volume renovation debris",
          es: "Escombros de renovación de alto volumen"
        }
      ],
      accepted: [
        {
          label: {
            en: "Bulk & cleanout debris",
            es: "Escombros voluminosos y de limpieza"
          },
          text: {
            en: "Furniture, boxes, household goods, and other bulky materials from larger cleanouts.",
            es: "Muebles, cajas, artículos del hogar y otros materiales voluminosos de limpiezas más grandes."
          }
        },
        {
          label: {
            en: "Construction & demolition debris",
            es: "Escombros de construcción y demolición"
          },
          text: {
            en: "Drywall, lumber, cabinets, doors, flooring, and similar construction and demolition materials.",
            es: "Tablaroca, madera, gabinetes, puertas, pisos y materiales similares de construcción y demolición."
          }
        },
        {
          label: {
            en: "Brush & tree debris",
            es: "Maleza y restos de árboles"
          },
          text: {
            en: "Brush, trees, tree branches, and similar natural debris.",
            es: "Maleza, árboles, ramas y restos naturales similares."
          }
        }
      ],
      aggregateRule: {
        label: {
          en: "Heavy materials",
          es: "Materiales pesados"
        },
        text: {
          en: "Concrete, dirt, asphalt, brick, and masonry are not accepted in our 40-yard dumpsters. Aggregate materials must be placed in a designated 10-, 15-, or 20-yard dumpster.",
          es: "El concreto, la tierra, el asfalto, el ladrillo y la mampostería no se aceptan en nuestros contenedores de 40 yardas. Los materiales de agregado deben colocarse en un contenedor designado de 10, 15 o 20 yardas."
        }
      },
      restricted: {
        label: {
          en: "Restricted & prohibited items",
          es: "Artículos restringidos y prohibidos"
        },
        text: {
          en: "Mattresses and tires are subject to additional charges. Hazardous materials, asbestos, propane tanks, and other prohibited materials are not accepted.",
          es: "Los colchones y las llantas están sujetos a cargos adicionales. No se aceptan materiales peligrosos, asbesto, tanques de propano ni otros materiales prohibidos."
        }
      },
      rental: {
        label: {
          en: "Rental & pickup",
          es: "Renta y recogida"
        },
        paragraphs: [
          {
            en: "Your 40-yard dumpster rental includes 14 days. Additional rental days are available for an added daily charge. Because of the size of the container, let us know what you're disposing of when requesting your quote so we can confirm the 40-yard is appropriate for your project.",
            es: "Tu renta de contenedor de 40 yardas incluye 14 días. Hay días de renta adicionales disponibles por un cargo diario adicional. Por el tamaño del contenedor, dinos qué vas a desechar al solicitar tu cotización para que podamos confirmar que el de 40 yardas es adecuado para tu proyecto."
          },
          {
            en: "Order by 12 PM for next-day delivery. Same-day may be available depending on location and scheduling. When you're finished, call our office to request pickup.",
            es: "Ordena antes de las 12 PM para entrega al día siguiente. La entrega el mismo día puede estar disponible según la ubicación y la programación. Cuando termines, llama a nuestra oficina para solicitar la recogida."
          }
        ]
      }
    }
  }
];
