// Directory data for the neighborhood×size template. Scoped to src/neighborhood/.
export default {
  navActive: "/service-areas",
  quoteHref: "/#quote",
  eleventyComputed: {
    title: (data) =>
      `${data.np.size.yd}-Yard Dumpster Rental in ${data.np.neighborhood.name}, ${data.np.city.name} MD | JP Roll-Off`,
    description: (data) =>
      `${data.np.size.yd}-yard roll-off dumpster rental in ${data.np.neighborhood.name} (${data.np.city.name}, MD). ${data.np.size.dims} · ~${data.np.size.loads} pickup loads. Next-day delivery, priced to your material. Call (301) 879-7040.`,
    canonical: (data) =>
      `https://jprolloff.com/locations/${data.np.city.slug}/${data.np.neighborhood.slug}/${data.np.size.yd}-yard`,
  },
};
