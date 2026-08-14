'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CircularOrbit from '@/components/CircularOrbit'
import CountUpNumber from '@/components/CountUpNumber'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe2, 
  CheckCircle2, 
  Sliders,
  DollarSign,
  Cloud,
  Clock,
  Terminal,
  Activity,
  Award
} from 'lucide-react'

const heroSlides = [
  { 
    eyebrow: 'THERMAL MANAGEMENT', 
    headline: 'Where It Really Matters:', 
    sub: 'Your Mission-Critical Data Hall', 
    image: '/images/jci-hero.png',
    tag: 'Data Center Cooling'
  },
  { 
    eyebrow: 'AIR PRESSURE CONTROL', 
    headline: 'Where It Really Matters:', 
    sub: 'Sterile Surgical Operating Rooms', 
    image: '/images/jci-solutions.png',
    tag: 'Healthcare Air Quality'
  },
  { 
    eyebrow: 'AUTONOMOUS AI DECARBONIZATION', 
    headline: 'Where It Really Matters:', 
    sub: 'Your Commercial Campus Net Zero Goal', 
    image: '/images/jci-insight.png',
    tag: 'OpenBlue™ AI'
  }
]

export default function FullLandingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sqFt, setSqFt] = useState(250000)
  const [targetPercent, setTargetPercent] = useState(35)
  const [activeMetric, setActiveMetric] = useState('energy')

  // Hero carousel timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  // ROI Calculations
  const estAnnualSavings = Math.round((sqFt * 2.85 * (targetPercent / 100)))
  const estCo2ReducedTons = Math.round((sqFt * 0.045 * (targetPercent / 100)))
  const estPaybackMonths = Math.max(12, Math.round(48 - targetPercent * 0.6))

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* 1. Hero Slide Banner (Clean Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-20 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">{slide.eyebrow}</span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
                {slide.headline}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-[#0066cc] mb-4">
                {slide.sub}
              </p>
              <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal max-w-xl mb-8">
                Over 140 years of engineering innovation in HVAC, building controls, life safety, and AI decarbonization.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/products-and-services" className="button button-primary px-7 py-3 text-xs">
                  Explore Products & Services
                </Link>
                <Link href="/solutions" className="button button-navy px-7 py-3 text-xs flex items-center gap-2">
                  <span>View Net-Zero Solutions</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Slider Dots */}
              <div className="flex items-center gap-4 mt-10 pt-6 border-t border-slate-100">
                <div className="flex gap-2">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        idx === currentSlide ? 'w-8 bg-[#0066cc]' : 'w-2 bg-slate-300'
                      }`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-slate-400 font-bold">0{currentSlide + 1} / 0{heroSlides.length}</span>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-slate-100">
              <Image src={slide.image} alt={slide.sub} fill className="object-cover" priority />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0066cc] border border-slate-200">
                {slide.tag}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Global Impact Stats Grid (Animated CountUp) */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <CountUpNumber end={140} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Years of Innovation (Since 1885)</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <CountUpNumber end={100000} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Global Employees & Engineers</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <CountUpNumber end={150} suffix="+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Countries Served Worldwide</span>
            </div>

            <div className="bg-white border border-slate-200 p-6 rounded-2xl text-center shadow-sm">
              <CountUpNumber end={6} prefix="$" suffix="B+" className="text-4xl font-extrabold text-[#0f172a] block mb-1" />
              <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">Customer Decarbonization Funded</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Ecosystem Grid */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">EXCELLENCE IN BUILDING SYSTEMS</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mt-1 mb-2">Connected Building Ecosystem</h2>
            <p className="text-slate-600 text-xs sm:text-sm font-medium">Integrated HVAC, building controls, and AI operating systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm">
              <div className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Zap size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1.5">YORK® Chillers & HVAC</h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Magnetic-bearing chillers and heat pumps engineered for zero vibration and low GWP cooling.
              </p>
              <Link href="/products-and-services" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore HVAC Systems →
              </Link>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm">
              <div className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Cpu size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1.5">Metasys® Building Controls</h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Intuitive enterprise control connecting HVAC, lighting, and security onto a single IP network.
              </p>
              <Link href="/products-and-services" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore Metasys® →
              </Link>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 shadow-sm">
              <div className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <ShieldCheck size={22} />
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-1.5">OpenBlue™ AI Platform</h3>
              <p className="text-slate-600 text-xs font-medium leading-relaxed mb-4">
                Autonomous AI thermal setpoint modulation and predictive analytics for zero-carbon building operations.
              </p>
              <Link href="/openblue" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore OpenBlue™ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Circular Orbit Section */}
      <section className="py-8 bg-slate-50 border-y border-slate-200">
        <div className="container-wide mb-6 text-center max-w-xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">SPECIALIZED VERTICALS</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-1">Industry Solutions Orbit</h2>
        </div>
        <CircularOrbit />
      </section>

      {/* 5. Interactive Net-Zero ROI Calculator Teaser */}
      <section className="py-16 bg-[#f8fafc]">
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

      {/* 6. CTA Bottom Section */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="container-wide max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">START YOUR DECARBONIZATION JOURNEY</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0f172a] mb-3">
            Transform Your Facility into a Smart Net-Zero Space
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm font-medium mb-8">
            Our specialized engineers provide turnkey HVAC sizing, building control audits, and zero-carbon performance contracting worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="button button-primary px-8 py-3.5 text-xs">
              Schedule Consultation
            </Link>
            <Link href="/solutions" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
              <span>View Net-Zero Solutions</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
