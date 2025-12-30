import SEO from '@/components/SEO';
import About from '@/components/About';

export default function AboutPage() {
  return (
    <>
      <SEO 
        title="About RS Group - Leading Housekeeping Service Provider"
        description="Learn about RS Group, your trusted partner for professional housekeeping and facility management services. Expert team, quality service, and commitment to excellence."
        keywords="about rs group, housekeeping company, professional cleaning company, facility management experts, cleaning service provider, housekeeping experts"
        canonical="https://rsgroup.com/about"
      />
      <div className="pt-16">
        <About />
      </div>
    </>
  );
}
