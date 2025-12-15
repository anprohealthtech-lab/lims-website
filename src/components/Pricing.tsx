import { Check, X, Star, Zap } from 'lucide-react';

interface PricingProps {
  onOpenContact: () => void;
}

export default function Pricing({ onOpenContact }: PricingProps) {
  const plans = [
    {
      name: 'Basic Plan',
      price: '₹2,499',
      period: 'month',
      features: [
        { text: 'Lab management', included: true },
        { text: 'Billing & invoicing', included: true },
        { text: 'Reports', included: true },
        { text: 'Finance & inventory', included: true },
        { text: 'AI features', included: false },
        { text: 'WhatsApp integration', included: false }
      ],
      highlighted: false
    },
    {
      name: 'AI Premium',
      price: '₹3,499',
      period: 'month',
      badge: 'Recommended',
      features: [
        { text: 'Everything in Basic', included: true },
        { text: 'AI TRF digitization', included: true },
        { text: 'WhatsApp report delivery', included: true },
        { text: 'AI instrument screen reading', included: true },
        { text: 'Abnormal value flagging', included: true }
      ],
      highlighted: true
    }
  ];

  const offers = [
    { duration: '3 Months', bonus: '1 Instrument Interface FREE' },
    { duration: '6 Months', bonus: '2 Instrument Interfaces FREE' },
    { duration: '12 Months', bonus: '5 Instrument Interfaces FREE' }
  ];

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 ${plan.highlighted
                  ? 'bg-gradient-to-br from-blue-600 to-teal-600 text-white shadow-2xl scale-105'
                  : 'bg-white border-2 border-gray-200'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-bold flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>{plan.badge}</span>
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3
                  className={`text-2xl font-bold mb-4 ${plan.highlighted ? 'text-white' : 'text-gray-900'
                    }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span
                    className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`ml-2 ${plan.highlighted ? 'text-blue-100' : 'text-gray-500'
                      }`}
                  >
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    {feature.included ? (
                      <Check
                        className={`w-6 h-6 flex-shrink-0 ${plan.highlighted ? 'text-blue-100' : 'text-green-600'
                          }`}
                      />
                    ) : (
                      <X
                        className={`w-6 h-6 flex-shrink-0 ${plan.highlighted ? 'text-red-300' : 'text-red-500'
                          }`}
                      />
                    )}
                    <span
                      className={
                        plan.highlighted
                          ? 'text-blue-50'
                          : feature.included
                            ? 'text-gray-700'
                            : 'text-gray-400 line-through'
                      }
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onOpenContact}
                className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:shadow-xl'
                  }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-12 border border-yellow-200">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-yellow-200 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Zap className="w-4 h-4" />
              <span>Limited-Time Offers</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Instrument Interface Offers
            </h3>
            <p className="text-gray-600">
              Connect more instruments and save more
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="text-3xl font-bold text-blue-600 mb-3">
                  {offer.duration}
                </div>
                <div className="text-lg font-semibold text-gray-900">
                  {offer.bonus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
