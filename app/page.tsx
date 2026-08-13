'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  Globe2, 
  Menu, 
  Search, 
  X, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  PhoneCall, 
  MapPin, 
  ArrowUp,
  Sparkles,
  Layers,
  Cpu,
  TrendingUp,
  Building2,
  CheckCircle2
} from 'lucide-react'

// Slide data for Hero Section
const heroSlides = [
  { 
    eyebrow: 'Thermal management', 
    headline: 'Where it really matters', 
    sub: 'your data hall', 
    image: '/images/jci-hero.png',
    tag: 'Data Center Cooling'
  },
  { 
    eyebrow: 'Consistent air pressure', 
    headline: 'Where it really matters', 
    sub: 'your isolation room', 
    image: '/images/jci-solutions.png',
    tag: 'Healthcare Air Quality'
  },
  { 
    eyebrow: 'Productivity', 
    headline: 'Where it really matters', 
    sub: 'your lecture hall', 
    image: '/images/jci-insight.png',
    tag: 'Smart Campus Automation'
  },
]

// Performance 2 Points Data
const performancePoints = [
  {
    id: 1,
    number: '01',
    title: 'HVAC services & Predictive Diagnostics',
    text: 'Keeping your critical systems running at peak efficiency. Remote AI diagnostics, continuous telemetry, and condition-based maintenance strategies that maximize uptime and reduce operational risk.',
    image: '/images/jci-solutions.png',
    link: 'Explore HVAC Services',
    metricVal: '99.9%',
    metricLabel: 'Uptime Reliability Goal'
  },
  {
    id: 2,
    number: '02',
    title: 'Johnson Controls Capital & Global Funding',
    text: 'Capital solutions that keep ambitious net-zero projects moving forward. Funding more than $6 billion in customer building projects worldwide, turning decarbonization goals into cash-positive realities.',
    image: '/images/jci-hero.png',
    link: 'Discover Capital Solutions',
    metricVal: '$6B+',
    metricLabel: 'Funded Customer Projects'
  }
]

const navItems = ['Products & Services', 'Solutions', 'Industries', 'Building Insights', 'Support', 'About Us']

const statsData = [
  { value: 140, suffix: '+', label: 'Years in the built environment', desc: 'Leading innovation since 1885' },
  { value: 6, suffix: 'B+', label: 'Dollars funded worldwide', desc: 'Zero upfront customer capital barrier' },
  { value: 1, suffix: ' GW', label: 'AI factory blueprint', desc: 'Powering next-gen high density compute' },
]

const newsInsightsData = [
  {
    id: 1,
    badge: 'AI & Data Centers',
    date: 'Aug 12, 2026',
    readTime: '4 min read',
    title: 'AI as an Operational Partner for Smart Buildings & High Density Compute',
    image: '/images/jci-insight.png'
  },
  {
    id: 2,
    badge: 'Chiller Technology',
    date: 'Aug 08, 2026',
    readTime: '5 min read',
    title: "CEO Joakim Wedemanis highlights absorption chillers' key role in cutting energy demand",
    image: '/images/jci-solutions.png'
  },
  {
    id: 3,
    badge: 'Facility Operations',
    date: 'Jul 29, 2026',
    readTime: '6 min read',
    title: 'Building Energy Management Systems: A Practical Guide for Commercial Facilities',
    image: '/images/jci-hero.png'
  },
  {
    id: 4,
    badge: 'Decarbonization',
    date: 'Jul 22, 2026',
    readTime: '3 min read',
    title: 'Achieving Zero Water Usage in AI Data Center Thermal Management',
    image: '/images/jci-insight.png'
  },
  {
    id: 5,
    badge: 'Sustainability',
    date: 'Jul 15, 2026',
    readTime: '4 min read',
    title: 'Turning Rising Energy Costs into Operational Savings via OpenBlue',
    image: '/images/jci-solutions.png'
  },
  {
    id: 6,
    badge: 'Innovation Award',
    date: 'Jul 04, 2026',
    readTime: '5 min read',
    title: 'IDEA2026 Innovation Award Winner for Pioneering Campus Decarbonization',
    image: '/images/jci-hero.png'
  }
]

// CountUp component rolling numbers from 0 to target when scrolled into view
function RollingCountUp({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTimestamp: number | null = null
          const duration = 1600

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            // Ease out cubic
            const easeProgress = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(easeProgress * value))

            if (progress < 1) {
              requestAnimationFrame(step)
            }
          }
          requestAnimationFrame(step)
        }
      },
      { threshold: 0.25 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <div ref={ref} className="stat-value">
      <strong>
        {count}
        {suffix}
      </strong>
    </div>
  )
}

function BrandLogo({ className = '' }: { className?: string }) {
  return (
    <a href="#top" className={`brand-mark-group ${className}`} aria-label="Johnson Controls home">
      <Image
        className="brand-logo-img"
        src="/images/jci-logo.svg"
        alt="Johnson Controls"
        width={175}
        height={44}
        priority
      />
    </a>
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal-on-scroll ${className}`}>{children}</div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [slide, setSlide] = useState(0)
  const [activePerfIndex, setActivePerfIndex] = useState(0)
  const [perfProgress, setPerfProgress] = useState(0)

  // Hub interactive calculator state
  const [activeHubPillar, setActiveHubPillar] = useState<'metasys' | 'decarb' | 'lifecycle' | 'capital'>('metasys')
  const [sqFt, setSqFt] = useState(120000)
  const [savingPercent, setSavingPercent] = useState(30)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)

  // Carousel ref for single card scroll fix
  const carouselRef = useRef<HTMLDivElement>(null)
  const [carouselIndex, setCarouselIndex] = useState(0)

  const activeSlide = heroSlides[slide]
  const activePerf = performancePoints[activePerfIndex]

  const nextSlide = () => setSlide((slide + 1) % heroSlides.length)
  const previousSlide = () => setSlide((slide + heroSlides.length - 1) % heroSlides.length)

  // Performance timer auto-rotation
  useEffect(() => {
    const duration = 7000
    const interval = 100
    let elapsed = 0

    const timer = setInterval(() => {
      elapsed += interval
      setPerfProgress((elapsed / duration) * 100)
      if (elapsed >= duration) {
        elapsed = 0
        setActivePerfIndex((prev) => (prev + 1) % performancePoints.length)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [activePerfIndex])

  // Scroll reveal observer
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal-on-scroll')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.12 }
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  // Single-card horizontal scroll handler (Fixes "2 at a time" scrollbar issue!)
  const handleScrollPrev = () => {
    if (!carouselRef.current) return
    const firstCard = carouselRef.current.querySelector('.insight-slide-card') as HTMLElement
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 28
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' })
    }
  }

  const handleScrollNext = () => {
    if (!carouselRef.current) return
    const firstCard = carouselRef.current.querySelector('.insight-slide-card') as HTMLElement
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 28
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' })
    }
  }

  const updateCarouselIndex = () => {
    if (!carouselRef.current) return
    const firstCard = carouselRef.current.querySelector('.insight-slide-card') as HTMLElement
    if (firstCard) {
      const cardWidth = firstCard.offsetWidth + 28
      const newIndex = Math.round(carouselRef.current.scrollLeft / cardWidth)
      setCarouselIndex(Math.min(Math.max(newIndex, 0), newsInsightsData.length - 1))
    }
  }

  // Calculate estimated interactive metrics
  const estSavingsDollars = Math.round((sqFt * 2.85 * (savingPercent / 100)))
  const estCo2Reduced = Math.round((sqFt * 0.045 * (savingPercent / 100)))
  const estPaybackMonths = Math.max(12, Math.round(48 - savingPercent * 0.6))

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-background text-foreground">
      {/* Utility Top Bar */}
      <div className="utility-bar">
        <div className="container-wide flex items-center justify-between">
          <button className="utility-brand-button">
            View Our Brands <ChevronDown size={14} />
          </button>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#contact">Contact an expert</a>
            <a href="#about-us">Investors</a>
            <a href="#careers">Careers</a>
            <a href="#insights">Media</a>
            <button className="region-button">
              <Globe2 size={14} /> US | EN <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Nav */}
      <header className="site-header">
        <div className="container-wide flex h-[76px] items-center justify-between">
          <BrandLogo />

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item === 'Building Insights' ? 'insights' : item.toLowerCase().replaceAll(' ', '-')}`}
                className="nav-link"
              >
                {item}
                {['Products & Services', 'Solutions', 'Industries'].includes(item) && <ChevronDown size={13} />}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button 
              className="search-button" 
              onClick={() => setSearchOpen(!searchOpen)} 
              aria-label="Search site"
            >
              <Search size={18} />
            </button>
            <a href="#contact" className="button button-small">
              Contact an expert <ArrowUpRight size={15} />
            </a>
          </div>

          <button
            className="menu-toggle lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <nav className="mobile-nav lg:hidden" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a key={item} href="#insights" onClick={() => setMenuOpen(false)}>
                {item}
                <ArrowUpRight size={16} />
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Quick Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-navy/80 backdrop-blur-md pt-28 px-4">
          <div className="w-full max-w-2xl rounded-2xl bg-navy-card p-6 border border-white/20 shadow-2xl text-white">
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <span className="font-bold text-sm text-aqua flex items-center gap-2">
                <Search size={16} /> Search Johnson Controls Solutions
              </span>
              <button onClick={() => setSearchOpen(false)} className="text-white/60 hover:text-white">
                <X size={20} />
              </button>
            </div>
            <input
              type="text"
              placeholder="Search HVAC chillers, Metasys, OpenBlue, Net-Zero..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-deep border border-white/15 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-aqua"
              autoFocus
            />
            <div className="mt-4 flex flex-wrap gap-2 text-xs">
              <span className="text-white/50">Popular:</span>
              {['Data Center Cooling', 'Metasys Automation', 'Decarbonization Capital', 'ChillSmarter diagnostics'].map((kw) => (
                <button
                  key={kw}
                  onClick={() => setSearchQuery(kw)}
                  className="bg-white/5 hover:bg-white/15 text-white/80 px-3 py-1 rounded-full border border-white/10"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Fixed "Show me" Button Overlap */}
      <section id="top" className="hero-section">
        <Image
          key={activeSlide.image}
          src={activeSlide.image}
          alt={activeSlide.headline}
          fill
          priority
          className="hero-image"
        />
        <div className="hero-overlay" />

        <div className="container-wide relative z-10 flex min-h-[700px] flex-col justify-end pb-16 pt-44 lg:min-h-[750px] lg:pb-24">
          <div className="hero-copy">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-aqua text-xs font-bold uppercase tracking-wider mb-4 border border-white/15">
              <Sparkles size={13} /> {activeSlide.tag}
            </div>
            <p className="eyebrow light">{activeSlide.eyebrow}</p>
            <h1>
              {activeSlide.headline}
              <br />
              <em>{activeSlide.sub}</em>
            </h1>

            {/* Fixed Show Me Button with explicit margin & stack context so it never collides */}
            <div className="hero-cta-wrapper">
              <a href="#solutions" className="button button-primary hero-cta">
                Show me <ArrowDownRight size={18} />
              </a>
            </div>
          </div>

          <div className="hero-controls">
            <button onClick={previousSlide} aria-label="Previous slide">
              <ChevronLeft size={20} />
            </button>
            <div className="hero-dots">
              {heroSlides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={slide === index}
                  onClick={() => setSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} aria-label="Next slide">
              <ChevronRight size={20} />
            </button>
            <span>Where it really matters.</span>
          </div>
        </div>
      </section>

      {/* Feature Strip under Hero */}
      <section className="feature-strip">
        <div className="container-wide feature-grid">
          {[
            { title: 'AI as an Operational Partner for Smart Buildings', tag: 'Smart Automation' },
            { title: 'Zero water usage in AI data center cooling', tag: 'Data Center Solutions' },
            { title: 'Turning rising energy costs into strategic savings', tag: 'Decarbonization' },
          ].map((item, index) => (
            <a href="#insights" key={item.title}>
              <span>0{index + 1}</span>
              <strong>{item.title}</strong>
              <small>{item.tag}</small>
              <ArrowUpRight size={18} />
            </a>
          ))}
        </div>
      </section>

      {/* Impact Section - Rolling Animated Numbers (140+ etc.) */}
      <Reveal>
        <section className="impact-section" id="about-us">
          <div className="container-wide impact-grid">
            <div>
              <p className="eyebrow">Our impact</p>
              <h2>
                More than 140 years of performance <em>where it really matters.</em>
              </h2>
            </div>
            <div className="impact-copy">
              <p>
                Backed by advanced building technology, lifecycle diagnostics, and an industry-leading global field
                organization, Johnson Controls elevates customer performance and helps move society forward.
              </p>
              <a href="#solutions" className="text-link">
                Learn more about our legacy <ArrowUpRight size={17} />
              </a>
            </div>

            {/* Stats Row with dynamically rolling counters when scrolled into view */}
            <div className="stats-row">
              {statsData.map((stat) => (
                <div key={stat.label} className="stat-box">
                  <RollingCountUp value={stat.value} suffix={stat.suffix} />
                  <span>{stat.label}</span>
                  <small className="text-xs text-muted-foreground">{stat.desc}</small>
                </div>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* Performance Where It Matters - Smooth 2-Points Feature Showcase */}
      <Reveal>
        <section className="focus-section" id="solutions">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Performance Showcase</p>
                <h2>
                  Performance
                  <br />
                  <em>where it matters.</em>
                </h2>
              </div>
              <p>
                Johnson Controls brings together intelligent building technology, lifecycle services, and project financing
                to help customers achieve higher efficiency.
              </p>
            </div>

            <div className="performance-layout">
              <div className="performance-tabs">
                {performancePoints.map((point, index) => {
                  const isActive = activePerfIndex === index
                  return (
                    <div
                      key={point.id}
                      className={`performance-tab-card ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setActivePerfIndex(index)
                        setPerfProgress(0)
                      }}
                    >
                      <div className="performance-tab-header">
                        <span>{point.number}</span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform duration-300 ${
                            isActive ? 'text-primary rotate-90' : 'text-muted-foreground'
                          }`}
                        />
                      </div>
                      <strong>{point.title}</strong>
                      <p>{point.text}</p>
                      {isActive && (
                        <div className="performance-progress-bar">
                          <div
                            className="performance-progress-fill"
                            style={{ width: `${perfProgress}%` }}
                          />
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Display Area for Active Point */}
              <div className="performance-feature-display">
                <Image
                  key={activePerf.image}
                  src={activePerf.image}
                  alt={activePerf.title}
                  fill
                  className="performance-feature-image"
                  priority
                />
                <div className="performance-feature-overlay" />
                <div className="performance-feature-content">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-aqua text-xs font-bold mb-3">
                    <CheckCircle2 size={14} /> Key Capability Spotlight
                  </div>
                  <h3>{activePerf.title}</h3>
                  <p>{activePerf.text}</p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4 mt-4">
                    <div>
                      <span className="block text-2xl font-bold text-aqua">{activePerf.metricVal}</span>
                      <span className="text-xs text-white/70 uppercase tracking-wider">{activePerf.metricLabel}</span>
                    </div>
                    <a href="#contact" className="button button-primary">
                      {activePerf.link} <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Stacked Cards Container (OpenBlue Platform & Customer Story) */}
      <section className="stacked-cards-wrapper" id="openblue">
        <div className="container-wide">
          {/* Card 1: OpenBlue Platform (Sticky Stack Card) */}
          <div className="stacked-card stacked-card-1">
            <div className="container-wide">
              <p className="eyebrow light">OpenBlue Platform</p>
              <div className="platform-grid">
                <h2>
                  Applying data from both inside buildings <em>and beyond.</em>
                </h2>
                <div>
                  <p>
                    Manage operations systemically: connecting HVAC, fire, security, and energy systems in one intelligent
                    operating layer powered by predictive AI.
                  </p>
                  <a href="#solutions" className="button button-primary">
                    Explore OpenBlue Architecture <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>

              <div className="pillars">
                {[
                  { title: 'Thermal Management', desc: 'Precision liquid & air cooling for AI clusters' },
                  { title: 'Mission Critical', desc: 'Zero-fault uptime for hospitals & data centers' },
                  { title: 'Energy Efficiency', desc: 'Real-time optimization reducing kilowatt load' },
                  { title: 'Decarbonization', desc: 'End-to-end net zero roadmap & energy storage' },
                ].map((item) => (
                  <div key={item.title} className="pillar-item">
                    <span>Pillar</span>
                    <strong>{item.title}</strong>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Customer Story - Dubai DEWA Headquarters (Slides UP on Top of Card 1 smoothly) */}
          <div className="stacked-card stacked-card-2">
            <div className="case-study-card">
              <Image
                src="/images/jci-hero.png"
                alt="Dubai Electricity and Water Authority Al Shera'a headquarters"
                fill
                className="case-study-bg"
              />
              <div className="case-overlay" />
              <div className="container-wide case-study-content">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-aqua/20 border border-aqua/40 text-aqua text-xs font-bold uppercase tracking-wider mb-2">
                  <Building2 size={14} /> Global Landmark Case Study
                </div>
                <p className="eyebrow light">Customer Stories</p>
                <h2>
                  Dubai Electricity and Water Authority develops Al Shera&apos;a, a net zero energy headquarters in Dubai
                </h2>

                <div className="case-stats-row">
                  <div className="case-stat-item">
                    <strong>100%</strong>
                    <span>Renewable Energy</span>
                  </div>
                  <div className="case-stat-item">
                    <strong>2.0M+</strong>
                    <span>Sq Ft Net Zero Space</span>
                  </div>
                  <div className="case-stat-item">
                    <strong>50%+</strong>
                    <span>Energy Saved vs Baseline</span>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <a href="#insights" className="button button-primary">
                    Read Full Case Study <ArrowUpRight size={16} />
                  </a>
                  <a href="#insights" className="text-link light-link">
                    Explore More Customer Stories <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Building Insights Carousel Section (Fixed Single-Card Scroll Behavior) */}
      <Reveal>
        <section className="insights-section" id="insights">
          <div className="container-wide">
            <div className="section-heading">
              <div>
                <p className="eyebrow">News & Building Insights</p>
                <h2>
                  What is <em>next</em> starts here.
                </h2>
              </div>

              {/* Carousel Nav Buttons for 1 Card At A Time scrolling */}
              <div className="carousel-header-controls">
                <button
                  className="carousel-nav-btn"
                  onClick={handleScrollPrev}
                  disabled={carouselIndex === 0}
                  aria-label="Previous article"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  className="carousel-nav-btn"
                  onClick={handleScrollNext}
                  disabled={carouselIndex >= newsInsightsData.length - 3}
                  aria-label="Next article"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            {/* Smooth Scrollable Container with exact 1-card scroll step */}
            <div
              ref={carouselRef}
              onScroll={updateCarouselIndex}
              className="insights-carousel-container"
            >
              {newsInsightsData.map((item) => (
                <article key={item.id} className="insight-slide-card">
                  <div className="insight-card-media">
                    <Image src={item.image} alt={item.title} fill />
                    <span className="insight-badge">{item.badge}</span>
                  </div>
                  <div className="insight-card-body">
                    <div className="insight-card-meta">
                      <span>{item.date}</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <a href="#insights" className="text-link mt-auto">
                      Read full article <ArrowUpRight size={16} />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Carousel Progress Bar */}
            <div className="carousel-progress-bar">
              <div className="carousel-track">
                <div
                  className="carousel-fill"
                  style={{
                    width: `${((carouselIndex + 1) / (newsInsightsData.length - 2)) * 100}%`,
                  }}
                />
              </div>
              <span className="carousel-counter">
                0{carouselIndex + 1} / 0{newsInsightsData.length}
              </span>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Compact & Compiled Johnson Controls Support Card Section */}
      <Reveal>
        <section className="support-section-compact" id="contact">
          <div className="container-wide">
            <div className="support-container-card">
              <div className="support-grid-compact">
                <div>
                  <p className="eyebrow light">Johnson Controls</p>
                  <h2>
                    Performance <em>where it really matters.</em>
                  </h2>
                  <p>
                    Over 140 years of delivering smart, sustainable building performance worldwide.
                  </p>
                  <div className="mt-5">
                    <a href="#about-us" className="button button-primary">
                      Learn more <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="support-contact-box">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-aqua border border-white/15 text-xs font-bold uppercase tracking-wider mb-3">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Live Expert Hotline
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Find building support.</h3>
                    <p className="text-white/70 text-xs leading-relaxed mb-4">
                      Speak directly with specialized Johnson Controls engineers.
                    </p>
                  </div>

                  <a href="tel:+18662272750" className="button button-primary w-full justify-between">
                    <span className="flex items-center gap-2">
                      <PhoneCall size={16} /> +1 866 227 2750
                    </span>
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* Attractive & Cool Footer Section */}
      <footer className="site-footer">
        <div className="footer-glow-bg" />

        {/* Footer Top Row */}
        <div className="container-wide footer-top">
          <div>
            <BrandLogo />
            <p className="footer-tagline">
              Delivering performance where it really matters worldwide.
            </p>

            <div className="social-pills">
              <a href="#top" className="social-pill-btn linkedin" aria-label="LinkedIn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              <a href="#top" className="social-pill-btn facebook" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
                </svg>
              </a>

              <a href="#top" className="social-pill-btn instagram" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a href="#top" className="social-pill-btn x-twitter" aria-label="X (Twitter)">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              <a href="#top" className="social-pill-btn youtube" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-search-box">
            <span>Find a Local Representative</span>
            <div className="footer-search-input-wrap">
              <MapPin size={16} className="text-aqua mr-2" />
              <input
                aria-label="Find a representative by location"
                placeholder="Enter city, state, or ZIP code..."
              />
              <button className="footer-search-submit" aria-label="Submit search">
                <Search size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links Columns */}
        <div className="container-wide footer-links-grid">
          <div className="footer-column">
            <strong>Products & Services</strong>
            {['Building Automation & Metasys', 'Fire Detection & Alarm', 'Fire Suppression Systems', 'HVAC Equipment & Chillers', 'Industrial Refrigeration', 'Security & Access Control', 'Lifecycle Services'].map((item) => (
              <a key={item} href="#solutions">
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <strong>Solutions</strong>
            {['Data Center Thermal Solutions', 'Indoor Air Quality (IAQ)', 'Renewable Energy Integration', 'Retail Facilities Management', 'Smart Building Cyber Security', 'Sustainable Infrastructure'].map((item) => (
              <a key={item} href="#solutions">
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <strong>Support & Resources</strong>
            {['Product Documentation Library', 'Selection & Sizing Tools', 'Replacement Parts & Supplies', 'Technical Training Academy', 'Customer Support Portal'].map((item) => (
              <a key={item} href="#contact">
                {item}
              </a>
            ))}
          </div>

          <div className="footer-column">
            <strong>About Johnson Controls</strong>
            {['Our Company & History', 'Careers & Culture', 'Media & Press Center', 'Investor Relations', 'Supplier Diversity', 'Trust Center & Security', 'Sustainability Progress'].map((item) => (
              <a key={item} href="#about-us">
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="container-wide footer-bottom-bar">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OpenBlue Systems: 100% Operational</span>
            <span className="mx-2 text-white/20">|</span>
            <span>© 2026 Johnson Controls. All Rights Reserved.</span>
          </div>

          <div className="footer-bottom-links">
            <a href="#top">Accessibility</a>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Your Privacy Choices</a>
            <a href="#top">Terms of Service</a>

            <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
              Back to top <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
