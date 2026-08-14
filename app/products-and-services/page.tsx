'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ShieldCheck, Cpu, Flame, Lock, Zap, ArrowRight, Download, CheckCircle2 } from 'lucide-react'

const categories = [
  'All Offerings',
  'HVAC Equipment',
  'Building Automation',
  'Fire Protection',
  'Security & Access',
  'Digital Solutions'
]

const productsData = [
  {
    id: 'york-chiller',
    category: 'HVAC Equipment',
    name: 'YORK® YZ Magnetic-Bearing Chiller',
    tagline: 'Industry-leading variable speed efficiency',
    specs: ['COP 7.2+', 'R-1233zd Low GWP', 'Zero Vibration'],
    description: 'First chiller fully optimized for ultimate performance with next-generation low global warming potential refrigerant.',
    icon: <Zap className="w-5 h-5 text-aqua" />,
    image: '/images/jci-solutions.png',
    connected: true
  },
  {
    id: 'metasys-bms',
    category: 'Building Automation',
    name: 'Metasys® Building Automation System',
    tagline: 'Intuitive enterprise facility management',
    specs: ['Cybersecurity Certified', 'BACnet/IP Native', 'Mobile First UI'],
    description: 'Connects HVAC, lighting, security, and energy management into a single, intuitive interface for peak building efficiency.',
    icon: <Cpu className="w-5 h-5 text-aqua" />,
    image: '/images/jci-insight.png',
    connected: true
  },
  {
    id: 'simplex-fire',
    category: 'Fire Protection',
    name: 'Simplex® 4100ES Fire Alarm Control Panel',
    tagline: 'Addressable precision life safety platform',
    specs: ['UL Listed', 'TrueAlarm Diagnostics', 'Emergency Audio'],
    description: 'Provides scalable protection for high-rise facilities with self-testing smoke detectors and automated emergency voice notification.',
    icon: <Flame className="w-5 h-5 text-aqua" />,
    image: '/images/jci-hero.png',
    connected: true
  },
  {
    id: 'c-cure-security',
    category: 'Security & Access',
    name: 'C•CURE 9000 Enterprise Access Control',
    tagline: 'High-security identity & access management',
    specs: ['Biometric Ready', 'Global Multi-Site', 'Encrypted Card Readers'],
    description: 'Manages physical security for enterprise campuses, providing real-time credentialing and automated lockdown protocols.',
    icon: <Lock className="w-5 h-5 text-aqua" />,
    image: '/images/jci-solutions.png',
    connected: false
  },
  {
    id: 'openblue-em',
    category: 'Digital Solutions',
    name: 'OpenBlue Enterprise Manager',
    tagline: 'AI-driven building performance intelligence',
    specs: ['30%+ Carbon Savings', 'Predictive Diagnostics', 'Cloud Analytics'],
    description: 'Uses machine learning algorithms to continuously analyze equipment telemetry and automatically eliminate energy waste.',
    icon: <ShieldCheck className="w-5 h-5 text-aqua" />,
    image: '/images/jci-insight.png',
    connected: true
  },
  {
    id: 'york-heatpump',
    category: 'HVAC Equipment',
    name: 'YORK® Amichi Commercial Heat Pump',
    tagline: 'Ultra-quiet air-to-water heat pump',
    specs: ['High EER/COP', 'Smart Defrost', 'Compact Footprint'],
    description: 'Delivers efficient heating and cooling for commercial buildings while reducing reliance on fossil fuels.',
    icon: <Zap className="w-5 h-5 text-aqua" />,
    image: '/images/jci-hero.png',
    connected: true
  }
]

export default function ProductsPage() {
  const [selectedCat, setSelectedCat] = useState('All Offerings')

  const filteredProducts = selectedCat === 'All Offerings'
    ? productsData
    : productsData.filter((p) => p.category === selectedCat)

  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">COMPREHENSIVE CATALOG</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Products & Intelligent Systems
          </h1>
          <p className="text-white/80 text-lg max-width-600 max-w-2xl leading-relaxed">
            Over 140 years of engineering excellence in HVAC, building controls, fire protection, and AI-powered digital infrastructure.
          </p>
        </div>
      </section>

      {/* Category Tabs Filter */}
      <section className="py-4 bg-[#041221]/95 border-b border-white/10 sticky top-[60px] z-40 backdrop-blur-xl transition-all duration-300 shadow-md">
        <div className="container-wide flex items-center gap-3 overflow-x-auto pb-1.5 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`filter-tab-btn whitespace-nowrap ${selectedCat === cat ? 'filter-tab-active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-12 relative z-10">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-8">
            <span className="text-sm text-white/60">
              Showing <strong className="text-white">{filteredProducts.length}</strong> products for <strong className="text-aqua">{selectedCat}</strong>
            </span>
            <Link href="/contact" className="text-xs font-semibold text-aqua hover:underline flex items-center gap-1">
              Need custom equipment sizing? Speak with an engineer →
            </Link>
          </div>

          <div className="product-card-grid">
            {filteredProducts.map((p) => (
              <div key={p.id} className="product-card">
                <div>
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 bg-[#09253d] border border-white/10">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {p.connected && (
                      <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider text-navy bg-aqua px-2.5 py-1 rounded-full uppercase">
                        OpenBlue™ Ready
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    {p.icon}
                    <span className="text-xs font-bold text-aqua tracking-wider uppercase">{p.category}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">{p.name}</h3>
                  <p className="text-xs text-white/60 font-medium mb-3">{p.tagline}</p>
                  
                  <p className="text-white/80 text-xs leading-relaxed mb-4">{p.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.specs.map((spec) => (
                      <span key={spec} className="text-[11px] font-semibold text-white/90 bg-white/5 border border-white/15 px-2.5 py-1 rounded-md flex items-center gap-1">
                        <CheckCircle2 size={12} className="text-aqua" />
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="button button-primary text-center w-full text-xs py-2.5"
                  >
                    Request Data Sheet
                  </Link>
                  <button
                    className="p-2.5 rounded-lg border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
                    aria-label="Download Spec PDF"
                  >
                    <Download size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Callout */}
      <section className="py-16 bg-[#06192d] border-t border-white/10">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">TAILORED ENGINEERING</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-4">
            Need a Turnkey Integrated System?
          </h2>
          <p className="text-white/80 text-sm mb-8 leading-relaxed">
            Our specialized HVAC, Controls, and Life Safety engineers design custom building infrastructure tailored to your exact facility requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-sm">
              Schedule Engineering Consultation
            </Link>
            <Link href="/solutions" className="button button-navy px-8 py-3.5 text-sm flex items-center gap-2">
              <span>View Net-Zero Solutions</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
