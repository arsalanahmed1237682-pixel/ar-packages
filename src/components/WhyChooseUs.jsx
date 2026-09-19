'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Compass, Award, Sliders, Clock, CheckCircle2, Truck, ArrowRight, Star } from 'lucide-react';

const features = [
  {
    title: 'ISO 9001:2015 & Halal Certified',
    desc: 'Rigorous laboratory testing for bursting factor (Mullen), Edge Crush (ECT), and paper moisture levels across every production run.',
    icon: null,
    badge: 'Certified Quality',
    image: '/images/clients/products/Gemini_Generated_Image_tbzy74tbzy74tbzy.jpg',
    stat: '100%',
    statLabel: 'Batch Tested',
    overlayFrom: 'from-emerald-600/75',
    overlayTo: 'to-emerald-950/90',
    iconBg: 'bg-emerald-500',
  },
  {
    title: 'Custom Engineering & Die-Cuts',
    desc: 'Bespoke structural designs engineered specifically around your product geometry (e.g. Retail display trays, FOL, Telescope).',
    icon: null,
    badge: 'CAD Engineered',
    image: '/images/clients/products/Gemini_Generated_Image_oxmk6ooxmk6ooxmk.jpg',
    stat: '500+',
    statLabel: 'Die-Cut Designs',
    overlayFrom: 'from-blue-600/75',
    overlayTo: 'to-blue-950/90',
    iconBg: 'bg-blue-500',
  },
  {
    title: 'High Stacking Durability',
    desc: 'Heavy-duty virgin kraft liners and reinforced fluting architectures engineered for high-density warehouse vertical stacking.',
    icon: null,
    badge: 'High Load Tested',
    image: '/images/clients/products/yuri_b-carton-1689424_1920.png',
    stat: '10-Ton',
    statLabel: 'Stack Capacity',
    overlayFrom: 'from-amber-600/75',
    overlayTo: 'to-amber-950/90',
    iconBg: 'bg-amber-500',
  },
  {
    title: 'Dedicated Delivery Fleet',
    desc: 'Our very own in-house fleet guarantees secure transit and punctual warehouse delivery across Pakistan.',
    icon: null,
    badge: 'In-House Logistics',
    image: '/images/clients/products/photo-1619302820124-e3b9d8a7f686.png',
    stat: 'PKW',
    statLabel: 'Nationwide',
    overlayFrom: 'from-violet-600/75',
    overlayTo: 'to-violet-950/90',
    iconBg: 'bg-violet-500',
  },
  {
    title: '25+ Years Experience (Since 1999)',
    desc: 'Over two decades of proven reliability serving multinational airlines, textile exporters, and automotive manufacturers.',
    icon: null,
    badge: 'Established 1999',
    image: '/images/clients/products/Gemini_Generated_Image_ohr739ohr739ohr7.jpg',
    stat: '25+',
    statLabel: 'Years Active',
    overlayFrom: 'from-kraft-600/75',
    overlayTo: 'to-kraft-950/90',
    iconBg: 'bg-kraft-500',
  },
  {
    title: 'Flexible Contract Production',
    desc: 'Scalable manufacturing capacity supporting specialized custom runs and high-volume continuous enterprise supply.',
    icon: Sliders,
    badge: 'Scalable Capacity',
    image: '/images/clients/products/323b31b6-f6d5-46cb-a79e-147c4fa01e6bb.jpg',
    stat: '1M+',
    statLabel: 'Units / Month',
    overlayFrom: 'from-rose-600/75',
    overlayTo: 'to-rose-950/90',
    iconBg: 'bg-rose-500',
  },
];

export default function WhyChooseUs({ onOpenQuote }) {
  return (
    <section id="why-us" className="relative py-28 bg-[#F8F9FA] overflow-hidden">

      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.025)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-kraft-100/50 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-slate-200/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-bold uppercase tracking-widest mb-5 shadow-sm">
            <Star className="w-3 h-3 fill-kraft-600 text-kraft-600" />
            <span>Competitive Edge</span>
            <Star className="w-3 h-3 fill-kraft-600 text-kraft-600" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-display tracking-tight leading-tight mb-5">
            Why Choose{' '}
            <span className="relative inline-block">
              AR Packages
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-kraft-400 via-kraft-500 to-kraft-400 rounded-full" />
            </span>
            ?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl mx-auto">
            We combine precision packaging engineering with dependable manufacturing to protect your products and elevate your brand.
          </p>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-9 pt-8 border-t border-slate-200">
            {[
              { label: '50+ Enterprise Clients', emoji: '🏢' },
              { label: 'ISO 9001:2015 Certified', emoji: '✅' },
              { label: 'Serving Since 1999', emoji: '📅' },
              { label: 'Halal Certified', emoji: '🌿' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <span className="text-base">{item.emoji}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Feature Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, index) => {
            const Icon = feat.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200/80 hover:border-kraft-400/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl shadow-md flex flex-col"
              >
                {/* ── Image Header ── */}
                <div className="relative h-48 overflow-hidden shrink-0">
                  <Image
                    src={feat.image}
                    alt={feat.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${feat.overlayFrom} ${feat.overlayTo} opacity-70 group-hover:opacity-60 transition-opacity duration-500`} />

                  {/* Badge (top-left) */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center text-[10px] font-mono font-bold text-white bg-black/30 backdrop-blur-sm border border-white/20 px-2.5 py-1.5 rounded-lg uppercase tracking-wider">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Stat (top-right) */}
                  <div className="absolute top-3.5 right-4 text-right">
                    <div className="text-2xl font-extrabold font-display text-white leading-none drop-shadow">
                      {feat.stat}
                    </div>
                    <div className="text-[10px] font-mono text-white/75 uppercase tracking-wider mt-0.5">
                      {feat.statLabel}
                    </div>
                  </div>

                  
                </div>

                {/* ── Content Body ── */}
                <div className="flex flex-col flex-1 p-6 pt-8">
                  <h3 className="text-[15px] font-extrabold text-slate-900 mb-2.5 group-hover:text-kraft-700 transition-colors leading-snug font-display">
                    {feat.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-normal flex-1">
                    {feat.desc}
                  </p>

                  {/* Card footer */}
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-kraft-500 shrink-0" />
                      <span>Standard on all orders</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-kraft-500 group-hover:translate-x-1 transition-all duration-300 shrink-0" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Dark CTA Strip ── */}
        <div className="mt-16 relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-slate-800 shadow-2xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="absolute inset-0 opacity-[0.07] pointer-events-none">
            <Image src="/products/corrugated-sheets.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="relative z-10 space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-kraft-400 font-bold uppercase tracking-widest">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Ready to Partner?</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display tracking-tight">
              Get a Custom Packaging Quote Today
            </h3>
            <p className="text-sm text-slate-400 max-w-xl font-normal">
              Tell us your specifications — dimensions, ply, print, quantity — and receive a tailored quote within 24 hours.
            </p>
          </div>
          <button
            onClick={onOpenQuote}
            className="relative z-10 shrink-0 inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-kraft-500 hover:bg-kraft-400 text-white font-bold text-sm transition-all duration-300 hover:shadow-xl hover:shadow-kraft-500/25 hover:-translate-y-0.5 font-display"
          >
            Request a Quote
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}