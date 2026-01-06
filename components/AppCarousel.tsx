'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface App {
  id: string
  name: string
  iconPath: string
  url?: string
}

const apps: App[] = [
  {
    id: 'swtch',
    name: 'Swtch',
    iconPath: '/apps/3DIconSwtch.png',
    url: 'https://swtch.ti-tecx.app/',
  },
  {
    id: 'gitgame',
    name: 'GitGame',
    iconPath: '/apps/3DIconGitGame.png',
  },
]

export default function AppCarousel() {
  const [selectedAppId, setSelectedAppId] = useState('swtch')
  const directionRef = useRef<'left' | 'right'>('right')
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  
  const selectedApp = apps.find(app => app.id === selectedAppId) || apps[0]
  const selectedIndex = apps.findIndex(app => app.id === selectedAppId)
  const backgroundApp = apps.find(app => app.id !== selectedAppId)
  
  // Bestimme Position der Hintergrund-App: erste App = rechts, zweite App = links
  const backgroundPosition = selectedIndex === 0 ? 'right' : 'left'

  const handleAppClick = (appId: string, clickDirection: 'left' | 'right') => {
    directionRef.current = clickDirection
    setDirection(clickDirection)
    setSelectedAppId(appId)
  }

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="relative flex items-center justify-center gap-0 md:gap-0 ml-4 md:ml-8">
        {/* Hintergrund-App (links, wenn GitGame ausgewählt) */}
        {backgroundApp && backgroundPosition === 'left' && (
          <motion.button
            key={`left-${backgroundApp.id}`}
            className="relative w-20 h-20 md:w-28 md:h-28 opacity-50 hover:opacity-80 cursor-pointer z-0"
            initial={{ x: 0, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 0.5, scale: 0.7 }}
            whileHover={{ scale: 0.75, opacity: 0.8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => handleAppClick(backgroundApp.id, 'left')}
          >
            <Image
              src={backgroundApp.iconPath}
              alt={backgroundApp.name}
              fill
              className="object-contain"
            />
          </motion.button>
        )}

        {/* Zentrale App im Vordergrund */}
        <AnimatePresence mode="wait">
          {selectedApp.url ? (
            <motion.a
              key={selectedApp.id}
              href={selectedApp.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ 
                x: directionRef.current === 'left' ? 200 : -200, 
                opacity: 0, 
                scale: 0.8 
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ 
                x: directionRef.current === 'left' ? -200 : 200, 
                opacity: 0, 
                scale: 0.8 
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-32 h-32 md:w-48 md:h-48 z-10 cursor-pointer"
            >
              <Image
                src={selectedApp.iconPath}
                alt={selectedApp.name}
                fill
                className="object-contain"
                priority
              />
            </motion.a>
          ) : (
            <motion.div
              key={selectedApp.id}
              initial={{ 
                x: directionRef.current === 'left' ? 200 : -200, 
                opacity: 0, 
                scale: 0.8 
              }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              exit={{ 
                x: directionRef.current === 'left' ? -200 : 200, 
                opacity: 0, 
                scale: 0.8 
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="relative w-32 h-32 md:w-48 md:h-48 z-10"
            >
              <Image
                src={selectedApp.iconPath}
                alt={selectedApp.name}
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hintergrund-App (rechts, wenn Swtch ausgewählt) */}
        {backgroundApp && backgroundPosition === 'right' && (
          <motion.button
            key={`right-${backgroundApp.id}`}
            className="relative w-20 h-20 md:w-28 md:h-28 opacity-50 hover:opacity-80 cursor-pointer z-0"
            initial={{ x: 0, opacity: 0, scale: 0.8 }}
            animate={{ x: 0, opacity: 0.5, scale: 0.7 }}
            whileHover={{ scale: 0.75, opacity: 0.8 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            onClick={() => handleAppClick(backgroundApp.id, 'right')}
          >
            <Image
              src={backgroundApp.iconPath}
              alt={backgroundApp.name}
              fill
              className="object-contain"
            />
          </motion.button>
        )}
      </div>
    </div>
  )
}

