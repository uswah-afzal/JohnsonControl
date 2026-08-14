'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles
} from 'lucide-react'

interface ServiceSection {
  id: string
  number: string
  title: string
  tagline: string
  summary: string
  features: string[]
  specs: string[]
  image: string
  badge: string
}

const servicesData: ServiceSection[] = [
  {
    id: 'hvac-equipment',
    number: '01',
    title: 'YORK® Chillers & HVAC Systems',
    tagline: 'Variable speed magnetic-bearing chillers with low-GWP refrigerants.',
    summary: 'Oil-free magnetic-bearing chillers engineered for zero vibration and peak thermal efficiency.',
    features: [
      'Magnetic oil-free compressor technology',
      'R-1233zd low-GWP eco-refrigerant',
      'Real-time automated thermal diagnostics',
      'OpenBlue™ cloud energy optimization'
    ],
    specs: ['COP 7.2+', 'Zero Vibration', '40% Energy Reduction'],
    image: '/images/jci-solutions.png',
    badge: 'HVAC Equipment'
  },
  {
    id: 'building-automation',
    number: '02',
    title: 'Metasys® Building Automation',
    tagline: 'Intuitive enterprise control connecting HVAC, lighting, and power.',
    summary: 'Unified mobile-first facility management detecting energy waste before it affects your bottom line.',
    features: [
      'BACnet®/IP native protocol integration',
      'Cybersecurity certified ISO 27001 standard',
      'Mobile-first responsive facility UI',
      'Automated fault detection alerts'
    ],
    specs: ['BACnet/IP Native', 'ISO 27001 Certified', 'Mobile First UI'],
    image: '/images/jci-insight.png',
    badge: 'Building Controls'
  },
  {
    id: 'fire-protection',
    number: '03',
    title: 'Simplex® Fire Detection & Safety',
    tagline: 'Addressable life safety systems for high-density facilities.',
    summary: 'UL-listed 4100ES life safety platform with TrueAlarm self-diagnostics and emergency voice audio.',
    features: [
      'TrueAlarm addressable sensor diagnostics',
      'Multi-channel emergency voice evacuation',
      'UL / ULC / FM global safety certification',
      'Automated smoke damper integration'
    ],
    specs: ['UL Listed', 'TrueAlarm Diagnostics', 'Emergency Audio'],
    image: '/images/jci-hero.png',
    badge: 'Fire Safety'
  },
  {
    id: 'security-access',
    number: '04',
    title: 'C•CURE Enterprise Access Control',
    tagline: 'Unified physical security, biometric access, and AI surveillance.',
    summary: 'High-assurance physical security, biometric credentialing, and automated real-time campus lockdown.',
    features: [
      'Encrypted card readers & mobile credentialing',
      'Biometric fingerprint & facial recognition',
      'Automated campus lockdown protocols',
      'Integrated Victor video AI analytics'
    ],
    specs: ['Biometric Ready', 'Global Multi-Site', 'Encrypted Credentials'],
    image: '/images/jci-solutions.png',
    badge: 'Access & Security'
  },
  {
    id: 'openblue-ai',
    number: '05',
    title: 'OpenBlue™ AI Digital Platform',
    tagline: 'Autonomous AI predictive operating system for net-zero buildings.',
    summary: 'Autonomous AI operating system dynamically modulating thermal setpoints for zero-carbon operations.',
    features: [
      'Autonomous AI thermal setpoint modulation',
      'Scope 1 & 2 carbon footprint tracking',
      'Automated indoor air quality airflow tuning',
      'FedRAMP accredited cloud security'
    ],
    specs: ['30%+ Carbon Reduction', 'FedRAMP Accredited', 'AI Predictive'],
    image: '/images/jci-insight.png',
    badge: 'Digital Solutions'
  },
  {
    id: 'lifecycle-services',
    number: '06',
    title: 'Lifecycle Services & 24/7 Dispatch',
    tagline: 'Guaranteed performance contracts and emergency service response.',
    summary: '24/7/365 emergency field dispatch center with guaranteed cash-positive energy performance contracts.',
    features: [
      '24/7/365 emergency field dispatch center',
      'Guaranteed energy performance contracts',
      '100% original OEM factory replacement parts',
      'Remote telemetry equipment monitoring'
    ],
    specs: ['24/7 Emergency', '100% OEM Parts', 'Guaranteed Savings'],
    image: '/images/jci-hero.png',
    badge: 'Service & Support'
  }
]

export default function MinimalProductsPage() {
  const [activeSection, setActiveSection] = useState('hvac-equipment')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250
      for (const service of servicesData) {
        const element = document.getElementById(service.id)
        if (element) {
          const top = element.offsetTop
          const height = element.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(service.id)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setActiveSection(id)
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (1-Liner Minimal) */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3 border border-[#0066cc]/20">
              <Sparkles size={14} />
              PRODUCTS & SERVICES
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Engineered Building Infrastructure.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-normal">
              Explore 140+ years of HVAC, automation, fire safety, and AI digital infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Scroll-Driven Sticky Services Section (1-Liners Minimal) */}
      <section className="py-12 sm:py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

            {/* Left Sticky Sidebar */}
            <div className="lg:col-span-4 sticky top-28 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl border border-slate-200/90 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-4">
                OUR SERVICES
              </span>

              <nav className="flex flex-col gap-4">
                {servicesData.map((s) => {
                  const isActive = activeSection === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`text-left text-base sm:text-lg font-bold transition-all duration-300 pb-1.5 border-b-2 flex items-center justify-between group ${
                        isActive
                          ? 'text-[#0f172a] border-[#0066cc] pl-1 font-extrabold'
                          : 'text-slate-400 border-transparent hover:text-slate-700 font-normal'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className={`text-xs ${isActive ? 'text-[#0066cc]' : 'text-slate-300'}`}>
                          {s.number}
                        </span>
                        {s.title.split('&')[0]}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#0066cc]" />
                      )}
                    </button>
                  )
                })}
              </nav>
            </div>

            {/* Right Column: 1-Liner Service Cards */}
            <div className="lg:col-span-8 space-y-12">
              {servicesData.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200">
                      {s.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">{s.number}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2 leading-snug">
                    {s.title}
                  </h2>

                  <p className="text-[#0066cc] text-xs font-semibold mb-3">{s.tagline}</p>

                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-6">
                    {s.summary}
                  </p>

                  {/* Feature Image Frame */}
                  <div className="relative h-56 sm:h-72 w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* 1-Liner Checklist */}
                  <div className="mb-6 bg-slate-50 border border-slate-200 rounded-2xl p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {s.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <CheckCircle2 size={14} className="text-[#0066cc] flex-shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {s.specs.map((spec) => (
                      <span key={spec} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] font-bold border border-slate-200">
                        ⚡ {spec}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="button button-primary px-5 py-2.5 text-xs"
                    >
                      Request Technical Data Sheet
                    </Link>
                    <Link
                      href="/contact"
                      className="button button-navy px-5 py-2.5 text-xs flex items-center gap-1.5"
                    >
                      <span>Consult Engineer</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 1-Liner Bottom CTA */}
      <section className="py-12 bg-white border-t border-slate-200 text-center">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2">
            Need Turnkey Facility Engineering?
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mb-6">
            Our engineers design custom building infrastructure tailored to your exact facility requirements.
          </p>
          <Link href="/contact" className="button button-primary px-8 py-3 text-xs">
            Schedule Consultation →
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
