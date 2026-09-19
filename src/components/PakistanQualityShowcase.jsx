'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Box, Compass, Truck, Sparkles } from 'lucide-react';

export default function PakistanQualityShowcase({ onOpenQuote }) {
  const cards = [
    {
      kicker: 'Corrugated cartons',
      title: 'Built to spec',
      body: 'Single, double and triple wall boxes cut to your dimensions.',
      link: '/products',
      linkText: 'See the range',
      image: '/products/rsc-slotted-cartons.jpg',
      alt: 'Plain corrugated shipping cartons in a range of sizes',
      cardBg: 'bg-[#FDF3EE]',
      borderColor: 'border-[#F5DFD5]',
      discBg: 'bg-[#F9E2D5]',
      accentColor: 'text-[#B84E12]',
      titleColor: 'text-[#2D2A26]',
      arrowColor: 'text-[#B84E12]',
    },
    {
      kicker: 'Custom boxes',
      title: 'Made for you',
      body: 'Send a product or a drawing and we specify the board around it.',
      link: '/contact',
      linkText: 'Request a quote',
      image: '/products/cardcustom-560.jpg',
      alt: 'An open kraft carton with its length, width and height marked',
      cardBg: 'bg-[#EFF8F3]',
      borderColor: 'border-[#D9EFE2]',
      discBg: 'bg-[#D6EFE0]',
      accentColor: 'text-[#1F5F3B]',
      titleColor: 'text-[#1B3626]',
      arrowColor: 'text-[#1F5F3B]',
    },
    {
      kicker: 'Wholesale & trade',
      title: 'Bulk supply',
      body: 'Repeat runs and scheduled deliveries for packers.',
      link: '/contact',
      linkText: 'Talk to us',
      image: '/products/cardbulk-560.jpg',
      alt: 'A stack of large plain corrugated moving cartons',
      cardBg: 'bg-[#EFF6FB]',
      borderColor: 'border-[#D8E8F5]',
      discBg: 'bg-[#D6E6F7]',
      accentColor: 'text-[#1D5A8A]',
      titleColor: 'text-[#182C3D]',
      arrowColor: 'text-[#1D5A8A]',
    },
    {
      kicker: 'Print & finishing',
      title: 'Your brand on it',
      body: 'Printed cartons, display units and die-cut shapes.',
      link: '/products',
      linkText: 'Explore printing',
      image: '/images/avocado-box.jpg',
      alt: 'Printed kraft and white mailer boxes carrying a customer logo',
      cardBg: 'bg-[#FBF6EE]',
      borderColor: 'border-[#F3E6D3]',
      discBg: 'bg-[#F5EAD4]',
      accentColor: 'text-[#8E673C]',
      titleColor: 'text-[#332514]',
      arrowColor: 'text-[#8E673C]',
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-12 space-y-3">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
            Quality corrugated packaging across Pakistan
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            AR Packages has manufactured corrugated cartons in Karachi since 1999. Whether you are packing for retail, shipping by courier or crating for export, the board is specified for the load it has to carry — not picked off a shelf.
          </p>
        </div>

        {/* 4 Cards Grid - Replicating the exact Zain Packages 4-tile visual structure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {cards.map((card, idx) => (
            <article
              key={idx}
              className={`rounded-2xl border ${card.borderColor} ${card.cardBg} p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden min-h-[440px]`}
            >
              <div>
                {/* Header with circular icon disc */}
                <div className="flex items-start gap-3.5 mb-4">
                  <div className={`w-10 h-10 rounded-full ${card.discBg} flex items-center justify-center shrink-0`}>
                    {idx === 0 && (
                      <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 7.5 12 3.5l9 4v9l-9 4-9-4Z" />
                        <path d="M3 7.5 12 11.5l9-4" />
                        <path d="M12 11.5v9" />
                        <path d="M7.5 5.5 16.5 9.5" />
                      </svg>
                    )}
                    {idx === 1 && (
                      <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 8 8 4l4 4 4-4 4 4-1 9-7 3-7-3Z" />
                        <circle cx="12" cy="11.5" r="2" />
                      </svg>
                    )}
                    {idx === 2 && (
                      <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 17.5h18v3H3Z" />
                        <path d="M6 20.5v-3M18 20.5v-3" />
                        <path d="M7 17.5v-5h10v5" />
                        <path d="M9.5 12.5v-5h5v5" />
                      </svg>
                    )}
                    {idx === 3 && (
                      <svg className="w-5 h-5 text-slate-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 8.5V3.5h10v5" />
                        <path d="M4 8.5h16v7h-3v5H7v-5H4Z" />
                        <path d="M10 15.5h4" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <p className={`text-xs font-mono font-bold uppercase tracking-wider ${card.accentColor}`}>
                      {card.kicker}
                    </p>
                    <h3 className={`text-xl font-extrabold ${card.titleColor} font-display leading-tight mt-0.5`}>
                      {card.title}
                    </h3>
                  </div>
                </div>

                {/* Body description */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-3">
                  {card.body}
                </p>

                {/* Arrow link */}
                <Link
                  href={card.link}
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold ${card.arrowColor} hover:underline mb-6`}
                >
                  <span>{card.linkText}</span>
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>

              {/* Product Photo Container at Bottom */}
              <div className="relative w-full h-40 rounded-xl overflow-hidden bg-white/70 border border-slate-200/60 flex items-center justify-center p-2 shadow-sm">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 280px"
                  className="object-contain p-2 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
