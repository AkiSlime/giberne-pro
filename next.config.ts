import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Pas besoin de 'output: export' sur Vercel
  // Vercel gère Next.js nativement et optimise automatiquement
  // Ça permet aussi d'avoir sitemap.xml et robots.txt dynamiques

  images: {
    formats: ['image/avif', 'image/webp'], // Formats modernes optimisés
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
