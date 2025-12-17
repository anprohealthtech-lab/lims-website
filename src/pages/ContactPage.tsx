import Footer from '../components/Footer';
import LeadForm from '../components/LeadForm';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            {/* Navbar / Header */}
            <nav className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20 shadow-lg">
                        <Link to="/" className="flex items-center gap-2">
                            <img
                                src="https://ik.imagekit.io/18tsendxqy/website/Screenshot%202025-12-15%20133819.png"
                                alt="AnPro Solutions"
                                className="h-8 w-auto rounded-lg"
                            />
                            <span className="font-bold text-sm text-gray-200">Home</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="flex-grow flex items-center justify-center p-4">
                <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 p-6 text-white text-center">
                        <h1 className="text-3xl font-bold mb-2">Get Started</h1>
                        <p className="text-blue-100">Fill details to access Demo / Trial</p>
                    </div>
                    <div className="p-8">
                        <LeadForm source="Contact Page" />
                    </div>
                    <div className="px-8 pb-8 text-center">
                        <Link to="/" className="text-sm text-gray-500 hover:text-blue-600 flex items-center justify-center gap-1 transition-colors">
                            <ChevronLeft className="w-4 h-4" /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
