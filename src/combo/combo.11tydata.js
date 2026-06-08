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
      `Rent a ${data.combo.size.yd}-yard roll-off dumpster in ${data.combo.city.name}, MD (${data.combo.city.zips.join(", ")}). ${data.combo.size.dims} · ~${data.combo.size.loads} pickup loads. Next-day delivery, priced to your material. Call (301) 879-7040.`,
    canonical: (data) =>
      `https://jprolloff.com/locations/${data.combo.city.slug}/${data.combo.size.yd}-yard`
  }
};
