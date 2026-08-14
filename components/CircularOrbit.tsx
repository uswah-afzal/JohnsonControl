'use client'

import React, { useState } from 'react'
import { Server, Activity, GraduationCap, Building2, Factory, ShieldCheck, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export interface OrbitItem {
  id: string
  title: string
  tagline: string
  stats: string
  statLabel: string
  description: string
  icon: React.ReactNode
  link: string
}

export const defaultOrbitItems: OrbitItem[] = [
  {
    id: 'data-centers',
    title: 'Data Centers & Cloud AI',
    tagline: '99.999% Mission Critical Reliability',
    stats: '40% Less',
    statLabel: 'Cooling Power Consumption',
    description: 'High-density precision liquid cooling, York® centrifugal chillers, and automated predictive thermal control for hyperscale facilities.',
    icon: <Server className="w-5 h-5" />,
    link: '/industries'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Life Sciences',
    tagline: 'Zero-Downtime Infection Isolation',
    stats: '100%',
    statLabel: 'Cleanroom Pressure Compliance',
    description: 'Specialized negative pressure room controls, air filtration, and real-time medical asset monitoring powered by OpenBlue™.',
    icon: <Activity className="w-5 h-5" />,
    link: '/industries'
  },
  {
    id: 'education',
    title: 'K-12 & Higher Education',
    tagline: 'Optimized Learning Environments',
    stats: '35%',
    statLabel: 'District Utility Cost Reduction',
    description: 'Clean indoor air quality (IAQ) monitoring, intelligent smart campus security, and energy performance contracts.',
    icon: <GraduationCap className="w-5 h-5" />,
    link: '/industries'
  },
  {
    id: 'commercial',
    title: 'Commercial Real Estate',
    tagline: 'Premium Tenant Comfort & Net-Zero',
    stats: '$2.8M+',
    statLabel: 'Avg Annual Building Savings',
    description: 'Transforming legacy office towers into autonomous net-zero workplaces with adaptive HVAC and contactless access.',
    icon: <Building2 className="w-5 h-5" />,
    link: '/industries'
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    tagline: 'High-Efficiency Process Cooling',
    stats: '25%',
    statLabel: 'Peak Demand Peak Savings',
    description: 'Industrial refrigeration, heavy duty HVAC, toxic gas detection, and plant safety management systems.',
    icon: <Factory className="w-5 h-5" />,
    link: '/industries'
  },
  {
    id: 'government',
    title: 'Government & Defense',
    tagline: 'Cyber-Secured Critical Infrastructure',
    stats: 'ISO 27001',
    statLabel: 'Certified Cyber Protection',
    description: 'FedRAMP compliant smart building automation, resilient microgrids, and perimeter defense systems.',
    icon: <ShieldCheck className="w-5 h-5" />,
    link: '/industries'
  }
]

export default function CircularOrbit({ items = defaultOrbitItems }: { items?: OrbitItem[] }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = items[activeIndex]

  return (
    <div className="orbit-section-wrapper relative py-12 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-aqua/10 via-sky-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Circular Orbit Motion */}
          <div className="lg:col-span-6 flex justify-center items-center relative min-h-[440px] sm:min-h-[500px]">
            {/* Outer Orbit Track */}
            <div className="orbit-track relative w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/15 flex justify-center items-center">
              
              {/* Outer Rotating Dotted Ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-aqua/30 animate-[spin_60s_linear_infinite]" />

              {/* Central Core Sphere */}
              <div className="orbit-center-core w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-gradient-to-br from-[#09253d] to-[#041221] border border-aqua/40 flex flex-col items-center justify-center p-3 text-center shadow-[0_0_40px_rgba(118,227,212,0.2)]">
                <span className="text-[10px] font-bold tracking-widest text-aqua uppercase">JCI ORBIT</span>
                <strong className="text-xs sm:text-sm font-bold text-white mt-1 leading-tight">{activeItem.title.split('&')[0]}</strong>
                <span className="text-[9px] text-white/60 mt-0.5">{activeIndex + 1} of {items.length}</span>
              </div>

              {/* Orbit Satellite Nodes */}
              {items.map((item, idx) => {
                const angle = (idx * (360 / items.length) - 90) * (Math.PI / 180)
                const radius = 160 // px for 320px container (desktop scale adjust in CSS)
                const radiusSm = 210 // px for 420px container
                
                // Active node calculation
                const isActive = idx === activeIndex

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(idx)}
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`orbit-node absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      isActive
                        ? 'bg-aqua text-navy scale-125 border-2 border-white shadow-[0_0_25px_rgba(118,227,212,0.8)] z-20'
                        : 'bg-[#09253d] text-white/80 border border-white/20 hover:border-aqua hover:text-aqua hover:scale-110 z-10'
                    }`}
                    style={{
                      transform: `translate(${Math.cos(angle) * 150}px, ${Math.sin(angle) * 150}px) ${isActive ? 'scale(1.25)' : 'scale(1)'}`,
                    }}
                    aria-label={`Select ${item.title}`}
                  >
                    {item.icon}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Dynamic Active Industry Content Card */}
          <div className="lg:col-span-6">
            <div className="orbit-content-card bg-[#061c30]/80 border border-white/15 backdrop-blur-xl rounded-2xl p-8 sm:p-10 shadow-2xl transition-all duration-500">
              
              <div className="flex items-center gap-3 mb-4">
                <span className="p-2.5 bg-aqua/10 text-aqua border border-aqua/30 rounded-lg">
                  {activeItem.icon}
                </span>
                <div>
                  <span className="text-xs font-semibold tracking-wider text-aqua uppercase">Industry Expertise</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">{activeItem.title}</h3>
                </div>
              </div>

              <p className="text-aqua font-medium text-base mb-4">{activeItem.tagline}</p>
              
              <p className="text-white/80 text-sm leading-relaxed mb-6">
                {activeItem.description}
              </p>

              {/* Dynamic Callout Metric */}
              <div className="bg-[#030e1a]/70 border border-white/10 rounded-xl p-5 mb-8 flex items-center justify-between">
                <div>
                  <strong className="text-3xl font-extrabold text-white block">{activeItem.stats}</strong>
                  <span className="text-xs text-white/70 uppercase tracking-wide">{activeItem.statLabel}</span>
                </div>
                <div className="h-8 w-[1px] bg-white/15" />
                <span className="text-xs font-semibold text-aqua bg-aqua/10 px-3 py-1.5 rounded-full border border-aqua/20">
                  OpenBlue™ Connected
                </span>
              </div>

              <div className="flex items-center justify-between">
                <Link
                  href={activeItem.link}
                  className="button button-primary inline-flex items-center gap-2 text-sm px-6 py-3"
                >
                  <span>Explore {activeItem.title}</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="flex gap-1.5">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2 rounded-full transition-all ${
                        i === activeIndex ? 'w-8 bg-aqua' : 'w-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to item ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
