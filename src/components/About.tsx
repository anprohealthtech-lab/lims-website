import { Users, Microscope, GraduationCap, Activity, ShieldCheck, Stethoscope } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Clinic & Management",
      desc: "Founded by an IIM Ahmedabad Alumnus and a Medical Doctor."
    },
    {
      icon: <Microscope className="w-6 h-6" />,
      title: "Deep Alignment",
      desc: "LIMS designed by people who understand real diagnostic workflows."
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Operational Efficiency",
      desc: "Improving accuracy and enabling laboratories to scale with confidence."
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 bg-blue-100/80 backdrop-blur-sm text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-blue-200">
            <Users className="w-4 h-4" />
            <span>Who We Are</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Medicine Meets <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Management</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            AnPro is built on the belief that laboratory software must be designed by people who understand both clinical nuances and business operations.
          </p>
        </div>

        {/* Main Content Card */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

          {/* Left Side: Story */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-gray-100 hover:shadow-3xl transition-shadow duration-500 relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-teal-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                  <Stethoscope className="w-5 h-5" />
                </span>
                Our Philosophy
              </h3>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  We specialize in building <span className="font-semibold text-blue-700">Laboratory Information Management Systems (LIMS)</span> that are deeply aligned with real-world diagnostic workflows.
                </p>
                <p>
                  Our solutions go beyond basic data entry. They are engineered to <span className="font-semibold text-teal-700">improve accuracy</span>, streamline complex operations, ensure rigorous compliance, and enable laboratories to <span className="font-semibold text-gray-900">scale with absolute confidence</span>.
                </p>
                <p className="font-medium text-gray-900 italic border-l-4 border-blue-500 pl-4 py-1 bg-gray-50 rounded-r-lg">
                  "At AnPro, technology is not an add-on—it is an enabler of better clinical decisions, operational efficiency, and patient trust."
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group delay-[${index * 200}ms]`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-100 to-teal-100 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
