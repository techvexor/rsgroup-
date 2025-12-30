import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({
  title = 'RS Group - Professional Housekeeping & Facility Management Services',
  description = 'RS Group provides expert housekeeping and facility management services for residential societies, apartments, and commercial establishments. Trained staff, quality service, 24/7 support.',
  keywords = 'housekeeping services, facility management, professional cleaning, residential cleaning, commercial cleaning, trained housekeeping staff, apartment cleaning, society maintenance, office cleaning, deep cleaning services',
  ogTitle,
  ogDescription,
  ogImage = 'https://rsgroup.com/og-image.jpg',
  canonical = 'https://rsgroup.com/'
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonical} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="RS Group" />
    </Helmet>
  );
}
