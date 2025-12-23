import { MessageCircle, Rocket } from 'lucide-react';
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function FloatingButtons() {
    const phoneNumber = '918780464387';
    const text = encodeURIComponent('Hello we are interested in LIMS, please connect with us');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleWhatsAppClick = () => {
        // Detect if mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${text}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

        window.open(url, '_blank');
    };

    return (
        <>
            {/* Floating Buttons Container */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
                {/* Start Trial Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group animate-pulse hover:animate-none"
                    aria-label="Start Free Trial"
                >
                    <Rocket className="w-7 h-7" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
                        Start Trial
                    </span>
                </button>

                {/* WhatsApp Button */}
                <button
                    onClick={handleWhatsAppClick}
                    className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group animate-bounce-slow"
                    aria-label="Chat on WhatsApp"
                >
                    <MessageCircle className="w-8 h-8 fill-current" />
                    <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
                        Chat with us
                    </span>
                </button>
            </div>

            {/* Contact Modal for Trial */}
            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                source="Floating Trial Button"
            />
        </>
    );
}
