import { X, Loader2, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    source?: string;
}

export default function ContactModal({ isOpen, onClose, source = 'Website' }: ContactModalProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        labName: '',
        labStatus: '',
        launchTimeline: '',
        city: '',
        sampleLoad: ''
    });

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/send_mail.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    type: `Lead from ${source}`
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', labName: '', labStatus: '', launchTimeline: '', city: '', sampleLoad: '' });
                }, 3000);
            } else {
                throw new Error(result.error || 'Failed to send');
            }
        } catch (err) {
            console.error('Submission error:', err);
            // Fallback for development/demo (if PHP not running)
            // Simulate success if local dev
            if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
                setSubmitted(true);
                setTimeout(() => {
                    onClose();
                    setSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', labName: '', labStatus: '', launchTimeline: '', city: '', sampleLoad: '' });
                }, 3000);
            } else {
                setError('Something went wrong. Please try again or WhatsApp us directly.');
            }
        } finally {
            setLoading(false);
        }
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
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="Dr. Rajesh Kumar"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number</label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="+91 98765 43210"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Lab Status</label>
                                <select
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    value={formData.labStatus}
                                    onChange={(e) => setFormData({ ...formData, labStatus: e.target.value })}
                                >
                                    <option value="">Select Status</option>
                                    <option value="New Lab">Planning a New Lab</option>
                                    <option value="Existing Lab">Existing Lab</option>
                                </select>
                            </div>

                            {formData.labStatus === 'New Lab' && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">When are you planning to launch?</label>
                                    <select
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                        value={formData.launchTimeline}
                                        onChange={(e) => setFormData({ ...formData, launchTimeline: e.target.value })}
                                    >
                                        <option value="">Select Timeline</option>
                                        <option value="Within 1 month">Within 1 month</option>
                                        <option value="3-6 months">3-6 months</option>
                                        <option value="More than 6 months">More than 6 months</option>
                                    </select>
                                </div>
                            )}

                            {formData.labStatus === 'Existing Lab' && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Lab Name</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="City Pathology Lab"
                                            value={formData.labName}
                                            onChange={(e) => setFormData({ ...formData, labName: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                        <input
                                            type="text"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            placeholder="Mumbai, Delhi, etc."
                                            value={formData.city}
                                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Daily Sample Load</label>
                                        <select
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                            value={formData.sampleLoad}
                                            onChange={(e) => setFormData({ ...formData, sampleLoad: e.target.value })}
                                        >
                                            <option value="">Select Load</option>
                                            <option value="Less than 25">Less than 25 samples/day</option>
                                            <option value="25-50">25-50 samples/day</option>
                                            <option value="More than 50">More than 50 samples/day</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                    placeholder="lab@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </div>

                            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    'Submit Request'
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}
