import { Shield, Users, Award, Clock } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '10+', label: 'Years Experience' },
    { icon: Shield, value: '100%', label: 'Verified Staff' },
    { icon: Clock, value: '24/7', label: 'Support' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
              alt="RS Group team"
              className="rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">10+</p>
              <p className="text-primary-100">Years of Excellence</p>
            </div>
          </div>
          <div>
            <p className="text-primary-600 font-semibold mb-2 uppercase tracking-wide text-sm">About RS Group</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Your Premier Partner in Facility Management Excellence
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              RS Group stands as a distinguished leader in professional facility management and home keeping services. We deliver highly trained, verified personnel with an unwavering commitment to hygiene, discipline, and exceptional customer satisfaction.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our dedication to service excellence has positioned us as the preferred choice for premium residential societies, corporate offices, luxury villas, upscale apartments, and commercial establishments throughout the region.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <stat.icon className="text-primary-600" size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
