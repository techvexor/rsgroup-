import { Check, Package, Clock, Users, Shield, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HousekeepingPackage() {
  const packageFeatures = [
    'Daily cleaning and maintenance',
    'Dusting and mopping of all areas',
    'Kitchen and bathroom deep cleaning',
    'Garbage disposal management',
    'Window and glass cleaning',
    'Laundry and ironing services',
    'Utensil washing and kitchen upkeep',
    'Common area maintenance',
    'Professional trained staff',
    'Regular supervision and quality checks',
    'Flexible scheduling options',
    'Emergency support availability'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Verified Staff',
      description: 'All personnel are background verified and professionally trained'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any queries or issues'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Consistent team assigned for familiarity and quality service'
    },
    {
      icon: Star,
      title: 'Quality Assured',
      description: 'Regular quality audits and performance monitoring'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-4">
            <Package size={20} />
            <span className="font-semibold text-sm uppercase tracking-wide">Premium Package</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Housekeeping Services Package
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Complete housekeeping solutions for residential societies, apartments, and commercial establishments. 
            Our comprehensive package covers all your facility management needs with professionally trained staff.
          </p>
        </div>

        {/* Main Package Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-100">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">All-Inclusive Housekeeping Package</h3>
            <p className="text-primary-100 text-lg">Everything you need for a clean and well-maintained space</p>
          </div>

          <div className="p-8 md:p-12">
            {/* Features Grid */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Check className="text-primary-600" size={24} />
                Package Includes
              </h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {packageFeatures.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-xl bg-gray-50 hover:bg-primary-50 transition-colors duration-200"
                  >
                    <div className="bg-primary-100 rounded-full p-1 mt-0.5">
                      <Check className="text-primary-600" size={16} />
                    </div>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="mb-12">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose Our Package</h4>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="bg-primary-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="text-primary-600" size={28} />
                    </div>
                    <h5 className="font-bold text-gray-900 mb-2">{benefit.title}</h5>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 text-center">
              <h4 className="text-2xl font-bold text-gray-900 mb-3">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact us today for a customized quote based on your specific requirements. 
                Our team will help you choose the perfect package for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Get Custom Quote
                  <ArrowRight size={20} />
                </Link>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold border-2 border-primary-600 hover:bg-primary-50 transition-all duration-300"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center text-gray-600">
          <p className="text-sm">
            * Package terms and pricing may vary based on location, property size, and specific requirements. 
            Contact our team for detailed information and customized solutions.
          </p>
        </div>
      </div>
    </section>
  );
}
