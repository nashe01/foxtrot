import { useEffect, useMemo, useState } from 'react'
import emailjs from '@emailjs/browser'
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
  const [quoteName, setQuoteName] = useState('')
  const [quoteOrg, setQuoteOrg] = useState('')
  const [quotePhone, setQuotePhone] = useState('')
  const [quoteEmail, setQuoteEmail] = useState('')
  const [quoteService, setQuoteService] = useState('')
  const [quoteMessage, setQuoteMessage] = useState('')
  const [quoteSending, setQuoteSending] = useState(false)

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

  const goToSlide = (idx: number) => setActiveHeroSlide(idx)
  const prevSlide = () => setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  const nextSlide = () => setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length)

  useEffect(() => {
    if (!active) return

    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const heroSection = document.getElementById('fx-hero-section')
      const mainContent = document.getElementById('fx-main-content')

      if (heroSection && mainContent) {
        const heroHeight = heroSection.offsetHeight
        const maxScroll = heroHeight * 0.6

        const curtainOffset = Math.min(scrolled * 0.8, maxScroll)
        mainContent.style.transform = `translateY(-${curtainOffset}px)`
        heroSection.style.transform = `translateY(-${scrolled * 0.2}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [active])

  useEffect(() => {
    if (!active) return

    const cards = document.querySelectorAll('.fx-service-product-card')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fx-card-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.25 },
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [active])



  const submitQuoteRequest = async () => {
    if (quoteSending) return

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

    if (!serviceId || !templateId || !publicKey) {
      onShowToast('Email service is not configured yet.')
      return
    }

    if (!quoteName.trim() || !quotePhone.trim() || !quoteMessage.trim()) {
      onShowToast('Please fill in your name, phone, and requirements.')
      return
    }

    setQuoteSending(true)
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          to_email: 'technicalsales@foxtrot-sytems.com',
          from_name: quoteName.trim(),
          reply_to: quoteEmail.trim() || undefined,
          organisation: quoteOrg.trim() || '-',
          phone: quotePhone.trim(),
          service_required: quoteService || '-',
          message: quoteMessage.trim(),
          source: 'Foxtrot website quote form',
        },
        { publicKey },
      )

      onShowToast('Quote request sent! We will contact you within 24 hours.')
      setQuoteName('')
      setQuoteOrg('')
      setQuotePhone('')
      setQuoteEmail('')
      setQuoteService('')
      setQuoteMessage('')
    } catch {
      onShowToast('Failed to send. Please try again or call us.')
    } finally {
      setQuoteSending(false)
    }
  }

  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-home">
      <section className="fx-hero" id="fx-hero-section">
        <div className="fx-hero-media" aria-hidden="true">
          {heroSlides.map((slideSrc, idx) => (
            <img
              key={slideSrc}
              className={`fx-hero-slide ${idx === activeHeroSlide ? 'active' : ''}`}
              src={slideSrc}
              alt=""

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
        <div
            className="fx-hero-content"
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

            </div>
          </div>

        <div className="fx-hero-nav">
          <button className="fx-hero-nav-arrow" onClick={prevSlide} aria-label="Previous slide">&#8592;</button>
          <div className="fx-hero-dots">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                className={`fx-hero-dot ${idx === activeHeroSlide ? 'active' : ''}`}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <button className="fx-hero-nav-arrow" onClick={nextSlide} aria-label="Next slide">&#8594;</button>
        </div>
      </section>

      <div id="fx-main-content" style={{ position: 'relative', zIndex: 10, background: 'var(--page-bg)', marginTop: '-5vh' }}>
      <div className="fx-ticker" style={{ marginTop: 0 }}>
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
          {serviceCards.map((card, idx) => (
            <article
              className="fx-service-product-card"
              key={card.sectionId}
              onClick={() => onNavigateToServiceSection(card.sectionId)}
              style={{ animationDelay: `${idx * 0.3}s` }}
            >
              <div className="fx-service-thumb">
                <img className="fx-service-thumb-image" src={card.image} alt={card.title} />
              </div>
              <div className="fx-service-overlay" />
              <div className="fx-service-overlay-content">
                <h3 className="fx-service-overlay-title">{card.title}</h3>
                <p className="fx-service-overlay-desc">{card.description}</p>
                <span className="fx-service-overlay-action">View Service →</span>
              </div>
              <div className="fx-service-default-text">
                <h3 className="fx-service-default-title">{card.title}</h3>
                <p className="fx-service-default-desc">{card.description}</p>
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
              <div className="fx-contact-item-val">technicalsales@foxtrot-sytems.com</div>
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
              <input
                className="fx-input"
                placeholder="Full Name"
                type="text"
                value={quoteName}
                onChange={(e) => setQuoteName(e.target.value)}
              />
              <input
                className="fx-input"
                placeholder="Organisation"
                type="text"
                value={quoteOrg}
                onChange={(e) => setQuoteOrg(e.target.value)}
              />
            </div>
            <div className="fx-form-row">
              <input
                className="fx-input"
                placeholder="Phone / WhatsApp"
                type="tel"
                value={quotePhone}
                onChange={(e) => setQuotePhone(e.target.value)}
              />
              <input
                className="fx-input"
                placeholder="Email Address"
                type="email"
                value={quoteEmail}
                onChange={(e) => setQuoteEmail(e.target.value)}
              />
            </div>
            <select
              className="fx-select"
              value={quoteService}
              onChange={(e) => setQuoteService(e.target.value)}
            >
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
            <textarea
              className="fx-textarea"
              placeholder="Describe your project or requirements..."
              value={quoteMessage}
              onChange={(e) => setQuoteMessage(e.target.value)}
            />
            <button
              className="fx-btn-primary"
              style={{ width: '100%', padding: 16, fontSize: 13 }}
              onClick={submitQuoteRequest}
              disabled={quoteSending}
              aria-disabled={quoteSending}
            >
              {quoteSending ? 'Sending…' : 'Submit Quote Request →'}
            </button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

