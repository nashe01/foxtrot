import { useState, useEffect, useCallback } from 'react'
import logo from '../assets/foxtrot-logo.png'
import { useScrollReveal } from '../hooks/useScrollReveal'
import sgPhoto from '../assets/WhatsApp Image 2026-05-25 at 08.42.54 (1).jpeg'
import g1 from '../assets/gallery/1.jpeg'
import g2 from '../assets/gallery/2.jpg'
import g3 from '../assets/gallery/3.jpeg'
import g4 from '../assets/gallery/4.jpeg'
import g5 from '../assets/gallery/5.jpeg'
import g6 from '../assets/gallery/6.jpeg'
import g7 from '../assets/gallery/7.jpeg'
import g8 from '../assets/gallery/8.jpeg'
import g9 from '../assets/gallery/9.jpeg'

type Props = {
  active: boolean
}

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9]

export function AboutPage({ active }: Props) {
  useScrollReveal(active)
  const [lightbox, setLightbox] = useState<number | null>(null)

  const close = useCallback(() => setLightbox(null), [])
  const prev = useCallback(() => setLightbox(i => i !== null ? (i - 1 + images.length) % images.length : null), [])
  const next = useCallback(() => setLightbox(i => i !== null ? (i + 1) % images.length : null), [])

  useEffect(() => {
    if (lightbox === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, close, prev, next])

  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-about">
      <div className="fx-about-hero">
        <div className="fx-about-story-layout">
          <div className="fx-about-story-copy fx-reveal">
            <div className="fx-section-label">Our Story</div>
            <h1 className="fx-section-title" style={{ margin: '16px 0 32px' }}>
              About <em>Foxtrot</em>
            </h1>
            <p className="fx-about-intro">
              Foxtrot Electrocommunication Systems is Zimbabwe&apos;s leading integrator of{' '}
              <strong>communication, energy, and smart farming technologies</strong>. Built on a decade
              of hands-on experience, we connect communities, power conservation, and drive sustainable
              growth across Africa.
            </p>
          </div>
          <div className="fx-about-story-logoWrap fx-reveal" style={{ '--fx-delay': '0.15s' } as React.CSSProperties}>
            <img className="fx-about-story-logo" src={logo} alt="Foxtrot Systems" />
          </div>
        </div>
      </div>

      <div className="fx-about-vision-band">
        <div className="fx-about-vision-mission-grid">
          <div className="fx-reveal">
            <div className="fx-section-label">Vision</div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 36,
                margin: '16px 0 20px',
                lineHeight: 1.1,
              }}
            >
              To become the most trusted integrator in Zimbabwe and beyond
            </h3>
            <p style={{ fontSize: 15, color: '#999', lineHeight: 1.8 }}>
              Empowering sustainable growth and operational excellence in every community we serve.
            </p>
          </div>
          <div className="fx-reveal" style={{ '--fx-delay': '0.15s' } as React.CSSProperties}>
            <div className="fx-section-label">Mission</div>
            <h3
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: 36,
                margin: '16px 0 20px',
                lineHeight: 1.1,
              }}
            >
              Connecting Africa through reliable technology
            </h3>
            <p style={{ fontSize: 15, color: '#999', lineHeight: 1.8 }}>
              We deliver integrated solutions combining radio communications, renewable energy, and
              agricultural technology — engineered for Africa.
            </p>
          </div>
        </div>
      </div>

      <section className="fx-values-section">
        <div className="fx-section-label fx-reveal">Our Values</div>
        <h2 className="fx-section-title fx-reveal" style={{ marginTop: 16, '--fx-delay': '0.1s' } as React.CSSProperties}>
          What <em>Drives</em> Us
        </h2>
        <div className="fx-values-grid">
          <div className="fx-value-card fx-reveal">
            <div className="fx-value-title">Technical Excellence</div>
            <div className="fx-value-desc">
              Every installation meets the highest professional standards — especially in remote and
              critical environments.
            </div>
          </div>
          <div className="fx-value-card fx-reveal" style={{ '--fx-delay': '0.1s' } as React.CSSProperties}>
            <div className="fx-value-title">Community Empowerment</div>
            <div className="fx-value-desc">
              Technology should uplift communities. We design solutions that create lasting value for
              all we serve.
            </div>
          </div>
          <div className="fx-value-card fx-reveal" style={{ '--fx-delay': '0.2s' } as React.CSSProperties}>
            <div className="fx-value-title">Sustainability</div>
            <div className="fx-value-desc">
              From solar power to smart agriculture, sustainability is at the core of every solution
              we engineer.
            </div>
          </div>
          <div className="fx-value-card fx-reveal" style={{ '--fx-delay': '0.3s' } as React.CSSProperties}>
            <div className="fx-value-title">Reliability</div>
            <div className="fx-value-desc">
              In conservation zones and remote sites, failure is not an option. Our systems are built
              for resilience.
            </div>
          </div>
          <div className="fx-value-card fx-reveal" style={{ '--fx-delay': '0.4s' } as React.CSSProperties}>
            <div className="fx-value-title">Innovation</div>
            <div className="fx-value-desc">
              We continuously adopt emerging technologies to keep our clients at the forefront of
              their industries.
            </div>
          </div>
          <div className="fx-value-card fx-reveal" style={{ '--fx-delay': '0.5s' } as React.CSSProperties}>
            <div className="fx-value-title">Partnership</div>
            <div className="fx-value-desc">
              We build long-term relationships with clients, suppliers, and international partners.
            </div>
          </div>
        </div>
      </section>

      <section className="fx-gallery-section">
        <div className="fx-section-label fx-reveal">In The Field</div>
        <h2 className="fx-section-title fx-reveal" style={{ marginTop: 16, '--fx-delay': '0.1s' } as React.CSSProperties}>
          Our <em>Work</em>
        </h2>
        <div className="fx-gallery-grid">
          {images.map((src, i) => (
            <div key={i} className="fx-gallery-item" onClick={() => setLightbox(i)}>
              <img src={src} alt={`Gallery image ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {lightbox !== null && (
        <div className="fx-lightbox" onClick={close}>
          <button className="fx-lightbox-close" onClick={close}>&#x2715;</button>
          <button className="fx-lightbox-nav fx-lightbox-prev" onClick={e => { e.stopPropagation(); prev() }}>&#8249;</button>
          <img
            className="fx-lightbox-img"
            src={images[lightbox]}
            alt={`Gallery image ${lightbox + 1}`}
            onClick={e => e.stopPropagation()}
          />
          <button className="fx-lightbox-nav fx-lightbox-next" onClick={e => { e.stopPropagation(); next() }}>&#8250;</button>
        </div>
      )}

      <section className="fx-team-section">
        <div className="fx-section-label fx-reveal">The Team</div>
        <h2 className="fx-section-title fx-reveal" style={{ marginTop: 16, '--fx-delay': '0.1s' } as React.CSSProperties}>
          Meet the <em>Experts</em>
        </h2>
        <div className="fx-team-card fx-reveal" style={{ marginTop: 40, maxWidth: 400, '--fx-delay': '0.2s' } as React.CSSProperties}>
          <div className="fx-team-avatar"><img src={sgPhoto} alt="Simbarashe Guri" /></div>
          <div className="fx-team-role">Founder &amp; Managing Director</div>
          <div className="fx-team-name">Simbarashe Guri</div>
          <div className="fx-team-desc">
            Visionary leader and founder of Foxtrot Electrocommunication Systems. Drives the
            company&apos;s strategic direction, client relationships, and expansion across Africa.
          </div>
        </div>
      </section>
    </div>
  )
}

