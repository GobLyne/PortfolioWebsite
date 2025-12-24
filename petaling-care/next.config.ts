import type { NextConfig } from "next";

const isVercelBuild = process.env.VERCEL_BUILD === "true" || process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // For Hostinger: static export | For Vercel: let Vercel handle it
  ...(isVercelBuild ? {} : { output: "export" }),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
