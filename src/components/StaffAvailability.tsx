import { Calendar, Users, RefreshCw } from 'lucide-react';

export default function StaffAvailability() {
  return (
    <section className="py-20 bg-primary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-700"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Flexible Staffing Solutions
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto text-lg leading-relaxed">
            Customized staffing arrangements for daily, weekly, or monthly needs. Emergency replacement services available for uninterrupted operations.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
              <Calendar className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Daily Service</h3>
            <p className="text-primary-100 leading-relaxed">
              Professional housekeeping staff for daily cleaning and maintenance requirements.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
              <Users className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Weekly / Monthly</h3>
            <p className="text-primary-100 leading-relaxed">
              Long-term dedicated personnel arrangements tailored to your facility's needs.
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40">
            <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform">
              <RefreshCw className="text-white" size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Emergency Replacement</h3>
            <p className="text-primary-100 leading-relaxed">
              Immediate staff replacement services ensuring seamless operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
