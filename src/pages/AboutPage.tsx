import logo from '../assets/foxtrot-logo.png'

type Props = {
  active: boolean
}

export function AboutPage({ active }: Props) {
  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-about">
      <div className="fx-about-hero">
        <div className="fx-about-story-layout">
          <div className="fx-about-story-copy">
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
          <div className="fx-about-story-logoWrap">
            <img className="fx-about-story-logo" src={logo} alt="Foxtrot Systems" />
          </div>
        </div>
      </div>

      <div className="fx-about-vision-band">
        <div className="fx-about-vision-mission-grid">
          <div>
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
          <div>
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
        <div className="fx-section-label">Our Values</div>
        <h2 className="fx-section-title" style={{ marginTop: 16 }}>
          What <em>Drives</em> Us
        </h2>
        <div className="fx-values-grid">
          <div className="fx-value-card">
            <div className="fx-value-title">Technical Excellence</div>
            <div className="fx-value-desc">
              Every installation meets the highest professional standards — especially in remote and
              critical environments.
            </div>
          </div>
          <div className="fx-value-card">
            <div className="fx-value-title">Community Empowerment</div>
            <div className="fx-value-desc">
              Technology should uplift communities. We design solutions that create lasting value for
              all we serve.
            </div>
          </div>
          <div className="fx-value-card">
            <div className="fx-value-title">Sustainability</div>
            <div className="fx-value-desc">
              From solar power to smart agriculture, sustainability is at the core of every solution
              we engineer.
            </div>
          </div>
          <div className="fx-value-card">
            <div className="fx-value-title">Reliability</div>
            <div className="fx-value-desc">
              In conservation zones and remote sites, failure is not an option. Our systems are built
              for resilience.
            </div>
          </div>
          <div className="fx-value-card">
            <div className="fx-value-title">Innovation</div>
            <div className="fx-value-desc">
              We continuously adopt emerging technologies to keep our clients at the forefront of
              their industries.
            </div>
          </div>
          <div className="fx-value-card">
            <div className="fx-value-title">Partnership</div>
            <div className="fx-value-desc">
              We build long-term relationships with clients, suppliers, and international partners.
            </div>
          </div>
        </div>
      </section>

      <section className="fx-team-section">
        <div className="fx-section-label">The Team</div>
        <h2 className="fx-section-title" style={{ marginTop: 16 }}>
          Meet the <em>Experts</em>
        </h2>
        <div className="fx-team-card" style={{ marginTop: 40, maxWidth: 400 }}>
          <div className="fx-team-avatar">SG</div>
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

