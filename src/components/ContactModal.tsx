import { X, Send } from 'lucide-react';
import { useState } from 'react';
import LeadForm from './LeadForm';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export default function ContactModal({ isOpen, onClose, source = 'Website' }: ContactModalProps) {
    const [submitted, setSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSuccess = () => {
        setSubmitted(true);
        setTimeout(() => {
            onClose();
            setSubmitted(false);
        }, 3000);
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content - Scrollable */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fadeInUp scrollbar-hide">
                <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white text-center relative sticky top-0 z-10">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white/80 hover:text-white hover:bg-white/20 rounded-full p-1 transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <h3 className="text-2xl font-bold mb-2">Get Started</h3>
                    <p className="text-blue-100">Fill details to access Demo / Trial</p>
                </div>

                <div className="p-8">
                    {submitted ? (
                        <div className="text-center py-8">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                                <Send className="w-8 h-8" />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-2">Request Sent!</h4>
                            <p className="text-gray-600">We will verify your details and connect with you shortly.</p>
                        </div>
                    ) : (
                        <LeadForm source={source} onSuccess={handleSuccess} />
                    )}
                </div>
            </div>
        </div>
    );
}
