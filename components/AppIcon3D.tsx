'use client'

import { useState } from 'react'
import Image from 'next/image'

interface AppIcon3DProps {
  iconPath: string
  title: string
  isHovered?: boolean
  className?: string
}

export default function AppIcon3D({ 
  iconPath, 
  title, 
  isHovered = false,
  className = '' 
}: AppIcon3DProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: '200px', height: '200px' }}>
      {!imageError ? (
        <Image
          src={iconPath}
          alt={title}
          width={200}
          height={200}
          className="object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <svg 
          className="w-16 h-16 text-blue-400" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={1.5} 
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m4.5 0a12.05 12.05 0 003.478-.397m-9 0a12.05 12.05 0 01-3.478-.397m0 0a12.02 12.02 0 003.464-1.607M12 18.75a12.02 12.02 0 003.464-1.607M12 18.75V18m-3.464 1.607a12.02 12.02 0 01-1.5-.189M15.464 19.607a12.02 12.02 0 001.5-.189M15.464 19.607L12 15.75m-3.464 4.857L12 15.75" 
          />
        </svg>
      )}
    </div>
  )
}

