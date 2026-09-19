'use client';

import React from 'react';
import { Sparkles, ShieldCheck, TreePine, Truck, Layers, Scissors, Printer, Award } from 'lucide-react';

export default function AnnouncementStrip() {
  const items = [
    { label: 'Custom Corrugated Packaging', icon: Layers },
    { label: 'ISO 9001:2015 & Halal Certified', icon: ShieldCheck },
    { label: 'FSC® Chain-of-Custody Sourced', icon: TreePine },
    { label: '3-Ply, 5-Ply & 7-Ply Heavy-Duty', icon: Award },
    { label: 'Precision Die-Cutting & Creasing', icon: Scissors },
    { label: 'High-Definition Brand Flexo Printing', icon: Printer },
    { label: 'Nationwide In-House Delivery Fleet', icon: Truck },
    { label: 'Manufacturing in Karachi Since 1999', icon: Sparkles },
  ];

  return (
    <div className="relative w-full bg-slate-900 border-y border-slate-800 text-white overflow-hidden py-3 select-none">
      {/* Subtle side fade overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-slate-900 to-transparent z-10 pointer-events-none" />

      <div className="flex w-max items-center animate-ticker whitespace-nowrap">
        {/* Render twice for continuous loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="inline-flex items-center gap-2.5 mx-6">
              <span className="w-1.5 h-1.5 rounded-full bg-kraft-400 shrink-0" />
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-200 uppercase tracking-wider">
                <Icon className="w-3.5 h-3.5 text-kraft-400 shrink-0" />
                <span>{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
