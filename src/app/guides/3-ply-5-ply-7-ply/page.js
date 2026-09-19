'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Layers,
  ArrowRight,
  ShieldCheck,
  Package,
  Weight,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  ArrowLeft,
  CheckCircle2,
  TreePine,
  Phone,
  Droplets,
  Building2,
  Boxes,
  Truck,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function GuidePlyPage() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenQuote = (product = null) => {
    setSelectedProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: 'What does "ply" mean in corrugated board manufacturing?',
      a: 'Ply counts the total individual paper layers laminated together in a corrugated sheet. A 3-ply board (single wall) consists of an outer liner, one fluted undulating medium, and an inner liner (3 sheets). A 5-ply board (double wall) combines three flat liners and two fluted mediums (5 sheets). A 7-ply board (triple wall) consists of four liners and three fluted mediums (7 sheets). More plies increase wall caliper, vertical compression resistance, and payload capacity.',
    },
    {
      q: 'How much weight can a standard 5-ply carton safely support?',
      a: 'A typical 5-ply (double wall) corrugated carton reliably carries between 20 kg and 45 kg of payload. However, load capacity also depends on paper grammage (GSM), bursting factor (BF), internal carton volume, warehouse stacking height, and ambient humidity. High-grade virgin kraft 5-ply boxes can carry even heavier industrial loads under controlled conditions.',
    },
    {
      q: 'When should I choose 7-ply over 5-ply?',
      a: '7-ply (triple wall) is engineered for heavy industrial machinery parts, dense chemical drums, bulk automotive spares, and multi-tier sea export cargo exceeding 45–50 kg. For standard freight and retail products, 7-ply is usually over-specified; 5-ply provides optimal protection at lower material and transport costs.',
    },
    {
      q: 'What is the difference between single wall and double wall?',
      a: 'Single wall is the industry term for 3-ply board (one arched flute between two liners). Double wall refers to 5-ply board (two arched flute layers separated by a central liner and enclosed by outer/inner liners). Triple wall refers to 7-ply board.',
    },
    {
      q: 'Does ply count alone determine the overall box strength?',
      a: 'No. Ply indicates the structural architecture, while paper grade (GSM and Burst Factor BF) determines material strength. A 3-ply carton constructed from high-GSM virgin kraft paper can outperform an under-specified 5-ply carton made from low-grade recycled testliner. Both factors must be balanced during engineering.',
    },
    {
      q: 'Which ply is recommended for sea freight container exports from Pakistan?',
      a: 'We generally recommend 5-ply (BC double wall) or 7-ply triple wall cartons for sea freight. Export shipments endure weeks of vessel vibrations, 4-to-6 tier container stacking, and high humidity during ocean transit. Our export boxes feature moisture-resistant adhesive and high ECT ratings to prevent bottom carton deformation.',
    },
  ];

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-800 selection:bg-kraft-500 selection:text-white">
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      {/* Hero & Breadcrumbs Section */}
      <section className="relative pt-32 pb-14 bg-gradient-to-b from-white via-slate-50 to-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-kraft-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/products" className="hover:text-kraft-700 transition-colors">
              <span>Packaging Guides</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">3-Ply, 5-Ply or 7-Ply Comparison</span>
          </nav>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
              <Layers className="w-3.5 h-3.5" />
              <span>Technical Engineering Guide</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              3-Ply, 5-Ply or 7-Ply: Understanding Corrugated Board Construction
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              What the ply count represents, typical payload capacities for single, double, and triple wall cartons, and how to engineer the ideal packaging specification without overpaying for excess board.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
              <span>Published by AR Packages Engineering Lab</span>
              <span>•</span>
              <span>Karachi Plant Standards</span>
              <span>•</span>
              <span className="text-emerald-700 font-semibold">ISO 9001:2015 &amp; FSC® Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Executive Summary Box */}
      <section className="py-8 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-amber-50/90 via-orange-50/60 to-kraft-50 border border-kraft-300 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-kraft-900">
              <Sparkles className="w-4 h-4 text-kraft-600" />
              <span>Key Takeaways (In Short)</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-700 leading-relaxed">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                <span><strong>Ply counts layers of paper:</strong> 3-ply has two flat liners and one fluted medium; 5-ply has three liners and two fluted mediums; 7-ply has four liners and three mediums.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                <span><strong>Typical payload guidelines:</strong> 3-ply carries 4–15 kg, 5-ply carries 20–45 kg, and 7-ply carries 45 kg to 150+ kg (wooden crate alternative).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                <span><strong>Ply is only half the formula:</strong> Paper grade (GSM and Burst Factor BF) provides the other half of carton strength.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-kraft-700 shrink-0 mt-0.5" />
                <span><strong>The golden rule:</strong> The most economical specification is the lightest board that safely and reliably protects your goods throughout their transport journey.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main Guide Content */}
      <section className="py-8 pb-20 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          {/* Section 1: What the Number Counts */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              What the Ply Number Actually Counts
            </h2>
            <p className="text-base text-slate-700 leading-relaxed">
              In corrugated board manufacturing, &ldquo;ply&rdquo; refers to individual <strong>sheets of paper</strong>, not multiple sheets of cardboard glued together. Corrugated board is manufactured by heating and fluting a wave-shaped paper sheet (the <em>medium</em>) and bonding it between flat paper sheets (the <em>liners</em>) using food-safe starch adhesives.
            </p>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Therefore, a <strong>3-ply</strong> sheet comprises Outer Liner + Fluted Medium + Inner Liner (3 paper sheets). Adding another fluted medium and liner creates <strong>5-ply</strong>, while an additional layer produces <strong>7-ply</strong>. In international packaging terminology, these are termed <strong>Single Wall</strong>, <strong>Double Wall</strong>, and <strong>Triple Wall</strong>.
            </p>
          </div>

          {/* 3 Visual Cross-Section Cards with SVG Flute Diagrams */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* 3-Ply Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
              <div>
                {/* SVG Flute Graphic */}
                <div className="p-4 rounded-xl bg-slate-900 text-kraft-400 mb-4 flex flex-col items-center justify-center min-h-[90px]">
                  <svg className="w-full h-8" viewBox="0 0 200 24" fill="none">
                    <rect x="0" y="0" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 12 Q 10 3 20 12 Q 30 21 40 12 Q 50 3 60 12 Q 70 21 80 12 Q 90 3 100 12 Q 110 21 120 12 Q 130 3 140 12 Q 150 21 160 12 Q 170 3 180 12 Q 190 21 200 12"
                      stroke="#E58A1F"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect x="0" y="21" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                  </svg>
                  <span className="text-[10px] font-mono text-slate-400 mt-2">1 Flute • 2 Liners</span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-kraft-700">3-Ply Board</span>
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">Single Wall</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">3-Ply (Single Wall)</h3>
                
                <div className="my-3 py-2 border-y border-slate-100 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-slate-900 font-mono">4 – 15 kg</span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Typical Capacity</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Ideal for retail packages, courier mailers, footwear, apparel inner packs, and lightweight consumer goods.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 block">Flute Profiles: B, C, or E-Flute</span>
              </div>
            </div>

            {/* 5-Ply Card */}
            <div className="p-6 rounded-2xl bg-white border-2 border-kraft-400 shadow-md flex flex-col justify-between transition-all hover:shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-gradient-to-l from-kraft-600 to-kraft-500 text-white text-[9px] font-mono font-bold uppercase px-3 py-1 rounded-bl-xl">
                Most Popular
              </div>

              <div>
                {/* SVG Flute Graphic */}
                <div className="p-4 rounded-xl bg-slate-900 text-kraft-400 mb-4 flex flex-col items-center justify-center min-h-[90px]">
                  <svg className="w-full h-12" viewBox="0 0 200 42" fill="none">
                    <rect x="0" y="0" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 10 Q 10 3 20 10 Q 30 17 40 10 Q 50 3 60 10 Q 70 17 80 10 Q 90 3 100 10 Q 110 17 120 10 Q 130 3 140 10 Q 150 17 160 10 Q 170 3 180 10 Q 190 17 200 10"
                      stroke="#E58A1F"
                      strokeWidth="2.2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect x="0" y="19" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 31 Q 10 24 20 31 Q 30 38 40 31 Q 50 24 60 31 Q 70 38 80 31 Q 90 24 100 31 Q 110 38 120 31 Q 130 24 140 31 Q 150 38 160 31 Q 170 24 180 31 Q 190 38 200 31"
                      stroke="#C5A070"
                      strokeWidth="2.2"
                      fill="none"
                      strokeLinecap="round"
                    />
                    <rect x="0" y="39" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                  </svg>
                  <span className="text-[10px] font-mono text-slate-400 mt-2">2 Flutes • 3 Liners</span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-kraft-700">5-Ply Board</span>
                  <span className="text-[10px] font-mono bg-kraft-100 text-kraft-900 px-2 py-0.5 rounded font-semibold">Double Wall</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">5-Ply (Double Wall)</h3>
                
                <div className="my-3 py-2 border-y border-slate-100 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-kraft-700 font-mono">20 – 45 kg</span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Typical Capacity</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  The standard for master cartons, textile exports, FMCG grocery distribution, heavy grocery packs, and palletized storage.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 block">Flute Profiles: BC or BB Double Wall</span>
              </div>
            </div>

            {/* 7-Ply Card */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
              <div>
                {/* SVG Flute Graphic */}
                <div className="p-4 rounded-xl bg-slate-900 text-kraft-400 mb-4 flex flex-col items-center justify-center min-h-[90px]">
                  <svg className="w-full h-16" viewBox="0 0 200 60" fill="none">
                    <rect x="0" y="0" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 9 Q 10 3 20 9 Q 30 15 40 9 Q 50 3 60 9 Q 70 15 80 9 Q 90 3 100 9 Q 110 15 120 9 Q 130 3 140 9 Q 150 15 160 9 Q 170 3 180 9 Q 190 15 200 9"
                      stroke="#E58A1F"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="0" y="18" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 28 Q 10 22 20 28 Q 30 34 40 28 Q 50 22 60 28 Q 70 34 80 28 Q 90 22 100 28 Q 110 34 120 28 Q 130 22 140 28 Q 150 34 160 28 Q 170 22 180 28 Q 190 34 200 28"
                      stroke="#C5A070"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="0" y="37" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                    <path
                      d="M0 48 Q 10 42 20 48 Q 30 54 40 48 Q 50 42 60 48 Q 70 54 80 48 Q 90 42 100 48 Q 110 54 120 48 Q 130 42 140 48 Q 150 54 160 48 Q 170 42 180 48 Q 190 54 200 48"
                      stroke="#AA8253"
                      strokeWidth="2"
                      fill="none"
                    />
                    <rect x="0" y="57" width="200" height="3" fill="#D5C2A5" rx="1.5" />
                  </svg>
                  <span className="text-[10px] font-mono text-slate-400 mt-2">3 Flutes • 4 Liners</span>
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-kraft-700">7-Ply Board</span>
                  <span className="text-[10px] font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded font-semibold">Triple Wall</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">7-Ply (Triple Wall)</h3>
                
                <div className="my-3 py-2 border-y border-slate-100 flex items-baseline gap-2">
                  <span className="text-xl font-extrabold text-slate-900 font-mono">45 – 150+ kg</span>
                  <span className="text-[11px] font-mono text-slate-500 uppercase">Typical Capacity</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Used for heavy machinery, automotive engines, bulk chemicals, and export crating replacement without wood fumigation.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100">
                <span className="text-[11px] font-mono text-slate-500 block">Flute Profiles: AAC or BBC Combinations</span>
              </div>
            </div>

          </div>

          {/* Section 2: Capacity Comparison Table */}
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Load Ratings &amp; Application Reference
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These figures represent general industrial guidelines. Every custom carton quoted by AR Packages is calculated based on exact product dimensions, pallet stacking tiers, transit duration, and atmospheric exposure.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900 text-white font-mono text-xs uppercase tracking-wider">
                    <th className="p-3.5 sm:p-4 font-bold">Construction</th>
                    <th className="p-3.5 sm:p-4 font-bold">Industry Name</th>
                    <th className="p-3.5 sm:p-4 font-bold">Payload Range</th>
                    <th className="p-3.5 sm:p-4 font-bold">Recommended Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 font-mono">3-Ply</td>
                    <td className="p-3.5 sm:p-4">Single Wall</td>
                    <td className="p-3.5 sm:p-4 font-bold text-kraft-700 font-mono">4 – 15 kg</td>
                    <td className="p-3.5 sm:p-4">E-commerce parcels, footwear, apparel inner packs, bakery &amp; pizza boxes, cosmetics.</td>
                  </tr>
                  <tr className="hover:bg-slate-50 bg-kraft-50/30">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 font-mono">5-Ply</td>
                    <td className="p-3.5 sm:p-4 font-semibold text-kraft-900">Double Wall</td>
                    <td className="p-3.5 sm:p-4 font-bold text-kraft-700 font-mono">20 – 45 kg</td>
                    <td className="p-3.5 sm:p-4">Textile export cartons, Ramzan ration boxes, beverage crates, ceramic tiles, FMCG master outers.</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 font-mono">7-Ply</td>
                    <td className="p-3.5 sm:p-4">Triple Wall</td>
                    <td className="p-3.5 sm:p-4 font-bold text-kraft-700 font-mono">45 – 150+ kg</td>
                    <td className="p-3.5 sm:p-4">Automotive engines, dense chemical containers, heavy export cargo, industrial crate replacements.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 3: What Moves Those Numbers (GSM, BF, Size, Humidity) */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
              Critical Factors That Influence Board Performance
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Two cartons of identical ply can exhibit vastly different compression strengths. Four crucial engineering variables account for the difference:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-kraft-100 text-kraft-800 flex items-center justify-center font-bold text-xs font-mono">
                  01
                </div>
                <h3 className="text-base font-bold text-slate-900">Paper Grade: GSM &amp; Burst Factor (BF)</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  GSM (Grams per Square Meter) measures the paper weight, while BF (Burst Factor) measures the tensile resistance under hydraulic pressure. A 3-ply carton built with 200 GSM virgin kraft liner will frequently outperform a 5-ply box fabricated from 110 GSM recycled testliner.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-kraft-100 text-kraft-800 flex items-center justify-center font-bold text-xs font-mono">
                  02
                </div>
                <h3 className="text-base font-bold text-slate-900">Box Dimensions &amp; Panel Geometry</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  As panel dimensions expand, wide cardboard walls tend to buckle more easily under load. A large 24&quot; × 20&quot; box carrying 15 kg requires heavier double-wall board than a compact 10&quot; × 8&quot; box carrying the exact same payload.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-kraft-100 text-kraft-800 flex items-center justify-center font-bold text-xs font-mono">
                  03
                </div>
                <h3 className="text-base font-bold text-slate-900">Stacking Duration &amp; Warehouse Stacks</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Cardboard experiences compressive creep over extended storage periods. A carton that supports 100 kg on a brief truck journey can lose up to 40% of its vertical compression capacity after sitting under load at the bottom of a warehouse pallet stack for 30 days.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-9 h-9 rounded-xl bg-kraft-100 text-kraft-800 flex items-center justify-center font-bold text-xs font-mono">
                  04
                </div>
                <h3 className="text-base font-bold text-slate-900">Atmospheric Humidity &amp; Sea Cargo</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Paperboard naturally absorbs moisture. In monsoon warehouse climates or inside humid ocean shipping containers, board compression strength can decrease significantly unless treated with specialized moisture-barrier sizing or anti-humidity wax coatings.
                </p>
              </div>

            </div>
          </div>

          {/* Section 4: How Customers Choose the Right Ply */}
          <div className="p-7 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white shadow-xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kraft-500/20 text-kraft-300 text-xs font-mono font-bold uppercase">
              <ShieldCheck className="w-4 h-4 text-kraft-400" />
              <span>Specification Principle</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              How to Select the Right Ply for Your Cargo
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              The fundamental packaging rule is straightforward: <strong className="text-white">the optimal specification is the lightest board caliper that safely protects your product through its complete journey.</strong>
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Over-specifying (e.g., opting for 5-ply when a well-engineered 3-ply kraft box suffices) unnecessarily increases your per-unit costs, pallet freight weight, and storage footprint. Conversely, under-specifying risks catastrophic product damage and client returns.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleOpenQuote()}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold text-sm transition-all shadow-md text-center"
              >
                Let Us Engineer Your Specification
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all text-center"
              >
                Request Custom Quotation
              </Link>
            </div>
          </div>

          {/* Section 5: Common Packaging Questions Accordion */}
          <div className="space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-kraft-100 text-kraft-900 text-xs font-mono font-semibold uppercase">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Common Questions on Board Plies &amp; Specifications
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white border border-slate-200 transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-kraft-700 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base">{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-kraft-600' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Related Products Grid */}
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-kraft-700 font-bold">Related Packaging Formats</span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
                Explore Packaging Products Manufactured in Each Ply
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Link
                href="/products"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-kraft-700 uppercase">3-Ply &amp; 5-Ply</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-kraft-700 mt-1 mb-1">
                    Regular Slotted Cartons (RSC)
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Universal shipping standard available in single and double wall combinations.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-kraft-700 flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/products"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-kraft-700 uppercase">5-Ply &amp; 7-Ply</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-kraft-700 mt-1 mb-1">
                    Heavy-Duty Export Cartons
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Extreme vertical compression cartons for industrial machinery and sea export.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-kraft-700 flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>

              <Link
                href="/products"
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 hover:shadow-md transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-kraft-700 uppercase">Flat Board</span>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-kraft-700 mt-1 mb-1">
                    Corrugated Sheets &amp; Layer Pads
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Single, double, and triple wall boards supplied flat for pallet layer dividers.
                  </p>
                </div>
                <div className="mt-4 text-xs font-bold text-kraft-700 flex items-center gap-1">
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </div>
          </div>

        </div>
      </section>

      <Footer onOpenQuote={() => handleOpenQuote()} />
      <WhatsAppButton />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={selectedProductForQuote}
      />
    </main>
  );
}
