import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://faliq-portfolio.vercel.app";
  const currentDate = new Date();

  const routes = [
    "",
    "/about",
    "/projects",
    "/skills",
    "/experience",
    "/gallery",
    "/contact",
    "/ai-assistant",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: currentDate,
  }));
}
