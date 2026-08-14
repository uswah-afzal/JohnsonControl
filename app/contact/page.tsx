'use client'

import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Phone, Mail, Clock, Search, Send, CheckCircle2 } from 'lucide-react'

const branchLocations = [
  { city: 'Milwaukee, WI (Global HQ)', address: '5757 N. Green Bay Avenue, Milwaukee, WI 53209', phone: '+1 (414) 524-1200', service: 'Global Headquarters & R&D Center' },
  { city: 'New York, NY', address: '1301 Avenue of the Americas, New York, NY 10019', phone: '+1 (212) 841-7500', service: 'Commercial HVAC & OpenBlue Command' },
  { city: 'Chicago, IL', address: '200 S. Wacker Drive, Chicago, IL 60606', phone: '+1 (312) 606-4000', service: 'Metasys® Controls & Fire Protection' },
  { city: 'Dubai, UAE (EMEA HQ)', address: 'Dubai CommerCity, Building E1, Dubai, UAE', phone: '+971 4 806 9999', service: 'Net-Zero & Smart Buildings Hub' },
  { city: 'London, UK', address: '1 Sunbury International Business Park, Middlesex TW16 7AX', phone: '+44 1932 743200', service: 'Industrial Refrigeration & Security' }
]

export default function ContactPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', company: '', interest: 'HVAC Equipment', message: '' })

  const filteredLocations = searchQuery === ''
    ? branchLocations
    : branchLocations.filter((b) => b.city.toLowerCase().includes(searchQuery.toLowerCase()) || b.service.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#030e1a] text-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#09253d] to-[#030e1a] border-b border-white/10">
        <div className="container-wide relative z-10">
          <span className="text-xs font-bold tracking-widest text-aqua uppercase">EXPERT SUPPORT & LOCATIONS</span>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white mt-3 mb-4 leading-tight">
            Contact Johnson Controls
          </h1>
          <p className="text-white/80 text-lg max-w-2xl leading-relaxed">
            Speak directly with specialized HVAC engineers, Metasys® automation experts, and local service representatives worldwide.
          </p>
        </div>
      </section>

      {/* Quick Emergency Support Banner */}
      <section className="py-6 bg-[#06192d] border-b border-white/10">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-aqua flex-shrink-0" />
            <div>
              <strong className="text-sm text-white font-bold block">Need 24/7 Emergency HVAC or Fire Service?</strong>
              <span className="text-xs text-white/60">Dispatch specialized field service technicians immediately.</span>
            </div>
          </div>
          <a href="tel:18664426543" className="button button-primary px-6 py-2 text-xs flex items-center gap-2">
            <Phone size={14} />
            <span>Call Emergency Dispatch: 1-866-442-6543</span>
          </a>
        </div>
      </section>

      {/* Main Grid: Form & Location Finder */}
      <section className="py-16 bg-[#030e1a]">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Consultation Request Form */}
            <div className="lg:col-span-7 bg-[#06192d] border border-white/15 rounded-2xl p-8 sm:p-10 shadow-2xl">
              <span className="text-xs font-bold tracking-widest text-aqua uppercase">GET IN TOUCH</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1 mb-6">Schedule an Engineering Consultation</h2>

              {formSubmitted ? (
                <div className="p-8 bg-aqua/10 border border-aqua/30 rounded-xl text-center">
                  <CheckCircle2 size={48} className="text-aqua mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">Request Received!</h3>
                  <p className="text-xs text-white/80 max-w-md mx-auto">
                    Thank you, {formData.name}. A Johnson Controls engineer specializing in {formData.interest} will contact you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/70 font-semibold uppercase block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-[#030e1a] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-aqua focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/70 font-semibold uppercase block mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-[#030e1a] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-aqua focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-white/70 font-semibold uppercase block mb-1">Company / Organization</label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Acme Facilities Inc."
                        className="w-full bg-[#030e1a] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-aqua focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/70 font-semibold uppercase block mb-1">Primary Area of Interest</label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full bg-[#030e1a] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:border-aqua focus:outline-none"
                      >
                        <option value="HVAC Equipment">HVAC Equipment & Chillers</option>
                        <option value="Building Automation">Metasys® Building Automation</option>
                        <option value="Net-Zero Solutions">Net-Zero & Decarbonization</option>
                        <option value="Fire & Security">Simplex® Fire & Security</option>
                        <option value="OpenBlue Digital">OpenBlue™ Digital Platform</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/70 font-semibold uppercase block mb-1">Project Details / Inquiry</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe facility square footage, cooling tonnage, or project timelines..."
                      className="w-full bg-[#030e1a] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/40 focus:border-aqua focus:outline-none"
                    />
                  </div>

                  <button type="submit" className="button button-primary w-full py-3 text-xs flex items-center justify-center gap-2">
                    <Send size={14} />
                    <span>Submit Consultation Request</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right: Branch Location Finder */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-[#06192d] border border-white/15 rounded-2xl p-6">
                <span className="text-xs font-bold tracking-widest text-aqua uppercase">BRANCH LOCATOR</span>
                <h3 className="text-xl font-bold text-white mt-1 mb-4">Find Local Branch Office</h3>

                <div className="relative mb-6">
                  <Search size={16} className="absolute left-3 top-3 text-white/50" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search by city (e.g. New York, London, Dubai)..."
                    className="w-full bg-[#030e1a] border border-white/15 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-white/40 focus:border-aqua focus:outline-none"
                  />
                </div>

                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1">
                  {filteredLocations.map((loc) => (
                    <div key={loc.city} className="p-4 bg-[#030e1a]/80 border border-white/10 rounded-xl">
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={14} className="text-aqua flex-shrink-0" />
                        <strong className="text-sm text-white font-bold">{loc.city}</strong>
                      </div>
                      <p className="text-xs text-white/70 mb-2 pl-5">{loc.address}</p>
                      <div className="flex items-center justify-between text-[11px] text-white/50 pl-5">
                        <span className="flex items-center gap-1">
                          <Phone size={12} className="text-aqua" />
                          {loc.phone}
                        </span>
                        <span className="text-aqua font-semibold">{loc.service}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
