'use client'

import React, { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CountUpNumber from '@/components/CountUpNumber'
import Image from 'next/image'
import Link from 'next/link'
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Cpu, 
  Globe2, 
  CheckCircle2, 
  Sliders,
  DollarSign,
  Cloud,
  Clock,
  ChevronLeft,
  ChevronRight
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

export default function LightHomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const slide = heroSlides[currentSlide]

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Slide Banner (Clean Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-24 relative overflow-hidden">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">{slide.eyebrow}</span>
              <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-2">
                {slide.headline}
              </h1>
              <p className="text-2xl sm:text-3xl font-bold text-[#0066cc] mb-6">
                {slide.sub}
              </p>
              <p className="text-slate-600 text-base leading-relaxed max-w-xl mb-8">
                Over 140 years of engineering innovation in HVAC, building automation, life safety, and AI-powered zero-carbon building infrastructure.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link href="/products-and-services" className="button button-primary px-8 py-3.5 text-xs">
                  Explore Products & Services
                </Link>
                <Link href="/solutions" className="button button-navy px-8 py-3.5 text-xs flex items-center gap-2">
                  <span>View Net-Zero Solutions</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-4 mt-12 pt-6 border-t border-slate-100">
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

            <div className="lg:col-span-5 relative h-80 sm:h-96 w-full rounded-3xl overflow-hidden border border-slate-200 shadow-lg bg-slate-100">
              <Image src={slide.image} alt={slide.sub} fill className="object-cover" priority />
              <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#0066cc] border border-slate-200">
                {slide.tag}
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* Global Impact Stats Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
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

      {/* Core Offerings Cards */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">EXCELLENCE IN BUILDING SYSTEMS</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] mt-2 mb-4">Complete Building Ecosystem</h2>
            <p className="text-slate-600 text-sm">Discover how our connected systems transform your facility performance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Zap size={24} />
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">HVAC Equipment & Chillers</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">
                YORK® magnetic-bearing chillers and heat pumps designed for maximum seasonal energy efficiency and zero vibration.
              </p>
              <Link href="/products-and-services" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore HVAC Equipment →
              </Link>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <Cpu size={24} />
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">Metasys® Building Controls</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">
                Connect HVAC, lighting, and security onto a single mobile-first IP network for unified campus management.
              </p>
              <Link href="/products-and-services" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore Metasys® →
              </Link>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-3xl p-8 shadow-sm">
              <span className="p-3 bg-slate-100 text-[#0066cc] rounded-2xl inline-block mb-4 border border-slate-200">
                <ShieldCheck size={24} />
              </span>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">OpenBlue™ AI Platform</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-6">
                Autonomous AI thermal setpoint modulation and predictive analytics for zero-carbon building operations.
              </p>
              <Link href="/openblue" className="text-xs font-bold text-[#0066cc] hover:underline flex items-center gap-1">
                Explore OpenBlue™ →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Bottom Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container-wide text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">START YOUR DECARBONIZATION JOURNEY</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mt-2 mb-4">
            Transform Your Facility into a Smart Net-Zero Space
          </h2>
          <p className="text-slate-600 text-sm mb-8 leading-relaxed">
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
