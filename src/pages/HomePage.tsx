import { useEffect, useMemo, useState } from 'react'
import heroSlideOne from '../assets/1.png'
import heroSlideTwo from '../assets/2.png'
import heroSlideThree from '../assets/3.png'
import serviceImageOne from '../assets/services/1.jpeg'
import serviceImageTwo from '../assets/services/2.jpeg'
import serviceImageThree from '../assets/services/3.jpeg'
import serviceImageSix from '../assets/services/6.jpg'
import serviceImageSeven from '../assets/services/7.jpeg'
import { SERVICE_SECTION_IDS } from '../constants/serviceSectionIds'
import type { Page } from '../types/page'

type Props = {
  active: boolean
  onNavigate: (page: Page) => void
  onNavigateToServiceSection: (sectionId: string) => void
  onShowToast: (message: string) => void
}

export function HomePage({ active, onNavigate, onNavigateToServiceSection, onShowToast }: Props) {
  const heroSlides = useMemo(() => [heroSlideOne, heroSlideTwo, heroSlideThree], [])
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)
  const [loadedHeroSlides, setLoadedHeroSlides] = useState<boolean[]>(() =>
    Array.from({ length: heroSlides.length }, () => false),
  )
  const [showHeroText, setShowHeroText] = useState(false)

  const heroSlideContent = useMemo(
    () => [
      {
        titleLines: ['Hytera', 'Radio Services'],
        description:
          'Hytera two-way radio solutions — supply, installation, programming, maintenance, and dependable coverage for mission-critical teams.',
      },
      {
        titleLines: ['Solar', 'Installations'],
        description:
          'On-grid and off-grid solar installations tailored to homes, businesses, and remote sites — designed for reliability, performance, and long-term savings.',
      },
      {
        titleLines: ['Masts', ' Infrastructure'],
        description:
          'Mast construction, rigging, and technical infrastructure — engineered builds, safe deployments, and end-to-end servicing for resilient networks.',
      },
    ],
    [],
  )

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
  const serviceCards = useMemo(
    () => [
      {
        sectionId: SERVICE_SECTION_IDS.twoWayRadio,
        
        title: 'Two-Way Radio Systems',
        description:
          'VHF, HF and POC radio supply, installation, maintenance, and reliable repeater network deployment.',
        image: serviceImageSeven,
      },
      {
        sectionId: SERVICE_SECTION_IDS.solarRenewable,
        title: 'Solar & Renewable Energy',
        description:
          'On-grid and off-grid solar design and installation tailored to domestic, commercial, and conservation needs.',
        image: serviceImageTwo,
      },
      {
        sectionId: SERVICE_SECTION_IDS.energyBackup,
        title: 'Energy Backup Solutions',
        description:
          'Critical backup systems that keep operations running during outages and unstable grid conditions.',
        image: serviceImageOne,
      },
      {
        sectionId: SERVICE_SECTION_IDS.technicalInfrastructure,
        title: 'Technical Infrastructure',
        description:
          'Rigging, mast construction, and cabinet infrastructure design with end-to-end system servicing.',
        image: serviceImageSix,
      },
      {
        sectionId: SERVICE_SECTION_IDS.smartFarming,
        title: 'Smart Farming Technologies',
        description:
          'Modern agri-tech integrations that improve productivity with sustainable energy and smart field monitoring.',
        image: serviceImageThree,
      },
    ],
    [],
  )

  useEffect(() => {
    const slideIntervalId = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)
    }, 7000)

    return () => window.clearInterval(slideIntervalId)
  }, [heroSlides.length])

  useEffect(() => {
    setShowHeroText(false)

    if (loadedHeroSlides[activeHeroSlide]) {
      const textRevealTimeoutId = window.setTimeout(() => {
        setShowHeroText(true)
      }, 500)

      return () => window.clearTimeout(textRevealTimeoutId)
    }
  }, [activeHeroSlide, loadedHeroSlides])

  const markHeroSlideAsLoaded = (slideIndex: number) => {
    setLoadedHeroSlides((prev) => {
      if (prev[slideIndex]) {
        return prev
      }

      const next = [...prev]
      next[slideIndex] = true
      return next
    })

  }

  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-home">
      <section className="fx-hero">
        <div className="fx-hero-media" aria-hidden="true">
          {heroSlides.map((slideSrc, idx) => (
            <img
              key={slideSrc}
              className={`fx-hero-slide ${idx === activeHeroSlide ? 'active' : ''}`}
              src={slideSrc}
              alt=""
              onLoad={() => markHeroSlideAsLoaded(idx)}
              onError={() => markHeroSlideAsLoaded(idx)}
            />
          ))}
        </div>
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
        {showHeroText && (
          <div
            className="fx-hero-content fx-hero-content-animate"
            key={`hero-text-${heroSlides[activeHeroSlide]}`}
          >
            <div className="fx-hero-eyebrow">Harare, Zimbabwe</div>
            <h1 className="fx-hero-title">
              {heroSlideContent[activeHeroSlide].titleLines.map((line, idx) => (
                <span
                  key={`${activeHeroSlide}-title-${line}`}
                  style={{
                    display: 'block',
                    color: idx === 0 ? 'var(--text)' : 'var(--red)',
                  }}
                >
                  {line}
                </span>
              ))}
            </h1>
            <p className="fx-hero-sub">
              {heroSlideContent[activeHeroSlide].description}
            </p>
            <div className="fx-hero-actions">
              <button className="fx-btn-outline" onClick={() => onNavigate('about')}>
                Our Story
              </button>
            </div>
          </div>
        )}
        
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
          <div className="fx-services-intro">
            <p className="fx-services-intro-text">
              Foxtrot Systems delivers end‑to‑end solutions across communications, renewable energy, and smart
              farming—built for performance in remote, high‑demand environments. From design and installation
              to maintenance and upgrades, we ensure dependable systems that keep your operations connected,
              powered, and future‑ready.
            </p>
          </div>
          {serviceCards.map((card) => (
            <article
              className="fx-service-product-card"
              key={card.sectionId}
              onClick={() => onNavigateToServiceSection(card.sectionId)}
            >
              <div className="fx-service-thumb">
                <img className="fx-service-thumb-image" src={card.image} alt={card.title} />
                <div className="fx-service-play-btn" aria-hidden="true">
                  ▶
                </div>
                <div className="fx-service-thumb-meta">
                  <div className="fx-service-brand-row">
                  </div>
                </div>
              </div>
              <div className="fx-service-float-title">
                <div className="fx-service-float-title-text">{card.title}</div>
                <p className="fx-service-float-desc">{card.description}</p>
              </div>
            </article>
          ))}
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
              <img
                className="fx-project-photo"
                src="/key-achievement-tower.png"
                alt="Technician working on elevated communications tower installation"
              />
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

