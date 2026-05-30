import { SERVICE_SECTION_IDS } from '../constants/serviceSectionIds'
import { useScrollReveal } from '../hooks/useScrollReveal'
import imgRadio from '../assets/services/7.jpeg'
import imgSolar from '../assets/services/2.jpeg'
import imgBackup from '../assets/services/1.jpeg'
import imgInfra from '../assets/services/6.jpg'
import imgFarming from '../assets/services/3.jpeg'
import imgRadio2 from '../../foxtrot/services2/1.jpeg'
import imgSolar2 from '../../foxtrot/services2/2.jpg'
import imgBackup2 from '../../foxtrot/services2/3.jpeg'
import imgInfra2 from '../../foxtrot/services2/4.jpeg'
import imgFarming2 from '../../foxtrot/services2/5.jpeg'

type Props = {
  active: boolean
  onScrollToSection: (sectionId: string) => void
}

export function ServicesPage({ active, onScrollToSection }: Props) {
  useScrollReveal(active)

  return (
    <div className={`fx-page ${active ? 'active' : ''}`} id="page-services">
      <div style={{ padding: '100px 60px 60px', background: 'var(--black)' }}>
        <div className="fx-section-label fx-reveal">What We Deliver</div>
        <h1 className="fx-section-title fx-reveal" style={{ marginTop: 16, '--fx-delay': '0.1s' } as React.CSSProperties}>
          Our <em>Services</em>
        </h1>
        <p
          className="fx-reveal"
          style={{
            fontSize: 16,
            color: '#999',
            maxWidth: 600,
            marginTop: 24,
            lineHeight: 1.8,
            '--fx-delay': '0.2s',
          } as React.CSSProperties}
        >
          From professional radio communications to solar energy and smart agriculture — end-to-end
          integrated solutions across Zimbabwe.
        </p>
      </div>
      <div className="fx-services-page">
        <div className="fx-service-detail fx-reveal" id={SERVICE_SECTION_IDS.twoWayRadio}>
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
              <div className="fx-sd-left" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgRadio} alt="Two-Way Radio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Coverage</div>
                <div className="fx-sd-card-value">24/7</div>
              </div>
              <div className="fx-sd-bottom-right" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgRadio2} alt="Two-Way Radio" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="fx-service-detail fx-reveal" id={SERVICE_SECTION_IDS.solarRenewable}>
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
              <div className="fx-sd-left" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgSolar} alt="Solar Energy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Systems</div>
                <div className="fx-sd-card-value">Hybrid</div>
              </div>
              <div className="fx-sd-bottom-right" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgSolar2} alt="Solar Installation" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="fx-service-detail fx-reveal" id={SERVICE_SECTION_IDS.energyBackup}>
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
              <div className="fx-sd-left" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgBackup} alt="Energy Backup" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Uptime</div>
                <div className="fx-sd-card-value">99%</div>
              </div>
              <div className="fx-sd-bottom-right" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgBackup2} alt="Energy Backup" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="fx-service-detail fx-reveal" id={SERVICE_SECTION_IDS.technicalInfrastructure}>
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
              <div className="fx-sd-left" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgInfra} alt="Infrastructure" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Support</div>
                <div className="fx-sd-card-value">On Site</div>
              </div>
              <div className="fx-sd-bottom-right" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgInfra2} alt="Infrastructure Work" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            </div>
          </div>
        </div>
        <div className="fx-service-detail fx-reveal" id={SERVICE_SECTION_IDS.smartFarming}>
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
              <div className="fx-sd-left" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgFarming} alt="Smart Farming" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <div className="fx-sd-top-right">
                <div className="fx-sd-card-label">Monitoring</div>
                <div className="fx-sd-card-value">Remote</div>
              </div>
              <div className="fx-sd-bottom-right" style={{ padding: 0, overflow: 'hidden' }}>
                <img src={imgFarming2} alt="Smart Farming" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
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

