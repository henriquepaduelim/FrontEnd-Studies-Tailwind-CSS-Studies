import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const ContactInfo = ({ icon, title, info }) => (
  <div className="flex items-start gap-4 p-6 bg-white/5 rounded-xl border border-white/5">
    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
      <FontAwesomeIcon icon={icon} />
    </div>
    <div>
      <h3 className="font-semibold text-gray-950 mb-1">{title}</h3>
      <p className="text-gray-700 text-sm">{info}</p>
    </div>
  </div>
)

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' })
    alert('Message sent! We will get back to you soon.')
  }

  const contactInfo = [
    {
      icon: faEnvelope,
      title: 'Email',
      info: 'hello@statscat.com'
    },
    {
      icon: faPhone,
      title: 'Phone',
      info: '+1 (555) 123-4567'
    },
    {
      icon: faMapMarkerAlt,
      title: 'Office',
      info: 'Toronto, Canada'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/0 to-black/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-950">Get in touch</h2>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">Ready to revolutionize your team management? Let's talk.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/5 p-8 rounded-xl shadow-lg border border-white/5">
            <h3 className="text-xl font-semibold text-gray-950 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Club/Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition"
                  placeholder="Your club or organization"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/80 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-950 mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <ContactInfo key={index} {...info} />
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-xl text-white shadow-lg">
              <h4 className="text-lg font-semibold mb-4">Ready for a demo?</h4>
              <p className="text-blue-100 mb-6">
                See StatsCat in action with a personalized demo tailored to your club's needs.
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}