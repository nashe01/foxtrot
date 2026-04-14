import { useMemo } from 'react'
import type { Page } from '../types/page'

type Props = {
  active: boolean
  onNavigate: (page: Page) => void
  onShowToast: (message: string) => void
}

export function HomePage({ active, onNavigate, onShowToast }: Props) {
  const tickerItems = useMemo(
    () => [
      'Two-Way Radio Systems',
      'Solar & Renewable Energy',
      'Energy Backup Solutions',
      'Technical Infrastructure',
      'Smart Farming Technologies',
      'Hytera Authorised Dealer',
    ],
    [],
  )

  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-home">
      <section className="fx-hero">
        <div className="fx-hero-bg" />
        <div className="fx-hero-grid" />
        {/*<div className="fx-radar">
          <div className="fx-radar-circle" />
          <div className="fx-radar-circle" />
          <div className="fx-radar-circle" />
          <div className="fx-radar-circle" />
          <div className="fx-radar-center" />
          <div className="fx-radar-sweep" />
        </div>*/}
        <div className="fx-hero-content">
          <div className="fx-hero-eyebrow">Harare, Zimbabwe</div>
          <h1 className="fx-hero-title">
            Connecting
            <br />
            <span>Africa.</span>
            <br />
            Empowering
            <br />
          </h1>
          <p className="fx-hero-sub">
            Zimbabwe&apos;s leading integrator of communication, energy, and smart farming technologies
            — delivering operational excellence in every community we serve.
          </p>
          <div className="fx-hero-actions">
            <button className="fx-btn-outline" onClick={() => onNavigate('about')}>
              Our Story
            </button>
          </div>
        </div>
        
      </section>

      <div className="fx-ticker">
        <div className="fx-ticker-track">
          {Array.from({ length: 2 }).flatMap((_, loopIdx) =>
            tickerItems.map((t, idx) => (
              <span className="fx-ticker-item" key={`${loopIdx}-${idx}`}>
                {t}
              </span>
            )),
          )}
        </div>
      </div>

      <section className="fx-section" id="section-services">
        <div className="fx-section-header">
          <div className="fx-section-label">What We Do</div>
          <h2 className="fx-section-title">
            Core <em>Services</em>
          </h2>
        </div>
        <div className="fx-services-grid">
          <div className="fx-service-card" onClick={() => onNavigate('services')}>
            <div className="fx-service-num">01</div>
            <div className="fx-service-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <path
                  d="M18 4L18 20"
                  stroke="#E8650A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="24" r="4" stroke="#E8650A" strokeWidth="2" />
                <path
                  d="M8 10 Q4 18 8 26"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M28 10 Q32 18 28 26"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.6"
                />
                <path
                  d="M5 7 Q-1 18 5 29"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                />
                <path
                  d="M31 7 Q37 18 31 29"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.3"
                />
              </svg>
            </div>
            <div className="fx-service-title">Two-Way Radio Systems</div>
            <div className="fx-service-desc">
              VHF, HF and POC radio supply, installation &amp; maintenance. Expert digital migration
              and repeater installations.
            </div>
            <div className="fx-service-arrow">→</div>
          </div>

          <div className="fx-service-card" onClick={() => onNavigate('services')}>
            <div className="fx-service-num">02</div>
            <div className="fx-service-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <circle cx="18" cy="12" r="6" stroke="#E8650A" strokeWidth="2" />
                <path
                  d="M18 6L18 2"
                  stroke="#E8650A"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M23.2 8.8L26 6"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M24 14L28 14"
                  stroke="#E8650A"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect x="6" y="20" width="24" height="12" rx="1" stroke="#E8650A" strokeWidth="2" />
                <line x1="10" y1="20" x2="10" y2="32" stroke="#E8650A" strokeWidth="1" opacity="0.4" />
                <line x1="14" y1="20" x2="14" y2="32" stroke="#E8650A" strokeWidth="1" opacity="0.4" />
                <line x1="18" y1="12" x2="18" y2="20" stroke="#E8650A" strokeWidth="2" strokeDasharray="2,2" />
              </svg>
            </div>
            <div className="fx-service-title">Solar &amp; Renewable Energy</div>
            <div className="fx-service-desc">
              On-grid and off-grid solar design and installation. Customized energy solutions for domestic, commercial &amp; conservation.
            </div>
            <div className="fx-service-arrow">→</div>
          </div>

          <div className="fx-service-card" onClick={() => onNavigate('services')}>
            <div className="fx-service-num">03</div>
            <div className="fx-service-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <rect x="4" y="8" width="28" height="20" rx="2" stroke="#E8650A" strokeWidth="2" />
                <path d="M14 16L16 20L20 14" stroke="#E8650A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="4" y1="14" x2="32" y2="14" stroke="#E8650A" strokeWidth="1" opacity="0.3" />
              </svg>
            </div>
            <div className="fx-service-title">Energy Backup Solutions</div>
            <div className="fx-service-desc">
              Reliable backup systems protecting critical operations against power interruptions 24/7.
            </div>
            <div className="fx-service-arrow">→</div>
          </div>

          <div className="fx-service-card" onClick={() => onNavigate('services')}>
            <div className="fx-service-num">04</div>
            <div className="fx-service-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <line x1="18" y1="2" x2="18" y2="10" stroke="#E8650A" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="18" y1="10" x2="10" y2="20" stroke="#E8650A" strokeWidth="2" strokeLinecap="round" />
                <line x1="18" y1="10" x2="26" y2="20" stroke="#E8650A" strokeWidth="2" strokeLinecap="round" />
                <line x1="10" y1="20" x2="6" y2="34" stroke="#E8650A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="26" y1="20" x2="30" y2="34" stroke="#E8650A" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="6" y1="26" x2="30" y2="26" stroke="#E8650A" strokeWidth="1.5" opacity="0.5" />
              </svg>
            </div>
            <div className="fx-service-title">Technical Infrastructure</div>
            <div className="fx-service-desc">
              Rigging, mast construction, outdoor &amp; indoor cabinet design. Comprehensive system servicing and upgrades.
            </div>
            <div className="fx-service-arrow">→</div>
          </div>

          <div className="fx-service-card" onClick={() => onNavigate('services')}>
            <div className="fx-service-num">05</div>
            <div className="fx-service-icon">
              <svg viewBox="0 0 36 36" fill="none">
                <path d="M6 28 Q8 20 12 18 Q16 16 18 20 Q20 24 24 22 Q28 20 30 14" stroke="#E8650A" strokeWidth="2" strokeLinecap="round" fill="none" />
                <circle cx="18" cy="12" r="4" stroke="#E8650A" strokeWidth="1.5" />
                <path d="M18 8 Q18 4 22 4" stroke="#E8650A" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="fx-service-title">Smart Farming Technologies</div>
            <div className="fx-service-desc">
              Innovative agricultural tech and sustainable energy solutions supporting modern farming operations across Zimbabwe.
            </div>
            <div className="fx-service-arrow">→</div>
          </div>
        </div>
      </section>

      <section className="fx-project-section">
        <div className="fx-section-label">Featured Project</div>
        <h2 className="fx-section-title" style={{ marginTop: 16 }}>
          Key <em>Achievements</em>
        </h2>
        <div className="fx-project-layout">
          <div style={{ position: 'relative' }}>
            <div className="fx-project-img">
              <div className="fx-project-map-bg">
                <div className="fx-map-dot dot1" />
                <div className="fx-map-dot dot2" />
                <span style={{ position: 'relative', zIndex: 1, opacity: 0.3 }}>
                  Zimbabwe · Conservation Zones
                </span>
              </div>
            </div>
            <div className="fx-project-badge">
              <div className="fx-project-badge-num">2024</div>
              <div className="fx-project-badge-label">Completed</div>
            </div>
          </div>
          <div>
            <div className="fx-project-tag">Zimparks × Aware Germany</div>
            <h3 className="fx-project-title">Kyle Recreational Park &amp; Chipangayi Safari Area</h3>
            <p className="fx-project-desc">
              Delivered advanced radio communication and solar power solutions across Zimbabwe&apos;s premier conservation areas, supporting anti-poaching operations and wildlife management.
            </p>
            <div className="fx-project-results">
              <div>
                <div className="fx-result-num">100%</div>
                <div className="fx-result-label">Solar Powered</div>
              </div>
              <div>
                <div className="fx-result-num">DMR</div>
                <div className="fx-result-label">Digital Radio</div>
              </div>
              <div>
                <div className="fx-result-num">24/7</div>
                <div className="fx-result-label">Coverage</div>
              </div>
            </div>
            <div className="fx-partner-tag">
              Partners: <strong>Aware Germany</strong> ·{' '}
              <strong>Zimbabwe Parks &amp; Wildlife Authority</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="fx-why-section">
        <div className="fx-section-header">
          <div className="fx-section-label">Why Foxtrot</div>
          <h2 className="fx-section-title">
            Built on <em>Trust</em>
          </h2>
        </div>
        <div className="fx-why-layout">
          <div className="fx-why-list">
            <div className="fx-why-item">
              <div className="fx-why-num">01</div>
              <div>
                <div className="fx-why-title">Deep Technical Expertise</div>
                <div className="fx-why-desc">
                  10 years of hands-on experience in national parks, remote installations, and challenging environments across Zimbabwe.
                </div>
              </div>
            </div>
            <div className="fx-why-item">
              <div className="fx-why-num">02</div>
              <div>
                <div className="fx-why-title">Proven Quality Commitment</div>
                <div className="fx-why-desc">
                  Every project delivered with rigorous standards — from initial survey through installation to long-term maintenance.
                </div>
              </div>
            </div>
            <div className="fx-why-item">
              <div className="fx-why-num">03</div>
              <div>
                <div className="fx-why-title">Integrated Solutions</div>
                <div className="fx-why-desc">
                  Unique capability to combine communication, energy, and smart farming technologies into one seamless system.
                </div>
              </div>
            </div>
            <div className="fx-why-item">
              <div className="fx-why-num">04</div>
              <div>
                <div className="fx-why-title">Community-Centred Approach</div>
                <div className="fx-why-desc">
                  Every solution is designed to empower the communities it serves — from urban Harare to remote conservation zones.
                </div>
              </div>
            </div>
          </div>
          <div className="fx-why-visual">
            <div className="fx-why-visual-title">Performance Metrics</div>
            <div className="fx-metric-row">
              <div>
                <div className="fx-metric-label">Client Satisfaction</div>
                <div className="fx-metric-bar-wrap" style={{ width: 200, marginTop: 6 }}>
                  <div className="fx-metric-bar" style={{ width: '98%' }} />
                </div>
              </div>
              <div className="fx-metric-val">98%</div>
            </div>
            <div className="fx-metric-row">
              <div>
                <div className="fx-metric-label">On-Time Delivery</div>
                <div className="fx-metric-bar-wrap" style={{ width: 200, marginTop: 6 }}>
                  <div className="fx-metric-bar" style={{ width: '94%' }} />
                </div>
              </div>
              <div className="fx-metric-val">94%</div>
            </div>
            <div className="fx-metric-row">
              <div>
                <div className="fx-metric-label">System Uptime</div>
                <div className="fx-metric-bar-wrap" style={{ width: 200, marginTop: 6 }}>
                  <div className="fx-metric-bar" style={{ width: '99%' }} />
                </div>
              </div>
              <div className="fx-metric-val">99%</div>
            </div>
            <div className="fx-metric-row" style={{ borderBottom: 'none' }}>
              <div>
                <div className="fx-metric-label">National Park Coverage</div>
                <div className="fx-metric-bar-wrap" style={{ width: 200, marginTop: 6 }}>
                  <div className="fx-metric-bar" style={{ width: '75%' }} />
                </div>
              </div>
              <div className="fx-metric-val">75%</div>
            </div>
          </div>
        </div>
      </section>

      <section className="fx-contact-section" id="section-contact">
        <div className="fx-section-label">Get In Touch</div>
        <h2 className="fx-section-title" style={{ marginTop: 16, marginBottom: 0 }}>
          Request a <em>Quote</em>
        </h2>
        <div className="fx-contact-layout">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
            <p style={{ fontSize: 16, color: '#999', lineHeight: 1.8 }}>
              Ready to connect your operations? Our team delivers customized solutions tailored to your environment and budget.
            </p>
            <div>
              <div className="fx-contact-item-label">Location</div>
              <div className="fx-contact-item-val">Harare, Zimbabwe</div>
            </div>
            <div>
              <div className="fx-contact-item-label">Phone</div>
              <div className="fx-contact-item-val">+263 774 116 149</div>
            </div>
            <div>
              <div className="fx-contact-item-label">Email</div>
              <div className="fx-contact-item-val">foxtrot_systems@aol.com</div>
            </div>
            <div>
              <div className="fx-contact-item-label">Business Hours</div>
              <div className="fx-contact-item-val" style={{ fontSize: 14, color: '#999' }}>
                Mon – Fri: 8:00 AM – 5:00 PM
                <br />
                Sat: 8:00 AM – 1:00 PM
              </div>
            </div>
          </div>
          <div className="fx-contact-form">
            <div className="fx-form-row">
              <input className="fx-input" placeholder="Full Name" type="text" />
              <input className="fx-input" placeholder="Organisation" type="text" />
            </div>
            <div className="fx-form-row">
              <input className="fx-input" placeholder="Phone / WhatsApp" type="tel" />
              <input className="fx-input" placeholder="Email Address" type="email" />
            </div>
            <select className="fx-select" defaultValue="">
              <option value="" disabled>
                Select Service Required
              </option>
              <option>Two-Way Radio Systems</option>
              <option>Solar &amp; Renewable Energy</option>
              <option>Energy Backup Solutions</option>
              <option>Technical Infrastructure</option>
              <option>Smart Farming Technologies</option>
              <option>Multiple Services</option>
            </select>
            <textarea className="fx-textarea" placeholder="Describe your project or requirements..." />
            <button
              className="fx-btn-primary"
              style={{ width: '100%', padding: 16, fontSize: 13 }}
              onClick={() => onShowToast('Quote request sent! We will contact you within 24 hours.')}
            >
              Submit Quote Request →
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

