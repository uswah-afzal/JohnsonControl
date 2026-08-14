'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CircularOrbit from '@/components/CircularOrbit'
import Link from 'next/link'
import { Server, Activity, GraduationCap, Building2, Factory, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const industryCards = [
  {
    id: 'data-center-detail',
    icon: <Server className="w-6 h-6 text-[#0066cc]" />,
    title: 'Data Centers & Hyperscale AI',
    desc: 'Precision liquid cooling, York® magnetic chillers, and 99.999% uptime compliance for mission critical data halls.',
    specs: ['PUE < 1.15', 'Zero Vibration', 'Liquid Cooling Native']
  },
  {
    id: 'healthcare-detail',
    icon: <Activity className="w-6 h-6 text-[#0066cc]" />,
    title: 'Healthcare & Operating Rooms',
    desc: 'Cleanroom negative pressure isolation, HEPA airflow control, and real-time medical asset monitoring.',
    specs: ['100% Isolation', 'ASHRAE 170 Compliant', 'Real-time Tracking']
  },
  {
    id: 'education-detail',
    icon: <GraduationCap className="w-6 h-6 text-[#0066cc]" />,
    title: 'K-12 & Higher Education Campuses',
    desc: 'Indoor air quality (IAQ) monitoring, smart campus security integration, and guaranteed energy performance contracts.',
    specs: ['35% Cost Savings', 'RESET IAQ Standard', 'Campus Security']
  },
  {
    id: 'commercial-detail',
    icon: <Building2 className="w-6 h-6 text-[#0066cc]" />,
    title: 'Commercial Real Estate Towers',
    desc: 'Transforming legacy office towers into autonomous net-zero workplaces with adaptive HVAC and mobile tenant access.',
    specs: ['Net-Zero Certified', 'Mobile Access', 'Touchless Controls']
  },
  {
    id: 'industrial-detail',
    icon: <Factory className="w-6 h-6 text-[#0066cc]" />,
    title: 'Industrial & Manufacturing Plants',
    desc: 'Heavy-duty industrial refrigeration, process cooling, gas detection, and continuous manufacturing plant safety.',
    specs: ['Process Refrigeration', 'Gas Detection', 'Peak Load Shifting']
  },
  {
    id: 'government-detail',
    icon: <ShieldCheck className="w-6 h-6 text-[#0066cc]" />,
    title: 'Government & Defense Facilities',
    desc: 'FedRAMP compliant smart building automation, resilient microgrids, and perimeter access control.',
    specs: ['FedRAMP Accredited', 'ISO 27001 Certified', 'Microgrid Ready']
  }
]

export default function LightIndustriesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">TAILORED INDUSTRY SOLUTIONS</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Building Performance Where It Really Matters.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              From mission-critical AI data centers to sterile operating rooms, Johnson Controls engineers specialized building environments for your industry’s strictest standards.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Circular Orbit Hub Section */}
      <CircularOrbit />

      {/* Industry Vertical Cards Grid */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">SPECIALIZED DOMAINS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] mt-2 mb-4">Tailored Industry Engineering</h2>
            <p className="text-slate-600 text-sm">Select your facility domain to explore specialized equipment and compliance benchmarks.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCards.map((ind) => (
              <div key={ind.id} className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="p-3 bg-slate-100 rounded-2xl w-fit mb-4 border border-slate-200">
                  {ind.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-2">{ind.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{ind.desc}</p>
                <div className="space-y-2 pt-4 border-t border-slate-100">
                  {ind.specs.map((sp) => (
                    <div key={sp} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 size={14} className="text-[#0066cc]" />
                      <span>{sp}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">INDUSTRY CONSULTATION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Need Custom Facility Engineering?
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Our domain experts work with facility directors worldwide to design compliant, zero-carbon building infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
              Schedule Industry Consultation
            </Link>
            <Link href="/products-and-services" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
              <span>View Product Catalog</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
