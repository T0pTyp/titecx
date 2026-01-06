export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent dark:from-blue-500/20 dark:via-purple-500/20"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Technologie. Klar gedacht. Sauber umgesetzt.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
          Wir entwickeln digitale Lösungen mit Fokus auf Automatisierung, Datenverarbeitung und moderne Softwarearchitekturen.
        </p>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Kein Buzzword-Bingo. Sondern funktionierende Systeme.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#kontakt"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Kontakt
          </a>
          <a
            href="#leistungen"
            className="px-6 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
          >
            Leistungen
          </a>
        </div>
      </div>
    </section>
  )
}

