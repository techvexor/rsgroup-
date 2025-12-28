import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const services = [
    'Home & Apartment Cleaning',
    'Office & Commercial Cleaning',
    'Society & Building Housekeeping',
    'Maintenance Support Staff',
    'Deep Cleaning Services',
    'On-demand Housekeeping Staff',
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold text-primary-400">RS</span>
              <span className="text-2xl font-bold text-white ml-1">Group</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              RS Group - Your premier partner in professional facility management and home keeping services. Delivering excellence through trained professionals who prioritize hygiene, discipline, and exceptional customer satisfaction.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-gray-400 hover:text-primary-400 transition-colors hover:pl-2 transition-all">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-primary-400 transition-colors hover:pl-2 transition-all">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-primary-400 flex-shrink-0 mt-1" size={20} />
                <span className="text-gray-400">
                  123 Business District,<br />
                  City Name, State 123456
                </span>
              </li>
              <li>
                <a href="tel:+918218106499" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                  <Phone className="text-primary-400" size={20} />
                  +91 82181 06499
                </a>
              </li>
              <li>
                <a href="mailto:info@rsgroup.com" className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors">
                  <Mail className="text-primary-400" size={20} />
                  info@rsgroup.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} RS Group. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
