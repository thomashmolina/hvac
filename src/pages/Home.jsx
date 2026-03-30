import './Home.css'

const workImages = [
  { src: '/images/commercial/rooftop-unit-1.webp', alt: 'Commercial rooftop HVAC unit installation' },
  { src: '/images/commercial/rooftop-unit-2.webp', alt: 'Commercial rooftop HVAC unit' },
  { src: '/images/commercial/control-board.webp', alt: 'HVAC control board and wiring' },
  { src: '/images/commercial/exhaust-fan.webp', alt: 'Commercial exhaust fan installation' },
  { src: '/images/residential/ac-service.webp', alt: 'Residential AC refrigerant service' },
  { src: '/images/residential/ac-unit.webp', alt: 'Residential AC unit service' },
  { src: '/images/residential/water-heater.webp', alt: 'Water heater installation' },
]

export default function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <img
          src="/images/hero/company-vehicle.webp"
          alt="Cowboy Heating & Air service vehicle"
          className="hero-img"
        />
        <div className="hero-overlay">
          <h1>Cowboy Heating & Air</h1>
          <p className="tagline">Commercial Kitchen Equipment &middot; Heating &middot; Air Conditioning</p>
          <a href="tel:801-940-0420" className="cta">Call 801-940-0420</a>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <h3>Commercial HVAC</h3>
            <p>Rooftop unit installation, maintenance, and repair for commercial buildings and restaurants.</p>
          </div>
          <div className="service-card">
            <h3>Residential AC</h3>
            <p>Air conditioning service, refrigerant charging, and system diagnostics for your home.</p>
          </div>
          <div className="service-card">
            <h3>Kitchen Equipment</h3>
            <p>Commercial kitchen exhaust fans, ventilation systems, and equipment installation.</p>
          </div>
          <div className="service-card">
            <h3>Water Heaters</h3>
            <p>Water heater installation, repair, and replacement for residential and commercial properties.</p>
          </div>
        </div>
      </section>

      <section className="work">
        <h2>Our Work</h2>
        <div className="work-grid">
          {workImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="work-img"
            />
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <p>Cowboy Heating & Air &middot; Utah Valley</p>
        <a href="tel:801-940-0420">801-940-0420</a>
      </footer>
    </div>
  )
}
