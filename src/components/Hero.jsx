'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Sparkles, Box, CheckCircle2, Award, Eye, Layers, Quote } from 'lucide-react';
import PackagingScene from './3d/PackagingScene';

export default function Hero({ onOpenQuote }) {
  const [activeVisual, setActiveVisual] = useState('retail');
  const [quoteVisible, setQuoteVisible] = useState(false);
  const [visualVisible, setVisualVisible] = useState(false);
  const quoteRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === quoteRef.current && entry.isIntersecting) {
            setQuoteVisible(true);
          }
          if (entry.target === visualRef.current && entry.isIntersecting) {
            setVisualVisible(true);
          }
        });
      },
      { threshold: 0.25 }
    );

    if (quoteRef.current) observer.observe(quoteRef.current);
    if (visualRef.current) observer.observe(visualRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#F8F9FA] overflow-hidden bg-grid-pattern">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-kraft-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6 sm:space-y-7 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100/80 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-kraft-600 animate-pulse" />
              <span>Since 1999 • ISO 9001:2015 & Halal Certified</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 font-display tracking-tight leading-[1.1]">
              Packaging That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-kraft-600 via-kraft-700 to-amber-700">
                Protects.
              </span>
              <br />
              Packaging That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                Performs.
              </span>
            </h1>

            {/* Premium Quote Card with Smooth Zoom Entrance and Hover Effects */}
            <div
              ref={quoteRef}
              className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl shadow-slate-900/10 border border-slate-750 max-w-xl mx-auto lg:mx-0 text-left overflow-hidden group/quote cursor-default transition-all duration-700 ease-out"
              style={{
                transform: quoteVisible ? 'scale(1) translateY(0)' : 'scale(0.95) translateY(12px)',
                opacity: quoteVisible ? 1 : 0,
              }}
            >
              {/* Subtle ambient lighting inside quote */}
              <div className="absolute top-0 right-0 w-36 h-36 bg-kraft-500/15 rounded-full blur-2xl pointer-events-none group-hover/quote:bg-kraft-400/20 transition-all duration-500" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-amber-600/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative flex items-start gap-3.5 sm:gap-4 transition-transform duration-500 ease-out group-hover/quote:scale-[1.01]">
                <div className="shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-kraft-500/20 border border-kraft-400/30 flex items-center justify-center mt-0.5 text-kraft-300 shadow-inner">
                  <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-kraft-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm sm:text-[15px] font-medium italic text-slate-100 leading-snug tracking-wide">
                    &ldquo;We don&apos;t think outside of the box; we think what can we do with the box.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 mt-2.5">
                    <span className="w-5 h-px bg-kraft-400/60" />
                    <span className="text-[11px] font-mono text-kraft-300 font-semibold tracking-wider uppercase">
                      AR Packages 
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Premier manufacturer and exporter of customized corrugated cartons, multi-profile fluting sheets, retail display trays, and heavy-duty shipping containers.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <button
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-kraft-500/25 hover:shadow-kraft-600/40 flex items-center justify-center gap-2 group"
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-kraft-400 font-bold text-sm sm:text-base transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Box className="w-4 h-4 text-kraft-600" />
                <span>Explore Products</span>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-600 font-mono font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-kraft-600" />
                <span>Custom Die-Cuts</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-kraft-600" />
                <span>High-Speed Corrugation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-kraft-600" />
                <span>Strength & Durability Focus</span>
              </div>
            </div>
          </div>

          {/* Right Visual Section with Retail Display Box First */}
          <div
            ref={visualRef}
            className="lg:col-span-6 relative flex flex-col items-center justify-center transition-all duration-700 ease-out"
            style={{
              transform: visualVisible ? 'scale(1) translateY(0)' : 'scale(0.96) translateY(16px)',
              opacity: visualVisible ? 1 : 0,
            }}
          >
            {/* Visual Selector Tabs - Retail Display Box First */}
            <div className="flex items-center gap-2 mb-3 bg-white/95 p-1 rounded-xl border border-kraft-200 shadow-sm z-20">
              <button
                onClick={() => setActiveVisual('retail')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeVisual === 'retail'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-kraft-300" />
                <span>Retail Display Box</span>
              </button>

              <button
                onClick={() => setActiveVisual('3d')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                  activeVisual === '3d'
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Box className="w-3.5 h-3.5 text-kraft-300" />
                <span>Interactive 3D Carton</span>
              </button>
            </div>

            {/* Visual Display Container */}
            <div className="relative w-full rounded-2xl border border-kraft-300/70 bg-white shadow-2xl shadow-slate-900/10 overflow-hidden group/box">
              {activeVisual === 'retail' ? (
                <div className="p-4 sm:p-6 flex flex-col items-center justify-center animate-in fade-in duration-300">
                  {/* Clean, perfectly-proportioned image container for Retail Display Box */}
                  <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3.2] max-h-[420px] rounded-xl overflow-hidden bg-gradient-to-b from-[#e8eae6] via-[#dce0dc] to-[#cfd4cf] flex items-center justify-center group shadow-sm border border-slate-200/80">
                    <Image
                      src="/images/avocado-box.jpg"
                      alt="AR Packages Die-Cut Retail Display Box PDQ"
                      fill
                      sizes="(max-width: 768px) 100vw, 550px"
                      priority
                      className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04] contrast-[1.02] brightness-[1.01]"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-md bg-white/95 backdrop-blur-sm border border-kraft-300 text-[11px] font-mono font-bold text-slate-800 shadow-sm z-10">
                      Die-Cut Retail Display Box (PDQ)
                    </div>

                    {/* Quick Switch Button to 3D */}
                    <button
                      onClick={() => setActiveVisual('3d')}
                      className="absolute bottom-3 left-3 z-10 px-3 py-1.5 rounded-lg bg-slate-900/90 hover:bg-slate-900 text-white backdrop-blur-md text-[11px] font-mono font-semibold flex items-center gap-1.5 border border-white/20 transition-all shadow-md cursor-pointer"
                    >
                      <Box className="w-3.5 h-3.5 text-kraft-300" />
                      <span>View 3D Model →</span>
                    </button>
                  </div>

                  <div className="w-full mt-4 flex items-center justify-between pt-3 border-t border-slate-100 text-xs text-slate-600">
                    <span className="font-medium text-slate-800">Organic Cotton Throw Shelf-Ready Display Carton</span>
                    <button
                      onClick={() => onOpenQuote({ title: 'Die-Cut Retail & Shelf Display Trays (PDQ)' })}
                      className="text-xs font-bold text-kraft-700 hover:text-kraft-900 hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Request Quote</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative animate-in fade-in duration-300">
                  <PackagingScene />
                  <div
                    onClick={() => setActiveVisual('retail')}
                    className="absolute bottom-4 left-4 z-20 flex items-center gap-3 p-2.5 rounded-xl bg-white/95 backdrop-blur-md border border-kraft-300 shadow-lg cursor-pointer hover:scale-105 transition-transform group"
                  >
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-slate-200 shrink-0">
                      <Image
                        src="/images/avocado-box.jpg"
                        alt="Avocado display box"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="pr-2">
                      <span className="block text-[11px] font-bold text-slate-900 group-hover:text-kraft-700">
                        Retail Display Box
                      </span>
                      <span className="block text-[10px] font-mono text-slate-500">
                        Click to view display carton →
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}