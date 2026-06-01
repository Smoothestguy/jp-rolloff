// Directory data for the Size × Location combo template.
// Scoped to src/combo/ only, so it never touches the hand-written hub pages.
// eleventyComputed runs per paginated page and has access to the `combo` alias,
// which lets us build a unique <title>/description/canonical for each combo.
export default {
  navActive: "/service-areas",
  quoteHref: "/#quote",
  eleventyComputed: {
    title: (data) =>
      `${data.combo.size.yd}-Yard Dumpster Rental in ${data.combo.city.name}, MD | JP Roll-Off`,
    description: (data) =>
      `Rent a ${data.combo.size.yd}-yard roll-off dumpster in ${data.combo.city.name}, MD (${data.combo.city.zips.join(", ")}). ${data.combo.size.dims} · holds ~${data.combo.size.loads} pickup loads · $${data.combo.size.price.low}–$${data.combo.size.price.high}. Same-day delivery. (301) 252-3586.`,
    canonical: (data) =>
      `https://jprolloff.com/locations/${data.combo.city.slug}/${data.combo.size.yd}-yard`
  }
};
