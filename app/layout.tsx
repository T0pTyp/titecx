import type { Metadata } from 'next'
import './globals.css'
import { themeScript } from './theme-script'

export const metadata: Metadata = {
  title: 'Ti-Tecx - Technologie. Klar gedacht. Sauber umgesetzt.',
  description: 'Wir entwickeln digitale Lösungen mit Fokus auf Automatisierung, Datenverarbeitung und moderne Softwarearchitekturen.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" suppressHydrationWarning className="dark">
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="dark">
        {children}
      </body>
    </html>
  )
}

