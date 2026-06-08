# JP Roll-Off — EN→ES Translation Glossary

Single source of truth for Spanish translations across the site. Keep terminology
consistent with the existing ES copy in `src/index.njk` and `src/_includes/footer.njk`.

## Mechanism
- The language toggle swaps `data-en` / `data-es` attributes client-side (`js/main.js` → `applyLang`).
- Every user-visible text node needs matching `data-en` and `data-es`.
- If the attribute VALUE contains HTML markup (links, `<strong>`, etc.), also add `data-html`
  so `applyLang` uses `innerHTML` instead of `textContent`.
- Proper nouns stay as-is: city names (Beltsville, Greenbelt…), "JP Roll-Off Service",
  "DMV", phone numbers, "Se Habla Español", units like "yd".

## Core terms
| English | Spanish |
|---|---|
| Dumpster / Dumpsters | Contenedor / Contenedores |
| Roll-off dumpster | contenedor roll-off |
| Dumpster rental | renta de contenedores |
| Next-day delivery | entrega al día siguiente |
| Same-day (delivery) | el mismo día / entrega el mismo día |
| May be available | puede estar disponible |
| Next business day | siguiente día hábil |
| Free Quote | Cotización Gratis |
| Get a Free Quote | Solicita tu Cotización Gratis |
| Request a quote | Pide tu cotización |
| Family-owned (& operated) | empresa familiar (y operada) |
| Locally owned & operated | De propiedad y operación local |
| Service area | área de servicio |
| Delivery | entrega |
| Pickup | recogida |
| Pickup on request | recogida a solicitud |
| Weight allowance | límite de peso |
| Tonnage allowance | límite de tonelaje |
| (per) additional ton | (por) tonelada adicional |
| Excess weight | peso excedente |
| Construction debris | escombros de construcción |
| Household junk | basura del hogar |
| Aggregates | agregados |
| Concrete, dirt, brick, asphalt | concreto, tierra, ladrillo, asfalto |
| Driveway | entrada |
| Rental period | periodo de renta |
| Homeowners | propietarios |
| Contractors | contratistas |
| Businesses | negocios |
| Municipalities | municipios |
| Permit | permiso |
| Trip charge | cargo por viaje |
| Mattresses / Tires | colchones / llantas |
| Surcharge | recargo |
| Hazardous materials | materiales peligrosos |
| For more than 25 years | por más de 25 años |
| Roofing tear-off | remoción de techo |
| Demolition | demolición |
| Estate / whole-house cleanout | limpieza de patrimonio / casa completa |
| The Fine Print | La Letra Pequeña |
| Rental terms | términos de renta |
| How It Works | Cómo Funciona |
| Service Areas | Áreas de Servicio |
| About | Acerca / Acerca de Nosotros |
| Contact (Us) | Contacto / Contáctanos |
| FAQ | Preguntas Frecuentes |

## Tone
Match the site's existing ES voice: warm, direct, "tú" form (not "usted"),
contraction-free where natural. Mirror sentence structure of the EN where it reads well,
but prioritize natural Spanish over literal word-for-word.
