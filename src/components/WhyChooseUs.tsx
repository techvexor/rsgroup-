import { UserCheck, Clock, DollarSign, Shirt, Headphones, ClipboardCheck, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: 'Trained & Verified Staff',
      description: 'All our staff undergo thorough background checks and professional training.',
    },
    {
      icon: Clock,
      title: 'Timely Service Availability',
      description: 'Punctual service delivery with flexible scheduling options.',
    },
    {
      icon: DollarSign,
      title: 'Affordable & Transparent Pricing',
      description: 'Competitive rates with no hidden charges. Get what you pay for.',
    },
    {
      icon: Shirt,
      title: 'Professional Uniformed Team',
      description: 'Our team arrives in proper uniform, presenting a professional image.',
    },
    {
      icon: Headphones,
      title: 'Customer Support Assistance',
      description: 'Dedicated support team available to address your queries and concerns.',
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Assurance Checks',
      description: 'Regular quality audits to ensure consistent service standards.',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">Why Choose RS Group</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence Through Commitment and Professional Standards
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed text-lg">
              We distinguish ourselves through unwavering commitment to quality, reliability, and exceptional customer satisfaction. Our professionally trained staff deliver consistent excellence with every service.
            </p>
            <div className="space-y-4">
              {['100% Background Verified Staff', 'Flexible Daily, Weekly & Monthly Plans', 'Emergency Staff Replacement Available', 'Satisfaction Guaranteed'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-accent-500 flex-shrink-0" size={24} />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:bg-primary-50 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary-200"
              >
                <div className="bg-primary-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-600 transition-colors">
                  <feature.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
