import React, { useState } from 'react'

export default function Header() {
  const [open, setOpen] = useState(false)

  const navLinks = [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ]

  // Função para scroll suave
  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" aria-label="Home">
              <img
                src="/assets/logo.png"
                alt="StatsCat Logo"
                className="w-10 h-10 rounded-full object-cover"
                style={{ display: 'block' }}
              />
            </a>
          </div>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-4 text-sm">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition " >Get Started</button>
          </nav>

          {/* Mobile burger menu */}
          <div className="md:hidden flex items-center">
            <button
              className="block p-0 bg-transparent border-none focus:outline-none"
              type="button"
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
            >
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="7" width="32" height="3" rx="1.5" fill="#fff" />
                <rect y="15" width="32" height="3" rx="1.5" fill="#fff" />
                <rect y="23" width="32" height="3" rx="1.5" fill="#fff" />
              </svg>
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
              onClick={e => handleNavClick(e, link.href)}
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
