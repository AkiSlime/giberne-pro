import { Poppins, Chivo_Mono } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const chivoMono = Chivo_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-chivo-mono',
  display: 'swap',
})
