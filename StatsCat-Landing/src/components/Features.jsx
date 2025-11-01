import React, { useRef, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faMagnifyingGlassChart, faFilePdf, faRankingStar, faShieldAlt, faCalendarCheck, faChartLine, faComments } from '@fortawesome/free-solid-svg-icons'

const FeatureCard = ({ title, desc, icon }) => (
  <div className="group perspective min-w-[300px] h-64 snap-center mx-2">
    <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
      <div className="absolute inset-0 flex items-center justify-center bg-blue-500 rounded-2xl shadow-md border border-white/5 text-white text-6xl backface-hidden">
        {icon}
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 rounded-2xl shadow-md border border-white/5 text-gray-950 px-6 py-8 rotate-y-180 backface-hidden">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-center">{desc}</p>
      </div>
    </div>
  </div>
)

export default function Features() {
  const features = [
    {
      title: 'Athlete management',
      desc: 'Complete profile, injury history, contracts, and wearables integration.',
      icon: <FontAwesomeIcon icon={faUsers} />
    },
    {
      title: 'Performance dashboards',
      desc: 'Real-time metrics, comparisons, and customizable visualizations.',
      icon: <FontAwesomeIcon icon={faMagnifyingGlassChart} />
    },
    {
      title: 'Automated reports',
      desc: 'Periodic reports sent by email and exportable as PDF.',
      icon: <FontAwesomeIcon icon={faFilePdf} />
    },
    {
      title: 'Rankings & scouting',
      desc: 'Scoring system and advanced filters to find talents.',
      icon: <FontAwesomeIcon icon={faRankingStar} />
    },
    {
      title: 'Security & privacy',
      desc: 'Advanced data protection and privacy controls for all users.',
      icon: <FontAwesomeIcon icon={faShieldAlt} />
    },
    {
      title: 'Scheduling',
      desc: 'Integrated calendar for matches, training, and events.',
      icon: <FontAwesomeIcon icon={faCalendarCheck} />
    },
    {
      title: 'Progress tracking',
      desc: 'Monitor athlete development and set personalized goals.',
      icon: <FontAwesomeIcon icon={faChartLine} />
    },
    {
      title: 'Feedback & communication',
      desc: 'Direct messaging and feedback tools for coaches and athletes.',
      icon: <FontAwesomeIcon icon={faComments} />
    }
  ]

  // Carrossel infinito: duplicando os cards para efeito contínuo
  const carouselFeatures = [...features, ...features]
  const cardWidth = 320 // px
  const visibleCards = 4
  const totalCards = features.length
  const carouselLength = carouselFeatures.length
  const carouselRef = useRef(null)

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = cardWidth * totalCards
    }
  }, [cardWidth, totalCards])

  // Reposiciona o scroll para manter o efeito infinito sem pulos
  const handleScroll = () => {
    const el = carouselRef.current
    if (!el) return
    if (el.scrollLeft < cardWidth) {
      el.scrollLeft += cardWidth * totalCards
    }
    else if (el.scrollLeft > cardWidth * (carouselLength - visibleCards - 1)) {
      el.scrollLeft -= cardWidth * totalCards
    }
  }

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-black/0 to-black/5">
      <div className="max-w-full mx-auto px-1">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Features</h2>
          <p className="mt-3 text-gray-950 max-w-2xl mx-auto">Everything your team needs to manage athletes, analyze performance, and make data-driven decisions.</p>
        </div>
        <div
          ref={carouselRef}
          className="mt-12 overflow-x-auto no-scrollbar flex items-center px-4"
          style={{
            width: '100%',
            paddingLeft: '1rem',
            paddingRight: '1rem',
            height: '320px',
            maxHeight: '320px',
            overflowY: 'hidden',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none' // IE/Edge
          }}
          onScroll={handleScroll}
        >
          <div
            className="flex gap-6"
            style={{ width: `${cardWidth * carouselLength}px`, height: '260px' }}
          >
            {carouselFeatures.map((f, idx) => (
              <div key={f.title + idx} style={{ width: `${cardWidth}px`, flex: '0 0 auto' }}>
                <FeatureCard {...f} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
