import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Ensure static generation works with internationalization
  trailingSlash: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
      {
        protocol: "https",
        hostname: "5t8sz5eiw3.ufs.sh"
      }
    ],
  },
};

const withNextIntl = createNextIntlPlugin("./next-intl.config.js");

export default withNextIntl(nextConfig);
