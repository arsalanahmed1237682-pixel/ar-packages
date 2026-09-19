'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Menu,
  X,
  ArrowRight,
  Phone,
  ChevronDown,
  TreePine,
} from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

export const PRODUCT_DROPDOWN_ITEMS = PRODUCTS_DATA.map((p) => ({
  id: p.id,
  name: p.title,
  shortName: p.shortTitle,
  desc: p.description,
  badge: p.badge,
  tag: p.category,
  image: p.image,
}));

export default function Navbar({ onOpenQuote, onSelectProduct }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProductClick = (item) => {
    setProductsOpen(false);
    setMobileMenuOpen(false);
    if (onSelectProduct) {
      onSelectProduct(item);
    }
  };

  const handleQuoteClick = () => {
    setMobileMenuOpen(false);
    if (onOpenQuote) {
      onOpenQuote();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-white/95 backdrop-blur-md border-b border-kraft-500/20 shadow-lg shadow-slate-200/50'
            : 'py-4 bg-gradient-to-b from-white/95 via-white/85 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between flex-nowrap">
          
          {/* Brand Logo & Est. 1999 */}
          <Link href="/" className="flex items-center gap-3 group shrink-0 whitespace-nowrap">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
              <Image
                src="/images/logo.png"
                alt="AR Packages Logo"
                width={48}
                height={39}
                priority
                className="object-contain w-full h-full max-h-10"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-1.5 leading-none">
                <span className="text-xl font-extrabold tracking-tight text-slate-900 font-display">
                  AR <span className="text-kraft-600">PACKAGES</span>
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-kraft-100 text-kraft-800 font-semibold border border-kraft-200 inline-block leading-tight">
                  Est. 1999
                </span>
              </div>
              <span className="text-[9px] font-mono tracking-wider text-slate-500 uppercase mt-0.5 font-medium">
                Corrugated Carton Manufacturing
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Single Line, Never Wraps) */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 whitespace-nowrap shrink-0">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              Home
            </Link>

            <Link href="/#about" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              About
            </Link>

            {/* Products Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                onMouseEnter={() => setProductsOpen(true)}
                className={`text-sm font-semibold flex items-center gap-1.5 transition-colors py-2 ${
                  productsOpen ? 'text-kraft-600' : 'text-slate-700 hover:text-kraft-600'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productsOpen ? 'rotate-180 text-kraft-600' : 'text-slate-400'
                  }`}
                />
              </button>

              {productsOpen && (
                <div
                  onMouseLeave={() => setProductsOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[720px] bg-white rounded-2xl border border-kraft-500/20 shadow-2xl shadow-slate-900/15 p-5 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-kraft-500" />
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600">
                        {PRODUCTS_DATA.length} Certified Packaging Formats
                      </span>
                    </div>
                    <Link
                      href="/products"
                      onClick={() => setProductsOpen(false)}
                      className="text-xs font-bold text-kraft-600 hover:text-kraft-800 flex items-center gap-1 px-3 py-1 rounded-lg bg-kraft-50 border border-kraft-200 transition-colors"
                    >
                      <span>View Products Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2 max-h-[400px] overflow-y-auto pr-1">
                    {PRODUCTS_DATA.map((prod) => (
                      <Link
                        key={prod.id}
                        href="/products"
                        onClick={() => handleProductClick(prod)}
                        className="flex items-start gap-2.5 p-2 rounded-xl text-left hover:bg-kraft-50/70 border border-transparent hover:border-kraft-200 transition-all group"
                      >
                        <div className="relative w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 overflow-hidden shrink-0 group-hover:border-kraft-300">
                          <Image
                            src={prod.image}
                            alt={prod.shortTitle}
                            fill
                            className="object-contain p-0.5"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1 mb-0.5">
                            <span className="text-xs font-bold text-slate-900 group-hover:text-kraft-800 truncate">
                              {prod.shortTitle}
                            </span>
                            {prod.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded-full bg-emerald-50 text-emerald-800 font-semibold shrink-0 border border-emerald-200">
                                {prod.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 leading-tight">
                            {prod.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                    <span className="flex items-center gap-1">
                      <TreePine className="w-3.5 h-3.5 text-emerald-600" /> FSC® Chain-of-Custody Standard
                    </span>
                    <span>ISO 9001:2015 Registered</span>
                  </div>
                </div>
              )}
            </div>

            <Link href="/#industries" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              Industries
            </Link>

            <Link href="/#manufacturing" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              Manufacturing
            </Link>

            <Link href="/#clients" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              Clients
            </Link>

            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-kraft-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Right CTAs (Single Line, Never Wraps) */}
          <div className="hidden xl:flex items-center gap-3 shrink-0 whitespace-nowrap">
            <a
              href="tel:+923352142887"
              className="flex items-center gap-2 text-xs font-mono font-semibold text-slate-700 hover:text-kraft-700 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-kraft-50 border border-slate-200 transition-colors shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-kraft-600 shrink-0" />
              <span>+92 335 2142887</span>
            </a>

            <button
              onClick={handleQuoteClick}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold text-sm transition-all shadow-md shadow-kraft-500/25 active:scale-95 flex items-center gap-2 shrink-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile & Tablet Right Menu Trigger */}
          <div className="xl:hidden flex items-center gap-2 shrink-0">
            <button
              onClick={handleQuoteClick}
              className="px-3 py-1.5 rounded-lg bg-kraft-500 hover:bg-kraft-600 text-white font-bold text-xs shadow-sm"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-slate-900 bg-slate-100 border border-slate-200 focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile / Tablet Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1.5 text-sm font-semibold text-slate-800">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg bg-kraft-50 text-kraft-800 font-bold flex items-center justify-between"
              >
                <span>Products Catalogue</span>
                <span className="text-[10px] font-mono bg-kraft-200 text-kraft-900 px-2 py-0.5 rounded">
                  {PRODUCTS_DATA.length} Formats
                </span>
              </Link>
              <Link
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors"
              >
                About AR Packages
              </Link>
              <Link
                href="/#industries"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors"
              >
                Industries We Serve
              </Link>
              <Link
                href="/#manufacturing"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors"
              >
                Manufacturing Process
              </Link>
              <Link
                href="/#clients"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors"
              >
                Valued Clients &amp; Partners
              </Link>
              <Link
                href="/guides/3-ply-5-ply-7-ply"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors flex items-center justify-between"
              >
                <span>3-Ply / 5-Ply Guide</span>
                <span className="text-[10px] font-mono text-kraft-700 font-semibold">Guide</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-lg hover:bg-slate-50 hover:text-kraft-600 transition-colors font-bold text-kraft-800"
              >
                Contact &amp; Plant Location
              </Link>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href="tel:+923352142887"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-mono text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-kraft-600" />
                <span>Call +92 335 2142887</span>
              </a>
              <a
                href="https://wa.me/923352142887?text=Hello%20AR%20Packages,%20I%20would%20like%20to%20inquire%20about%20corrugated%20packaging."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold shadow-sm"
              >
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}