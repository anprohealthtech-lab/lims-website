import { TrendingUp, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Dashboard() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const features = [
    'Live sample tracking (Collection → Transit → Processing)',
    'Pending approvals & critical alerts',
    'Revenue, billing & financial overview',
    'Phlebotomist & collection tracking'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
            One Dashboard. Total Control.
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your lab's command center—everything on one screen.
          </p>
        </div>

        <div className={`bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 mb-12 group transition-all duration-1000 hover:shadow-3xl ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}>
          <img
            src="https://ik.imagekit.io/18tsendxqy/website/dashboard%20view.jpeg?tr=f-auto"
            alt="AnPro LIMS Dashboard - Real-time lab management interface showing sample tracking, analytics, and critical alerts"
            loading="lazy"
            decoding="async"
            className="w-full h-auto group-hover:scale-105 transition-transform duration-700"
          />
        </div>

        <div className={`bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-200 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.2s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-all duration-300 transform hover:translate-x-2 group"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
