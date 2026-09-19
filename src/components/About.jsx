'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  ShieldCheck,
  Truck,
  Target,
  Sparkles,
  ChevronRight,
  Factory,
  Award,
  TreePine,
  CheckCircle2,
  Boxes,
  Zap,
} from 'lucide-react';

export default function About({ onOpenQuote }) {
  const [activeTab, setActiveTab] = useState('about');

  const plantCapabilities = [
    {
      title: 'High-Speed Automated Corrugation',
      desc: 'Multi-profile fluting lines (A, B, C, E, BC) for high-volume consistent board output.',
      icon: Zap,
    },
    {
      title: 'Precision Die-Cutting & Flexo Printing',
      desc: 'Laser-guided CNC rotary die-cutters and up to 4-color high-definition flexo printing.',
      icon: Boxes,
    },
    {
      title: 'Rigorous Quality Assurance Lab',
      desc: 'In-house bursting factor (Mullen), Edge Crush (ECT), and moisture caliper verification.',
      icon: ShieldCheck,
    },
    {
      title: 'Dedicated In-House Delivery Fleet',
      desc: 'Fleet of custom container transport vehicles guaranteeing on-schedule delivery across Pakistan.',
      icon: Truck,
    },
  ];

  const missionPillars = [
    {
      num: '01',
      title: 'Long-Term Business Partnerships',
      desc: 'Fully understanding customer demands and treating clients as valued long-term partners by consistently fulfilling exact structural requirements.',
    },
    {
      num: '02',
      title: 'Continuous Quality Improvement',
      desc: 'Active participation of employees across all manufacturing levels to drive ISO 9001:2015 quality management standards and precision tolerances.',
    },
    {
      num: '03',
      title: 'Occupational Health & Environmental Stewardship',
      desc: 'Upholding strict workplace safety standards, FSC® certified eco-responsibility, and hygienic food-grade packaging production.',
    },
    {
      num: '04',
      title: 'Value-Adding Communication',
      desc: 'Maintaining seamless communication between paper suppliers, production lines, and client logistics teams to add value at every stage.',
    },
  ];

  const leadershipTeam = [
    {
      name: 'Muhammad Yaqoob Khanzada',
      role: 'Chief Executive Officer & Founder',
      desc: 'Visionary leader who established AR Packages in 1999, driving over two decades of corrugation innovation, engineering excellence, and client trust.',
    },
    {
      name: 'Muhammad Adeel Khanzada',
      role: 'Chief Operating Officer',
      desc: 'Directs plant operations, high-speed automated corrugation machinery, quality labs, raw material procurement, and manufacturing efficiency.',
    },
    {
      name: 'Muhammad Talha Khanzada',
      role: 'Chief Financial Officer',
      desc: 'Manages financial strategy, corporate partnerships, supply chain economics, and sustainable expansion initiatives.',
    },
  ];

  return (
    <section id="about" className="relative py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: 'about', label: 'Company Overview' },
            { id: 'mission', label: 'Vision & 4-Pillar Mission' },
            { id: 'team', label: 'Executive Leadership' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab 1: Company Overview */}
        {activeTab === 'about' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Modern Manufacturing & Heritage Showcase */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-7 sm:p-8 rounded-2xl bg-[#F8F9FA] border border-slate-250 shadow-md space-y-6">
                
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-kraft-100 border border-kraft-300 flex items-center justify-center text-kraft-800">
                      <Factory className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-kraft-700">
                        Plant & Infrastructure
                      </span>
                      <h3 className="text-base font-bold text-slate-900">Karachi Manufacturing Facility</h3>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 text-xs font-mono font-bold">
                    Est. 1999
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {plantCapabilities.map((cap, i) => {
                    const CapIcon = cap.icon;
                    return (
                      <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="w-8 h-8 rounded-lg bg-kraft-50 border border-kraft-200 flex items-center justify-center text-kraft-700 mb-2.5">
                            <CapIcon className="w-4 h-4" />
                          </div>
                          <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{cap.title}</h4>
                          <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed font-normal">{cap.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Verified Trust Badges */}
                <div className="p-4 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">ISO 9001:2015 &amp; Halal Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TreePine className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="text-slate-200 font-semibold">FSC® Chain-of-Custody</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Company Story */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
                <span>About AR Packages (Est. 1999)</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Built for Protection.{' '}
                <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-kraft-600 via-kraft-700 to-amber-700">
                  Designed for Performance.
                </span>
              </h2>

              <p className="text-slate-700 text-base leading-relaxed font-normal">
                AR Packages is one of the premier manufacturers and exporters of corrugated cartons established in 1999. Providing a wide range of customized packaging solutions is our epitome of success.
              </p>

              <p className="text-slate-600 text-sm leading-relaxed font-normal">
                Equipped with modern high-speed corrugation machinery, an expansive raw material storage base, and our very own dedicated delivery fleet, we turn projects around quickly, efficiently, and exactly to the engineering specifications of our valued clients across Pakistan.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-kraft-100 border border-kraft-200 flex items-center justify-center text-kraft-700 shrink-0">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Certified Quality</h4>
                    <p className="text-xs text-slate-600 mt-0.5">ISO 9001:2015, FSC® &amp; Halal certified testing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-8 h-8 rounded-lg bg-kraft-100 border border-kraft-200 flex items-center justify-center text-kraft-700 shrink-0">
                    <Truck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">In-House Delivery Fleet</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Reliable on-schedule logistics across Pakistan.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <button
                  onClick={() => onOpenQuote()}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold text-sm transition-all shadow-md shadow-kraft-500/25 flex items-center gap-2"
                >
                  <span>Partner With AR Packages</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Vision & Mission */}
        {activeTab === 'mission' && (
          <div className="space-y-12">
            <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl">
              <div className="max-w-3xl space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kraft-500/20 border border-kraft-400/30 text-kraft-300 text-xs font-mono font-bold uppercase">
                  <Target className="w-3.5 h-3.5" /> Corporate Vision
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  Leading Pakistan in Packaging Format &amp; Product Diversity
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  To become the leading manufacturing company in Pakistan with respect to packaging format and product diversity in Contract Packaging and Contract Manufacturing. We deliver creative solutions and competitive prices without making concessions to quality and service excellence.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-kraft-600" />
                <span>Our 4-Pillar Corporate Mission</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {missionPillars.map((p, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-kraft-400 transition-all hover:shadow-md"
                  >
                    <span className="text-2xl font-black font-mono text-kraft-700 mb-2 block">
                      {p.num}
                    </span>
                    <h5 className="text-base font-bold text-slate-900 mb-2">{p.title}</h5>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Executive Leadership */}
        {activeTab === 'team' && (
          <div>
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-kraft-700">
                Experienced Governance
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Our Executive Super Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2">
                Decades of combined engineering and packaging manufacturing leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {leadershipTeam.map((leader, i) => (
                <div
                  key={i}
                  className="p-7 rounded-2xl bg-slate-50 border border-slate-200 text-center hover:border-kraft-400 hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-20 h-20 mx-auto rounded-full bg-slate-900 text-kraft-300 border-2 border-kraft-400 flex items-center justify-center text-xl font-bold font-mono mb-4 shadow-md">
                      {leader.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">{leader.name}</h4>
                    <span className="block text-xs font-mono font-bold text-kraft-700 mt-1 mb-3">
                      {leader.role}
                    </span>
                    <p className="text-xs text-slate-600 leading-relaxed font-normal">{leader.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 text-[11px] font-mono text-slate-500">
                    AR Packages Leadership
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}