import { CheckCircle, Zap, Shield, TrendingUp, Clock, Users } from 'lucide-react';

export default function WhyAnpro() {
  const benefits = [
    { icon: Zap, text: 'Zero data entry' },
    { icon: Shield, text: 'No HL7 dependency' },
    { icon: Clock, text: 'Faster verification' },
    { icon: Users, text: 'Better patient experience' },
    { icon: TrendingUp, text: 'Lower operational overhead' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Why Anpro LIMS v2?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Most labs struggle with manual data entry, disconnected instruments, delayed reporting,
            and rising operational costs.
          </p>
          <p className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
            Anpro LIMS v2 replaces chaos with intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex items-center space-x-4 p-6 bg-gradient-to-br from-blue-50 to-teal-50 rounded-xl hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-100"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-800">{benefit.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
