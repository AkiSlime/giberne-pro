import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { poppins, chivoMono } from './fonts'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ModalProvider } from '@/contexts/ModalContext'

export const metadata: Metadata = {
  // --- METADONNÉES PRINCIPALES (SEO) ---
  title: 'Thomas Giberné | Création de Site Web & Identité de Marque',
  description: 'Freelance spécialisé en création de site web sur mesure, design d\'interface (UI/UX) et identité de marque. De la stratégie à la mise en ligne, je donne vie à vos projets.',
  keywords: [
    'développeur web freelance',
    'création de site web',
    'refonte de site',
    'designer web',
    'UI design',
    'UX design',
    'Figma',
    'développeur Next.js',
    'identité de marque',
    'identité visuelle',
    'création de logo',
    'charte graphique',
    'direction artistique',
    'portfolio',
    'Thomas Giberné',
    'finaliser site IA',
    'améliorer site existant',
    'aide site web bloqué',
    'site web lent',
    'corriger bug site web',
    'optimisation de site web',
    'rendre site professionnel',
  ],
  authors: [{ name: 'Thomas Giberné' }],
  creator: 'Thomas Giberné',

  // --- FAVICONS ---
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
    apple: '/favicon.svg',
  },

  // --- OPEN GRAPH (Partage sur les réseaux sociaux comme Facebook, LinkedIn) ---
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://thomasgiberne.akisama.fr',
    siteName: 'Thomas Giberné | Design & Développement',
    title: 'Thomas Giberné | Designer & Développeur - De la vision au produit fini',
    description: 'Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d\'interface et identités de marque fortes.',
    images: [
      {
        url: '/images/pro-banner.png',
        width: 1200,
        height: 630,
        alt: 'Thomas Giberné - Création de site web et identité de marque',
      },
    ],
  },

  // --- TWITTER CARD (Partage sur Twitter) ---
  twitter: {
    card: 'summary_large_image',
    title: 'Thomas Giberné | Designer & Développeur - De la vision au produit fini',
    description: 'Je transforme vos idées en expériences numériques mémorables : sites web sur mesure, design d\'interface et identités de marque fortes.',
    images: ['/images/pro-banner.png'],
    creator: '@akisama_fr',
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
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${poppins.variable} ${chivoMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ModalProvider>
            {children}
          </ModalProvider>
        </ThemeProvider>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  )
}
