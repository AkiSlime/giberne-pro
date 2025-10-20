import type { Metadata } from 'next'
import { poppins, chivoMono } from './fonts'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'

export const metadata: Metadata = {
  title: 'Thomas Giberné | Développeur Web Full-Stack',
  description: 'Portfolio professionnel - Développeur spécialisé en React, Next.js et Tailwind CSS',
  keywords: ['développeur web', 'react', 'next.js', 'tailwind css', 'portfolio'],
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
