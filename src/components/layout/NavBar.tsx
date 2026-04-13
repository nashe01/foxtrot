import type { Page } from '../../types/page'

type Props = {
  onNavigate: (page: Page) => void
  onScrollToSection: (sectionId: string) => void
}

export function NavBar({ onNavigate, onScrollToSection }: Props) {
  return (
    <nav className="fx-nav">
      <div className="fx-logo" onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
        <div className="fx-logo-main">FOXTROT</div>
        <div className="fx-logo-sub">Electrocommunication Systems</div>
      </div>
      <div className="fx-nav-links">
        <a onClick={() => onNavigate('home')}>Home</a>
        <a onClick={() => onNavigate('about')}>About</a>
        <a onClick={() => onNavigate('services')}>Services</a>
      </div>
      <button className="fx-quote-btn" onClick={() => onScrollToSection('section-contact')}>
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
    </nav>
  )
}

