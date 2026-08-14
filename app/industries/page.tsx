'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CircularOrbit from '@/components/CircularOrbit'
import Link from 'next/link'
import { Server, Activity, GraduationCap, Building2, Factory, ShieldCheck } from 'lucide-react'

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">TAILORED INDUSTRY SOLUTIONS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Specialized Building Intelligence Across Industries
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            From zero-downtime data center cooling to surgical cleanroom isolation, Johnson Controls delivers specialized infrastructure for critical sectors.
          </p>
        </div>
      </section>

      {/* Interactive Circular Orbit Section */}
      <section className="py-12 bg-[#041221] border-b border-white/10">
        <div className="container-wide text-center mb-8">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">INTERACTIVE ORBIT MOTION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">Explore Industry Orbit</h2>
          <p className="text-xs text-white/60 mt-1">Click or hover satellite nodes to view industry telemetry & compliance metrics</p>
        </div>

        <CircularOrbit />
      </section>

      {/* Industry Verticals Grid */}
      <section className="py-20 bg-[#030e1a]">
        <div className="container-wide">
          <h2 className="text-3xl font-extrabold text-white mb-10 text-center">Industry Specific Infrastructure</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <Server className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Data Centers & Cloud AI</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Hyperscale liquid cooling, York® centrifugal chillers, and zero-vibration magnetic bearing compressors designed for 99.999% uptime.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: 40% Reduction in PUE
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                Consult Data Center Engineer →
              </Link>
            </div>

            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <Activity className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Healthcare & Hospitals</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Isolation room pressure monitoring, HEPA air purification, and real-time medical equipment asset tracking.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: 100% Infection Isolation Compliance
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                Consult Healthcare Specialist →
              </Link>
            </div>

            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <GraduationCap className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Higher Education & K-12</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Smart campus access control, indoor air quality monitoring, and cash-positive performance contracting.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: 35% Utility Bill Reduction
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                Explore Campus Solutions →
              </Link>
            </div>

            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <Building2 className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Commercial Real Estate</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                High-rise HVAC optimization, tenant mobile credentials, and automated ESG reporting for building owners.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: $2.8M+ Avg Annual Savings
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                View Commercial Retrofits →
              </Link>
            </div>

            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <Factory className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Industrial Manufacturing</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                Heavy-duty process refrigeration, gas detection systems, and industrial plant safety management.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: 25% Peak Electrical Savings
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                Consult Industrial Team →
              </Link>
            </div>

            <div className="bg-[#06192d] border border-white/15 rounded-2xl p-8 hover:border-aqua transition-colors">
              <ShieldCheck className="w-8 h-8 text-aqua mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Government & Defense</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">
                FedRAMP security certified building automation, perimeter access control, and resilient microgrids.
              </p>
              <div className="text-xs font-bold text-aqua bg-aqua/10 p-2.5 rounded-lg mb-4">
                Key Metric: ISO 27001 Certified Cyber Defense
              </div>
              <Link href="/contact" className="text-xs font-bold text-white hover:text-aqua flex items-center gap-1">
                View Federal Contracts →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
