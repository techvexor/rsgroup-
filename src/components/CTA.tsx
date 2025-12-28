import { Sparkles, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-accent-500 to-accent-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Experience Professional Facility Management?
        </h2>
        <p className="text-accent-100 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Partner with RS Group today and discover seamless, professional service delivery. Our dedicated team of trained specialists is ready to exceed your expectations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-white text-accent-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Sparkles size={20} />
            Request a Consultation
          </a>
          <a
            href="tel:+918218106499"
            className="inline-flex items-center justify-center gap-2 bg-accent-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-accent-800 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <Phone size={20} />
            Call: +91 82181 06499
          </a>
        </div>
      </div>
    </section>
  );
}
