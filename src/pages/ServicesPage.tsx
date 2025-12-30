import SEO from '@/components/SEO';
import Services from '@/components/Services';
import HousekeepingPackage from '@/components/HousekeepingPackage';
import StaffAvailability from '@/components/StaffAvailability';

export default function ServicesPage() {
  return (
    <>
      <SEO 
        title="Our Services - Professional Housekeeping Solutions | RS Group"
        description="Comprehensive housekeeping services including daily cleaning, deep cleaning, laundry, kitchen maintenance, bathroom cleaning, and facility management for residential and commercial properties."
        keywords="housekeeping services, cleaning services, daily cleaning, deep cleaning, laundry services, kitchen cleaning, bathroom cleaning, facility management, professional cleaning, commercial cleaning services"
        canonical="https://rsgroup.com/services"
      />
      <div className="pt-16">
        <Services />
        <HousekeepingPackage />
        <StaffAvailability />
      </div>
    </>
  );
}
