import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, FileText, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=85',
    alt: 'Professional cleaning service',
    title: 'Premium Home Keeping Services',
    subtitle: 'You Can Trust',
    description: 'Expert facility management solutions with professionally trained staff for residential societies and corporate offices.',
    badge: 'Premium Service'
  },
  {
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=1920&q=85',
    alt: 'Modern office facility management',
    title: 'Expert Facility Management',
    subtitle: 'For Your Business',
    description: 'Comprehensive cleaning and maintenance services tailored for modern offices and commercial establishments.',
    badge: 'Expert Team'
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85',
    alt: 'Residential housekeeping services',
    title: 'Residential Society Services',
    subtitle: 'Complete Care',
    description: 'Dedicated housekeeping staff for housing societies with 24/7 availability and professional supervision.',
    badge: 'Certified Staff'
  },
  {
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=85',
    alt: 'Professional maintenance team',
    title: 'Professional Maintenance',
    subtitle: 'Quality Assured',
    description: 'Trained and verified maintenance staff for plumbing, electrical, and general repairs with guaranteed quality.',
    badge: 'Quality Assured'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevSlide();
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen w-full overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fullscreen Background Slider */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          {/* Multi-layer Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
        </div>
      ))}

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              {/* Badge */}
              <div 
                className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20 transition-all duration-700 ${
                  currentSlide >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Sparkles size={16} className="text-primary-400" />
                {heroSlides[currentSlide].badge}
              </div>

              {/* Title */}
              <h1 
                className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 transition-all duration-700 delay-100 ${
                  currentSlide >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {heroSlides[currentSlide].title}{' '}
                <span className="text-primary-400 block sm:inline">
                  {heroSlides[currentSlide].subtitle}
                </span>
              </h1>

              {/* Description */}
              <p 
                className={`text-lg sm:text-xl text-gray-200 mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-200 ${
                  currentSlide >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                {heroSlides[currentSlide].description}
              </p>

              {/* CTA Buttons */}
              <div 
                className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-700 delay-300 ${
                  currentSlide >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-600/30 hover:shadow-xl hover:shadow-primary-600/40 hover:scale-105"
                >
                  <Sparkles size={20} />
                  Request a Consultation
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <FileText size={20} />
                  Explore Services
                </Link>
              </div>
            </div>

            {/* Right Side - Decorative Elements (Desktop only) */}
            <div className="hidden lg:block relative h-64">
              {/* Decorative Elements */}
              <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-32 w-24 h-24 bg-accent-500/20 rounded-full blur-3xl animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="flex items-center justify-between bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20">
            {/* Slide Indicators */}
            <div className="flex items-center gap-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`group relative transition-all duration-300 ${
                    index === currentSlide ? 'w-16' : 'w-3'
                  }`}
                >
                  <div 
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-primary-500'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                  {index === currentSlide && (
                    <div 
                      className="absolute inset-0 h-3 bg-white/30 rounded-full animate-pulse"
                      style={{
                        animation: isAutoPlaying ? 'progress 5s linear' : 'none'
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Slide Info */}
            <div className="hidden sm:flex items-center gap-4 text-white">
              <span className="text-2xl font-bold">{String(currentSlide + 1).padStart(2, '0')}</span>
              <div className="w-12 h-px bg-white/40" />
              <span className="text-white/60">{String(heroSlides.length).padStart(2, '0')}</span>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleAutoPlay}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white"
                aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
              >
                {isAutoPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 text-white hover:scale-110"
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-primary-500 hover:bg-primary-400 transition-all duration-300 text-white hover:scale-110"
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for progress animation */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
}
