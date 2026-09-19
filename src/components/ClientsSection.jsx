'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Building2, ShieldCheck, CheckCircle2, Award } from 'lucide-react';

export default function ClientsSection() {
  const clientLogos = [
    { name: 'Atlas Honda', sector: 'Automotive & Motorcycle', logo: '/images/clients/atlas-honda.png', sizeClass: 'max-h-13 sm:max-h-15 max-w-[105px]' },
    { name: 'Gul Ahmed', sector: 'Textile & Apparel', logo: '/images/clients/gul-ahmed.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[155px]' },
    { name: 'Yunus Textile Mills', sector: 'Textile Manufacturing', logo: '/images/clients/yunus-textile.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[140px]' },
    { name: 'Soorty Enterprises', sector: 'Denim & Apparel Export', logo: '/images/clients/soorty.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[130px]' },
    { name: 'Kings Apparel', sector: 'Apparel Manufacturing', logo: '/images/clients/kings-apparel.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[155px]' },
    { name: 'Artistic Apparels', sector: 'Garment Manufacturing', logo: '/images/clients/artistic-apparels.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[140px]' },
    { name: 'Al-Karam Towel', sector: 'Home Textiles & Export', logo: '/images/clients/al-karam-towel.png', sizeClass: 'max-h-13 sm:max-h-15 max-w-[105px]' },
    { name: 'Khaadi', sector: 'Fashion & Retail', logo: '/images/clients/khaadi.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[125px]' },
    { name: 'Gatro Nova', sector: 'Industrial Polyester', logo: '/images/clients/gatronova.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[150px]' },
    { name: 'International Foundation & Garments)', sector: 'Apparel & Retail', logo: '/images/clients/ifg.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[140px]' },
    { name: 'International Knitwear', sector: 'Knitwear & Export', logo: '/images/clients/international-knitwear.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[135px]' },
    { name: 'MAL Pakistan Limited', sector: 'Mobil Lubricants', logo: '/images/clients/mal-pakistan.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[135px]' },
    { name: 'Noor Embroidery', sector: 'Textile Processing', logo: '/images/clients/noor-embroidery.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[135px]' },
    { name: 'Royal Crown', sector: 'Consumer Goods', logo: '/images/clients/royal-crown.png', sizeClass: 'max-h-13 sm:max-h-15 max-w-[85px]' },
    { name: 'United Chemical', sector: 'Chemicals & Polymers', logo: '/images/clients/united-chemical.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[145px]' },
    { name: 'Texas Chicken', sector: 'Food & Quick Service', logo: '/images/clients/texas-chicken.png', sizeClass: 'max-h-13 sm:max-h-15 max-w-[125px]' },
    { name: 'Clothing King', sector: 'Apparel & Garments', logo: '/images/clients/clothing-king.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[135px]' },
    { name: 'Texmark', sector: 'Textile Accessories', logo: '/images/clients/texmark.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[145px]' },
  ];

  const enterpriseAccounts = [
    { name: 'JLA Home', logo: '/images/clients/enterprise/jla-home.jpg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[145px]' },
    { name: 'GLI', logo: '/images/clients/enterprise/gli.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[160px]' },
    { name: 'Ralph Lauren', logo: '/images/clients/enterprise/ralph-lauren.svg', sizeClass: 'max-h-9 sm:max-h-11 max-w-[190px]' },
    { name: 'La Redoute', logo: '/images/clients/enterprise/la-redoute.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[120px]' },
    { name: 'Bedeck', logo: '/images/clients/enterprise/bedeck.svg', sizeClass: 'max-h-11 sm:max-h-13 max-w-[160px]' },
    { name: 'Bedsure', logo: '/images/clients/enterprise/bedsure.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[150px]' },
    { name: 'Bedshee International', logo: null },
    { name: 'Deltex.de', logo: '/images/clients/enterprise/deltex.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[160px]' },
    { name: 'Mistral', logo: '/images/clients/enterprise/mistral.svg', sizeClass: 'max-h-11 sm:max-h-13 max-w-[150px]' },
    { name: 'Carrefour', logo: '/images/clients/enterprise/carrefour.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[130px]' },
    { name: 'Costco', logo: '/images/clients/enterprise/costco.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[150px]' },
    { name: 'Walmart', logo: '/images/clients/enterprise/walmart.svg', sizeClass: 'max-h-11 sm:max-h-13 max-w-[160px]' },
    { name: 'Khaadi', logo: '/images/clients/enterprise/khaadi.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[125px]' },
    { name: 'Rusta', logo: '/images/clients/enterprise/rusta.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[145px]' },
    { name: 'Target', logo: '/images/clients/enterprise/target.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[75px]' },
    { name: 'JCPenney', logo: '/images/clients/enterprise/jcpenney.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[155px]' },
    { name: 'Bata', logo: '/images/clients/enterprise/bata.svg', sizeClass: 'max-h-13 sm:max-h-15 max-w-[135px]' },
    { name: 'Borjan', logo: '/images/clients/enterprise/borjan.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[135px]' },
    { name: 'ECS', logo: '/images/clients/enterprise/ecs.webp', sizeClass: 'max-h-12 sm:max-h-14 max-w-[95px]' },
    { name: 'PCNN', logo: '/images/clients/enterprise/pcnn.jpg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[85px]' },
    { name: 'John Lewis', logo: '/images/clients/enterprise/john-lewis.svg', sizeClass: 'max-h-12 sm:max-h-14 max-w-[135px]' },
    { name: 'Auchan', logo: '/images/clients/enterprise/auchan.svg', sizeClass: 'max-h-11 sm:max-h-13 max-w-[160px]' },
    { name: 'TextileMart', logo: '/images/clients/enterprise/textilemart.png', sizeClass: 'max-h-11 sm:max-h-13 max-w-[155px]' },
    { name: 'Crown', logo: '/images/clients/enterprise/crown.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[80px]' },
    { name: 'Holley', logo: '/images/clients/enterprise/holley.avif', sizeClass: 'max-h-12 sm:max-h-14 max-w-[145px]' },
    { name: 'Brand Machine Group', logo: '/images/clients/enterprise/brand-machine-group.jpg', sizeClass: 'max-h-10 sm:max-h-12 max-w-[180px]' },
    { name: 'Mahi Foods', logo: '/images/clients/enterprise/mahi-foods.png', sizeClass: 'max-h-12 sm:max-h-14 max-w-[140px]' },
    { name: 'Walmart Chill', logo: '/images/clients/enterprise/walmart.svg', sizeClass: 'max-h-11 sm:max-h-13 max-w-[160px]' },
  ];

  return (
    <section id="clients" className="relative py-24 bg-white border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
            <Users className="w-3.5 h-3.5" />
            <span>Trusted Partnerships</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Our Valued Clients &amp; Partners
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We are proud to engineer and manufacture high-performance corrugated packaging for leading enterprises, aviation fleets, FMCG leaders, and major industrial exporters across Pakistan.
          </p>
        </div>

        {/* Corporate Trust Highlight Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white shadow-xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-kraft-400 font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Nationwide Enterprise Supply
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Contract Packaging Trusted by Industry Giants Since 1999
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-normal">
              Meeting strict compression, drop-test, and environmental compliance standards for domestic transit and global container shipments.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <span className="block text-xl font-bold font-mono text-kraft-400">50+</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Enterprise Clients</span>
            </div>
            <div className="px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-center">
              <span className="block text-xl font-bold font-mono text-kraft-400">25+</span>
              <span className="text-[10px] font-mono text-slate-400 uppercase">Years Experience</span>
            </div>
          </div>
        </div>

        {/* Clean borderless logo presentation — style matching enterprise accounts showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12 lg:gap-y-12 items-center justify-items-center">
          {clientLogos.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-full h-20 sm:h-24 px-3 py-2"
            >
              {client.logo ? (
                <Image
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  width={180}
                  height={65}
                  className={`object-contain w-auto opacity-90 hover:opacity-100 transition-opacity duration-200 ${client.sizeClass || 'max-h-12 sm:max-h-14 max-w-[150px]'}`}
                />
              ) : (
                /* Text fallback if logo not available */
                <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 hover:text-slate-900 transition-colors text-center px-2 py-1">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Additional Strategic Enterprise Accounts */}
        <div className="mt-14 pt-12 border-t border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-50 border border-kraft-200/80 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-kraft-600" />
              <span>Additional Strategic Enterprise Accounts</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 font-normal">
              Trusted contract packaging manufacturer delivering certified solutions for leading global and national enterprise portfolios.
            </p>
          </div>

          {/* Clean borderless logo presentation — style inspired by Accrescent client showcase */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 sm:gap-x-10 sm:gap-y-12 lg:gap-x-12 lg:gap-y-12 items-center justify-items-center">
            {enterpriseAccounts.map((account, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center w-full h-20 sm:h-24 px-3 py-2"
              >
                {account.logo ? (
                  <Image
                    src={account.logo}
                    alt={`${account.name} logo`}
                    width={180}
                    height={65}
                    className={`object-contain w-auto opacity-90 hover:opacity-100 transition-opacity duration-200 ${account.sizeClass || 'max-h-12 sm:max-h-14 max-w-[150px]'}`}
                  />
                ) : (
                  /* No logo available — display the client name cleanly */
                  <span className="text-xs sm:text-sm font-semibold tracking-wide text-slate-700 hover:text-slate-900 transition-colors text-center px-2 py-1">
                    {account.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}