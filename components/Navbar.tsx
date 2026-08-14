'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Globe2, ChevronDown, Search, Menu, X, ArrowUpRight } from 'lucide-react'

export function BrandLogo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={`brand-mark-group ${className}`} aria-label="Johnson Controls home">
      <Image
        className={`brand-logo-img transition-all duration-300 ${compact ? 'w-[140px] max-h-[34px]' : 'w-[175px] max-h-[44px]'}`}
        src="/images/jci-logo.svg"
        alt="Johnson Controls"
        width={compact ? 140 : 175}
        height={compact ? 34 : 44}
        priority
      />
    </Link>
  )
}

const navLinks = [
  { name: 'Products & Services', href: '/products-and-services' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Industries', href: '/industries' },
  { name: 'OpenBlue™', href: '/openblue' },
  { name: 'Building Insights', href: '/insights' },
  { name: 'About Us', href: '/about-us' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="relative z-50 bg-white border-b border-slate-200">
      {/* Utility Top Bar (Clean Light Slate) */}
      <div className="bg-[#f8fafc] border-b border-slate-200/80 py-1.5 text-xs text-slate-600">
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold tracking-wider text-[#0066cc] uppercase">GLOBAL LEADER IN SMART BUILDINGS</span>
          </div>
          <div className="hidden items-center gap-6 md:flex font-medium text-slate-600">
            <Link href="/contact" className="hover:text-[#0066cc] transition-colors">Contact an Expert</Link>
            <Link href="/about-us" className="hover:text-[#0066cc] transition-colors">Investors</Link>
            <Link href="/insights" className="hover:text-[#0066cc] transition-colors">Media & News</Link>
            <button className="flex items-center gap-1.5 font-semibold text-slate-700 hover:text-[#0066cc] transition-colors" aria-label="Select Region">
              <Globe2 size={13} /> US | EN <ChevronDown size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Nav (Pure White Theme) */}
      <header className="py-3 bg-white">
        <div className="container-wide flex h-[72px] items-center justify-between">
          <BrandLogo />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative py-1 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive ? 'text-[#0066cc]' : 'text-slate-700 hover:text-[#0066cc]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#0066cc] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-slate-600 hover:text-[#0066cc] transition-colors"
              aria-label="Search site"
            >
              <Search size={18} />
            </button>

            <Link href="/contact" className="bg-white border-2 border-[#0f172a] text-[#0f172a] hover:bg-[#0f172a] hover:text-white font-bold rounded-xl flex items-center gap-1.5 text-xs px-5 py-2.5 transition-all duration-200">
              <span>Get Support</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Search Bar Slide Out (Light Slate) */}
        {searchOpen && (
          <div className="bg-slate-50 border-t border-b border-slate-200 py-3 px-6 animate-in slide-in-from-top duration-200">
            <div className="container-wide flex items-center gap-3">
              <Search size={18} className="text-[#0066cc]" />
              <input
                type="text"
                placeholder="Search products, net-zero solutions, whitepapers..."
                className="w-full bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none text-sm font-medium"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase font-bold tracking-wider text-slate-500 hover:text-slate-900"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer (Light Slate) */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-semibold py-2 border-b border-slate-100 ${
                    pathname === link.href ? 'text-[#0066cc]' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            <div className="pt-2 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-[#0066cc] text-white font-bold text-center py-3 rounded-xl"
              >
                Contact an Expert
              </Link>
            </div>
          </div>
        )}
      </header>
    </div>
  )
}
