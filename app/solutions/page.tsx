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
  Zap
} from 'lucide-react'

export default function MinimalSolutionsPage() {
  const [sqFt, setSqFt] = useState(250000)
  const [targetPercent, setTargetPercent] = useState(35)

  // Calculations
  const estAnnualSavings = Math.round((sqFt * 2.85 * (targetPercent / 100)))
  const estCo2ReducedTons = Math.round((sqFt * 0.045 * (targetPercent / 100)))
  const estPaybackMonths = Math.max(12, Math.round(48 - targetPercent * 0.6))

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (1-Liner Minimal) */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">NET ZERO & SUSTAINABILITY</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Building Solutions for a Sustainable Future.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-normal">
              Turn decarbonization goals into cash-positive realities with guaranteed energy performance contracts.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Net-Zero ROI Calculator */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-wide max-w-4xl mx-auto">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-2.5 bg-[#0066cc]/10 text-[#0066cc] rounded-2xl border border-[#0066cc]/20">
                <Sliders size={20} />
              </span>
              <div>
                <span className="text-[11px] font-bold tracking-wider text-[#0066cc] uppercase">INTERACTIVE CALCULATOR</span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#0f172a]">Estimate Your Decarbonization ROI</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Facility Area (sq. ft.)</label>
                  <strong className="text-base font-extrabold text-[#0066cc]">{sqFt.toLocaleString()} sq ft</strong>
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
              </div>

              <div>
                <div className="flex justify-between items-center mb-1.5">
                  <label className="text-xs font-bold text-slate-700 uppercase">Target Reduction</label>
                  <strong className="text-base font-extrabold text-[#0066cc]">{targetPercent}% Reduction</strong>
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
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200">
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <DollarSign className="w-5 h-5 text-[#0066cc] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Annual Savings</span>
                <strong className="text-xl font-extrabold text-[#0f172a]">${estAnnualSavings.toLocaleString()}</strong>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <Cloud className="w-5 h-5 text-[#0066cc] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">CO2 Avoided</span>
                <strong className="text-xl font-extrabold text-[#0f172a]">{estCo2ReducedTons.toLocaleString()} tons/yr</strong>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center">
                <Clock className="w-5 h-5 text-[#0066cc] mx-auto mb-1" />
                <span className="text-[10px] font-bold text-slate-500 uppercase block mb-1">Capital Payback</span>
                <strong className="text-xl font-extrabold text-[#0f172a]">{estPaybackMonths} Months</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Stacked Cards Solutions Section (1-Liners Minimal) */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container-wide mb-10 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">SOLUTION PILLARS</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mt-1">Stacked Solution Pillars</h2>
        </div>

        <div className="container-wide max-w-5xl space-y-12 pb-16">
          
          {/* Card 1 */}
          <div className="sticky top-20 z-10 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="text-[#0066cc] w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 01 / DECARBONIZATION</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">Turnkey Net-Zero Buildings</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-4">
                  Integrate renewable power balance, YORK® magnetic chillers, and automated battery energy storage.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#0066cc]" /> Guaranteed annual energy metrics</span>
                </div>
                <Link href="/contact" className="button button-primary text-xs px-5 py-2.5">
                  Schedule Audit →
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden border border-slate-200">
                <Image src="/images/jci-solutions.png" alt="Net-Zero Buildings" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="sticky top-24 z-20 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="text-[#0066cc] w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 02 / SMART AUTOMATION</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">Autonomous HVAC & Metasys® Controls</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-4">
                  Predictive AI modulates fan speeds, chilled water setpoints, and damper positions in real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#0066cc]" /> BACnet/IP native open protocol</span>
                </div>
                <Link href="/products-and-services" className="button button-primary text-xs px-5 py-2.5">
                  Explore Controls →
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden border border-slate-200">
                <Image src="/images/jci-insight.png" alt="Metasys Controls" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="sticky top-28 z-30 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="text-[#0066cc] w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 03 / HEALTHY SPACES</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">Indoor Air Quality & Life Safety</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-4">
                  Continuous air quality sensing, HEPA filtration, and unified fire & physical access security.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#0066cc]" /> WELL and RESET certified IAQ</span>
                </div>
                <Link href="/contact" className="button button-primary text-xs px-5 py-2.5">
                  Consult IAQ Expert →
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden border border-slate-200">
                <Image src="/images/jci-hero.png" alt="Healthy Spaces" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="sticky top-32 z-40 bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="text-[#0066cc] w-4 h-4" />
                  <span className="text-xs font-bold tracking-wider text-[#0066cc] uppercase">PILLAR 04 / THERMAL STORAGE</span>
                </div>
                <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">Thermal Storage & Heat Pumps</h3>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-4">
                  Shift peak electrical loads to off-peak hours using thermal ice storage and heat pumps.
                </p>
                <div className="flex flex-wrap gap-2 mb-6 text-xs font-semibold text-slate-700">
                  <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-[#0066cc]" /> Peak demand charge mitigation</span>
                </div>
                <Link href="/products-and-services" className="button button-primary text-xs px-5 py-2.5">
                  View Heat Pumps →
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-56 w-full rounded-2xl overflow-hidden border border-slate-200">
                <Image src="/images/jci-solutions.png" alt="Thermal Storage" fill className="object-cover" />
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  )
}
