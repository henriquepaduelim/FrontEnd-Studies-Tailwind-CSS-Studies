import React from 'react'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="font-bold text-lg">Playbook</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#testimonials" className="hover:text-blue-600 transition">Testimonials</a>
          <a href="#pricing" className="hover:text-blue-600 transition">Pricing</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
          <button className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition">Get Started</button>
        </nav>

        <div className="md:hidden">
          <button className="p-2 rounded-md bg-white/10 backdrop-blur">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
