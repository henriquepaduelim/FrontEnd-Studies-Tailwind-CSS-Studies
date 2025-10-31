import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-white">Playbook</h4>
          <p className="mt-3 text-sm">Soluções para gestão de atletas, análise de performance e scouting.</p>
        </div>

        <div>
          <h5 className="font-semibold text-white">Links</h5>
          <ul className="mt-3 text-sm space-y-2">
            <li><a href="#features" className="hover:text-white transition">Features</a></li>
            <li><a href="#testimonials" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold text-white">Contact</h5>
          <p className="mt-3 text-sm">hello@playbook.com</p>
          <p className="text-sm">+55 11 99999-9999</p>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500">© {new Date().getFullYear()} Playbook. Todos os direitos reservados.</div>
      </div>
    </footer>
  )
}
