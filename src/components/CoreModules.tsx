import { Users, Beaker, DollarSign, FileText, Palette, GitBranch, Building2, Smartphone, AlertCircle, CheckCircle, Lightbulb, Sparkles, Code, Network, Heart, ChevronRight, Play } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface CoreModulesProps {
  onOpenContact: () => void;
}

export default function CoreModules({ onOpenContact }: CoreModulesProps) {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const modules = [
    {
      icon: Users,
      title: 'Smart Accession',
      subtitle: 'Front Desk',
      problem: 'Long queues and data entry errors at reception.',
      solution: 'A lightning-fast registration module designed for high-volume labs.',
      keyCapability: 'Predictive Patient Search',
      keyDescription: 'As you type a phone number, the system pulls up the patient\'s entire history, auto-filling demographics and flagging unpaid dues.',
      benefit: 'Reduces registration time by 60% and eliminates duplicate patient records.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Beaker,
      title: 'Laboratory Operations',
      subtitle: 'The Engine',
      problem: 'Losing track of samples and delayed turnaround times (TAT).',
      solution: 'End-to-end sample lifecycle tracking with visual cues.',
      keyCapability: 'Color-Coded Status Workflow',
      keyDescription: 'Every sample has a live status (Collected → In Transit → Processing → Verified).',
      benefit: 'Lab managers can instantly spot bottlenecks. If a sample is stuck in "Processing" for too long, it gets flagged.',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: DollarSign,
      title: 'Financial Management',
      subtitle: 'Billing',
      problem: 'Revenue leakage and complex B2B settlements.',
      solution: 'An integrated billing system that locks reports until payment (optional).',
      keyCapability: 'Multi-Tier Rate Lists',
      keyDescription: 'Automatically apply different prices for Walk-in patients, B2B partners, and Insurance/Corporate clients.',
      benefit: 'Ensures 100% revenue capture. Daily Cash Reconciliation reports prevent theft and mismanagement at the counter.',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: FileText,
      title: 'Reporting & Delivery',
      subtitle: 'Patient Experience',
      problem: 'Patients calling repeatedly for reports; unreadable formats.',
      solution: 'Automated, multi-channel delivery of professional reports.',
      keyCapability: 'Smart PDF Generation',
      keyDescription: 'Reports include historical trend graphs for thyroid/diabetes, QR codes for verification, and dynamic comments based on result values.',
      benefit: 'Reduces front-desk inquiries by 80%. Patients receive reports on WhatsApp the moment they are verified.',
      gradient: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Palette,
      title: 'Advanced Report Templating',
      subtitle: 'Customization',
      problem: 'Rigid report formats that require a developer to change.',
      solution: 'A powerful WYSIWYG editor (CKEditor) allowing complete design freedom.',
      keyCapability: 'Dynamic Template Engine',
      keyDescription: 'Create distinct layouts for Pathology, Radiology, and Histopathology. Drag-and-drop headers, footers, and digital signatures.',
      benefit: 'Professional, branded reports that look exactly how you want them, building trust with referring doctors.',
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      icon: GitBranch,
      title: 'Workflow Automation Engine',
      subtitle: 'Compliance',
      problem: 'Complex tests (like Biopsies or Cultures) involve multiple steps that simple LIMS cannot track.',
      solution: 'A configurable workflow system (powered by SurveyJS) that enforces Standard Operating Procedures (SOPs).',
      keyCapability: 'Protocol Enforcement',
      keyDescription: 'Define mandatory checklists for each stage (e.g., Grossing → Processing → Staining → Reporting).',
      benefit: 'Ensures 100% compliance for NABL/CAP accreditation and reduces technical errors.',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Building2,
      title: 'B2B & Outsourcing Portal',
      subtitle: 'Growth',
      problem: 'Managing samples sent to reference labs and tracking B2B payments is chaotic.',
      solution: 'A dedicated module for managing external relationships.',
      keyCapability: 'Bi-Directional Sync',
      keyDescription: 'Automatically dispatch samples to reference labs and pull results back. Manage credit limits and monthly billing for collection centers.',
      benefit: 'Scale your business by becoming a reference lab for others, or seamlessly outsourcing specialized tests.',
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Phlebotomy App',
      subtitle: 'Logistics',
      problem: 'Home collections are often unorganized, leading to missed appointments and lost samples.',
      solution: 'A dedicated Android app for field staff.',
      keyCapability: 'Live Field Management',
      keyDescription: 'Assign visits, track phlebotomists via GPS, and capture digital consent/signatures at the patient\'s doorstep.',
      benefit: '"Uber-like" experience for patients and complete visibility for the lab manager.',
      gradient: 'from-cyan-500 to-blue-500'
    }
  ];

  const whyChoose = [
    {
      icon: Sparkles,
      title: 'AI-First Core',
      description: 'Not just a database, but an intelligent assistant that reads forms and screens.'
    },
    {
      icon: Code,
      title: 'Zero-Code Customization',
      description: 'Edit report templates and workflows without hiring a programmer.'
    },
    {
      icon: Network,
      title: 'Hybrid Architecture',
      description: 'Works for single labs, multi-center chains, and B2B networks.'
    },
    {
      icon: Heart,
      title: 'Patient-Centric',
      description: 'WhatsApp integration and smart reports put the patient experience first.'
    }
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
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-300 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 hover:text-blue-600 transition-colors duration-300">
            Core Modules Deep Dive
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for every operational challenge in your lab
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-20">
          {modules.map((module, index) => {
            const isExpanded = expandedModule === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  } ${isExpanded ? 'lg:col-span-2' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setExpandedModule(isExpanded ? null : index)}
                  className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 bg-gradient-to-br ${module.gradient} rounded-xl flex items-center justify-center flex-shrink-0 transform transition-transform duration-300 ${isExpanded ? 'scale-110' : ''}`}>
                      <module.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-1">
                            {module.title}
                          </h3>
                          <p className="text-sm text-gray-500 font-medium">
                            {module.subtitle}
                          </p>
                        </div>
                        <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>

                <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                  <div className="p-6 pt-0 space-y-4 border-t border-gray-100">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">The Problem</p>
                        <p className="text-gray-600">{module.problem}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">The Solution</p>
                        <p className="text-gray-600">{module.solution}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold text-gray-900">Key Capability: {module.keyCapability}</p>
                        <p className="text-gray-600">{module.keyDescription}</p>
                      </div>
                    </div>

                    <div className={`bg-gradient-to-r ${module.gradient} bg-opacity-10 rounded-lg p-4`}>
                      <p className="font-semibold text-gray-900 mb-1">Benefit</p>
                      <p className="text-gray-700">{module.benefit}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '800ms' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LIMS v2?
            </h2>
            <p className="text-lg text-gray-600">
              The competitive edge your lab deserves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:scale-105 group"
                style={{ transitionDelay: `${(index + 8) * 100}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '1000ms' }}>
          <button
            onClick={onOpenContact}
            className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center space-x-2 animate-gradient shadow-lg shadow-blue-500/30">
            <span>Start Free Trial</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl border border-blue-200 hover:bg-blue-50 hover:scale-105 transition-all duration-300 font-semibold text-lg flex items-center gap-2 shadow-lg">
            <Play className="w-5 h-5 fill-current" />
            <span>Watch Demo</span>
          </button>
        </div>
      </div>
    </section>
  );
}
