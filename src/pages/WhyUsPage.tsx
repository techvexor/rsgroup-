import SEO from '@/components/SEO';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTA from '@/components/CTA';

export default function WhyUsPage() {
  return (
    <>
      <SEO 
        title="Why Choose RS Group - Trusted Housekeeping Experts"
        description="Choose RS Group for verified staff, 24/7 support, quality assured services, flexible scheduling, transparent pricing, and professional housekeeping solutions for your property."
        keywords="trusted housekeeping, verified staff, professional cleaning experts, quality housekeeping services, reliable cleaning company, trained housekeeping staff, background verified staff"
        canonical="https://rsgroup.com/why-us"
      />
      <div className="pt-16">
        <WhyChooseUs />
        <CTA />
      </div>
    </>
  );
}
