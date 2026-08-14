'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Activity, Zap, Shield, Cpu, Play, Pause, AlertCircle, ArrowUpRight } from 'lucide-react'

export default function OpenBluePage() {
  const [isSimulating, setIsSimulating] = useState(true)

  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">INTELLIGENT BUILDING OPERATING SYSTEM</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Johnson Controls OpenBlue™ Platform
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Applying data from both inside buildings and beyond to manage operations systemically with predictive AI and autonomous equipment control.
          </p>
        </div>
      </section>

      {/* OpenBlue Command Center Simulator */}
      <section className="py-16 bg-[#041221] border-b border-white/10">
        <div className="container-wide">
          <div className="flex justify-between items-center mb-6">
            <div>
              <span className="text-xs font-bold tracking-wider text-aqua uppercase">LIVE TELEMETRY SIMULATOR</span>
              <h2 className="text-2xl font-extrabold text-white">OpenBlue™ Intelligent Command Center</h2>
            </div>
            <button
              onClick={() => setIsSimulating(!isSimulating)}
              className="button button-navy text-xs px-4 py-2 flex items-center gap-2"
            >
              {isSimulating ? <Pause size={14} /> : <Play size={14} />}
              <span>{isSimulating ? 'Pause Live Stream' : 'Resume Live Stream'}</span>
            </button>
          </div>

          {/* Interactive Command Widgets */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="bg-[#06192d] border border-white/15 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-white/60 uppercase font-semibold">AI Energy Savings</span>
                <Zap className="text-aqua w-5 h-5" />
              </div>
              <strong className="text-3xl font-extrabold text-white block mb-1">38.4%</strong>
              <span className="text-[11px] text-aqua font-semibold">↑ 4.2% optimized vs baseline</span>
            </div>

            <div className="bg-[#06192d] border border-white/15 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-white/60 uppercase font-semibold">Indoor Air Quality (IAQ)</span>
                <Activity className="text-aqua w-5 h-5" />
              </div>
              <strong className="text-3xl font-extrabold text-white block mb-1">98 / 100</strong>
              <span className="text-[11px] text-aqua font-semibold">Optimal Airflow & Filtration</span>
            </div>

            <div className="bg-[#06192d] border border-white/15 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-white/60 uppercase font-semibold">Cyber Security Status</span>
                <Shield className="text-aqua w-5 h-5" />
              </div>
              <strong className="text-3xl font-extrabold text-white block mb-1">SECURED</strong>
              <span className="text-[11px] text-white/70">FedRAMP & ISO 27001 Active</span>
            </div>

            <div className="bg-[#06192d] border border-white/15 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs text-white/60 uppercase font-semibold">Predictive Health</span>
                <Cpu className="text-aqua w-5 h-5" />
              </div>
              <strong className="text-3xl font-extrabold text-white block mb-1">99.99%</strong>
              <span className="text-[11px] text-aqua font-semibold">0 Critical Faults Detected</span>
            </div>
          </div>

          {/* Alert Telemetry Feed */}
          <div className="bg-[#030e1a] border border-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle size={16} className="text-aqua" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Real-time Predictive Analytics Log</span>
            </div>
            <div className="space-y-2 text-xs font-mono text-white/80">
              <div className="p-2 bg-white/5 rounded border border-white/10 flex justify-between">
                <span>[10:42:01 AM] YORK® Chiller #3: Variable speed drive optimized for peak outdoor ambient temperature.</span>
                <span className="text-aqua">PASS</span>
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 flex justify-between">
                <span>[10:41:45 AM] Metasys® BMS: Automated static pressure reset triggered in Zone 4 B-Tower.</span>
                <span className="text-aqua">OPTIMIZED</span>
              </div>
              <div className="p-2 bg-white/5 rounded border border-white/10 flex justify-between">
                <span>[10:40:12 AM] OpenBlue™ IAQ: Outdoor damper position adjusted to optimize natural economizer cooling.</span>
                <span className="text-aqua">ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars Section */}
      <section className="py-20 bg-[#030e1a]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-aqua uppercase">OPENBLUE ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 mb-3">The Four OpenBlue™ Pillars</h2>
            <p className="text-white/70 text-sm">Systemic integration connecting HVAC, fire, security, and energy management.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#06192d] border border-white/15 rounded-xl hover:border-aqua transition-colors">
              <span className="text-xs font-bold text-aqua uppercase tracking-wider block mb-2">Pillar 01</span>
              <h3 className="text-lg font-bold text-white mb-2">Thermal Management</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">Precision chiller & boiler control for zero energy waste.</p>
              <Link href="/products-and-services" className="text-xs text-aqua font-semibold flex items-center gap-1">
                View Thermal Equipment <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="p-6 bg-[#06192d] border border-white/15 rounded-xl hover:border-aqua transition-colors">
              <span className="text-xs font-bold text-aqua uppercase tracking-wider block mb-2">Pillar 02</span>
              <h3 className="text-lg font-bold text-white mb-2">Mission Critical</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">Uninterrupted power & cooling for data centers & surgical suites.</p>
              <Link href="/industries" className="text-xs text-aqua font-semibold flex items-center gap-1">
                View Mission Critical <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="p-6 bg-[#06192d] border border-white/15 rounded-xl hover:border-aqua transition-colors">
              <span className="text-xs font-bold text-aqua uppercase tracking-wider block mb-2">Pillar 03</span>
              <h3 className="text-lg font-bold text-white mb-2">Energy Efficiency</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">Continuous cloud algorithms eliminating peak utility surcharges.</p>
              <Link href="/solutions" className="text-xs text-aqua font-semibold flex items-center gap-1">
                View Efficiency ROI <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="p-6 bg-[#06192d] border border-white/15 rounded-xl hover:border-aqua transition-colors">
              <span className="text-xs font-bold text-aqua uppercase tracking-wider block mb-2">Pillar 04</span>
              <h3 className="text-lg font-bold text-white mb-2">Decarbonization</h3>
              <p className="text-xs text-white/70 leading-relaxed mb-4">Turnkey Scope 1 and Scope 2 carbon reduction management.</p>
              <Link href="/solutions" className="text-xs text-aqua font-semibold flex items-center gap-1">
                View Decarbonization <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
