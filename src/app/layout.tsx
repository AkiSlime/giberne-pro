import type { Metadata, Viewport } from 'next'
import { poppins, chivoMono } from './fonts'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/contexts/ModalContext'

export const metadata: Metadata = {
  title: 'Thomas Giberné | Développeur Web Full-Stack',
  description: 'Portfolio professionnel - Développeur spécialisé en React, Next.js et Tailwind CSS',
  keywords: ['développeur web', 'react', 'next.js', 'tailwind css', 'portfolio'],
  authors: [{ name: 'Thomas Giberné' }],
  creator: 'Thomas Giberné',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: '/favicon.svg',
  },
  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://votre-domaine.com', // À remplacer par votre URL
    siteName: 'Thomas Giberné Portfolio',
    title: 'Thomas Giberné | Développeur Web Full-Stack',
    description: 'Portfolio professionnel - Développeur spécialisé en React, Next.js et Tailwind CSS',
    images: [
      {
        url: '/pro-banner.png', // Image de prévisualisation (1200x630px recommandé)
        width: 1200,
        height: 630,
        alt: 'Thomas Giberné - Dev Pro',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Giberné | Développeur Web Full-Stack',
    description: 'Portfolio professionnel - Développeur spécialisé en React, Next.js et Tailwind CSS',
    images: ['/pro-banner.png'], // Même image que Open Graph
    creator: '@votre_twitter', // Optionnel : votre handle Twitter
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${poppins.variable} ${chivoMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ModalProvider>
            {children}
          </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
