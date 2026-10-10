import type { MetadataRoute } from "next";
import { ContactInformation } from "./common/contactInformation/contactInformation";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/leistungen",
    "/praxis",
    "/team",
    "/kontakt",
    "/impressum",
    "/datenschutz",
  ].map((path) => ({
    url: new URL(path, ContactInformation.website).href,
  }));
}
