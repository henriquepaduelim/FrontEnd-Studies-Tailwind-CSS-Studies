import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-bold text-white">Playbook</h4>
          <p className="mt-3 text-sm">Solutions for athlete management, performance analytics, and scouting.</p>
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
          <p className="text-sm">+1 (555) 123-4567</p>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6 text-sm text-gray-500 text-center">© {new Date().getFullYear()} Playbook. All rights reserved.</div>
      </div>
    </footer>
  )
}
