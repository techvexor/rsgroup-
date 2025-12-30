import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import WhyUsPage from '@/pages/WhyUsPage';
import ContactPage from '@/pages/ContactPage';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
          <FloatingButtons />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
