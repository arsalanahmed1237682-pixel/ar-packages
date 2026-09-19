'use client';

import React from 'react';
import Image from 'next/image';
import {
  Utensils,
  ShoppingBag,
  Store,
  Sprout,
  Cpu,
  Pill,
  Wrench,
  Shirt,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function Industries({ onOpenQuote }) {
  const industries = [
    {
      title: 'Food & Beverage',
      category: 'Food-Grade Packaging',
      desc: 'Halal-certified, grease-resistant, and steam-ventilated corrugated cartons for fast food chains, bakeries, and FMCG brands.',
      image: '/products/pizza-box.jpg',
      alt: 'Food-grade corrugated cartons and pizza boxes',
      icon: Utensils,
      color: 'amber',
      accentBg: 'bg-amber-500',
      specs: 'Halal Certified (ACTS) • Steam Vented • Food-Grade Liners',
    },
    {
      title: 'E-Commerce & Couriers',
      category: 'Shipping & Postal Mailers',
      desc: 'Crush-resistant courier postal boxes, self-locking mailers, and universal RSC cartons engineered to eliminate void-fill waste.',
      image: '/images/industries/rsc-slotted-cartons.jpg',
      alt: 'E-commerce courier boxes and corrugated shipping cartons',
      icon: ShoppingBag,
      color: 'blue',
      accentBg: 'bg-blue-500',
      specs: 'Zero-Tape Folding • High Burst Factor • Courier Transit Tested',
    },
    {
      title: 'Retail & Consumer Goods',
      category: 'Shelf-Ready & PDQ',
      desc: 'Custom shelf-ready packaging (SRP), counter display trays, and die-cut window cartons built for immediate supermarket presentation.',
      image: '/images/avocado-box.jpg',
      alt: 'Retail shelf-ready packaging and die-cut display trays',
      icon: Store,
      color: 'emerald',
      accentBg: 'bg-emerald-500',
      specs: 'Shelf-Ready SRP • Custom Window Cutouts • High-Definition Flexo',
    },
    {
      title: 'Agriculture & Fresh Produce',
      category: 'Export Trays & Cold Chain',
      desc: 'Heavy-load ventilated produce trays with interlocking stacking corners engineered for high-humidity cold rooms and export shipping.',
      image: '/images/industries/agriculture.jpg',
      alt: 'Agricultural produce packaging and fresh harvest cartons',
      icon: Sprout,
      color: 'emerald',
      accentBg: 'bg-emerald-600',
      specs: 'Airflow Ventilation Slots • Moisture Barrier • Interlocking Corners',
    },
    {
      title: 'Electronics & Technology',
      category: 'Cushioning & Anti-Static',
      desc: 'Precision drop-tested corrugated cartons integrated with custom-molded EPS foam inserts to immobilize sensitive electronics.',
      image: '/images/industries/eps-foam-packaging.jpg',
      alt: 'Electronics packaging with protective foam cushioning inserts',
      icon: Cpu,
      color: 'cyan',
      accentBg: 'bg-cyan-500',
      specs: 'Shock-Absorbing EPS Foam • Anti-Static Liners • Drop-Tested Caliper',
    },
    {
      title: 'Pharmaceuticals & Healthcare',
      category: 'Cleanroom & Medical',
      desc: 'ISO 9001:2015 certified cleanroom cartons, partitioned ampoule dividers, and uniform caliper boxes for pharmaceutical manufacturers.',
      image: '/images/industries/pharmaceuticals.jpg',
      alt: 'Pharmaceutical cleanroom packaging and medicine cartons',
      icon: Pill,
      color: 'rose',
      accentBg: 'bg-rose-500',
      specs: 'ISO 9001:2015 Verified • Cleanroom Compliant • Exact Flute Caliper',
    },
    {
      title: 'Industrial & Manufacturing',
      category: 'Heavy Stacking & Freight',
      desc: 'Ultra-rigid 5-ply and 7-ply triple wall cartons, wire-stitched joints, and heavy-duty corner posts for automotive and machinery exports.',
      image: '/images/industries/industrial.jpg',
      alt: 'Heavy-duty industrial master cartons and export packaging',
      icon: Wrench,
      color: 'slate',
      accentBg: 'bg-slate-600',
      specs: 'Triple Wall 7-Ply • Wire Stitched Joints • 150+ kg Stacking Load',
    },
    {
      title: 'Textiles & Garments',
      category: 'Export Master Cartons',
      desc: 'Export-grade master apparel cartons, garment hanging packs, and anti-humidity cartons trusted by Pakistan\'s leading textile mills.',
      image: '/images/industries/textiles.jpg',
      alt: 'Textile and garment export packaging cartons',
      icon: Shirt,
      color: 'indigo',
      accentBg: 'bg-indigo-500',
      specs: 'Export Sea Freight Grade • High Compression • Anti-Humidity Liner',
    },
  ];

  return (
    <section id="industries" className="relative py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider shadow-xs">
            <ShieldCheck className="w-3.5 h-3.5 text-kraft-700" />
            <span>Targeted Industry Packaging</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Industries We Serve
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Tailored structural engineering and certified corrugated packaging solutions designed for the unique protection, transit, and merchandising demands of your sector.
          </p>
        </div>

        {/* 8-Card Grid with Professional Visuals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-[#F8F9FA] border border-slate-200 hover:border-kraft-400 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Image Container with Smooth Zoom */}
                  <div className="relative h-44 w-full rounded-xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80">
                    <Image
                      src={ind.image}
                      alt={ind.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    
                    {/* Top Floating Category Badge */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 shadow-xs">
                        {ind.category}
                      </span>
                    </div>

                    {/* Floating Icon Badge */}
                    <div className="absolute bottom-2.5 right-2.5 z-10 w-9 h-9 rounded-lg bg-slate-900/90 backdrop-blur-sm border border-white/20 text-white flex items-center justify-center shadow-md">
                      <Icon className="w-4 h-4 text-kraft-300" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-kraft-700 transition-colors">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4 font-normal line-clamp-3">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/80">
                  <span className="block text-[11px] font-mono text-kraft-800 font-medium leading-tight">
                    {ind.specs}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <button
            onClick={() => onOpenQuote && onOpenQuote({ title: 'Industry Specific Packaging' })}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-sm font-semibold text-white transition-all shadow-md active:scale-95 cursor-pointer"
          >
            <span>Discuss Sector-Specific Packaging Specs</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}