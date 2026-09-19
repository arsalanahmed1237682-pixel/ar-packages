'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { HelpCircle, ChevronDown, ArrowRight, ShieldCheck, Phone } from 'lucide-react';

export default function FAQSection({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'What is the difference between 3-ply, 5-ply, and 7-ply corrugated cartons?',
      a: 'Ply counts the total layers of paperboard in the corrugated sheet. 3-ply (Single Wall) contains 1 fluted medium between 2 flat liners and typically carries 4–15 kg. 5-ply (Double Wall) contains 2 fluted mediums separated by 3 liners, carrying 20–45 kg. 7-ply (Triple Wall) contains 3 fluted mediums and 4 liners, engineered for heavy industrial loads of 45–150+ kg as an alternative to wooden crates.',
    },
    {
      q: 'How do I choose the right carton size and board strength for my product?',
      a: 'The right specification is the lightest board caliper that safely protects your product. We evaluate three factors: the product weight, the warehouse pallet stacking height and duration, and the transit mode (domestic road freight vs. container sea export). Provide your product dimensions and weight, and our Karachi engineering team will calculate the exact flute and board grade.',
    },
    {
      q: 'Can AR Packages manufacture custom-sized boxes and die-cut shapes?',
      a: 'Yes, 100% of our production is customized. We manufacture custom Regular Slotted Cartons (RSC), Half Slotted Cartons (HSC), Full Overlap (FOL), Telescope boxes, and precision CNC die-cut retail display trays (PDQ) and mailer boxes with custom window cutouts, carry handles, and self-locking tabs.',
    },
    {
      q: 'Do you provide custom brand printing on corrugated boxes?',
      a: 'Yes. We offer up to 4-color high-definition flexographic printing using fast-drying, eco-friendly water-based inks. We can print logos, barcodes, unboxing instructions, regulatory icons, and full-bleed graphics with high registration accuracy.',
    },
    {
      q: 'What is the Minimum Order Quantity (MOQ) for production runs?',
      a: 'For standard corrugated cartons, our typical minimum production run starts at 500 to 1,000 units depending on box dimensions. We also cater to large enterprise volume contracts of 50,000+ units with scheduled batch dispatches.',
    },
    {
      q: 'What information is needed to receive an accurate quotation?',
      a: 'To price a carton accurately, we need: (1) Internal Length × Width × Height (in inches or mm), (2) Required quantity, (3) Approximate payload weight or product being packed, (4) Plain or printed requirements, and (5) Delivery destination.',
    },
    {
      q: 'Do you provide delivery across Pakistan?',
      a: 'Yes. Operating from our central Karachi manufacturing plant, we utilize our dedicated in-house transport fleet for deliveries across Sindh and coordinate scheduled road freight to Lahore, Faisalabad, Islamabad, Multan, Sialkot, Peshawar, Quetta, and export seaports.',
    },
    {
      q: 'What does FSC® certified packaging mean?',
      a: 'FSC® (Forest Stewardship Council) certification verifies that the virgin kraft paper used in our boxes is sourced from responsibly managed forests that provide environmental, social, and economic benefits. All our corrugated materials are 100% biodegradable and recyclable.',
    },
    {
      q: 'Can corrugated cartons replace traditional wooden shipping crates?',
      a: 'Yes. Our heavy-duty 7-ply (triple wall) cartons deliver exceptional vertical column stacking strength and puncture resistance. Unlike wooden crates, heavy-duty corrugated cartons are significantly lighter, cost less in freight, arrive flat-packed to save warehouse space, and do not require phytosanitary heat treatment/fumigation for international export.',
    },
    {
      q: 'How fast can I receive a quotation?',
      a: 'Quotations submitted through our website or direct WhatsApp are reviewed by our engineering estimation team in Karachi and typically quoted back within 24 business hours.',
    },
  ];

  return (
    <section id="faq" className="relative py-24 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Customer Guidance</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Common Packaging Questions
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Everything you need to know about board grades, box plies, custom die-cuts, and manufacturing lead times.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-[#F8F9FA] border border-slate-200/90 transition-all duration-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 hover:text-kraft-700 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-display">{faq.q}</span>
                  <div className={`w-7 h-7 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-kraft-50 border-kraft-300 text-kraft-700' : 'text-slate-400'}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 font-normal">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-0.5">
            <h4 className="text-sm font-bold text-slate-900">Have a question not answered here?</h4>
            <p className="text-xs text-slate-600">Speak directly with our packaging engineers in Karachi.</p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/guides/3-ply-5-ply-7-ply"
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-xs font-bold text-slate-800 transition-all"
            >
              Read 3-Ply Guide
            </Link>
            <button
              onClick={() => onOpenQuote()}
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-kraft-600 text-white text-xs font-bold transition-all shadow-sm"
            >
              Ask an Engineer
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
