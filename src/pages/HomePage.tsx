import SEO from '@/components/SEO';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import StaffAvailability from '@/components/StaffAvailability';
import CTA from '@/components/CTA';

export default function HomePage() {
  return (
    <>
      <SEO 
        title="RS Group - Professional Housekeeping & Facility Management Services"
        description="RS Group offers expert housekeeping services for residential societies, apartments, and commercial properties. Professional staff, quality cleaning, daily maintenance, and 24/7 support."
        keywords="housekeeping services, facility management, professional cleaning services, residential cleaning, apartment cleaning, society maintenance, commercial cleaning, trained housekeeping staff, daily cleaning services, deep cleaning"
        canonical="https://rsgroup.com/"
      />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <StaffAvailability />
      <CTA />
    </>
  );
}
