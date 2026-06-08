// Site-wide constants. Change once, applied everywhere.
export default {
  name: "JP Roll-Off Service",
  // Bump this single value to cache-bust ALL css/js across every page.
  assetVersion: "77",
  phone: {
    // Primary office line — used site-wide (nav, hero, CTAs, footer, schema).
    display: "(301) 879-7040",
    tel: "+13018797040",
    // Secondary line — shown on the Contact page and footer as a backup number.
    secondary: {
      display: "(301) 252-3586",
      tel: "+13012523586"
    }
  },
  address: "PO Box 168, Beltsville, MD 20704",
  founded: 2000,
  // Primary nav — edit once, renders in nav.njk on every page.
  nav: [
    { href: "/services", label: { en: "Dumpsters", es: "Contenedores" } },
    { href: "/service-areas", label: { en: "Service Areas", es: "Áreas de Servicio" } },
    { href: "/about", label: { en: "About", es: "Acerca" } },
    { href: "/faq", label: { en: "FAQ", es: "Preguntas" } },
    { href: "/contact", label: { en: "Contact", es: "Contacto" } }
  ],
  // Footer location links.
  footerAreas: [
    { href: "/locations/beltsville", label: "Beltsville" },
    { href: "/locations/greenbelt", label: "Greenbelt" },
    { href: "/locations/college-park", label: "College Park" },
    { href: "/locations/laurel", label: "Laurel" },
    { href: "/locations/hyattsville", label: "Hyattsville" }
  ]
};
