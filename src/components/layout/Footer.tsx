import type { Page } from '../../types/page'

type Props = {
  onNavigate: (page: Page) => void
  onScrollToSection: (sectionId: string) => void
}

export function Footer({ onNavigate, onScrollToSection }: Props) {
  return (
    <footer className="fx-footer">
      <div className="fx-footer-top">
        <div>
          <div className="fx-footer-logo-main">FOXTROT</div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: 3,
              color: 'var(--gray)',
              textTransform: 'uppercase',
              marginTop: 4,
            }}
          >
            Electrocommunication Systems
          </div>
          <p className="fx-footer-tagline" style={{ marginTop: 20 }}>
            &quot;Connecting Africa, Empowering Communities&quot; — Harare, Zimbabwe&apos;s leading
            integrator of communication, energy &amp; smart farming technologies.
          </p>
        </div>
        <div>
          <div className="fx-footer-col-title">Services</div>
          <div className="fx-footer-links">
            <a onClick={() => onNavigate('services')}>Two-Way Radio</a>
            <a onClick={() => onNavigate('services')}>Solar Energy</a>
            <a onClick={() => onNavigate('services')}>Energy Backup</a>
            <a onClick={() => onNavigate('services')}>Infrastructure</a>
            <a onClick={() => onNavigate('services')}>Smart Farming</a>
          </div>
        </div>
        <div>
          <div className="fx-footer-col-title">Company</div>
          <div className="fx-footer-links">
            <a onClick={() => onNavigate('about')}>About Us</a>
            <a onClick={() => onNavigate('about')}>Our Team</a>
            <a onClick={() => onNavigate('about')}>Our Values</a>
            <a onClick={() => onScrollToSection('section-products')}>Products</a>
          </div>
        </div>
        <div>
          <div className="fx-footer-col-title">Contact</div>
          <div className="fx-footer-links" style={{ gap: 14 }}>
            <span style={{ fontSize: 13, color: '#999' }}>Harare, Zimbabwe</span>
            <span style={{ fontSize: 13, color: '#999' }}>+263 774 116 149</span>
            <span style={{ fontSize: 13, color: '#999' }}>foxtrot_systems@aol.com</span>
            <a
              onClick={() => onScrollToSection('section-contact')}
              style={{ color: 'var(--red)', fontWeight: 600, cursor: 'pointer' }}
            >
              Get a Quote →
            </a>
          </div>
        </div>
      </div>
      <div className="fx-footer-bottom">
        <div className="fx-footer-copy">
          © 2025 Foxtrot Electrocommunication Systems. All rights reserved. Harare, Zimbabwe.
        </div>
        <div className="fx-footer-badge">Connecting Africa ◆</div>
      </div>
    </footer>
  )
}

