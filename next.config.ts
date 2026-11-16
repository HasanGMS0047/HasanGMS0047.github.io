import type { NextConfig } from "next";

// Static export for GitHub Pages: the site is plain files, so there is no server,
// no API routes and no custom response headers.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  poweredByHeader: false,
  devIndicators: false,
  productionBrowserSourceMaps: false,
};

export default nextConfig;
