import { FileText, Camera, Microscope, CheckCircle, MessageCircle, Shield } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Features() {
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set());
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleSections((prev) => new Set(prev).add(index));
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-200 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 relative z-10">

        <div
          ref={(el) => (sectionRefs.current[0] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.has(0) ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`transform transition-all duration-1000 ${visibleSections.has(0) ? 'translate-x-0' : '-translate-x-12'
            }`}>
            <div className="inline-flex items-center space-x-2 bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
              <FileText className="w-4 h-4" />
              <span>AI-Powered TRF Digitization</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:text-teal-600 transition-colors duration-300">
              Stop Typing. Start Scanning.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Upload a photo of any handwritten Test Request Form.
              Our AI extracts patient details and test orders with 99% accuracy, creating orders instantly.
            </p>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-lg font-semibold text-gray-900">
                Result: Zero manual entry. Zero errors. Faster turnaround.
              </p>
            </div>
          </div>
          <div className={`group bg-gradient-to-br from-teal-100 to-blue-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform ${visibleSections.has(0) ? 'translate-x-0 scale-100' : 'translate-x-12 scale-95'
            }`}>
            <img
              src="https://ik.imagekit.io/18tsendxqy/website/trf%20scan.png?tr=f-auto"
              alt="AI-powered TRF digitization - Handwritten test request form being scanned and processed automatically"
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current[1] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.has(1) ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`order-2 lg:order-1 group bg-gradient-to-br from-blue-100 to-teal-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform ${visibleSections.has(1) ? 'translate-x-0 scale-100' : '-translate-x-12 scale-95'
            }`}>
            <img
              src="https://ik.imagekit.io/18tsendxqy/website/scan%20machine.png?tr=f-auto"
              alt="AI instrument screen reading - Automated data extraction from analyzer displays"
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className={`order-1 lg:order-2 transform transition-all duration-1000 ${visibleSections.has(1) ? 'translate-x-0' : 'translate-x-12'
            }`}>
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
              <Camera className="w-4 h-4" />
              <span>AI Instrument Screen Reading</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
              Connect Any Instrument. No HL7 Needed.
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Old analyzer? No problem.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Just point a camera at the instrument screen.
              Our AI reads, interprets, and maps values directly into the patient report—automatically.
            </p>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-6 rounded-xl border border-blue-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
              <p className="text-lg font-semibold text-gray-900">
                No cables. No integrations. No vendor lock-in.
              </p>
            </div>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current[2] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.has(2) ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`transform transition-all duration-1000 ${visibleSections.has(2) ? 'translate-x-0' : '-translate-x-12'
            }`}>
            <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
              <Microscope className="w-4 h-4" />
              <span>Objective AI Analysis</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:text-purple-600 transition-colors duration-300">
              Blood Group & Rapid Test AI
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Standardized. Consistent. Verified.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              AI eliminates subjective reading of blood group agglutination patterns, Dengue, Malaria, Urine strips, and other rapid cards.
            </p>
            <ul className="space-y-4">
              {[
                'Identifies blood groups from agglutination reactions',
                'Detects band intensity in rapid tests',
                'Determines Positive / Negative results',
                'Attaches image proof to reports'
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={`space-y-6 transform transition-all duration-1000 ${visibleSections.has(2) ? 'translate-x-0' : 'translate-x-12'
            }`}>
            <div className="group bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://ik.imagekit.io/18tsendxqy/website/blood%20group.png?tr=f-auto"
                alt="AI blood group identification - Automatic detection of agglutination patterns for accurate blood typing"
                loading="lazy"
                decoding="async"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="group bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <img
                src="https://ik.imagekit.io/18tsendxqy/website/rapid%20card.png?tr=f-auto"
                alt="AI rapid test analysis - Automated reading of diagnostic test cards"
                loading="lazy"
                decoding="async"
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current[3] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.has(3) ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`order-2 lg:order-1 group bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform ${visibleSections.has(3) ? 'translate-x-0 scale-100' : '-translate-x-12 scale-95'
            }`}>
            <img
              src="https://ik.imagekit.io/18tsendxqy/website/ai%20assistance%202.png?tr=f-auto"
              alt="AI-powered delta checks detecting sudden value changes outside physiological limits"
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className={`order-1 lg:order-2 transform transition-all duration-1000 ${visibleSections.has(3) ? 'translate-x-0' : 'translate-x-12'
            }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors duration-300">
              Verify with Confidence. Report with Speed.
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              AI-powered delta checks catch inconsistencies before reports go out.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-slow">
              <p className="text-sm font-semibold text-amber-900 mb-1">AI Detected Anomaly</p>
              <p className="text-sm text-amber-800">Sudden value change outside physiological limits.</p>
            </div>
            <ul className="space-y-4">
              {[
                'Auto-flag abnormal values by age & gender',
                'Delta checks with patient history',
                'One-click bulk approval',
                'Digital signatures & branded PDF reports',
                'Complete audit trail'
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current[4] = el)}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${visibleSections.has(4) ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className={`transform transition-all duration-1000 ${visibleSections.has(4) ? 'translate-x-0' : '-translate-x-12'
            }`}>
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 hover:scale-105 transition-transform duration-300">
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Integration</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 hover:text-green-600 transition-colors duration-300">
              Reports Delivered Automatically on WhatsApp
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Meet patients where they already are.
            </p>
            <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-8 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-pulse-slow">
              <p className="text-base font-semibold text-green-900 mb-1">Zero Extra Cost. Instant Delivery.</p>
              <p className="text-sm text-green-800">Automated WhatsApp delivery included with every subscription—no additional fees.</p>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'PDF reports sent automatically',
                'Invoices & bills delivered instantly',
                'Real-time status updates'
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start space-x-3 transform hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg text-gray-600">
              Automatically sent to patients and doctors via WhatsApp—no printing, no emails, no extra charges.
            </p>
          </div>
          <div className={`group bg-gradient-to-br from-green-100 to-teal-100 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform ${visibleSections.has(4) ? 'translate-x-0 scale-100' : 'translate-x-12 scale-95'
            }`}>
            <img
              src="https://ik.imagekit.io/18tsendxqy/website/whatsapp.png?tr=f-auto"
              alt="Automatic WhatsApp report delivery - Zero extra cost, instant delivery to patients and doctors"
              loading="lazy"
              decoding="async"
              className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div
          ref={(el) => (sectionRefs.current[5] = el)}
          className={`bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-12 transition-all duration-1000 hover:shadow-2xl ${visibleSections.has(5) ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors duration-300">
              Built for Scale & Compliance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Multi-lab & multi-location support',
              'Role-based access control',
              'Secure cloud storage',
              'Inventory & finance management',
              'Full audit logs'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Shield className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-800 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
