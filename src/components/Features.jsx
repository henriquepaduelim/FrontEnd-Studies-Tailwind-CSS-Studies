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
      title: 'Gestão de atletas',
      desc: 'Perfil completo, histórico de lesões, contratos e integração com wearables.',
      icon: '👥'
    },
    {
      title: 'Dashboards de desempenho',
      desc: 'Métricas em tempo real, comparativos e visualizações customizáveis.',
      icon: '📈'
    },
    {
      title: 'Relatórios automáticos',
      desc: 'Relatórios periódicos enviados por e-mail e exportáveis em PDF.',
      icon: '📄'
    },
    {
      title: 'Rankings e scouting',
      desc: 'Sistema de pontuação e filtros avançados para encontrar talentos.',
      icon: '🏆'
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Funcionalidades principais</h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">Tudo que sua equipe precisa para gerenciar atletas, analisar desempenho e tomar decisões baseadas em dados.</p>
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
