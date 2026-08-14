'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Search, ArrowUp } from 'lucide-react'
import { BrandLogo } from './Navbar'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-800 pt-16 pb-12">
      {/* Footer Top Row */}
      <div className="container-wide grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-200 items-start">
        <div className="lg:col-span-7 space-y-4">
          <BrandLogo />
          <p className="text-slate-600 text-sm max-w-md font-medium">
            Delivering performance where it really matters worldwide.
          </p>

          <div className="flex items-center gap-3 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#0a66c2] hover:text-white transition-colors" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#1877f2] hover:text-white transition-colors" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.69c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#e4405f] hover:text-white transition-colors" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>

            <a href="https://x.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-colors" aria-label="X (Twitter)">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center hover:bg-[#ff0000] hover:text-white transition-colors" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-5 bg-white border border-slate-200 p-6 rounded-2xl shadow-sm">
          <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block mb-2">Find a Local Representative</span>
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl p-2">
            <MapPin size={16} className="text-[#0066cc] ml-1 flex-shrink-0" />
            <input
              aria-label="Find a representative by location"
              placeholder="Enter city, state, or ZIP code..."
              className="w-full bg-transparent text-xs text-slate-800 placeholder-slate-400 focus:outline-none"
            />
            <button className="bg-[#0066cc] text-white p-2 rounded-lg hover:bg-[#0f172a] transition-colors" aria-label="Submit search">
              <Search size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Footer Links Columns */}
      <div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-200 text-xs">
        <div>
          <h4 className="font-extrabold text-[#0f172a] text-sm mb-4">Products & Systems</h4>
          <ul className="space-y-2.5 text-slate-600 font-medium">
            <li><Link href="/products-and-services" className="hover:text-[#0066cc]">HVAC Equipment</Link></li>
            <li><Link href="/products-and-services" className="hover:text-[#0066cc]">Metasys® Building Controls</Link></li>
            <li><Link href="/products-and-services" className="hover:text-[#0066cc]">Simplex® Fire Safety</Link></li>
            <li><Link href="/products-and-services" className="hover:text-[#0066cc]">Physical Access Security</Link></li>
            <li><Link href="/openblue" className="hover:text-[#0066cc]">OpenBlue™ AI Platform</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-[#0f172a] text-sm mb-4">Solutions</h4>
          <ul className="space-y-2.5 text-slate-600 font-medium">
            <li><Link href="/solutions" className="hover:text-[#0066cc]">Net Zero Buildings</Link></li>
            <li><Link href="/solutions" className="hover:text-[#0066cc]">Energy Efficiency</Link></li>
            <li><Link href="/solutions" className="hover:text-[#0066cc]">Healthy Air (IAQ)</Link></li>
            <li><Link href="/solutions" className="hover:text-[#0066cc]">Thermal Energy Storage</Link></li>
            <li><Link href="/solutions" className="hover:text-[#0066cc]">Funding & Capital Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-[#0f172a] text-sm mb-4">Industries</h4>
          <ul className="space-y-2.5 text-slate-600 font-medium">
            <li><Link href="/industries" className="hover:text-[#0066cc]">Healthcare & Life Sciences</Link></li>
            <li><Link href="/industries" className="hover:text-[#0066cc]">Data Centers</Link></li>
            <li><Link href="/industries" className="hover:text-[#0066cc]">Higher Education</Link></li>
            <li><Link href="/industries" className="hover:text-[#0066cc]">Commercial Real Estate</Link></li>
            <li><Link href="/industries" className="hover:text-[#0066cc]">Industrial & Manufacturing</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-[#0f172a] text-sm mb-4">Company & Impact</h4>
          <ul className="space-y-2.5 text-slate-600 font-medium">
            <li><Link href="/about-us" className="hover:text-[#0066cc]">140+ Years Legacy</Link></li>
            <li><Link href="/about-us" className="hover:text-[#0066cc]">Sustainability & ESG</Link></li>
            <li><Link href="/insights" className="hover:text-[#0066cc]">Building Insights & News</Link></li>
            <li><Link href="/contact" className="hover:text-[#0066cc]">Emergency Support 24/7</Link></li>
            <li><Link href="/contact" className="hover:text-[#0066cc]">Find Branch Locations</Link></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Legal Row */}
      <div className="container-wide pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
        <div className="flex flex-wrap items-center gap-4">
          <p>© {new Date().getFullYear()} Johnson Controls. All Rights Reserved.</p>
          <span className="text-slate-300">|</span>
          <a href="#privacy" className="hover:text-slate-900">Privacy Center</a>
          <a href="#terms" className="hover:text-slate-900">Terms of Use</a>
          <a href="#cookies" className="hover:text-slate-900">Cookie Settings</a>
        </div>

        <button onClick={scrollToTop} className="flex items-center gap-1.5 font-bold text-[#0066cc] hover:text-[#0f172a] transition-colors" aria-label="Back to top">
          <span>Back to top</span>
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  )
}
