'use client';

import React from 'react';
import Image from 'next/image';
import { Award, Shield, Users, Layers, CheckCircle2, FileCheck2, TreePine, Sparkles } from 'lucide-react';

export default function TrustHighlights() {
  const stats = [
    {
      value: '25+',
      label: 'Years of Excellence',
      sublabel: 'Established 1999',
      desc: 'Over two decades of leadership in corrugated carton engineering and contract manufacturing in Karachi.',
      icon: Award,
    },
    {
      value: '100M+',
      label: 'Cartons Produced',
      sublabel: 'Multi-Profile Flutes',
      desc: 'High-speed automated corrugators delivering precision packaging for domestic and export markets.',
      icon: Layers,
    },
    {
      value: '50+',
      label: 'Valued Enterprise Clients',
      sublabel: 'Aviation, FMCG & Industrial',
      desc: 'Trusted by national leaders including Atlas Honda, Air Blue, Gul Ahmed, and IFFCO Pakistan.',
      icon: Users,
    },
    {
      value: 'ISO & FSC',
      label: 'Certified Quality & Forestry',
      sublabel: 'ISO 9001:2015 • FSC® Certified',
      desc: 'Fully accredited management systems and sustainably sourced responsible kraft board packaging.',
      icon: Shield,
    },
  ];

  const standards = [
    'ISO 9001:2015 Registered Quality System',
    'FSC® Certified Responsibly Sourced Packaging',
    'Halal Certified (ACTS PS 3733-2022)',
  ];

  return (
    <section className="relative py-14 bg-white border-y border-kraft-200/80 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#F8F9FA] border border-slate-200 hover:border-kraft-400/80 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
                      {stat.value}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-kraft-100 border border-kraft-200 flex items-center justify-center text-kraft-700 group-hover:bg-kraft-500 group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-slate-900">{stat.label}</h3>
                  <span className="block text-[11px] font-mono font-semibold text-kraft-700 mb-2">
                    {stat.sublabel}
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{stat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured FSC Certification & Quality Standards Banner */}
        <div className="mt-10 pt-8 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          {/* FSC Official Banner Card */}
          <div className="lg:col-span-5 p-4 sm:p-5 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-md flex items-center gap-4 group">
            <div className="relative w-20 h-16 sm:w-24 sm:h-18 bg-emerald-900/60 rounded-xl p-1.5 flex items-center justify-center shrink-0 border border-emerald-700/60">
              <Image
                src="/images/fsc-certified.svg"
                alt="FSC Certified Packaging"
                width={120}
                height={70}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-emerald-800 text-[10px] font-mono font-bold text-emerald-300 uppercase tracking-wider">
                  FSC® Certified
                </span>
                <span className="text-[11px] font-mono text-emerald-400 font-medium">Chain of Custody</span>
              </div>
              <h4 className="text-sm font-bold text-white mt-1">100% Responsibly Sourced Materials</h4>
              <p className="text-xs text-emerald-200/80 leading-snug mt-0.5">
                Committed to forest stewardship, eco-safe adhesives, and fully biodegradable kraft paper.
              </p>
            </div>
          </div>

          {/* Accreditation Badges & Checklist */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-900 font-bold">
              <FileCheck2 className="w-4 h-4 text-kraft-600" />
              <span>Official Quality & Environmental Accreditations:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
              {standards.map((std, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{std}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}