import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Configuration pour Cloudflare Pages (export statique)
  // Si vous voulez revenir sur Vercel, commentez 'output' et 'unoptimized'
  output: 'export', // Active l'export en fichiers HTML statiques

  images: {
    unoptimized: true, // Désactive l'optimisation Next.js (incompatible avec export)
    formats: ['image/avif', 'image/webp'], // Formats modernes optimisés
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },
};

export default nextConfig;
