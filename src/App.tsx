import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Partners from './components/Partners';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Skip to content link for keyboard/screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-wasit-teal focus:text-white focus:text-sm focus:font-bold"
      >
        تخطي إلى المحتوى الرئيسي
      </a>

      <ErrorBoundary>
        <main id="main" className="min-h-screen bg-wasit-navy text-slate-100 relative">
          {/* Sticky Blurred Header */}
          <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* Hero Section */}
          <Hero onOpenConsultation={() => setIsConsultationOpen(true)} />

          {/* About Us Section */}
          <About />

          {/* Services Grid Section */}
          <Services onSelectService={handleSelectService} />

          {/* Partners & Clients Section */}
          <Partners />

          {/* Contact Section */}
          <Contact selectedServicePreFill={selectedService} />

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Action */}
          <WhatsAppButton />

          {/* Interactive Consultation Modal */}
          <ConsultationModal
            isOpen={isConsultationOpen}
            onClose={() => setIsConsultationOpen(false)}
          />
        </main>
      </ErrorBoundary>
    </>
  );
}
