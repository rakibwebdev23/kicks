import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow images from the public folder (default behavior)
    // Add any external domains here if needed later
    unoptimized: false,
  },
};

export default nextConfig;
