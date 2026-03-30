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
    <div className="flex flex-col bg-white dark:bg-gray-900">
      {/* Hero */}
      <section className="relative w-full min-h-[450px] md:min-h-[600px] flex items-start justify-center pt-12 md:pt-16 overflow-hidden">
        <img
          src="/images/hero/company-vehicle.webp"
          alt="Cowboy Heating & Air service vehicle"
          className="absolute inset-0 w-full h-full object-cover object-[center_85%]"
        />
        <div className="relative z-10 text-center p-8 bg-blue-900/75 rounded-xl max-w-xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Cowboy Heating & Air</h1>
          <p className="text-blue-100 mb-6">Commercial Kitchen Equipment &middot; Heating &middot; Air Conditioning</p>
          <a href="tel:801-940-0420" className="inline-block px-8 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            Call 801-940-0420
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-12 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'Commercial HVAC', desc: 'Rooftop unit installation, maintenance, and repair for commercial buildings and restaurants.' },
            { title: 'Residential AC', desc: 'Air conditioning service, refrigerant charging, and system diagnostics for your home.' },
            { title: 'Kitchen Equipment', desc: 'Commercial kitchen exhaust fans, ventilation systems, and equipment installation.' },
            { title: 'Water Heaters', desc: 'Water heater installation, repair, and replacement for residential and commercial properties.' },
          ].map((s) => (
            <div key={s.title} className="p-6 border border-blue-100 dark:border-blue-800 rounded-xl bg-blue-50/50 dark:bg-blue-900/20">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">{s.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-blue-900 dark:bg-blue-950">
        <h2 className="text-2xl font-bold text-center mb-2 text-white">What Our Customers Say</h2>
        <a href="https://www.google.com/search?q=cowboy+hvac#lrd=0x8752815c4ef9ac27:0x519ab867e24d7b1,1" target="_blank" rel="noopener noreferrer" className="block text-center text-blue-200 text-sm mb-8 hover:text-white transition-colors">5.0 stars on Google &rarr;</a>
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
      <section className="px-6 py-12 border-t border-blue-100 dark:border-blue-800 bg-gray-50 dark:bg-gray-800/50">
        <h2 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-blue-100">Get a Quote</h2>
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

      {/* Footer */}
      <footer className="py-8 border-t border-blue-100 dark:border-blue-800 text-center text-sm bg-blue-900 text-blue-100">
        <p>Cowboy Heating & Air &middot; Utah Valley</p>
        <a href="tel:801-940-0420" className="text-white font-medium hover:underline">801-940-0420</a>
      </footer>
    </div>
  )
}
