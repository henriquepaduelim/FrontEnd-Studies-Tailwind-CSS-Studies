import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faStar, faUsers, faRocket } from '@fortawesome/free-solid-svg-icons'

const PricingCard = ({ title, price, period, description, features, highlighted, icon }) => (
  <div className={`relative p-8 rounded-xl shadow-lg border transition-all duration-300 hover:scale-105 ${
    highlighted 
      ? 'bg-blue-600 text-white border-blue-500 transform scale-105' 
      : 'bg-white/5 text-gray-950 border-white/5'
  }`}>
    {highlighted && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
          <FontAwesomeIcon icon={faStar} className="text-xs" />
          Most Popular
        </span>
      </div>
    )}
    
    <div className="text-center mb-6">
      <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl ${
        highlighted ? 'bg-white/20' : 'bg-blue-100'
      }`}>
        <FontAwesomeIcon icon={icon} className={highlighted ? 'text-white' : 'text-blue-600'} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-3">
        <span className="text-3xl font-extrabold">{price}</span>
        <span className={`text-sm ${highlighted ? 'text-blue-200' : 'text-gray-600'}`}>/{period}</span>
      </div>
      <p className={`text-sm ${highlighted ? 'text-blue-100' : 'text-gray-700'}`}>{description}</p>
    </div>

    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center gap-3">
          <FontAwesomeIcon 
            icon={faCheck} 
            className={`text-sm ${highlighted ? 'text-green-300' : 'text-green-600'}`} 
          />
          <span className="text-sm">{feature}</span>
        </li>
      ))}
    </ul>

    <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
      highlighted
        ? 'bg-white text-blue-600 hover:bg-gray-100'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    }`}>
      Get Started
    </button>
  </div>
)

export default function Pricing() {
  const plans = [
    {
      title: 'Starter',
      price: '$49',
      period: 'month',
      description: 'Perfect for small clubs and academies',
      icon: faUsers,
      features: [
        'Up to 50 athletes',
        'Basic performance dashboards',
        'Monthly reports',
        'Email support',
        'Basic scheduling'
      ],
      highlighted: false
    },
    {
      title: 'Professional',
      price: '$149',
      period: 'month',
      description: 'Ideal for professional clubs',
      icon: faRocket,
      features: [
        'Up to 200 athletes',
        'Advanced analytics',
        'Real-time dashboards',
        'Custom reports',
        'Priority support',
        'Injury tracking',
        'Scouting tools'
      ],
      highlighted: true
    },
    {
      title: 'Enterprise',
      price: 'Custom',
      period: 'contact us',
      description: 'For large organizations',
      icon: faStar,
      features: [
        'Unlimited athletes',
        'Custom integrations',
        'White-label solution',
        'Dedicated support',
        'Custom training',
        'API access',
        'Multi-club management'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-950">Choose Your Plan</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Flexible pricing options designed to grow with your club. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">All plans include a 14-day free trial</p>
          <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ Cancel anytime</span>
            <span>✓ 24/7 support</span>
          </div>
        </div>
      </div>
    </section>
  )
}