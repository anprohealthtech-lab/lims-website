import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Dashboard from '../components/Dashboard';
import Features from '../components/Features';
import CoreModules from '../components/CoreModules';
import About from '../components/About';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

export default function HomePage() {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <>
            <Hero onOpenContact={handleContactClick} />
            <Dashboard />
            <Features />
            <CoreModules onOpenContact={handleContactClick} />
            <About />
            <Pricing onOpenContact={handleContactClick} />
            <CTA onOpenContact={handleContactClick} />
            <Footer />
            <FloatingWhatsApp />
        </>
    );
}
