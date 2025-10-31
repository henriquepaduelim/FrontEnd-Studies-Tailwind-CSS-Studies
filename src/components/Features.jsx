import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMagnifyingGlassChart, faFilePdf, faRankingStar } from '@fortawesome/free-solid-svg-icons'

const FeatureCard = ({ title, desc, icon }) => {
  return (
    <div className="group perspective">
      <div className="relative w-full h-64 transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front: ícone grande */}
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl shadow-md border border-white/5 text-white text-6xl backface-hidden">
          {icon}
        </div>
        {/* Back: texto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-md border border-white/5 text-gray-950 px-6 py-8 rotate-y-180 backface-hidden">
          <h3 className="font-semibold text-lg mb-2">{title}</h3>
          <p className="text-sm text-center">{desc}</p>
        </div>
      </div>
    </div>
  )
}

export default function Features() {
  const features = [
    {
      title: 'Gestão de atletas',
      desc: 'Perfil completo, histórico de lesões, contratos e integração com wearables.',
      icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
      title: 'Dashboards de desempenho',
      desc: 'Métricas em tempo real, comparativos e visualizações customizáveis.',
      icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />
    },
    {
      title: 'Relatórios automáticos',
      desc: 'Relatórios periódicos enviados por e-mail e exportáveis em PDF.',
      icon: <FontAwesomeIcon icon={faFilePdf} />
    },
    {
      title: 'Rankings e scouting',
      desc: 'Sistema de pontuação e filtros avançados para encontrar talentos.',
      icon: <FontAwesomeIcon icon={faRankingStar} />
    }
  ]

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Funcionalidades principais</h2>
          <p className="mt-3 text-gray-950 max-w-2xl mx-auto">Tudo que sua equipe precisa para gerenciar atletas, analisar desempenho e tomar decisões baseadas em dados.</p>
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

// CSS extra para flip
// Adicione em index.css:
// .perspective { perspective: 1200px; }
// .transform-style-preserve-3d { transform-style: preserve-3d; }
// .backface-hidden { backface-visibility: hidden; }
// .rotate-y-180 { transform: rotateY(180deg); }
