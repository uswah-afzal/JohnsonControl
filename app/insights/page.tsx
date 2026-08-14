'use client'

import React, { useState, useRef } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, ArrowUpRight, BookOpen, Newspaper, Award } from 'lucide-react'

const insightsData = [
  {
    id: 1,
    category: 'Customer Story',
    title: 'Dubai DEWA HQ: World’s Largest Net-Zero Government Building',
    summary: 'Johnson Controls OpenBlue™ platform integrates 10,000+ smart sensors, delivering 100% renewable power balance and zero net carbon emissions.',
    image: '/images/jci-insight.png',
    date: 'August 2026',
    readTime: '4 min read',
    icon: <Award className="w-4 h-4 text-aqua" />
  },
  {
    id: 2,
    category: 'Whitepaper',
    title: 'AI & Machine Learning in Commercial HVAC Optimization',
    summary: 'How predictive algorithms eliminate peak electrical demand surcharges and cut chilled water plant energy usage by up to 40%.',
    image: '/images/jci-solutions.png',
    date: 'July 2026',
    readTime: '6 min read',
    icon: <BookOpen className="w-4 h-4 text-aqua" />
  },
  {
    id: 3,
    category: 'Press Release',
    title: 'Johnson Controls Named Leader in Smart Building IoT Platforms',
    summary: 'Independent analyst firm recognizes OpenBlue™ Enterprise Manager for exceptional AI capabilities and FedRAMP security certification.',
    image: '/images/jci-hero.png',
    date: 'June 2026',
    readTime: '3 min read',
    icon: <Newspaper className="w-4 h-4 text-aqua" />
  },
  {
    id: 4,
    category: 'Customer Story',
    title: 'Hyperscale Data Center Achieves PUE 1.12 in Desert Climate',
    summary: 'Custom YORK® magnetic-bearing chillers and direct liquid cooling enable 99.999% uptime with industry-record energy efficiency.',
    image: '/images/jci-solutions.png',
    date: 'May 2026',
    readTime: '5 min read',
    icon: <Award className="w-4 h-4 text-aqua" />
  }
]

export default function InsightsPage() {
  const [filter, setFilter] = useState('All Articles')
  const carouselRef = useRef<HTMLDivElement>(null)

  const filteredData = filter === 'All Articles'
    ? insightsData
    : insightsData.filter((item) => item.category === filter)

  // Single card step carousel controls
  const scrollNext = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector('.insight-slide-card') as HTMLElement
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 28
        carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
      }
    }
  }

  const scrollPrev = () => {
    if (carouselRef.current) {
      const firstCard = carouselRef.current.querySelector('.insight-slide-card') as HTMLElement
      if (firstCard) {
        const cardWidth = firstCard.offsetWidth + 28
        carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
      }
    }
  }

  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">KNOWLEDGE & MEDIA HUB</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Building Insights & Customer Stories
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Discover how leading global enterprises achieve net-zero carbon targets and intelligent building operations.
          </p>
        </div>
      </section>

      {/* Featured Case Study Hero Card */}
      <section className="py-12 bg-[#041221] border-b border-white/10">
        <div className="container-wide">
          <div className="bg-[#06192d] border border-white/15 rounded-2xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-aqua/10 text-aqua text-xs font-bold rounded-full border border-aqua/30 uppercase">
                      FEATURED CASE STUDY
                    </span>
                    <span className="text-xs text-white/50">• August 2026</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                    Dubai DEWA HQ: World’s Largest Net-Zero Government Building
                  </h2>

                  <p className="text-white/80 text-sm leading-relaxed mb-6">
                    Integrating over 10,000 smart building sensors into OpenBlue™ Enterprise Manager, achieving zero net carbon emissions and 100% solar power balance.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-[#030e1a]/70 rounded-xl border border-white/10">
                    <div>
                      <strong className="text-2xl font-extrabold text-aqua block">100%</strong>
                      <span className="text-[11px] text-white/60 uppercase">Renewable Solar Balance</span>
                    </div>
                    <div>
                      <strong className="text-2xl font-extrabold text-aqua block">10,000+</strong>
                      <span className="text-[11px] text-white/60 uppercase">Smart Connected Sensors</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Link href="/contact" className="button button-primary text-xs px-6 py-3 inline-flex items-center gap-2">
                    <span>Read Full Case Study</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[320px] lg:min-h-full">
                <Image
                  src="/images/jci-insight.png"
                  alt="Dubai DEWA HQ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Single-Card Step Carousel */}
      <section className="py-16 bg-[#030e1a]">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
              {['All Articles', 'Customer Stories', 'Whitepapers', 'Press Releases'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`filter-tab-btn ${filter === cat ? 'filter-tab-active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Single Card Carousel Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                className="carousel-nav-btn p-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="Previous article"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={scrollNext}
                className="carousel-nav-btn p-2.5 rounded-full border border-white/20 text-white/80 hover:text-white hover:border-white transition-colors"
                aria-label="Next article"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Carousel Track */}
          <div ref={carouselRef} className="insights-carousel-track flex gap-7 overflow-x-auto scroll-smooth pb-6 scrollbar-none">
            {filteredData.map((item) => (
              <div key={item.id} className="insight-slide-card flex-none w-[340px] sm:w-[380px] bg-[#06192d] border border-white/15 rounded-xl overflow-hidden hover:border-aqua transition-all">
                <div className="relative h-48 w-full">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                  <span className="absolute top-3 left-3 bg-[#030e1a]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-aqua border border-white/15 flex items-center gap-1.5">
                    {item.icon}
                    {item.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-center text-[11px] text-white/50 mb-2">
                    <span>{item.date}</span>
                    <span>{item.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 leading-snug hover:text-aqua transition-colors">{item.title}</h3>
                  <p className="text-xs text-white/70 leading-relaxed mb-4">{item.summary}</p>

                  <Link href="/contact" className="text-xs font-bold text-aqua hover:underline inline-flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowUpRight size={14} />
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
