import { useState } from 'react';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import CoreModules from './components/CoreModules';
import About from './components/About';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ContactModal from './components/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openModal = () => setIsContactModalOpen(true);

  return (
    <div className="min-h-screen bg-white">
      <Hero onOpenContact={openModal} />
      <Dashboard />
      <Features />
      <CoreModules onOpenContact={openModal} />
      <About />
      <Pricing onOpenContact={openModal} />
      <CTA onOpenContact={openModal} />
      <Footer />
      <FloatingWhatsApp />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}

export default App;
