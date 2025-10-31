import React from 'react'

const FeatureCard = ({ title, desc, icon }) => (
  <div className="p-6 bg-white/5 rounded-2xl shadow-md border border-white/5 hover:translate-y-[-4px] transition-transform">
    <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl">{icon}</div>
    <h3 className="mt-4 font-semibold text-lg">{title}</h3>
    <p className="mt-2 text-sm text-gray-300">{desc}</p>
  </div>
)

export default function Features() {
  const features = [
    {
      title: 'Athlete management',
      desc: 'Complete profile, injury history, contracts, and wearables integration.',
      icon: '👥'
    },
    {
      title: 'Performance dashboards',
      desc: 'Real-time metrics, comparisons, and customizable visualizations.',
      icon: '📈'
    },
    {
      title: 'Automated reports',
      desc: 'Periodic reports sent by email and exportable as PDF.',
      icon: '📄'
    },
    {
      title: 'Rankings & scouting',
      desc: 'Scoring system and advanced filters to find talents.',
      icon: '🏆'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Main features</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Everything your team needs to manage athletes, analyze performance, and make data-driven decisions.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
