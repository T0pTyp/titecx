import { ReactNode } from 'react'

interface SectionProps {
  id?: string
  title?: string
  children: ReactNode
  className?: string
}

export default function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  )
}

