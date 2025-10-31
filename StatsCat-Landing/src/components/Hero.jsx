import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas, faStopwatch20 } from '@fortawesome/free-solid-svg-icons'

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/football-bg.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">Manage athletes and clubs intelligently</h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">Performance dashboards, automated reports, and rankings — all in a fast platform built for modern football teams.</p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <a href="#contact" className="inline-flex items-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-md shadow-lg">Request Demo</a>
          <a href="#features" className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 hover:bg-white/20 transition rounded-md">Learn More</a>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faEarthAmericas} className="mx-auto my-auto" style={{ fontSize: '1.5rem' }} />
            </span>
            <span>Trusted by clubs worldwide</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <FontAwesomeIcon icon={faStopwatch20} className="mx-auto my-auto" style={{ fontSize: '1.5rem' }} />
            </span>
            <span>Analytics-first</span>
          </div>
        </div>
      </div>
    </section>
  )
}
