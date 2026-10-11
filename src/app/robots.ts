import type { MetadataRoute } from "next";
import { ContactInformation } from "./common/contactInformation/contactInformation";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${ContactInformation.website}/sitemap.xml`,
  };
}
