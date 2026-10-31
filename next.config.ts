import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async rewrites() {
    return {
      beforeFiles: [{
        source: "/:path*",
        has: [{ type: "host", value: "frontdesk\\.yuhanchen\\.me" }],
        destination: "https://simulation-experimental-accomplished-reg.trycloudflare.com/:path*",
      }],
      afterFiles: [],
      fallback: [],
    };
  },
  async headers() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "frontdesk\\.yuhanchen\\.me" }],
      headers: [
        { key: "Cache-Control", value: "private, no-store, max-age=0" },
        { key: "CDN-Cache-Control", value: "no-store" },
        { key: "Vercel-CDN-Cache-Control", value: "no-store" },
        { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive" },
      ],
    }];
  },
};

export default nextConfig;
