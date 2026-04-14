type Props = {
  active: boolean
  onScrollToSection: (sectionId: string) => void
}

export function ServicesPage({ active, onScrollToSection }: Props) {
  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-services">
      <div style={{ padding: '100px 60px 60px', background: 'var(--black)' }}>
        <div className="fx-section-label">What We Deliver</div>
        <h1 className="fx-section-title" style={{ marginTop: 16 }}>
          Our <em>Services</em>
        </h1>
        <p
          style={{
            fontSize: 16,
            color: '#999',
            maxWidth: 600,
            marginTop: 24,
            lineHeight: 1.8,
          }}
        >
          From professional radio communications to solar energy and smart agriculture — end-to-end
          integrated solutions across Zimbabwe.
        </p>
      </div>
      <div className="fx-services-page">
        <div className="fx-service-detail">
          <div>
            <div className="fx-sd-tag">Service 01</div>
            <h2 className="fx-sd-title">Two-Way Radio Systems</h2>
            <p className="fx-sd-desc">
              Professional radio communications infrastructure for industries that can&apos;t afford
              to lose contact.
            </p>
            <ul className="fx-feature-list">
              <li>VHF, HF and POC radio supply &amp; installation</li>
              <li>Digital migration from analogue to DMR/TETRA</li>
              <li>Repeater station installation and upgrades</li>
              <li>System integration and programming</li>
              <li>Ongoing maintenance contracts</li>
            </ul>
          </div>
          <div className="fx-sd-visual">
            <div className="fx-sd-layout">
              <div className="fx-sd-left">
                <div className="fx-sd-bg-text">
                  RADIO
                  <br />
                  COMMS
                </div>
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Coverage</div>
                <div className="fx-sd-card-value">24/7</div>
              </div>
              <div className="fx-sd-bottom-right">
                <div className="fx-sd-mini-label">Field Ready</div>
              </div>
              <div className="fx-sd-dots" />
            </div>
          </div>
        </div>
        <div className="fx-service-detail">
          <div>
            <div className="fx-sd-tag">Service 02</div>
            <h2 className="fx-sd-title">Solar &amp; Renewable Energy</h2>
            <p className="fx-sd-desc">
              Harness Zimbabwe&apos;s abundant sunshine with professionally designed solar systems for
              any scale.
            </p>
            <ul className="fx-feature-list">
              <li>On-grid and off-grid solar design</li>
              <li>Hybrid energy system installation</li>
              <li>Conservation project solar solutions</li>
              <li>Commercial solar for businesses</li>
              <li>Domestic rooftop solar systems</li>
            </ul>
          </div>
          <div className="fx-sd-visual">
            <div className="fx-sd-layout">
              <div className="fx-sd-left">
                <div className="fx-sd-bg-text">
                  SOLAR
                  <br />
                  ENERGY
                </div>
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Systems</div>
                <div className="fx-sd-card-value">Hybrid</div>
              </div>
              <div className="fx-sd-bottom-right">
                <div className="fx-sd-mini-label">High Efficiency</div>
              </div>
              <div className="fx-sd-dots" />
            </div>
          </div>
        </div>
        <div className="fx-service-detail">
          <div>
            <div className="fx-sd-tag">Service 03</div>
            <h2 className="fx-sd-title">Energy Backup Solutions</h2>
            <p className="fx-sd-desc">
              Protect your operations from power interruptions with intelligent backup systems for
              critical infrastructure.
            </p>
            <ul className="fx-feature-list">
              <li>UPS and battery backup systems</li>
              <li>Generator integration solutions</li>
              <li>Critical infrastructure protection</li>
              <li>24/7 power monitoring</li>
            </ul>
          </div>
          <div className="fx-sd-visual">
            <div className="fx-sd-layout">
              <div className="fx-sd-left">
                <div className="fx-sd-bg-text">
                  POWER
                  <br />
                  BACKUP
                </div>
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Uptime</div>
                <div className="fx-sd-card-value">99%</div>
              </div>
              <div className="fx-sd-bottom-right">
                <div className="fx-sd-mini-label">Critical Load</div>
              </div>
              <div className="fx-sd-dots" />
            </div>
          </div>
        </div>
        <div className="fx-service-detail">
          <div>
            <div className="fx-sd-tag">Service 04</div>
            <h2 className="fx-sd-title">Technical Maintenance &amp; Infrastructure</h2>
            <p className="fx-sd-desc">
              Physical infrastructure and ongoing technical support keeping your systems at peak
              capacity.
            </p>
            <ul className="fx-feature-list">
              <li>Mast construction and rigging</li>
              <li>Outdoor and indoor cabinet design</li>
              <li>System servicing and upgrades</li>
              <li>Preventative maintenance contracts</li>
              <li>Emergency fault response</li>
            </ul>
          </div>
          <div className="fx-sd-visual">
            <div className="fx-sd-layout">
              <div className="fx-sd-left">
                <div className="fx-sd-bg-text">
                  INFRA
                  <br />
                  STRUCTURE
                </div>
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Support</div>
                <div className="fx-sd-card-value">On Site</div>
              </div>
              <div className="fx-sd-bottom-right">
                <div className="fx-sd-mini-label">Engineered Build</div>
              </div>
              <div className="fx-sd-dots" />
            </div>
          </div>
        </div>
        <div className="fx-service-detail">
          <div>
            <div className="fx-sd-tag">Service 05</div>
            <h2 className="fx-sd-title">Smart Farming Technologies</h2>
            <p className="fx-sd-desc">
              Innovative agricultural tech and sustainable energy solutions supporting modern farming
              operations across Zimbabwe.
            </p>
            <ul className="fx-feature-list">
              <li>Precision agriculture technology</li>
              <li>Solar-powered irrigation systems</li>
              <li>Remote monitoring systems</li>
              <li>Agri-communication networks</li>
            </ul>
          </div>
          <div className="fx-sd-visual">
            <div className="fx-sd-layout">
              <div className="fx-sd-left">
                <div className="fx-sd-bg-text">
                  SMART
                  <br />
                  FARMING
                </div>
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Monitoring</div>
                <div className="fx-sd-card-value">Remote</div>
              </div>
              <div className="fx-sd-bottom-right">
                <div className="fx-sd-mini-label">Agri Tech</div>
              </div>
              <div className="fx-sd-dots" />
            </div>
          </div>
        </div>
      </div>
      <div style={{ padding: '0 60px 80px', textAlign: 'center' }}>
        <button
          className="fx-btn-primary"
          style={{ padding: '16px 48px', fontSize: 13 }}
          onClick={() => onScrollToSection('section-contact')}
        >
          Request a Quote for Any Service →
        </button>
      </div>
    </div>
  )
}

