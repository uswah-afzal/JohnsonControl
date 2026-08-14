'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Leaf, Shield, Cpu, Sliders, DollarSign, Cloud, Clock } from 'lucide-react'

export default function SolutionsPage() {
  const [sqFt, setSqFt] = useState(250000)
  const [targetPercent, setTargetPercent] = useState(35)

  // Calculations
  const estAnnualSavings = Math.round((sqFt * 2.85 * (targetPercent / 100)))
  const estCo2ReducedTons = Math.round((sqFt * 0.045 * (targetPercent / 100)))
  const estPaybackMonths = Math.max(12, Math.round(48 - targetPercent * 0.6))

  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">NET ZERO & DECARBONIZATION</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Building Solutions for a Sustainable Future
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Turn building decarbonization goals into cash-positive realities with guaranteed energy performance contracts and OpenBlue™ predictive AI.
          </p>
        </div>
      </section>

      {/* Interactive Net-Zero ROI Calculator */}
      <section className="py-16 bg-[#041221] border-b border-white/10">
        <div className="container-wide">
          <div className="calculator-card max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <span className="p-3 bg-aqua/10 text-aqua rounded-xl border border-aqua/30">
                <Sliders size={20} />
              </span>
              <div>
                <span className="text-xs font-bold tracking-wider text-aqua uppercase">INTERACTIVE CALCULATOR</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Estimate Your Facility Decarbonization ROI</h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Slider 1: Square Footage */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">Facility Area (sq. ft.)</label>
                  <strong className="text-lg font-bold text-aqua">{sqFt.toLocaleString()} sq ft</strong>
                </div>
                <input
                  type="range"
                  min="25000"
                  max="1000000"
                  step="25000"
                  value={sqFt}
                  onChange={(e) => setSqFt(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-aqua"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>25k sq ft</span>
                  <span>1M sq ft</span>
                </div>
              </div>

              {/* Slider 2: Target Reduction */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-white/80 uppercase tracking-wider">Target Energy Reduction</label>
                  <strong className="text-lg font-bold text-aqua">{targetPercent}% Reduction</strong>
                </div>
                <input
                  type="range"
                  min="10"
                  max="60"
                  step="5"
                  value={targetPercent}
                  onChange={(e) => setTargetPercent(Number(e.target.value))}
                  className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-aqua"
                />
                <div className="flex justify-between text-[10px] text-white/40 mt-1">
                  <span>10% (Basic)</span>
                  <span>60% (Deep Net-Zero)</span>
                </div>
              </div>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/15">
              <div className="bg-[#030e1a]/80 border border-white/10 p-5 rounded-xl text-center">
                <DollarSign className="w-6 h-6 text-aqua mx-auto mb-2" />
                <span className="text-xs text-white/60 uppercase tracking-wider block">Estimated Annual Savings</span>
                <strong className="text-2xl font-extrabold text-white">${estAnnualSavings.toLocaleString()}</strong>
              </div>

              <div className="bg-[#030e1a]/80 border border-white/10 p-5 rounded-xl text-center">
                <Cloud className="w-6 h-6 text-aqua mx-auto mb-2" />
                <span className="text-xs text-white/60 uppercase tracking-wider block">CO2 Emissions Avoided</span>
                <strong className="text-2xl font-extrabold text-white">{estCo2ReducedTons.toLocaleString()} tons/yr</strong>
              </div>

              <div className="bg-[#030e1a]/80 border border-white/10 p-5 rounded-xl text-center">
                <Clock className="w-6 h-6 text-aqua mx-auto mb-2" />
                <span className="text-xs text-white/60 uppercase tracking-wider block">Est. Capital Payback</span>
                <strong className="text-2xl font-extrabold text-white">{estPaybackMonths} Months</strong>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/contact" className="button button-primary px-8 py-3 text-xs uppercase tracking-wider">
                Request Detailed Decarbonization Audit →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stacked Cards Solutions Section */}
      <section className="py-20 bg-[#030e1a]">
        <div className="container-wide mb-12">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">SOLUTION PILLARS</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2">Classy Stacked Card Solutions</h2>
        </div>

        <div className="container-wide space-y-12">
          {/* Solution 1 */}
          <div className="bg-gradient-to-r from-[#09253d] to-[#041221] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Leaf className="text-aqua w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-aqua uppercase">01 / DECARBONIZATION</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Turnkey Net-Zero Buildings</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Integrate renewable power, ultra-efficient YORK® chillers, and automated energy storage into a single cash-positive performance contract.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="button button-primary text-xs px-6 py-2.5">
                    Schedule Audit
                  </Link>
                  <Link href="/openblue" className="button button-navy text-xs px-6 py-2.5">
                    OpenBlue™ Platform
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 w-full rounded-xl overflow-hidden border border-white/10">
                <Image src="/images/jci-solutions.png" alt="Net-Zero Buildings" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Solution 2 */}
          <div className="bg-gradient-to-r from-[#041221] to-[#06192d] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Cpu className="text-aqua w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-aqua uppercase">02 / SMART AUTOMATION</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Autonomous HVAC & Metasys® Controls</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Predictive AI continuously modulates fan speeds, chilled water setpoints, and damper positions based on weather and occupancy.
                </p>
                <div className="flex gap-4">
                  <Link href="/products-and-services" className="button button-primary text-xs px-6 py-2.5">
                    Explore Controls
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 w-full rounded-xl overflow-hidden border border-white/10">
                <Image src="/images/jci-insight.png" alt="Metasys Controls" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Solution 3 */}
          <div className="bg-gradient-to-r from-[#09253d] to-[#030e1a] border border-white/15 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="text-aqua w-5 h-5" />
                  <span className="text-xs font-bold tracking-wider text-aqua uppercase">03 / HEALTHY SPACES</span>
                </div>
                <h3 className="text-3xl font-extrabold text-white mb-4">Clean Air Quality & Safety Integration</h3>
                <p className="text-white/80 text-sm leading-relaxed mb-6">
                  Continuous air quality sensing, HEPA filtration, and unified fire & physical security for total peace of mind.
                </p>
                <div className="flex gap-4">
                  <Link href="/contact" className="button button-primary text-xs px-6 py-2.5">
                    Consult an IAQ Expert
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative h-64 w-full rounded-xl overflow-hidden border border-white/10">
                <Image src="/images/jci-hero.png" alt="Healthy Spaces" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
