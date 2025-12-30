import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', service: '', message: '' });
  };

  const services = [
    'Home & Apartment Cleaning',
    'Office & Commercial Cleaning',
    'Society & Building Housekeeping',
    'Maintenance Support Staff',
    'Deep Cleaning Services',
    'On-demand Housekeeping Staff',
  ];

  const coverageAreas = [
    'Residential Societies',
    'Commercial Offices',
    'Villas & Bungalows',
    'Apartments & Flats',
    'Retail Spaces',
    'Industrial Facilities',
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">Contact Us</p>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Have questions or ready to book a service? Fill out the form below or contact us directly.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Required *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-colors resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                <Send size={20} />
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info & Coverage */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Quick Contact</h3>
              <div className="space-y-4">
                <a
                  href="tel:+918218106499"
                  className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  <div className="bg-primary-600 p-3 rounded-lg">
                    <Phone className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-primary-600">+91 82181 06499</p>
                  </div>
                </a>
                <a
                  href="https://wa.me/918218106499"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-accent-50 rounded-xl hover:bg-accent-100 transition-colors"
                >
                  <div className="bg-accent-600 p-3 rounded-lg">
                    <MessageCircle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-accent-600">Chat with us</p>
                  </div>
                </a>
                <a
                  href="mailto:info@rsgroup.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <div className="bg-gray-600 p-3 rounded-lg">
                    <Mail className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">info@rsgroup.com</p>
                  </div>
                </a>
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-gray-600 p-3 rounded-lg">
                    <MapPin className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">SECTOR MU-02 City<br />GREATER NOIDA, 201310,<br />UTTAR PRADESH, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Coverage */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Service Area Coverage</h3>
              <div className="grid grid-cols-2 gap-3">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="text-primary-600 flex-shrink-0" size={16} />
                    <span className="text-gray-700 text-sm">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
