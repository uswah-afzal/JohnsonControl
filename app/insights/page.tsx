'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { Sparkles, ArrowRight, ChevronLeft, ChevronRight, BookOpen, Clock, Tag, Award } from 'lucide-react'

const insightsArticles = [
  {
    id: 'dewa-netzero',
    category: 'Case Study',
    title: 'Dubai DEWA HQ: Achieving 100% Net Zero Carbon Operations',
    summary: 'How Johnson Controls integrated 10,000+ IoT sensors and OpenBlue™ AI to achieve zero net carbon footprint for the world’s largest government building.',
    image: '/images/jci-solutions.png',
    readTime: '6 min read',
    date: 'August 2026',
    featured: true
  },
  {
    id: 'datacenter-cooling',
    category: 'Whitepaper',
    title: 'Next-Generation Thermal Management for High-Density AI Data Halls',
    summary: 'Exploring magnetic-bearing YORK® chillers and liquid cooling integration for ultra-efficient data center PUE scores under 1.15.',
    image: '/images/jci-hero.png',
    readTime: '8 min read',
    date: 'July 2026',
    featured: false
  },
  {
    id: 'iaq-wellness',
    category: 'Industry Guide',
    title: 'Optimizing Indoor Air Quality (IAQ) for Commercial Campuses',
    summary: 'A comprehensive guide to dynamic ventilation setpoints, HEPA filtration modulation, and occupant wellness certifications.',
    image: '/images/jci-insight.png',
    readTime: '5 min read',
    date: 'July 2026',
    featured: false
  },
  {
    id: 'metasys-cyber',
    category: 'Cybersecurity',
    title: 'Securing Building Automation Systems against Zero-Day Threats',
    summary: 'Best practices for ISO 27001 compliance, encrypted BACnet/IP communications, and automated patch management.',
    image: '/images/jci-solutions.png',
    readTime: '7 min read',
    date: 'June 2026',
    featured: false
  }
]

export default function LightInsightsPage() {
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

      {/* Hero Header (Light Theme) */}
      <section className="bg-white border-b border-slate-200/80 py-16 sm:py-20 relative">
        <div className="container-wide">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-4 border border-[#0066cc]/20">
              <Sparkles size={14} />
              BUILDING INSIGHTS & CASE STUDIES
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-[#0f172a] tracking-tight leading-tight mb-4">
              Intelligence for Sustainable Buildings.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              Explore customer success stories, technical whitepapers, and industry research from Johnson Controls experts worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Spotlight Section (Light Card) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-wide">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
            <span className="text-xs font-bold text-[#0066cc] uppercase tracking-wider block mb-4">FEATURED CASE STUDY SPOTLIGHT</span>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="px-3 py-1 rounded-full bg-[#0066cc]/10 text-[#0066cc] text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {featuredArticle.category}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0f172a] mb-4 leading-tight">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {featuredArticle.summary}
                </p>
                <div className="flex items-center gap-6 text-xs text-slate-500 font-medium mb-8">
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#0066cc]" /> {featuredArticle.readTime}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Award size={14} className="text-[#0066cc]" /> Dubai DEWA HQ
                  </span>
                </div>
                <Link href="/contact" className="button button-primary px-6 py-3 text-xs inline-flex items-center gap-2">
                  <span>Read Full Case Study</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
              <div className="lg:col-span-5 relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
                <Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step Carousel Slider Section (Light Cards) */}
      <section className="py-20 bg-[#f8fafc]">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs font-bold tracking-widest text-[#0066cc] uppercase">EXPERT WHITEPAPERS</span>
              <h2 className="text-3xl font-extrabold text-[#0f172a] mt-1">Latest Articles & Research</h2>
            </div>
            <div className="flex items-center gap-3">
              <button 
                onClick={prevStep} 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] transition-colors shadow-sm"
                aria-label="Previous Article"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextStep} 
                className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:border-[#0066cc] hover:text-[#0066cc] transition-colors shadow-sm"
                aria-label="Next Article"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsArticles.map((art, idx) => (
              <div 
                key={art.id} 
                className={`bg-white border rounded-3xl p-6 shadow-sm transition-all duration-300 ${
                  idx === carouselStep ? 'border-[#0066cc] ring-2 ring-[#0066cc]/20' : 'border-slate-200/90'
                }`}
              >
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 border border-slate-200 bg-slate-100">
                  <Image src={art.image} alt={art.title} fill className="object-cover" />
                </div>
                <span className="text-[11px] font-bold text-[#0066cc] uppercase tracking-wider block mb-2">{art.category}</span>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2 leading-snug">{art.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">{art.summary}</p>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-medium pt-4 border-t border-slate-100">
                  <span>{art.readTime}</span>
                  <Link href="/contact" className="text-[#0066cc] font-bold hover:underline">Read →</Link>
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
