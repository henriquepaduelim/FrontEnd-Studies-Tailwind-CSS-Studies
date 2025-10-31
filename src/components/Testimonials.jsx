import React from 'react'

const Testimonial = ({ quote, name, role }) => (
  <div className="p-6 bg-white/5 rounded-xl shadow-inner border border-white/5">
    <p className="text-gray-200">“{quote}”</p>
    <div className="mt-4 text-sm text-gray-400">— {name}, <span className="text-gray-300">{role}</span></div>
  </div>
)

export default function Testimonials() {
  const data = [
    { quote: 'A plataforma transformou nossa gestão de atletas — simples e poderosa.', name: 'Carlos Silva', role: 'Diretor Técnico, Clube ABC' },
    { quote: 'Agora tomamos decisões com dados reais, reduziu lesões e melhorou performance.', name: 'Mariana Costa', role: 'Fisioterapeuta, Clube XYZ' }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">O que nossos clientes dizem</h2>
          <p className="mt-2 text-gray-400">Depoimentos reais de profissionais do futebol.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
