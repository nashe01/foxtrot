import { useCallback, useEffect, useRef, useState } from 'react'
import { Footer } from './components/layout/Footer'
import { NavBar } from './components/layout/NavBar'
import { Toast } from './components/ui/Toast'
import { WhatsAppButton } from './components/ui/WhatsAppButton'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import type { Page } from './types/page'
import { scrollToId } from './utils/scrollToId'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: '',
  })
  const toastTimer = useRef<number | null>(null)

  const showPage = useCallback((next: Page) => {
    setPage(next)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const showToast = useCallback((message: string) => {
    setToast({ visible: true, message })
    if (toastTimer.current) window.clearTimeout(toastTimer.current)
    toastTimer.current = window.setTimeout(() => {
      setToast((t) => ({ ...t, visible: false }))
    }, 3500)
  }, [])

  useEffect(() => {
    return () => {
      if (toastTimer.current) window.clearTimeout(toastTimer.current)
    }
  }, [])

  const isHome = page === 'home'
  const isAbout = page === 'about'
  const isServices = page === 'services'

  const scrollToSection = useCallback(
    (sectionId: string) => {
      showPage('home')
      window.setTimeout(() => scrollToId(sectionId), 100)
    },
    [showPage],
  )

  const navigateToServicesSection = useCallback((sectionId: string) => {
    setPage('services')
    window.setTimeout(() => scrollToId(sectionId), 120)
  }, [])

  return (
    <div className="fx-site">
      <NavBar onNavigate={showPage} onScrollToSection={scrollToSection} />

      <HomePage
        active={isHome}
        onNavigate={showPage}
        onNavigateToServiceSection={navigateToServicesSection}
        onShowToast={showToast}
      />
      <AboutPage active={isAbout} />
      <ServicesPage active={isServices} onScrollToSection={scrollToSection} />

      <Footer onNavigate={showPage} onScrollToSection={scrollToSection} />

      <WhatsAppButton onClick={() => showToast('Opening WhatsApp — +263 774 116 149')} />
      <Toast visible={toast.visible} message={toast.message} />
    </div>
  )
}

