import type { NextConfig } from "next";

// Check if we're building for static export (Hostinger)
const isStaticExport = process.env.BUILD_TARGET === "static";

const nextConfig: NextConfig = {
  // Only use static export for Hostinger deployment
  ...(isStaticExport && { output: "export" }),
  
  images: {
    // Unoptimized for static export, optimized for Vercel
    unoptimized: isStaticExport,
  },
  
  // Trailing slash for static hosting compatibility
  trailingSlash: isStaticExport,
};

export default nextConfig;
