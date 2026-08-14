'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Zap, 
  Cpu, 
  Flame, 
  Lock, 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  ArrowRight, 
  Download,
  Activity,
  Layers,
  Sparkles,
  BarChart3
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
    tagline: 'Industry-leading variable speed efficiency and low-GWP refrigerants.',
    summary: 'Custom-engineered YORK® magnetic-bearing centrifugal chillers, air-handling units, and commercial heat pumps designed for continuous zero-vibration operations.',
    features: [
      'Magnetic-bearing oil-free compressor technology',
      'R-1233zd ultra-low global warming potential refrigerant',
      'Real-time automated vibration & thermal diagnostics',
      'Integrated OpenBlue™ cloud energy optimization',
      'Variable speed drive (VSD) ambient adaptation'
    ],
    specs: ['COP 7.2+ Rating', 'Zero Vibration', '40% Energy Reduction'],
    image: '/images/jci-solutions.png',
    badge: 'HVAC Equipment'
  },
  {
    id: 'building-automation',
    number: '02',
    title: 'Metasys® Building Automation',
    tagline: 'Intuitive enterprise control connecting HVAC, lighting, and power.',
    summary: 'Metasys® links your entire facility infrastructure onto an intuitive mobile-first management layer, detecting energy waste before it impacts your bottom line.',
    features: [
      'BACnet®/IP native protocol integration',
      'Cybersecurity certified ISO 27001 compliance',
      'Mobile-first responsive facility management UI',
      'Automated fault detection & diagnostic alerts',
      'Multi-site global campus synchronisation'
    ],
    specs: ['BACnet/IP Native', 'Cybersecurity Certified', 'Mobile First'],
    image: '/images/jci-insight.png',
    badge: 'Building Controls'
  },
  {
    id: 'fire-protection',
    number: '03',
    title: 'Simplex® Fire Detection & Safety',
    tagline: 'Addressable life safety systems for high-density facilities.',
    summary: 'UL-listed Simplex® 4100ES fire alarm control panels with self-testing TrueAlarm diagnostics and automated multi-channel voice evacuation audio.',
    features: [
      'TrueAlarm addressable sensor diagnostics',
      'Automated multi-channel emergency voice evacuation',
      'UL / ULC / FM global safety certifications',
      'Smoke damper integration and stairwell pressurisation',
      'High-speed network loop redundancy'
    ],
    specs: ['UL Listed', 'TrueAlarm Diagnostics', 'Emergency Audio'],
    image: '/images/jci-hero.png',
    badge: 'Fire Safety'
  },
  {
    id: 'security-access',
    number: '04',
    title: 'C•CURE Enterprise Security & Access',
    tagline: 'Unified physical security, biometric access, and AI surveillance.',
    summary: 'C•CURE 9000 provides high-assurance access management for corporate campuses, data centers, and critical government infrastructure.',
    features: [
      'Encrypted card readers & mobile credentialing',
      'Biometric fingerprint & facial recognition support',
      'Real-time automated lockdown protocols',
      'Integrated Victor video management & AI analytics',
      'Perimeter intrusion detection & gate control'
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
    summary: 'OpenBlue™ connects data from IoT sensors, HVAC equipment, weather forecasts, and utility rates to continuously tune your building for zero net carbon emissions.',
    features: [
      'Autonomous AI thermal setpoint modulation',
      'Continuous Scope 1 & 2 carbon footprint tracking',
      'Indoor Air Quality (IAQ) automated airflow optimization',
      'FedRAMP certified cloud security architecture',
      'Predictive equipment lifecycle maintenance'
    ],
    specs: ['30%+ Carbon Reduction', 'FedRAMP Certified', 'AI Predictive'],
    image: '/images/jci-insight.png',
    badge: 'Digital Solutions'
  },
  {
    id: 'lifecycle-services',
    number: '06',
    title: 'Lifecycle Services & 24/7 Dispatch',
    tagline: 'Guaranteed performance contracts and emergency service response.',
    summary: 'Our worldwide network of 100,000+ factory-certified technicians provides 24/7 emergency repair, predictive maintenance, and cash-positive performance financing.',
    features: [
      '24/7/365 emergency field dispatch center',
      'Guaranteed energy performance contracts',
      'Original OEM factory parts replacement',
      'Comprehensive technician training programs',
      'Remote telemetry monitoring & dispatch'
    ],
    specs: ['24/7 Emergency', '100% OEM Parts', 'Guaranteed Savings'],
    image: '/images/jci-hero.png',
    badge: 'Service & Support'
  }
]

export default function LightProductsServicesPage() {
  const [activeSection, setActiveSection] = useState('hvac-equipment')

  // IntersectionObserver to highlight sticky left menu item as user scrolls down
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

      {/* Hero Header (Clean Light Design) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0066cc]/20">
              <Sparkles size={14} />
              OUR PRODUCTS & SERVICES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Engineered for Building Excellence.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Explore Johnson Controls’ full ecosystem of HVAC equipment, building automation, life safety, security, and AI digital solutions.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-500">
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={16} className="text-[#0066cc]" /> 140+ Years Heritage
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={16} className="text-[#0066cc]" /> ISO 27001 & UL Certified
              </span>
              <span className="flex items-center gap-1.5 text-slate-700">
                <CheckCircle2 size={16} className="text-[#0066cc]" /> 150+ Countries
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Scroll-Driven Section (Inspired by Screenshot 2) */}
      <section className="py-16 sm:py-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left Sticky Menu (Exactly styled like Screenshot 2) */}
            <div className="lg:col-span-4 sticky top-28 z-20 bg-white/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-widest text-slate-400 block mb-6">
                OUR SERVICES
              </span>

              <nav className="flex flex-col gap-5">
                {servicesData.map((s) => {
                  const isActive = activeSection === s.id
                  return (
                    <button
                      key={s.id}
                      onClick={() => scrollToSection(s.id)}
                      className={`text-left text-lg sm:text-xl font-bold transition-all duration-300 pb-2 border-b-2 flex items-center justify-between group ${
                        isActive
                          ? 'text-[#0f172a] border-[#0066cc] pl-1 font-extrabold'
                          : 'text-slate-400 border-transparent hover:text-slate-700 hover:border-slate-300 font-normal'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span className={`text-xs ${isActive ? 'text-[#0066cc]' : 'text-slate-300'}`}>
                          {s.number}
                        </span>
                        {s.title.split('&')[0]}
                      </span>
                      {isActive && (
                        <span className="w-2 h-2 rounded-full bg-[#0066cc] animate-ping" />
                      )}
                    </button>
                  )
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-slate-200 text-xs text-slate-500 flex flex-col gap-3">
                <span className="font-semibold text-slate-700">Need immediate engineering assistance?</span>
                <Link
                  href="/contact"
                  className="button button-primary text-center text-xs py-2.5 px-4 rounded-xl"
                >
                  Speak with a Specialist →
                </Link>
              </div>
            </div>

            {/* Right Column: Detailed Service Sections (Light Cards matching Screenshot 2) */}
            <div className="lg:col-span-8 space-y-20">
              {servicesData.map((s) => (
                <div
                  key={s.id}
                  id={s.id}
                  className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-500 hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider border border-slate-200">
                      {s.badge}
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-400">SECTION {s.number}</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-3 leading-tight">
                    {s.title}
                  </h2>

                  <p className="text-[#0066cc] text-sm font-semibold mb-4">{s.tagline}</p>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
                    {s.summary}
                  </p>

                  {/* High-Resolution Feature Image Card (Matching tilted framing in Screenshot 2) */}
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 border border-slate-200 shadow-md bg-slate-100 group">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Service Includes Checklist (Exact format from Screenshot 2) */}
                  <div className="mb-8 bg-slate-50 border border-slate-200/80 rounded-2xl p-6 sm:p-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                      Service & Infrastructure Includes:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {s.features.map((feat) => (
                        <div key={feat} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 size={16} className="text-[#0066cc] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Specification Pills */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {s.specs.map((spec) => (
                      <span key={spec} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                        ⚡ {spec}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-200">
                    <Link
                      href="/contact"
                      className="button button-primary px-6 py-3 text-xs"
                    >
                      Request Technical Data Sheet
                    </Link>
                    <Link
                      href="/contact"
                      className="button button-navy px-6 py-3 text-xs flex items-center gap-2"
                    >
                      <span>Consult Specialist</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Light Bottom CTA Callout */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">FULL SYSTEM INTEGRATION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Ready to Upgrade Your Facility Infrastructure?
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Our specialized engineers provide turnkey HVAC sizing, building control audits, and zero-carbon performance contracting worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
              Schedule Facility Audit
            </Link>
            <Link href="/solutions" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
              <span>View Net-Zero Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
