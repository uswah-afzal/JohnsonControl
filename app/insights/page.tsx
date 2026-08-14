'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight, Clock, Award, CheckCircle2 } from 'lucide-react'

const insightsArticles = [
  {
    id: 'dewa-netzero',
    category: 'Case Study',
    title: 'Dubai DEWA HQ Net-Zero Strategy',
    summary: '10,000+ IoT sensors and OpenBlue™ AI powering zero carbon operations.',
    points: ['10,000+ IoT Sensors', 'Zero Net Carbon'],
    image: '/images/jci-solutions.png',
    readTime: '6 min read',
    date: 'August 2026',
    featured: true
  },
  {
    id: 'datacenter-cooling',
    category: 'Whitepaper',
    title: 'AI Data Center Thermal Cooling',
    summary: 'YORK® magnetic chillers and liquid cooling achieving PUE < 1.15.',
    points: ['PUE < 1.15', 'Liquid Cooling Native'],
    image: '/images/jci-hero.png',
    readTime: '8 min read',
    date: 'July 2026',
    featured: false
  },
  {
    id: 'iaq-wellness',
    category: 'Industry Guide',
    title: 'Commercial Campus IAQ Tuning',
    summary: 'Dynamic ventilation and HEPA filtration modulation for clean air.',
    points: ['RESET Certified', 'HEPA Modulation'],
    image: '/images/jci-insight.png',
    readTime: '5 min read',
    date: 'July 2026',
    featured: false
  },
  {
    id: 'metasys-cyber',
    category: 'Cybersecurity',
    title: 'Building Controls Cybersecurity',
    summary: 'Encrypted BACnet/IP network protection and zero-day threat defense.',
    points: ['ISO 27001 Certified', 'BACnet/IP Encrypted'],
    image: '/images/jci-solutions.png',
    readTime: '7 min read',
    date: 'June 2026',
    featured: false
  }
]

export default function RedesignedInsightsPage() {
  const [carouselStep, setCarouselStep] = useState(0)
  const featuredArticle = insightsArticles.find((a) => a.featured) || insightsArticles[0]

  const nextStep = () => {
    setCarouselStep((prev) => (prev + 1) % insightsArticles.length)
  }

  const prevStep = () => {
    setCarouselStep((prev) => (prev - 1 + insightsArticles.length) % insightsArticles.length)
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a]">
      <Navbar />

      {/* Hero Header (Clean Minimal 1-Liner) */}
      <section className="bg-white border-b border-slate-200/80 py-12 sm:py-16 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase block mb-2">BUILDING INSIGHTS & CASE STUDIES</span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-3">
              Intelligence for Sustainable Buildings.
            </h1>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-normal">
              Explore customer success stories, technical whitepapers, and industry research from Johnson Controls experts worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Case Study Card */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
            <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider block mb-3">FEATURED CASE STUDY SPOTLIGHT</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3 py-0.5 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {featuredArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mb-2 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm font-medium leading-normal mb-4">
                  {featuredArticle.summary}
                </p>

                {/* Point Pills */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {featuredArticle.points.map((pt) => (
                    <span key={pt} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold border border-slate-200">
                      <CheckCircle2 size={13} className="text-[#0066cc]" />
                      {pt}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-6 text-xs text-slate-500 font-medium mb-6">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#0066cc]" /> {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award size={14} className="text-[#0066cc]" /> Dubai DEWA HQ
                  </span>
                </div>
                <Link href="/contact" className="button button-primary px-5 py-2.5 text-xs inline-flex items-center gap-2">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-56 sm:h-64 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
                <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Card Grid Section */}
      <section className="py-16 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">EXPERT WHITEPAPERS</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0f172a] mt-1">Latest Articles & Research</h2>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={prevStep} 
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] transition-colors shadow-sm"
                aria-label="Previous Article"
              >
                <ChevronLeft size={16} />
              </button>
              <button 
                onClick={nextStep} 
                className="w-9 h-9 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] transition-colors shadow-sm"
                aria-label="Next Article"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insightsArticles.map((art, idx) => (
              <div 
                key={art.id} 
                className={`bg-white border rounded-3xl p-6 shadow-sm transition-all duration-300 hover:shadow-md ${
                  idx === carouselStep ? 'border-[#0066cc] ring-2 ring-[#0066cc]/20' : 'border-slate-200/90'
                }`}
              >
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mb-4 border border-slate-200 bg-slate-100">
                  <Image src={art.image} alt={art.title} fill className="object-cover" />
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#0066cc] uppercase tracking-wider block">{art.category}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{art.readTime}</span>
                </div>

                <h3 className="text-base font-extrabold text-[#0f172a] mb-1.5 leading-snug">{art.title}</h3>
                
                <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4">{art.summary}</p>

                {/* Point Pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {art.points.map((pt) => (
                    <span key={pt} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-bold border border-slate-200">
                      <CheckCircle2 size={11} className="text-[#0066cc]" />
                      {pt}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
                  <Link href="/contact" className="text-xs text-[#0066cc] font-bold hover:underline flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
