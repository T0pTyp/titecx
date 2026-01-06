import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function Datenschutz() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Datenschutzerklärung
          </h1>
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>1. Datenschutz auf einen Blick</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>2. Verantwortliche Stelle</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Ti-Tecx<br />
              [Ihre Adresse]<br />
              [PLZ Ort]<br />
              E-Mail: kontakt@ti-tecx.de
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              <strong>3. Datenerfassung auf dieser Website</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Diese Website wird als statische Seite betrieben und erfasst keine personenbezogenen Daten. 
              Es werden keine Cookies gesetzt und keine Tracking-Tools verwendet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Bei Kontaktaufnahme per E-Mail werden die von Ihnen mitgeteilten Daten zwecks Bearbeitung Ihrer Anfrage 
              und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              <strong>4. Ihre Rechte</strong><br />
              Sie haben jederzeit das Recht, Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten. 
              Außerdem haben Sie das Recht auf Berichtigung, Löschung oder Einschränkung der Verarbeitung Ihrer Daten.
            </p>
            <Link
              href="/"
              className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

