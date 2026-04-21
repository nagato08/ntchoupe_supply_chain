import type { MetadataRoute } from "next";

const SITE_URL = "https://nk-supply-chain.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/a-propos", "/services", "/corridors", "/contact"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));
}
