import { Users, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            <span>Our Story</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Anpro Solutions
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <div className="flex items-start space-x-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Founded by a <span className="font-semibold text-blue-600">Doctor</span> and an{' '}
                <span className="font-semibold text-teal-600">IIM alumnus</span>, Anpro blends deep clinical
                understanding with enterprise execution.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                The founding team brings experience from{' '}
                <span className="font-medium text-gray-800">Adani</span>,{' '}
                <span className="font-medium text-gray-800">Sterling Accuris</span>,{' '}
                <span className="font-medium text-gray-800">Shalby Hospitals</span>, and{' '}
                <span className="font-medium text-gray-800">Intas</span>, building technology that truly
                understands lab workflows.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl p-8 border border-blue-100">
            <p className="text-center text-2xl font-semibold text-gray-900">
              Building technology that truly understands lab workflows
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
