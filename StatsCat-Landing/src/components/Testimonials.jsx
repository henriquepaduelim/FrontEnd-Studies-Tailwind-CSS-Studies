import React from 'react'

const Testimonial = ({ quote, name, role }) => (
  <div className="p-6 bg-white/20 rounded-xl shadow-lg border border-white/10">
    <p className="text-gray-950">"{quote}"</p>
    <div className="mt-4 text-sm text-gray-950">— {name}, <span className="text-gray-950">{role}</span></div>
  </div>
)

export default function Testimonials() {
  const data = [
    { quote: 'The platform transformed our athlete management — simple and powerful.', name: 'Carlos Silva', role: 'Technical Director, ABC Club' },
    { quote: 'Now we make decisions with real data, reduced injuries and improved performance.', name: 'Mariana Costa', role: 'Physiotherapist, XYZ Club' }
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">What our clients say</h2>
          <p className="mt-2 text-gray-950">Real testimonials from football professionals.</p>
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