import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import StaffAvailability from '@/components/StaffAvailability';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <StaffAvailability />
      <CTA />
      <Contact />
    </>
  );
}
