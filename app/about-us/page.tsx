'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import CountUpNumber from '@/components/CountUpNumber'
import { Globe, Users, Award, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react'

const timelineEvents = [
  {
    year: '1885',
    title: 'Electric Thermostat Invention',
    desc: 'Patent for first electric room thermostat by Warren Johnson.'
  },
  {
    year: '1972',
    title: 'JC/80 Building Control',
    desc: 'First computerized building automation system launched.'
  },
  {
    year: '2004',
    title: 'Metasys® Enterprise IP',
    desc: 'Unified HVAC, lighting, and security IP integration.'
  },
  {
    year: '2020',
    title: 'OpenBlue™ AI Launch',
    desc: 'Autonomous AI operating system for net-zero buildings.'
  },
  {
    year: '2026',
    title: 'Global Net-Zero Leader',
    desc: 'Serving 150+ countries with zero-carbon solutions.'
  }
]

export default function RedesignedAboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">OUR HERITAGE & MISSION</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Over 140 Years of Building Innovation.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-normal">
              At Johnson Controls, we transform the environments where people live, work, learn, and play.
            </p>
          </div>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Award className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <CountUpNumber end={140} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years of Innovation (Since 1885)</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Users className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <CountUpNumber end={100000} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Employees & Engineers</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Globe className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <CountUpNumber end={150} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Countries Served Worldwide</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <CountUpNumber end={6} prefix="$" suffix="B+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Customer Decarbonization Funded</span>
            </div>
          </div>
        </div>
      </section>

      {/* 140+ Years Timeline Track (Responsive & No Text Overflow) */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container-wide mb-8 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">HISTORICAL TIMELINE</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mt-1">140 Years of Building Automation Firsts</h2>
        </div>

        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {timelineEvents.map((ev) => (
              <div 
                key={ev.year} 
                className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-sm min-w-0 flex flex-col justify-between hover:shadow-md hover:border-[#0066cc] transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-extrabold text-[#0066cc]">{ev.year}</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#0066cc]" />
                  </div>
                  <h3 className="text-sm font-extrabold text-[#0f172a] mb-1.5 leading-snug break-words">{ev.title}</h3>
                  <p className="text-xs text-slate-600 font-medium leading-relaxed break-words">{ev.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ESG Commitment Callout */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">2040 NET-ZERO COMMITMENT</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Pioneering Sustainability for Future Generations
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            We are committed to achieving net-zero Scope 1 and Scope 2 carbon emissions across our global operations by 2040.
          </p>
          <Link href="/solutions" className="button button-primary px-8 py-3.5 text-xs inline-flex items-center gap-2">
            <span>Explore Net-Zero Solutions</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
