'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Activity, 
  Cloud, 
  Lock, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2,
  Sparkles,
  Terminal
} from 'lucide-react'

export default function LightOpenBluePage() {
  const [activeMetric, setActiveMetric] = useState('energy')
  const [logStream, setLogStream] = useState<string[]>([
    '[SYSTEM INIT] OpenBlue™ AI Operating System online',
    '[TELEMETRY] Sensor node #482 reporting chilled water temp 6.2°C',
    '[OPTIMIZATION] Autonomous setpoint modulation active (-14.2 kW load shift)',
    '[CYBER] ISO 27001 encrypted packet verification: 100% secure'
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      const logs = [
        `[AI MODEL] Predictive thermal load updated for +${Math.floor(Math.random() * 5 + 1)}°C ambient rise`,
        `[IAQ] Dynamic ventilation boost activated in Zone B (CO2 < 450 ppm)`,
        `[ENERGY] Battery storage dispatching 120 kWh during peak tariff window`,
        `[SECURITY] Biometric access credential verified at Main Terminal`
      ]
      const randomLog = logs[Math.floor(Math.random() * logs.length)]
      setLogStream((prev) => [randomLog, ...prev.slice(0, 3)])
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Light Design) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">INTELLIGENT BUILDING OPERATING SYSTEM</span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Johnson Controls OpenBlue™ Platform.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Applying data from both inside buildings and beyond to manage operations systemically with predictive AI and autonomous equipment control.
            </p>
          </div>
        </div>
      </section>

      {/* Live Telemetry Command Simulator Section */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider block mb-1">LIVE COMMAND SIMULATOR</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a]">OpenBlue™ Autonomous Operations Center</h2>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-600 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>100% Operational</span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div 
                onClick={() => setActiveMetric('energy')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === 'energy' 
                    ? 'bg-slate-50 border-[#0066cc] shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <Zap className="w-6 h-6 text-[#0066cc] mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">AI Energy Savings</span>
                <strong className="text-3xl font-extrabold text-[#0f172a]">38.4%</strong>
                <span className="text-xs text-emerald-600 font-bold block mt-1">Real-time reduction</span>
              </div>

              <div 
                onClick={() => setActiveMetric('iaq')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === 'iaq' 
                    ? 'bg-slate-50 border-[#0066cc] shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <Activity className="w-6 h-6 text-[#0066cc] mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Indoor Air Quality</span>
                <strong className="text-3xl font-extrabold text-[#0f172a]">98/100</strong>
                <span className="text-xs text-emerald-600 font-bold block mt-1">Clean air index optimal</span>
              </div>

              <div 
                onClick={() => setActiveMetric('cyber')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === 'cyber' 
                    ? 'bg-slate-50 border-[#0066cc] shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <ShieldCheck className="w-6 h-6 text-[#0066cc] mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Cyber Shield</span>
                <strong className="text-3xl font-extrabold text-[#0f172a]">Active</strong>
                <span className="text-xs text-slate-500 font-bold block mt-1">ISO 27001 Encrypted</span>
              </div>

              <div 
                onClick={() => setActiveMetric('carbon')}
                className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                  activeMetric === 'carbon' 
                    ? 'bg-slate-50 border-[#0066cc] shadow-sm' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <Cloud className="w-6 h-6 text-[#0066cc] mb-2" />
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">Scope 1 & 2 CO2</span>
                <strong className="text-3xl font-extrabold text-[#0f172a]">-1,420t</strong>
                <span className="text-xs text-emerald-600 font-bold block mt-1">Avoided YTD</span>
              </div>
            </div>

            {/* Dark Telemetry Terminal Box */}
            <div className="bg-[#0f172a] border border-slate-800 rounded-2xl p-6 text-emerald-400 font-mono text-xs space-y-2 shadow-inner">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-400 text-[11px]">
                <span className="flex items-center gap-2 font-bold">
                  <Terminal size={14} className="text-[#0066cc]" /> OpenBlue™ AI Stream Log
                </span>
                <span>Port 8443 / TLS 1.3</span>
              </div>
              {logStream.map((log, idx) => (
                <p key={idx} className="leading-relaxed animate-in fade-in duration-300">
                  {log}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OpenBlue Four Pillars */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">PLATFORM CAPABILITIES</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] mt-2 mb-4">The Four Pillars of OpenBlue™</h2>
            <p className="text-slate-600 text-sm">Empowering facility directors with autonomous AI intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Zap size={22} />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">OpenBlue™ Energy Advisor</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Continuously analyzes building energy profiles against outdoor weather forecasts and utility rate schedules to dynamically optimize equipment staging.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066cc]">
                <CheckCircle2 size={14} /> 30%+ Carbon Reduction Guaranteed
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Activity size={22} />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">OpenBlue™ Healthy Buildings</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Combines IAQ sensor readings with intelligent ventilation control to maintain clean airflow, optimal humidity, and occupant wellness.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066cc]">
                <CheckCircle2 size={14} /> WELL and RESET Certified Standard
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <ShieldCheck size={22} />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">OpenBlue™ Cyber Shield</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Built from the ground up with zero-trust architecture, encrypted device authentication, and automated security patch management.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066cc]">
                <CheckCircle2 size={14} /> FedRAMP and ISO 27001 Accredited
              </div>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Cpu size={22} />
              </span>
              <h3 className="text-2xl font-extrabold text-[#0f172a] mb-2">OpenBlue™ Performance Manager</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                Single pane of glass enterprise dashboard connecting multi-campus HVAC, fire protection, security, and facility maintenance workflows.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0066cc]">
                <CheckCircle2 size={14} /> Unified Multi-Site Synchronisation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">DEPLOYMENT READINESS</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Connect Your Building to OpenBlue™ AI Today
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
            Our digital engineers will audit your existing facility management infrastructure and deploy OpenBlue™ with zero downtime.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
              Request Platform Demo
            </Link>
            <Link href="/solutions" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
              <span>Explore Net-Zero Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
