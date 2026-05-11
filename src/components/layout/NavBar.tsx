import { useEffect, useState } from 'react'
import type { Page } from '../../types/page'
import logo from '../../assets/foxtrot-logo.png'

type Props = {
  onNavigate: (page: Page) => void
  onScrollToSection: (sectionId: string) => void
}

export function NavBar({ onNavigate, onScrollToSection }: Props) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavigate = (page: Page) => {
    onNavigate(page)
    setMenuOpen(false)
  }

  const handleQuote = () => {
    onScrollToSection('section-contact')
    setMenuOpen(false)
  }

  return (
    <nav className={`fx-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="fx-logo" onClick={() => handleNavigate('home')} style={{ cursor: 'pointer' }}>
        <img className="fx-logo-img" src={logo} alt="Foxtrot Systems" />
      </div>
      <div className="fx-nav-links">
        <a onClick={() => handleNavigate('home')}>Home</a>
        <a onClick={() => handleNavigate('about')}>About</a>
        <a onClick={() => handleNavigate('services')}>Services</a>
      </div>
      <button className="fx-quote-btn" onClick={handleQuote}>
        <span className="btn-text">Get a quote</span>
        <span className="btn-icon">
          <svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
            <path
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 11v4M10 13h4"
              stroke="#ffffff"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <button
        className={`fx-menu-btn ${menuOpen ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
      <div className={`fx-mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a onClick={() => handleNavigate('home')}>Home</a>
        <a onClick={() => handleNavigate('about')}>About</a>
        <a onClick={() => handleNavigate('services')}>Services</a>
        <button className="fx-mobile-quote-btn" onClick={handleQuote}>
          Get a quote
        </button>
      </div>
    </nav>
  )
}

