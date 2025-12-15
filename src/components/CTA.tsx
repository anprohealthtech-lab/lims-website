import { ChevronRight, Sparkles } from 'lucide-react';

interface CTAProps {
  onOpenContact: () => void;
}

export default function CTA({ onOpenContact }: CTAProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500 bg-opacity-50 text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          <span>Transform Your Lab Today</span>
        </div>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Ready to Transform Your Lab?
        </h2>

        <p className="text-xl sm:text-2xl text-blue-100 mb-4">
          Anpro LIMS v2 isn't just software.
        </p>

        <p className="text-2xl sm:text-3xl font-semibold text-white mb-12">
          It's an intelligent operating system for pathology labs.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="group px-10 py-5 bg-white text-blue-600 rounded-xl hover:bg-blue-50 hover:shadow-2xl hover:scale-105 transition-all duration-300 font-bold text-lg flex items-center space-x-2">
            <span>Start Free Trial</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onOpenContact}
            className="px-10 py-5 bg-transparent text-white rounded-xl border-2 border-white hover:bg-white hover:text-blue-600 transition-all duration-300 font-bold text-lg">
            Book a Demo Today
          </button>
        </div>
      </div>
    </section>
  );
}
