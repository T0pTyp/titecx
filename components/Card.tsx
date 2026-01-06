import { ReactNode } from 'react'

interface CardProps {
  title: string
  children: ReactNode
}

export default function Card({ title, children }: CardProps) {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md dark:hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>
      <p className="text-gray-700 dark:text-gray-300">
        {children}
      </p>
    </div>
  )
}

