'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Globe, Users, Award, ShieldCheck, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react'

const timelineEvents = [
  {
    year: '1885',
    title: 'Electric Tele-Thermostat Invention',
    desc: 'Professor Warren S. Johnson patents the first electric room thermostat, laying the foundation for modern HVAC building automation.'
  },
  {
    year: '1972',
    title: 'First Computerized Building Control',
    desc: 'Launches the JC/80 computerized building automation system, revolutionizing energy management for large commercial complexes.'
  },
  {
    year: '2004',
    title: 'Metasys® Building Automation',
    desc: 'Introduces Metasys®, connecting HVAC, lighting, and security onto IP networks for unified facility management.'
  },
  {
    year: '2020',
    title: 'OpenBlue™ AI Platform Launch',
    desc: 'Unveils OpenBlue™ AI, combining IoT sensor data with predictive cloud algorithms for autonomous net-zero building operations.'
  },
  {
    year: '2026',
    title: 'Global Net-Zero Decarbonization Leader',
    desc: 'Serving 150+ countries with guaranteed energy performance contracts and AI-powered zero-carbon building infrastructure.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">OUR HERITAGE & MISSION</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Over 140 Years of Building Innovation.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              At Johnson Controls, we transform the environments where people live, work, learn, and play—making spaces healthier, safer, and more sustainable.
            </p>
          </div>
        </div>
      </section>

      {/* Global Impact Metrics */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Award className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <strong className="text-4xl font-extrabold text-[#0f172a] block mb-1">140+</strong>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years of Innovation (Since 1885)</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Users className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <strong className="text-4xl font-extrabold text-[#0f172a] block mb-1">100,000+</strong>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Employees & Engineers</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <Globe className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <strong className="text-4xl font-extrabold text-[#0f172a] block mb-1">150+</strong>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Countries Served Worldwide</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <ShieldCheck className="w-8 h-8 text-[#0066cc] mx-auto mb-3" />
              <strong className="text-4xl font-extrabold text-[#0f172a] block mb-1">$6B+</strong>
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Customer Decarbonization Funded</span>
            </div>
          </div>
        </div>
      </section>

      {/* 140+ Years Timeline Track */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-wide mb-10">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">HISTORICAL TIMELINE</span>
          <h2 className="text-3xl font-extrabold text-[#0f172a] mt-2">140 Years of Building Automation Firsts</h2>
        </div>

        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {timelineEvents.map((ev) => (
              <div key={ev.year} className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
                <span className="text-3xl font-extrabold text-[#0066cc] block mb-2">{ev.year}</span>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{ev.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{ev.desc}</p>
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
            We are committed to achieving net-zero Scope 1 and Scope 2 carbon emissions across our global manufacturing and office operations by 2040.
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
