'use client'

import React, { useState, useEffect } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      {/* Utility Top Bar (Collapses smoothly on scroll) */}
      <div className={`utility-bar transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 opacity-0 py-0 border-none' : 'max-h-10 opacity-100 py-1.5'
      }`}>
        <div className="container-wide flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-semibold tracking-wider text-aqua uppercase">GLOBAL LEADER IN SMART BUILDINGS</span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <Link href="/contact" className="hover:text-aqua transition-colors">Contact an Expert</Link>
            <Link href="/about-us" className="hover:text-aqua transition-colors">Investors</Link>
            <Link href="/insights" className="hover:text-aqua transition-colors">Media & News</Link>
            <button className="region-button" aria-label="Select Region">
              <Globe2 size={14} /> US | EN <ChevronDown size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Nav (Compresses height & padding smoothly on scroll) */}
      <header className={`site-header backdrop-blur-2xl transition-all duration-300 border-b border-white/10 ${
        isScrolled ? 'bg-[#030e1a]/95 py-2 shadow-xl' : 'bg-[#030e1a]/85 py-3'
      }`}>
        <div className={`container-wide flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-[54px]' : 'h-[72px]'
        }`}>
          <BrandLogo compact={isScrolled} />

          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`nav-link relative py-1 text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive ? 'text-aqua font-semibold' : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-aqua rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="search-button p-2 text-white/80 hover:text-white transition-colors"
              aria-label="Search site"
            >
              <Search size={isScrolled ? 16 : 18} />
            </button>

            <Link href="/contact" className={`button button-primary flex items-center gap-1.5 transition-all duration-300 ${
              isScrolled ? 'text-[11px] px-4 py-1.5' : 'text-xs px-5 py-2.5'
            }`}>
              <span>Get Support</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Search Bar Slide Out */}
        {searchOpen && (
          <div className="bg-[#06192d] border-t border-b border-white/15 py-3 px-6 animate-in slide-in-from-top duration-200">
            <div className="container-wide flex items-center gap-3">
              <Search size={18} className="text-aqua" />
              <input
                type="text"
                placeholder="Search products, net-zero solutions, whitepapers..."
                className="w-full bg-transparent text-white placeholder-white/50 focus:outline-none text-sm"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-xs uppercase tracking-wider text-white/60 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#030e1a] border-b border-white/10 px-6 py-6 space-y-4">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium py-2 border-b border-white/5 ${
                    pathname === link.href ? 'text-aqua font-bold' : 'text-white/80'
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
                className="button button-primary text-center py-3"
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
