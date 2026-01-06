import DashboardBackground from '@/components/DashboardBackground'
import DashboardHeader from '@/components/DashboardHeader'
import AppCarousel from '@/components/AppCarousel'

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden dark">
      <DashboardBackground />
      <DashboardHeader />
      <div className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20">
        <AppCarousel />
      </div>
    </main>
  )
}

