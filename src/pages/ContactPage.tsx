import SEO from '@/components/SEO';
import Contact from '@/components/Contact';

export default function ContactPage() {
  return (
    <>
      <SEO 
        title="Contact RS Group - Get Housekeeping Quote | +91 82181 06499"
        description="Contact RS Group for professional housekeeping services. Call us at +91 82181 06499 or fill out our contact form for a custom quote. Serving residential and commercial properties."
        keywords="contact housekeeping services, housekeeping quote, cleaning services inquiry, facility management contact, rs group contact, professional cleaning inquiry"
        canonical="https://rsgroup.com/contact"
      />
      <div className="pt-16">
        <Contact />
      </div>
    </>
  );
}
