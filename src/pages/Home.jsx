import InquiryForm from '../components/InquiryForm'

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
      <section className="relative w-full min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="/images/hero/company-vehicle.webp"
          alt="Cowboy Heating & Air service vehicle"
          className="absolute inset-0 w-full h-full object-cover"
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
