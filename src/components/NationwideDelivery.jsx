'use client';

import React from 'react';
import Link from 'next/link';
import { Check, Truck, MapPin, Package } from 'lucide-react';

export default function NationwideDelivery({ onOpenQuote }) {
  return (
    <section id="delivery" className="py-20 sm:py-24 bg-white border-t border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side: Information & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#C25E00]">
              Nationwide Delivery
            </p>

            {/* Main Headline matching reference */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1B3626] font-display tracking-tight leading-[1.1]">
              WE DELIVER <br />
              <span className="text-[#C25E00]">WHEREVER</span> YOU ARE
            </h2>

            {/* Supporting paragraph */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl">
              Manufactured in Karachi and delivered across Pakistan. Bulk and pallet loads move by road freight; local orders go out directly from our plant in F.B Area, Karachi — on your terms.
            </p>

            {/* 4 Checkmark Bullet Points */}
            <ul className="space-y-3.5 pt-2">
              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1B3626] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#1B3626]">
                  Manufactured in Karachi, so Sindh &amp; nationwide orders move fast
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1B3626] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#1B3626]">
                  Built stronger to survive the journey, not just the shelf
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1B3626] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#1B3626]">
                  Pallet, loose or your own container carrier
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#1B3626] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                  <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span className="text-sm sm:text-[15px] font-bold text-[#1B3626]">
                  Standing specifications held for repeat runs
                </span>
              </li>
            </ul>

            {/* Bottom Callout Card / Pill CTA matching reference */}
            <div className="pt-4">
              <div className="p-4 sm:p-4.5 rounded-2xl bg-slate-50/90 border border-slate-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 max-w-xl shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-100/80 text-[#C25E00] flex items-center justify-center shrink-0 border border-orange-200">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#C25E00] font-mono">
                      Bulk Order or Ongoing Supply?
                    </h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Ask about pallet rates and a delivery schedule.
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-xl bg-[#C25E00] hover:bg-[#A85100] text-white font-bold text-xs transition-all shadow-md shadow-orange-700/20 text-center shrink-0 whitespace-nowrap"
                >
                  Get a quote
                </Link>
              </div>
            </div>

          </div>

          {/* Right Side: Pakistan Map Visual adapted for AR Packages (Karachi Hub) */}
          <div className="lg:col-span-6 relative flex items-center justify-center">
            
            <div className="relative w-full max-w-[540px] aspect-[4/3.6] select-none">
              
              {/* Pakistan Stylized Silhouette SVG with Provinces */}
              <svg
                viewBox="0 0 600 520"
                className="w-full h-full drop-shadow-xl"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Pakistan Base Country Silhouette */}
                <path
                  d="M 460,50 L 510,70 L 530,120 L 490,160 L 470,220 L 460,260 L 430,340 L 400,380 L 370,440 L 320,460 L 290,440 L 250,420 L 210,400 L 160,390 L 130,370 L 140,320 L 180,290 L 240,260 L 290,230 L 340,190 L 370,140 L 420,90 Z"
                  fill="#EAF2ED"
                  stroke="#D3E2D8"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />

                {/* Sindh Province Highlighted (Home Base of AR Packages) */}
                <path
                  d="M 320,460 L 370,440 L 400,380 L 430,340 L 390,320 L 340,350 L 320,390 L 290,440 Z"
                  fill="#2E5A44"
                  stroke="#264D3A"
                  strokeWidth="2"
                  className="transition-colors duration-300 hover:fill-[#264D3A]"
                />

                {/* Punjab / Central Region Indicator */}
                <path
                  d="M 430,340 L 460,260 L 470,220 L 420,200 L 380,240 L 350,290 L 390,320 Z"
                  fill="#E2EBE5"
                  stroke="#C6D8CD"
                  strokeWidth="1.5"
                />

                {/* Khyber Pakhtunkhwa & Northern areas */}
                <path
                  d="M 420,200 L 470,220 L 490,160 L 440,140 L 390,160 Z"
                  fill="#DFE9E2"
                  stroke="#C6D8CD"
                  strokeWidth="1.5"
                />

                {/* Gilgit-Baltistan */}
                <path
                  d="M 460,50 L 510,70 L 530,120 L 490,160 L 440,140 L 420,90 Z"
                  fill="#E5EEE8"
                  stroke="#C6D8CD"
                  strokeWidth="1.5"
                />

                {/* Dotted Delivery Route Arrows radiating from Karachi (approx x=330, y=440) */}
                {/* To Punjab (Lahore) */}
                <path
                  d="M 335,430 Q 400,350 440,240"
                  stroke="#C25E00"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <polygon points="438,235 446,242 435,246" fill="#C25E00" />

                {/* To Islamabad */}
                <path
                  d="M 335,430 Q 420,300 450,165"
                  stroke="#C25E00"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <polygon points="448,160 455,168 443,171" fill="#C25E00" />

                {/* To Khyber Pakhtunkhwa (Peshawar) */}
                <path
                  d="M 335,430 Q 370,280 395,175"
                  stroke="#C25E00"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <polygon points="393,170 400,178 388,180" fill="#C25E00" />

                {/* To Balochistan (Quetta / Hub) */}
                <path
                  d="M 330,435 Q 260,400 230,340"
                  stroke="#C25E00"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                />
                <polygon points="227,335 236,341 226,347" fill="#C25E00" />

                {/* To Gilgit-Baltistan */}
                <path
                  d="M 335,430 Q 450,260 485,95"
                  stroke="#C25E00"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  fill="none"
                />
                <polygon points="483,90 491,97 480,100" fill="#C25E00" />

                {/* Karachi Main Plant Pin Location */}
                <circle cx="330" cy="440" r="10" fill="#C25E00" opacity="0.3" className="animate-ping" />
                <circle cx="330" cy="440" r="6" fill="#C25E00" />
                <circle cx="330" cy="440" r="2.5" fill="#FFFFFF" />
              </svg>

              {/* Regional Transit Overlay Tags matching reference style */}

              {/* Gilgit-Baltistan Tag */}
              <div className="absolute top-[3%] right-[8%] flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-[#1B3626]">Gilgit-Baltistan</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">4–6 days</span>
              </div>

              {/* Islamabad Tag */}
              <div className="absolute top-[22%] right-[14%] flex flex-col items-start text-left">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-[#1B3626]">Islamabad &amp; Rawalpindi</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">2–3 days</span>
              </div>

              {/* Khyber Pakhtunkhwa Tag */}
              <div className="absolute top-[26%] left-[18%] flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-[#1B3626]">Khyber Pakhtunkhwa</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">2–3 days</span>
              </div>

              {/* Punjab (Lahore / Faisalabad) Tag */}
              <div className="absolute top-[48%] right-[10%] flex flex-col items-start text-left">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-[#1B3626]">Punjab (Lahore/FSD)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">2–3 days</span>
              </div>

              {/* Balochistan Tag */}
              <div className="absolute top-[62%] left-[4%] flex flex-col items-end text-right">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5" />
                  <span className="text-xs font-bold text-[#1B3626]">Balochistan (Hub/Quetta)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">1–2 days</span>
              </div>

              {/* Main Plant Pin Box (AR Packages Karachi) matching reference card */}
              <div className="absolute bottom-[8%] left-[28%] sm:left-[32%] z-20">
                <div className="p-3 sm:p-3.5 rounded-2xl bg-[#1B3626] text-white shadow-2xl border border-emerald-700/50 flex flex-col gap-0.5 min-w-[170px]">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-xs sm:text-sm font-extrabold text-white">
                      AR Packages
                    </span>
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-200">
                    F.B Area, Karachi Plant
                  </span>
                  <div className="mt-1 pt-1 border-t border-emerald-800/80 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-orange-300 font-bold">Same day – 1 day</span>
                    <span className="text-emerald-300">HQ Plant</span>
                  </div>
                </div>
              </div>

              {/* Sindh Label below card */}
              <div className="absolute bottom-[2%] left-[42%] flex flex-col items-center text-center">
                <div className="flex items-center gap-1 text-[#1B3626]">
                  <Truck className="w-3.5 h-3.5 text-[#1B3626]" />
                  <span className="text-xs font-bold text-[#1B3626]">Sindh Region</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">Same day – 24 hrs</span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
