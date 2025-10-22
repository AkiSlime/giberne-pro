import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',   // Pour TOUS les robots (Google, Bing, etc.)
      allow: '/',       // ✅ Ils peuvent visiter TOUT le site
      disallow: [],     // ❌ Rien n'est interdit (laisse vide si tout est public)
    },
    sitemap: 'https://thomasgiberne.akisama.fr/sitemap.xml', // 🗺️ Pointe vers ton sitemap
  }
}
