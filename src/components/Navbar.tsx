import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Search } from 'lucide-react';

// Searchable content data
const searchableContent = [
  // Pages
  { title: 'Home', type: 'Page', path: '/', keywords: ['home', 'main', 'landing'] },
  { title: 'About Us', type: 'Page', path: '/about', keywords: ['about', 'company', 'rs group', 'who we are'] },
  { title: 'Our Services', type: 'Page', path: '/services', keywords: ['services', 'what we do'] },
  { title: 'Why Choose Us', type: 'Page', path: '/why-us', keywords: ['why us', 'why choose', 'benefits', 'advantages'] },
  { title: 'Contact Us', type: 'Page', path: '/contact', keywords: ['contact', 'reach us', 'get in touch'] },
  
  // Services
  { title: 'Home & Apartment Cleaning', type: 'Service', path: '/services', keywords: ['home cleaning', 'apartment', 'residential', 'house cleaning'] },
  { title: 'Office & Commercial Cleaning', type: 'Service', path: '/services', keywords: ['office cleaning', 'commercial', 'corporate', 'business'] },
  { title: 'Society & Building Housekeeping', type: 'Service', path: '/services', keywords: ['society', 'building', 'housekeeping', 'residential society'] },
  { title: 'Maintenance Support Staff', type: 'Service', path: '/services', keywords: ['maintenance', 'plumbing', 'electrical', 'repairs', 'support'] },
  { title: 'Deep Cleaning Services', type: 'Service', path: '/services', keywords: ['deep cleaning', 'sanitization', 'thorough cleaning', 'hygiene'] },
  { title: 'On-demand Housekeeping Staff', type: 'Service', path: '/services', keywords: ['on-demand', 'flexible', 'temporary', 'events', 'housekeeping'] },
  
  // Features
  { title: 'Trained & Verified Staff', type: 'Feature', path: '/why-us', keywords: ['trained', 'verified', 'background check', 'professional'] },
  { title: 'Timely Service Availability', type: 'Feature', path: '/why-us', keywords: ['timely', 'punctual', 'scheduling', 'on time'] },
  { title: 'Affordable & Transparent Pricing', type: 'Feature', path: '/why-us', keywords: ['affordable', 'pricing', 'transparent', 'cost', 'rates'] },
  { title: 'Professional Uniformed Team', type: 'Feature', path: '/why-us', keywords: ['uniform', 'professional', 'team', 'appearance'] },
  { title: 'Customer Support Assistance', type: 'Feature', path: '/why-us', keywords: ['support', 'customer', 'assistance', 'help', 'queries'] },
  { title: 'Quality Assurance Checks', type: 'Feature', path: '/why-us', keywords: ['quality', 'assurance', 'audit', 'standards'] },
  
  // Contact info
  { title: 'Call Us: +91 82181 06499', type: 'Contact', path: '/contact', keywords: ['phone', 'call', 'telephone', 'number'] },
  { title: 'WhatsApp Support', type: 'Contact', path: '/contact', keywords: ['whatsapp', 'chat', 'message'] },
  { title: 'Email: info@rsgroup.com', type: 'Contact', path: '/contact', keywords: ['email', 'mail'] },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Why Us', href: '/why-us' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname === href;
  };

  // Search functionality
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setSelectedIndex(-1);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchableContent.filter((item) => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some((keyword) => keyword.includes(query));
      return titleMatch || keywordMatch;
    });

    setSearchResults(results.slice(0, 8));
    setSelectedIndex(-1);
  }, [searchQuery]);

  // Close search on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when search opens
  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < searchResults.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      handleResultClick(searchResults[selectedIndex]);
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleResultClick = (result: typeof searchableContent[0]) => {
    navigate(result.path);
    setIsSearchOpen(false);
    setSearchQuery('');
    setIsOpen(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Page':
        return 'bg-primary-100 text-primary-700';
      case 'Service':
        return 'bg-accent-100 text-accent-700';
      case 'Feature':
        return 'bg-blue-100 text-blue-700';
      case 'Contact':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <span className="text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors">RS</span>
              <span className="text-2xl font-bold text-gray-800 ml-1 group-hover:text-gray-900 transition-colors">Group</span>
            </Link>
          </div>

          {/* Desktop Search Box - After Logo */}
          <div ref={searchRef} className="hidden md:block relative flex-1 max-w-md ml-8">
            <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <Search size={20} className="text-gray-500" />
              <input
                ref={inputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search services, pages..."
                className="w-full px-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50">
                {searchResults.map((result, index) => (
                  <button
                    key={`${result.title}-${index}`}
                    onClick={() => handleResultClick(result)}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                      selectedIndex === index ? 'bg-gray-50' : ''
                    }`}
                  >
                    <Search size={16} className="text-gray-400 flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{result.title}</p>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                      {result.type}
                    </span>
                  </button>
                ))}
              </div>
            )}
            
            {/* No Results */}
            {searchQuery.trim() !== '' && searchResults.length === 0 && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 p-4">
                <p className="text-sm text-gray-500 text-center">No results found for "{searchQuery}"</p>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-semibold transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary-600 after:transition-all hover:after:w-full ${
                  isActive(link.href)
                    ? 'text-primary-600 after:w-full'
                    : 'text-gray-700 hover:text-primary-600 after:w-0'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <a
              href="tel:+918218106499"
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105"
            >
              <Phone size={18} />
              <span className="font-semibold">Call Now</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Search"
            >
              <Search size={24} />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div ref={searchRef} className="md:hidden pb-4">
            <div className="relative">
              <div className="flex items-center bg-gray-100 rounded-lg px-3">
                <Search size={20} className="text-gray-500" />
                <input
                  ref={inputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search services, pages..."
                  className="w-full py-3 px-3 bg-transparent outline-none text-gray-700 placeholder-gray-500"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={18} />
                  </button>
                )}
              </div>
              
              {/* Mobile Search Results */}
              {searchResults.length > 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                  {searchResults.map((result, index) => (
                    <button
                      key={`${result.title}-${index}`}
                      onClick={() => handleResultClick(result)}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                        selectedIndex === index ? 'bg-gray-50' : ''
                      }`}
                    >
                      <Search size={16} className="text-gray-400 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">{result.title}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getTypeColor(result.type)}`}>
                        {result.type}
                      </span>
                    </button>
                  ))}
                </div>
              )}
              
              {/* Mobile No Results */}
              {searchQuery.trim() !== '' && searchResults.length === 0 && (
                <div className="mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden p-4">
                  <p className="text-sm text-gray-500 text-center">No results found for "{searchQuery}"</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`block py-2 font-medium ${
                  isActive(link.href)
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+918218106499"
              className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg mt-2 w-fit"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
