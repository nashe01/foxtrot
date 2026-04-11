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
        <a onClick={() => onScrollToSection('section-products')}>Products</a>
        <a onClick={() => onScrollToSection('section-contact')}>Contact</a>
      </div>
      <button className="fx-nav-cta" onClick={() => onScrollToSection('section-contact')}>
        Get a Quote
      </button>
    </nav>
  )
}

