import InquiryForm from '../components/InquiryForm'

const reviews = [
  {
    name: 'Juan R.',
    rating: 5,
    url: 'https://maps.app.goo.gl/StdJe8LEekwCRYiL6',
    text: 'Ricardo did an amazing job replacing our furnace. He showed up quickly when we were freezing due to a faulty furnace. He was super honest and gave us a great price. He explained everything clearly and kept us in the loop the whole time. The work was done efficiently and professionally, with no stress or the classic "final price surprise". Highly recommend!',
  },
  {
    name: 'David C.',
    rating: 5,
    url: 'https://maps.app.goo.gl/wx5cYMCdCPYQt6r59',
    text: 'Ricardo arrived right on time, super professional and courteous the whole visit. He clearly knows HVAC systems inside out and explained the issue in plain English. He diagnosed the problem fast, fixed my furnace efficiently, and did a thorough, clean job. No pushy upsells at all. What really stood out was his honesty: fair pricing with zero surprise charges.',
  },
  {
    name: 'Carlos D.',
    rating: 5,
    url: 'https://maps.app.goo.gl/5VBKi17MhCNZMHGu7',
    text: 'My air conditioner stopped working, and I texted Ricardo after 6 PM. Even though it was late, he quickly replied and came to my house in less than an hour. Ricardo is extremely friendly, attentive, and reliable. Every time I reached out to him, he responded promptly and with great care. I highly recommend his services.',
  },
]

const services = [
  {
    icon: '❄️',
    title: 'Residential AC',
    desc: 'Air conditioning service, refrigerant charging, and system diagnostics for your home.',
    items: ['AC Repair & Installation', 'Refrigerant Recharge', 'System Diagnostics'],
  },
  {
    icon: '🔥',
    title: 'Heating & Furnace',
    desc: 'Furnace repair, installation, and maintenance to keep your home warm all winter.',
    items: ['Furnace Repair', 'Furnace Installation', 'Heating System Tune-Up'],
  },
  {
    icon: '🏢',
    title: 'Commercial HVAC',
    desc: 'Rooftop unit installation, maintenance, and repair for commercial buildings and restaurants.',
    items: ['Rooftop Unit Service', 'Commercial Refrigerant', 'Preventive Maintenance'],
  },
  {
    icon: '🍳',
    title: 'Kitchen Equipment',
    desc: 'Commercial kitchen exhaust fans, ventilation systems, and equipment installation.',
    items: ['Exhaust Fan Install', 'Ventilation Systems', 'Equipment Service'],
  },
]

const workImages = [
  { src: '/images/commercial/rooftop-unit-1.webp', alt: 'Commercial rooftop HVAC unit installation' },
  { src: '/images/commercial/rooftop-unit-2.webp', alt: 'Commercial rooftop HVAC unit' },
  { src: '/images/commercial/control-board.webp', alt: 'HVAC control board and wiring' },
  { src: '/images/commercial/exhaust-fan.webp', alt: 'Commercial exhaust fan installation' },
  { src: '/images/commercial/rooftop-service.webp', alt: 'Commercial rooftop unit refrigerant service' },
  { src: '/images/residential/ac-service.webp', alt: 'Residential AC refrigerant service' },
  { src: '/images/residential/ac-unit.webp', alt: 'Residential AC unit service' },
  { src: '/images/residential/condenser-install.webp', alt: 'New residential condenser installation' },
  { src: '/images/residential/daikin-service.webp', alt: 'Daikin mini-split service' },
  { src: '/images/residential/furnace-diagnostics.webp', alt: 'Bryant furnace diagnostics' },
]

const serviceAreas = [
  'Lehi', 'Orem', 'Provo', 'American Fork', 'Pleasant Grove',
  'Saratoga Springs', 'Eagle Mountain', 'Spanish Fork', 'Springville', 'Payson',
]

export default function Home() {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-blue-900 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <span className="font-bold text-lg hidden sm:block">Cowboy Heating & Air</span>
          <span className="font-bold text-lg sm:hidden">Cowboy H&A</span>
          <div className="flex items-center gap-3">
            <a href="tel:801-940-0420" className="flex items-center gap-2 text-sm font-medium hover:text-blue-200 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
              801-940-0420
            </a>
            <a href="#quote" className="hidden sm:inline-block px-4 py-1.5 bg-amber-500 text-blue-900 text-sm font-semibold rounded-lg hover:bg-amber-400 transition-colors">
              Get a Quote
            </a>
          </div>
        </div>
      </header>

      {/* Emergency Banner */}
      <div className="mt-14 bg-amber-500 text-blue-900 text-center py-2 text-sm font-semibold">
        24/7 Emergency Service Available &middot; Same-Day Appointments &middot; Call Now
      </div>

      {/* Hero */}
      <section className="relative w-full min-h-[450px] md:min-h-[600px] flex items-start justify-center pt-12 md:pt-16 overflow-hidden">
        <img
          src="/images/hero/company-vehicle.webp"
          alt="Cowboy Heating & Air service vehicle"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative z-10 text-center p-8 bg-blue-900/75 rounded-xl max-w-xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Cowboy Heating & Air</h1>
          <p className="text-blue-100 mb-2">Commercial Kitchen Equipment &middot; Heating &middot; Air Conditioning</p>
          <p className="text-amber-300 text-sm font-medium mb-6">Utah Valley's Award-Winning HVAC Team</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:801-940-0420" className="px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
              Call 801-940-0420
            </a>
            <a href="#quote" className="px-8 py-3 bg-amber-500 text-blue-900 font-semibold rounded-lg hover:bg-amber-400 transition-colors">
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats Bar */}
      <section className="bg-blue-950 text-white py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-6 text-center">
          <div>
            <p className="text-3xl font-bold text-amber-400">5.0</p>
            <p className="text-xs text-blue-200 mt-1">Google Rating</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">24/7</p>
            <p className="text-xs text-blue-200 mt-1">Emergency Service</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">100%</p>
            <p className="text-xs text-blue-200 mt-1">Licensed & Insured</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-amber-400">2025</p>
            <p className="text-xs text-blue-200 mt-1">Best HVAC Award</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div key={s.title} className="p-6 border border-blue-100 dark:border-blue-800 rounded-xl bg-blue-50/50 dark:bg-blue-900/20">
              <div className="text-2xl mb-2">{s.icon}</div>
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3">{s.desc}</p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-600">&#10003;</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Award */}
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <img src="/images/awards/award-plaque.webp" alt="Best of BusinessRate 2025 - HVAC Contractor, Lehi Utah" className="w-64 rounded-lg shadow-lg" />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-100 mb-2">Award-Winning Service</h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">Voted <strong>Best HVAC Contractor</strong> in Lehi, Utah by BusinessRate 2025 based on Google Reviews. We're proud to deliver honest, reliable service to Utah Valley.</p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-xs text-gray-500 dark:text-gray-400">
              <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">Daikin Authorized</span>
              <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">Bryant Dealer</span>
              <span className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-full">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-blue-900 dark:bg-blue-950">
        <h2 className="text-2xl font-bold text-center mb-2 text-white">What Our Customers Say</h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, i) => (
              <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
            ))}
          </div>
          <a href="https://www.google.com/search?q=cowboy+hvac#lrd=0x8752815c4ef9ac27:0x519ab867e24d7b1,1" target="_blank" rel="noopener noreferrer" className="text-blue-200 text-sm hover:text-white transition-colors">
            5.0 on Google &rarr;
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="p-6 bg-white dark:bg-gray-800 rounded-xl flex flex-col">
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: r.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">&#9733;</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1">"{r.text}"</p>
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">{r.name}</p>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 dark:text-blue-400 hover:underline">View on Google</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Inquiry Form */}
      <section id="quote" className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-gray-50 dark:bg-gray-800/50 scroll-mt-16">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">Get a Free Quote</h2>
        <InquiryForm />
      </section>

      {/* Work Gallery */}
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">Our Work</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-5xl mx-auto">
          {workImages.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-lg"
            />
          ))}
        </div>
      </section>

      {/* Service Area */}
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-900 dark:text-blue-100">Serving Utah Valley</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mb-6">Proud to serve residential and commercial customers across Utah Valley</p>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {serviceAreas.map((city) => (
            <span key={city} className="px-4 py-2 bg-white dark:bg-gray-800 border border-blue-100 dark:border-blue-800 rounded-full text-sm text-blue-900 dark:text-blue-100 font-medium">
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-100 dark:border-blue-800 text-center text-sm bg-blue-900 text-blue-100">
        <p className="font-semibold text-white mb-1">Cowboy Heating & Air</p>
        <p>Utah Valley &middot; Licensed & Insured</p>
        <a href="tel:801-940-0420" className="text-white font-medium hover:underline">801-940-0420</a>
      </footer>

      {/* Floating Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-blue-900 shadow-[0_-2px_10px_rgba(0,0,0,0.3)] p-3">
        <a href="tel:801-940-0420" className="flex items-center justify-center gap-2 w-full py-3 bg-amber-500 text-blue-900 font-bold rounded-lg text-lg">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>
          Call Now - 801-940-0420
        </a>
      </div>

      {/* Mobile bottom padding so content isn't hidden behind floating CTA */}
      <div className="h-20 sm:hidden" />
    </div>
  )
}
