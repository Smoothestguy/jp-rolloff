// Site-wide constants. Change once, applied everywhere.
export default {
  name: "JP Roll-Off Service",
  // Bump this single value to cache-bust ALL css/js across every page.
  assetVersion: "72",
  phone: {
    display: "(301) 252-3586",
    tel: "+13012523586",
    office: "301-879-7040"
  },
  address: "PO Box 168, Beltsville, MD 20704",
  founded: 2000,
  // Primary nav — edit once, renders in nav.njk on every page.
  nav: [
    { href: "/services", label: "Dumpsters" },
    { href: "/pricing", label: "Pricing" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" }
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
