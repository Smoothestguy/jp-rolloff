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
  { slug: "somerset",          city: "bowie", zip: "20715", oneLine: { en: "Original 1960 Levitt Cape Cods and ranchers; S-named streets", es: "Casas Cape Cod y rancheras originales de Levitt de 1960; calles con nombres que empiezan con S" } },
  { slug: "buckingham",        city: "bowie", zip: "20715", oneLine: { en: "Early-1960s Levitt section, B-named streets", es: "Sección de Levitt de inicios de los 1960; calles con nombres que empiezan con B" } },
  { slug: "kenilworth",        city: "bowie", zip: "20715", oneLine: { en: "Early-1960s Levitt homes, K-named streets", es: "Casas de Levitt de inicios de los 1960; calles con nombres que empiezan con K" } },
  { slug: "foxhill",           city: "bowie", zip: "20715", oneLine: { en: "Early-1960s Levitt F-section, completed 1964", es: "Sección F de Levitt de inicios de los 1960, terminada en 1964" } },
  { slug: "tulip-grove",       city: "bowie", zip: "20715", oneLine: { en: "Early-1960s Levitt T-section with larger eastward lots", es: "Sección T de Levitt de inicios de los 1960, con lotes más grandes hacia el este" } },
  { slug: "long-ridge",        city: "bowie", zip: "20715", oneLine: { en: "1960s Levitt L-section, slightly larger lots", es: "Sección L de Levitt de los 1960, con lotes un poco más grandes" } },
  { slug: "meadowbrook",       city: "bowie", zip: "20716", oneLine: { en: "Mid-1960s Levitt M-section, tree-lined streets", es: "Sección M de Levitt de mediados de los 1960, calles arboladas" } },
  { slug: "chapel-forge",      city: "bowie", zip: "20715", oneLine: { en: "Mid-1960s Levitt C-section single-family homes", es: "Casas unifamiliares de la sección C de Levitt de mediados de los 1960" } },
  { slug: "whitehall",         city: "bowie", zip: "20716", oneLine: { en: "Mid-1960s Levitt W-section near Bowie Golf Club", es: "Sección W de Levitt de mediados de los 1960, cerca del Bowie Golf Club" } },
  { slug: "rockledge",         city: "bowie", zip: "20716", oneLine: { en: "Mid-1960s Levitt R-section single-family homes", es: "Casas unifamiliares de la sección R de Levitt de mediados de los 1960" } },
  { slug: "overbrook",         city: "bowie", zip: "20715", oneLine: { en: "Mid-1960s Levitt O-section, tree-shaded streets", es: "Sección O de Levitt de mediados de los 1960, calles con sombra de árboles" } },
  { slug: "yorktown",          city: "bowie", zip: "20715", oneLine: { en: "Mid-to-late-1960s Levitt Y-section", es: "Sección Y de Levitt de mediados a finales de los 1960" } },
  { slug: "idlewild",          city: "bowie", zip: "20715", oneLine: { en: "Late-1960s Levitt I-section, 1966-1968", es: "Sección I de Levitt de finales de los 1960, 1966-1968" } },
  { slug: "victoria-heights",  city: "bowie", zip: "20715", oneLine: { en: "Late-1960s Levitt V-section, final Belair wave", es: "Sección V de Levitt de finales de los 1960, la última etapa de Belair" } },
  { slug: "heather-hills",     city: "bowie", zip: "20715", oneLine: { en: "Mid-1960s Levitt H-section, oak-shaded lots with park access", es: "Sección H de Levitt de mediados de los 1960, lotes con sombra de robles y acceso a parque" } },
  { slug: "glenridge",         city: "bowie", zip: "20715", oneLine: { en: "1969 Levitt G-section, only ~22 homes built", es: "Sección G de Levitt de 1969, solo se construyeron unas 22 casas" } },
  { slug: "belair-town",       city: "bowie", zip: "20715", oneLine: { en: "~300 townhomes built 1968-1970 in two phases", es: "Unas 300 casas adosadas construidas entre 1968 y 1970 en dos fases" } },
  { slug: "old-town-bowie",    city: "bowie", zip: "20715", oneLine: { en: "Historic pre-Levitt district around the train station; small lots", es: "Distrito histórico anterior a Levitt alrededor de la estación de tren; lotes pequeños" } },
  { slug: "mitchellville",     city: "bowie", zip: "20721", oneLine: { en: "Newer, affluent larger colonials on big lots; some gated", es: "Casas coloniales más nuevas, grandes y de alto nivel en lotes amplios; algunas en zonas privadas" } },
  { slug: "pointer-ridge",     city: "bowie", zip: "20716", oneLine: { en: "1970s-80s ranches/ramblers/colonials; all-P streets", es: "Rancheras, ramblers y coloniales de los 1970-80; todas las calles empiezan con P" } },
  { slug: "fairwood",          city: "bowie", zip: "20716", oneLine: { en: "Mid-2000s master-planned upscale homes and townhomes", es: "Casas y adosados de alto nivel con planificación maestra, de mediados de los 2000" } },
  { slug: "saddle-brook",      city: "bowie", zip: "20716", oneLine: { en: "Suburban homes near the former race track; equestrian street names", es: "Casas suburbanas cerca del antiguo hipódromo; calles con nombres ecuestres" } },
  { slug: "collington-station",city: "bowie", zip: "20721", oneLine: { en: "1990s Colonial Revival homes near Oak Creek", es: "Casas estilo Colonial Revival de los 1990 cerca de Oak Creek" } },
  { slug: "collington-manor",  city: "bowie", zip: "20721", oneLine: { en: "1990s-2000s large single-family homes and townhomes", es: "Casas unifamiliares grandes y adosados de los 1990-2000" } },
  { slug: "northridge",        city: "bowie", zip: "20720", oneLine: { en: "1992+ master-planned contemporary homes with amenities", es: "Casas contemporáneas con planificación maestra y amenidades, desde 1992" } },
  { slug: "woodmore",          city: "bowie", zip: "20720", oneLine: { en: "Gated luxury golf community, country club", es: "Comunidad de golf de lujo en zona privada, con club campestre" } },
  { slug: "woodmore-north",    city: "bowie", zip: "20720", oneLine: { en: "Stewart's Landing; 2002-2011 contemporary homes", es: "Stewart's Landing; casas contemporáneas de 2002-2011" } },
  { slug: "jericho-park",      city: "bowie", zip: "20715", oneLine: { en: "Midcentury and custom homes near Bowie State University; large lots", es: "Casas de mediados de siglo y personalizadas cerca de Bowie State University; lotes grandes" } },
  { slug: "grovehurst",        city: "bowie", zip: "20715", oneLine: { en: "1990s Colonials near parks, golf, and shopping", es: "Casas coloniales de los 1990 cerca de parques, golf y tiendas" } },
  { slug: "old-stage",         city: "bowie", zip: "20715", oneLine: { en: "1980s-2000s split-levels and colonials", es: "Casas de niveles divididos y coloniales de los 1980-2000" } },
  { slug: "two-rivers",        city: "bowie", zip: "20720", oneLine: { en: "Established family-friendly neighborhood", es: "Vecindario establecido y familiar" } },
  { slug: "glen-allen",        city: "bowie", zip: "20715", oneLine: { en: "Brick colonials and Craftsman homes", es: "Casas coloniales de ladrillo y estilo Craftsman" } },
  { slug: "amber-meadows",     city: "bowie", zip: "20715", oneLine: { en: "1980s-90s midsize homes west of US 301", es: "Casas medianas de los 1980-90 al oeste de la US 301" } },
  { slug: "willow-wood-estates",city: "bowie", zip: "20715", oneLine: { en: "Established midsize-home community", es: "Comunidad establecida de casas medianas" } }
];
