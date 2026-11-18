import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    // Public post media can be fetched cross-origin (e.g. attaching the Rocky video to social posts).
    return [
      {
        source: "/images/:path*",
        headers: [{ key: "Access-Control-Allow-Origin", value: "*" }],
      },
    ];
  },
};

export default nextConfig;
