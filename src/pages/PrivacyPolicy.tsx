import { Link } from 'react-router-dom';
import { ChevronLeft, Shield } from 'lucide-react';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    const lastUpdated = "December 23, 2024";

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <nav className="bg-white shadow-sm sticky top-0 z-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors w-fit">
                        <ChevronLeft className="w-5 h-5" />
                        <span className="font-medium">Back to Home</span>
                    </Link>
                </div>
            </nav>

            {/* Content */}
            <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                    {/* Title */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Privacy Policy</h1>
                            <p className="text-gray-500 mt-1">Last updated: {lastUpdated}</p>
                        </div>
                    </div>

                    {/* Policy Content */}
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                            <p>
                                Welcome to AnPro Solutions ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>limsapp.in</strong> and use our Laboratory Information Management System (LIMS) services.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                            <p className="mb-4">We may collect the following types of information:</p>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Personal Information</h3>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Name and contact details (email, phone number)</li>
                                <li>Laboratory/business name and address</li>
                                <li>Professional credentials and qualifications</li>
                                <li>Billing and payment information</li>
                            </ul>
                            <h3 className="text-lg font-medium text-gray-800 mb-2">Automatically Collected Information</h3>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Device information (browser type, operating system)</li>
                                <li>IP address and location data</li>
                                <li>Usage data and browsing patterns</li>
                                <li>Cookies and similar tracking technologies</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4">We use the collected information for:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Providing and maintaining our LIMS services</li>
                                <li>Processing transactions and sending related information</li>
                                <li>Responding to inquiries and providing customer support</li>
                                <li>Sending promotional communications (with your consent)</li>
                                <li>Improving our website and services</li>
                                <li>Complying with legal obligations</li>
                                <li>Detecting and preventing fraud or security issues</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Cookies and Tracking Technologies</h2>
                            <p className="mb-4">
                                We use cookies and similar tracking technologies to track activity on our website and store certain information. These technologies help us:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li>Remember your preferences and settings</li>
                                <li>Understand how you use our website</li>
                                <li>Deliver personalized advertising</li>
                                <li>Measure the effectiveness of our marketing campaigns</li>
                            </ul>
                            <p>
                                We use Google Analytics and Google Ads for website analytics and advertising. These services may collect information about your visits to our website and other websites to provide targeted advertisements. You can opt-out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a>.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Information Sharing and Disclosure</h2>
                            <p className="mb-4">We may share your information with:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our website and services</li>
                                <li><strong>Business Partners:</strong> Trusted partners for joint marketing initiatives (with your consent)</li>
                                <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulations</li>
                                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                            <p className="mt-4">
                                We do not sell your personal information to third parties.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                            <p>
                                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
                            <p className="mb-4">Depending on your location, you may have the following rights:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li><strong>Access:</strong> Request access to your personal information</li>
                                <li><strong>Correction:</strong> Request correction of inaccurate data</li>
                                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                                <li><strong>Opt-out:</strong> Opt-out of marketing communications</li>
                                <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
                            </ul>
                            <p className="mt-4">
                                To exercise these rights, please contact us at <a href="mailto:anprohealthtech@gmail.com" className="text-blue-600 hover:underline">anprohealthtech@gmail.com</a>.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Third-Party Links</h2>
                            <p>
                                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                            <p>
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6">
                                <p className="font-semibold text-gray-900">AnPro Solutions</p>
                                <p>Email: <a href="mailto:anprohealthtech@gmail.com" className="text-blue-600 hover:underline">anprohealthtech@gmail.com</a></p>
                                <p>WhatsApp: <a href="https://wa.me/918780464387" className="text-blue-600 hover:underline">+91 87804 64387</a></p>
                                <p>Website: <a href="https://limsapp.in" className="text-blue-600 hover:underline">limsapp.in</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
