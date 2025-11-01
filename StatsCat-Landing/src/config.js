// Template Configuration
// Customize these values to match your brand/business

export const config = {
  // Company Information
  company: {
    name: "StatsCat",
    tagline: "Manage athletes and clubs intelligently",
    description: "Performance dashboards, automated reports, and rankings — all in a fast platform built for modern football teams.",
    logo: "/assets/logo.png"
  },

  // Contact Information
  contact: {
    email: "hello@statscat.com",
    phone: "+1 (555) 123-4567",
    address: "São Paulo, Brazil",
    adminEmail: "admin@statscat.com"
  },

  // Social Media (add your social links)
  social: {
    twitter: "https://twitter.com/yourbrand",
    linkedin: "https://linkedin.com/company/yourbrand",
    facebook: "https://facebook.com/yourbrand",
    instagram: "https://instagram.com/yourbrand"
  },

  // Theme Colors (Tailwind CSS classes)
  theme: {
    primary: "blue-600",
    primaryHover: "blue-700",
    secondary: "blue-100",
    accent: "orange-500",
    background: "blue-100"
  },

  // Navigation Links
  navigation: [
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' }
  ],

  // Pricing Plans
  pricing: {
    plans: [
      {
        title: 'Starter',
        price: '$49',
        period: 'month',
        description: 'Perfect for small clubs and academies',
        features: [
          'Up to 50 athletes',
          'Basic performance dashboards',
          'Monthly reports',
          'Email support',
          'Basic scheduling'
        ],
        highlighted: false
      },
      {
        title: 'Professional',
        price: '$149',
        period: 'month',
        description: 'Ideal for professional clubs',
        features: [
          'Up to 200 athletes',
          'Advanced analytics',
          'Real-time dashboards',
          'Custom reports',
          'Priority support',
          'Injury tracking',
          'Scouting tools'
        ],
        highlighted: true
      },
      {
        title: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        description: 'For large organizations',
        features: [
          'Unlimited athletes',
          'Custom integrations',
          'White-label solution',
          'Dedicated support',
          'Custom training',
          'API access',
          'Multi-club management'
        ],
        highlighted: false
      }
    ]
  },

  // Testimonials
  testimonials: [
    { 
      quote: 'The platform transformed our athlete management — simple and powerful.', 
      name: 'Carlos Silva', 
      role: 'Technical Director, ABC Club' 
    },
    { 
      quote: 'Now we make decisions with real data, reduced injuries and improved performance.', 
      name: 'Mariana Costa', 
      role: 'Physiotherapist, XYZ Club' 
    }
  ],

  // SEO Meta
  seo: {
    title: "StatsCat - Sports Analysis and Management",
    description: "Advanced sports management platform for athlete performance tracking, analytics, and team management.",
    keywords: "sports management, athlete tracking, performance analytics, team management, sports tech"
  }
}
