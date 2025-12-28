import { Home, Building2, Building, Wrench, SprayCan, UserCheck, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Home,
      title: 'Home & Apartment Cleaning',
      description: 'Regular cleaning services for homes and apartments with trained staff ensuring spotless living spaces.',
    },
    {
      icon: Building2,
      title: 'Office & Commercial Cleaning',
      description: 'Professional cleaning solutions for offices and commercial spaces maintaining a healthy work environment.',
    },
    {
      icon: Building,
      title: 'Society & Building Housekeeping',
      description: 'Comprehensive housekeeping for residential societies and buildings with dedicated staff.',
    },
    {
      icon: Wrench,
      title: 'Maintenance Support Staff',
      description: 'Skilled maintenance personnel for plumbing, electrical, and general repairs support.',
    },
    {
      icon: SprayCan,
      title: 'Deep Cleaning Services',
      description: 'Thorough deep cleaning services for complete sanitization and hygiene of your space.',
    },
    {
      icon: UserCheck,
      title: 'On-demand Housekeeping Staff',
      description: 'Flexible staffing solutions available on-demand for events or temporary requirements.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Facility Management Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            From daily maintenance to specialized deep cleaning, we provide complete facility management services tailored to your needs.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary-200"
            >
              <div className="bg-primary-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 transition-all duration-300 group-hover:scale-110">
                <service.icon className="text-primary-600 group-hover:text-white transition-colors" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors group-hover:gap-3 gap-2 transition-all"
              >
                Learn More <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
