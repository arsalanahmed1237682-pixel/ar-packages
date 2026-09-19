'use client';

import React from 'react';
import { ArrowRight, PhoneCall, Sparkles, Mail, MapPin } from 'lucide-react';
import MiniCarton from './3d/MiniCarton';

export default function CTA({ onOpenQuote }) {
  return (
    <section id="contact" className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 h-full opacity-20 lg:opacity-40 pointer-events-none">
        <MiniCarton />
      </div>

      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-96 h-96 bg-kraft-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl space-y-6 text-center sm:text-left">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-500/20 border border-kraft-400/30 text-kraft-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Manufacturing & Contract Packaging</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            Have a Packaging Requirement?
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Tell us what you need. We&apos;ll help turn your packaging idea into a practical, protective, and cost-effective production reality.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-xl shadow-kraft-500/25 flex items-center justify-center gap-2 group"
            >
              <span>Request a Custom Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href="mailto:arpkgs@gmail.com"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-slate-700 hover:border-kraft-400 text-white font-semibold text-sm sm:text-base transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-kraft-400" />
              <span>Email: arpkgs@gmail.com</span>
            </a>
          </div>

          <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-700/80">
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-kraft-400 shrink-0" />
                <a href="tel:+923352142887" className="hover:text-white font-sans font-semibold">
                  +92 335 2142887
                </a>
                <span>/</span>
                <a href="tel:+923363042100" className="hover:text-white font-sans font-semibold">
                  +92 336 3042100
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-kraft-400 shrink-0" />
                <span>arpkgs@gmail.com</span>
              </div>
            </div>

            <div className="flex items-start gap-2 text-xs text-slate-300">
              <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
              <span>Plot # B-472, Block-02, Bhangori Goth, F.B Area, Karachi, Pakistan</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}