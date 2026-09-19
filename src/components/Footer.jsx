'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck, Award, TreePine, MessageCircle, BookOpen } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function Footer({ onOpenQuote, onSelectProduct }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products Catalogue', href: '/products' },
    { name: '3-Ply / 5-Ply Guide', href: '/guides/3-ply-5-ply-7-ply' },
    { name: 'About AR Packages', href: '/#about' },
    { name: 'Industries We Serve', href: '/#industries' },
    { name: 'Manufacturing Process', href: '/#manufacturing' },
    { name: 'Nationwide Delivery', href: '/#delivery' },
    { name: 'Valued Clients & Partners', href: '/#clients' },
    { name: 'Common Questions (FAQ)', href: '/#faq' },
    { name: 'Contact & Inquiries', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Brand and Certifications */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-11 h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/images/logo.png"
                  alt="AR Packages Logo"
                  width={48}
                  height={39}
                  className="object-contain w-full h-full max-h-10 brightness-105"
                />
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl font-extrabold tracking-tight text-white font-display leading-tight">
                    AR <span className="text-kraft-400">PACKAGES</span>
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-kraft-900/60 text-kraft-300 font-semibold border border-kraft-600/40">
                    Est. 1999
                  </span>
                </div>
                <span className="text-[9px] font-mono tracking-wider text-slate-400 uppercase -mt-0.5 font-medium">
                  Manufacturer of Corrugated Cartons
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm font-normal">
              &ldquo;We don&apos;t think outside of the box; we think what can we do with the box.&rdquo; Providing customized corrugated packaging solutions for over two decades.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-750 text-[11px] font-mono text-slate-200">
                <ShieldCheck className="w-3.5 h-3.5 text-kraft-400" />
                <span>ISO 9001:2015</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-800 text-[11px] font-mono text-emerald-300">
                <TreePine className="w-3.5 h-3.5 text-emerald-400" />
                <span>FSC® Certified</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-750 text-[11px] font-mono text-slate-200">
                <Award className="w-3.5 h-3.5 text-kraft-400" />
                <span>Halal Certified</span>
              </span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/923352142887?text=Hello%20AR%20Packages,%20I%20would%20like%20to%20inquire%20about%20corrugated%20packaging."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 text-emerald-400 text-xs font-semibold hover:bg-[#25D366] hover:text-slate-950 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: +92 335 2142887</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Company &amp; Guides
            </h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <Link href={link.href} className="hover:text-kraft-300 transition-colors block py-0.5 text-slate-300">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Catalogue */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                Products Catalogue
              </h4>
              <Link href="/products" className="text-[11px] text-kraft-400 hover:text-kraft-300 underline">
                View All ({PRODUCTS_DATA.length})
              </Link>
            </div>
            <ul className="space-y-1.5 text-xs">
              {PRODUCTS_DATA.slice(0, 8).map((prod) => (
                <li key={prod.id}>
                  <Link
                    href="/products"
                    onClick={() => onSelectProduct && onSelectProduct(prod)}
                    className="hover:text-kraft-300 transition-colors block py-0.5 text-slate-300 truncate"
                  >
                    {prod.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Plant & Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
              Plant &amp; Head Office
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                <span className="text-slate-300">
                  Plot # B-472, Block-02, Bhangori Goth, F.B Area, Karachi, Pakistan
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-kraft-400 shrink-0" />
                <div className="flex flex-col text-slate-300">
                  <a href="tel:+923352142887" className="hover:text-white font-mono">+92 335 2142887</a>
                  <a href="tel:+923363042100" className="hover:text-white font-mono">+92 336 3042100</a>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-kraft-400 shrink-0" />
                <a href="mailto:arpkgs@gmail.com" className="text-slate-300 hover:text-white font-mono">
                  arpkgs@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-kraft-500 hover:text-slate-950 text-kraft-300 border border-slate-700 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
              >
                <span>Request Custom Quotation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} AR Packages. All Rights Reserved. (Est. 1999) • Karachi, Pakistan
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>ISO 9001:2015 Reg. 22836-Q15-001</span>
            <span>FSC® Certified CoC</span>
            <span>Halal Cert. HC/ARP-321/PAK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}