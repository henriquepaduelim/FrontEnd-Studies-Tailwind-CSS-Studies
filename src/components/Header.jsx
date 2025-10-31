import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-bold text-lg">StatsCat</span>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition " >Get Started</button>
          </nav>

          {/* Mobile burger com delicious-hamburgers */}
          <div className="md:hidden">
            <button
              className={`hamburger hamburger--push${open ? ' is-active' : ''}`}
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
            >
              <div className="hamburger__box">
                <div className="hamburger__inner"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu*/}
      <div
        className={`md:hidden w-full bg-blue-950 shadow-lg transition-all duration-100 overflow-hidden ${open ? 'max-h-[400px] py-6' : 'max-h-0 py-0'}`}
        style={{ zIndex: 49 }}
      >
        <div className={`flex flex-col items-center gap-4 ${open ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="w-11/12 px-4 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition text-center"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="w-11/12 px-4 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition text-center"
            onClick={() => setOpen(false)}
          >
            Get Started
          </button>
        </div>
      </div>
    </>
  )
}
