import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Active la génération statique (SSG)
  images: {
    unoptimized: true, // Nécessaire pour export statique
  },
};

export default nextConfig;
