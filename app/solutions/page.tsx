'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Leaf, 
  Shield, 
  Cpu, 
  Sliders, 
  DollarSign, 
  Cloud, 
  Clock, 
  Sparkles,
  CheckCircle2,
  Zap,
  Activity
} from 'lucide-react'

export default function LightSolutionsPage() {
  const [sqFt, setSqFt] = useState(250000)
  const [targetPercent, setTargetPercent] = useState(35)

  // Calculations
  const estAnnualSavings = Math.round((sqFt * 2.85 * (targetPercent / 100)))
  const estCo2ReducedTons = Math.round((sqFt * 0.045 * (targetPercent / 100)))
  const estPaybackMonths = Math.max(12, Math.round(48 - targetPercent * 0.6))

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Light Design) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0066cc]/20">
              <Sparkles size={14} />
              NET ZERO & SUSTAINABILITY
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Building Solutions for a Sustainable Future.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Turn decarbonization goals into cash-positive realities with guaranteed energy performance contracts and OpenBlue™ predictive AI.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Net-Zero ROI Calculator (Light Theme Card) */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)] max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <span className="p-3 bg-[#0066cc]/10 text-[#0066cc] rounded-2xl border border-[#0066cc]/20">
                <Sliders size={22} />
              </span>
              <div>
                <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">INTERACTIVE CALCULATOR</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">Estimate Your Facility Decarbonization ROI</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Slider 1: Square Footage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Facility Area (sq. ft.)</label>
                  <strong className="text-lg font-extrabold text-[#0066cc]">{sqFt.toLocaleString()} sq ft</strong>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={sqFt}
                  onChange={(e) => setSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>25k sq ft</span>
                  <span>1M sq ft</span>
                </div>
              </div>

              {/* Slider 2: Target Reduction */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">Target Energy Reduction</label>
                  <strong className="text-lg font-extrabold text-[#0066cc]">{targetPercent}% Reduction</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={targetPercent}
                  onChange={(e) => setTargetPercent(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0066cc]"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-medium">
                  <span>10% (Standard)</span>
                  <span>60% (Deep Net-Zero)</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center">
                <DollarSign className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Annual Energy Savings</span>
                <strong className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">${estAnnualSavings.toLocaleString()}</strong>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center">
                <Cloud className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">CO2 Emissions Avoided</span>
                <strong className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{estCo2ReducedTons.toLocaleString()} tons/yr</strong>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-5 rounded-2xl text-center">
                <Clock className="w-6 h-6 text-[#0066cc] mx-auto mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block mb-1">Est. Capital Payback</span>
                <strong className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">{estPaybackMonths} Months</strong>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
                Request Detailed Decarbonization Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Stacked Cards Solutions Section (Light Theme Card Stack) */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="container-wide mb-12 text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">SOLUTION PILLARS</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] mt-2 mb-3">
            Stacked Solution Pillars
          </h2>
          <p className="text-slate-600 text-sm">
            Scroll down to watch our building solution pillars stack dynamically.
          </p>
        </div>

        <div className="container-wide max-w-5xl space-y-16 pb-24">
          
          {/* Stacked Card 1 */}
          <div className="sticky top-20 z-10 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_10px_35px_rgba(0,0,0,0.06)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="text-[#0066cc] w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 01 / DECARBONIZATION</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">Turnkey Net-Zero Buildings</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Integrate renewable power balance, ultra-efficient YORK® magnetic chillers, and automated battery energy storage into a single cash-positive performance contract.
                </p>
                <div className="space-y-2 mb-8 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>Guaranteed annual energy performance metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>Zero upfront capital expenditure options available</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="button button-primary text-xs px-6 py-3">
                    Schedule Audit
                  </Link>
                  <Link href="/openblue" className="button button-navy text-xs px-6 py-3">
                    OpenBlue™ Platform
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image src="/images/jci-solutions.png" alt="Net-Zero Buildings" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Stacked Card 2 */}
          <div className="sticky top-24 z-20 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-[#0066cc] w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 02 / SMART AUTOMATION</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">Autonomous HVAC & Metasys® Controls</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Predictive AI continuously modulates fan speeds, chilled water setpoints, and damper positions based on real-time weather forecasting and thermal load.
                </p>
                <div className="space-y-2 mb-8 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>BACnet/IP native open protocol integration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>ISO 27001 cybersecurity certified architecture</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/products-and-services" className="button button-primary text-xs px-6 py-3">
                    Explore Controls
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image src="/images/jci-insight.png" alt="Metasys Controls" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Stacked Card 3 */}
          <div className="sticky top-28 z-30 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_20px_45px_rgba(0,0,0,0.10)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-[#0066cc] w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 03 / HEALTHY SPACES</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">Indoor Air Quality (IAQ) & Life Safety</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Continuous air quality sensing, HEPA filtration modulation, and integrated Simplex® fire alarm and C•CURE physical access security for complete facility peace of mind.
                </p>
                <div className="space-y-2 mb-8 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>WELL and RESET certified IAQ monitoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>Automated emergency smoke dampers & lockdown</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact" className="button button-primary text-xs px-6 py-3">
                    Consult an IAQ Expert
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image src="/images/jci-hero.png" alt="Healthy Spaces" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Stacked Card 4 */}
          <div className="sticky top-32 z-40 bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_25px_50px_rgba(0,0,0,0.12)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-[#0066cc] w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 04 / THERMAL ENERGY STORAGE</span>
                </div>
                <h3 className="text-3xl font-extrabold text-[#0f172a] mb-4">Thermal Storage & Heat Pumps</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Shift peak electrical loads to off-peak hours using thermal ice storage and industrial air-to-water heat pumps, reducing utility demand charges by up to 50%.
                </p>
                <div className="space-y-2 mb-8 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>Peak demand charge mitigation strategy</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#0066cc]" />
                    <span>Grid-interactive smart building readiness</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Link href="/products-and-services" className="button button-primary text-xs px-6 py-3">
                    View Heat Pumps
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image src="/images/jci-solutions.png" alt="Thermal Storage" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Light Bottom CTA */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">EXPERT CONSULTATION</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Transform Your Building Performance Today
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Our specialized engineers work directly with facility operators to design turnkey decarbonization programs worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
              Schedule Consultation
            </Link>
            <Link href="/products-and-services" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
              <span>Explore Products</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
