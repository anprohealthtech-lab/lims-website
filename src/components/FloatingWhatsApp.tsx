import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
    const phoneNumber = '918780465286';
    const text = encodeURIComponent('Hello we are interested in LIMS, please connect with us');

    const handleClick = () => {
        // Detect if mobile device
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const url = isMobile
            ? `https://wa.me/${phoneNumber}?text=${text}`
            : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${text}`;

        window.open(url, '_blank');
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce-slow">
            <button
                onClick={handleClick}
                className="bg-[#25D366] hover:bg-[#128C7E] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-8 h-8 fill-current" />
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium">
                    Chat with us
                </span>
            </button>

            {/* Pulse Effect */}
            <div className="absolute inset-0 rounded-full bg-[#25D366] -z-10 animate-ping opacity-20 group-hover:opacity-40"></div>
        </div>
    );
}
