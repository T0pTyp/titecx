'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function DashboardHeader() {
  const pathname = usePathname()
  const isImpressumPage = pathname === '/impressum' || pathname === '/impressum/'
  const href = isImpressumPage ? '/' : '/impressum'
  const ariaLabel = isImpressumPage ? 'Ti-Tecx Home' : 'Ti-Tecx Impressum'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link
            href={href}
            className="text-2xl font-light text-white/20 hover:text-white/40 transition-colors pointer-events-auto focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            aria-label={ariaLabel}
          >
            Ti-Tecx
          </Link>
        </div>
      </div>
    </header>
  )
}

