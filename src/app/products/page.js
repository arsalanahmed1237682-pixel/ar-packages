'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Layers,
  Shield,
  ArrowUpRight,
  Search,
  Filter,
  Package,
  Phone,
  ArrowLeft,
  CheckCircle2,
  TreePine,
  ShieldCheck,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import QuoteModal from '@/components/QuoteModal';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenQuote = (product = null) => {
    setSelectedProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  const categories = [
    { id: 'all', label: `All Products (${PRODUCTS_DATA.length})` },
    { id: 'shipping', label: 'Shipping Cartons (RSC/HSC)' },
    { id: 'industrial', label: 'Heavy Industrial & Export' },
    { id: 'food', label: 'Food & Cold-Chain (Pizza & Waxed)' },
    { id: 'retail', label: 'Retail Displays & E-Commerce' },
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS_DATA.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.type === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.flute.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-800 selection:bg-kraft-500 selection:text-white">
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onSelectProduct={(item) => {
          const matched = PRODUCTS_DATA.find((p) => p.id === item.id);
          if (matched) setSelectedProduct(matched);
        }}
      />

      {/* Hero Banner for Products Page */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white via-slate-50 to-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-kraft-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Packaging Products Catalogue</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
                <Package className="w-3.5 h-3.5" />
                <span>Full Manufacturing Lineup</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
                Engineered Corrugated Packaging Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                Explore our complete range of certified corrugated cartons, e-commerce postal mailers, die-cut display trays, moisture-barrier waxed boxes, and heavy-duty 7-ply export containers manufactured at our Karachi facility.
              </p>
            </div>

            {/* Quick Link to 3-Ply Guide */}
            <Link
              href="/guides/3-ply-5-ply-7-ply"
              className="p-4 rounded-2xl bg-white border border-kraft-300 hover:border-kraft-500 shadow-sm hover:shadow-md transition-all flex items-center gap-3 shrink-0"
            >
              <div className="w-10 h-10 rounded-xl bg-kraft-100 text-kraft-800 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-slate-900">3-Ply, 5-Ply or 7-Ply?</span>
                <span className="block text-[11px] font-mono text-kraft-700">Read the Weight Guide →</span>
              </div>
            </Link>
          </div>

          {/* Search and Category Filter Bar */}
          <div className="mt-10 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-md space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-4">
              
              {/* Search input */}
              <div className="relative w-full md:w-96">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search cartons, flutes, mailers, or food boxes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all"
                />
              </div>

              {/* Category Pills */}
              <div className="flex items-center gap-2 overflow-x-auto w-full pb-1 md:pb-0">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                      activeCategory === cat.id
                        ? 'bg-slate-900 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center justify-between mb-8">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
              Showing {filteredProducts.length} of {PRODUCTS_DATA.length} Packaging Formats
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-700">
              <TreePine className="w-4 h-4" />
              <span>100% FSC® Certified &amp; ISO 9001:2015</span>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-2xl border border-slate-200 p-8">
              <Package className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No matching products found</h3>
              <p className="text-sm text-slate-500 mt-1">Try adjusting your search terms or selecting another category.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative rounded-2xl bg-white border border-slate-200 hover:border-kraft-400 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-sm overflow-hidden"
                >
                  <div>
                    {/* Real Product Image Container */}
                    <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-50 border border-slate-150 mb-5 flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      
                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1 z-10">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-800 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                          {product.category}
                        </span>
                      </div>

                      {product.badge && (
                        <span className="absolute top-3 right-3 text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50/95 backdrop-blur-sm px-2.5 py-1 rounded-md border border-emerald-200 shadow-sm z-10">
                          {product.badge}
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-kraft-700 transition-colors">
                      {product.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                      {product.description}
                    </p>

                    {/* Flute and spec pill */}
                    
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProduct(product)}
                      className="text-xs font-bold text-kraft-700 hover:text-kraft-900 flex items-center gap-1.5 transition-colors py-2"
                    >
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-4 h-4 text-kraft-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>

                    <button
                      onClick={() => handleOpenQuote(product)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-kraft-600 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                    >
                      Get Quote
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Technical Consultation CTA Card */}
          <div className="mt-16 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-kraft-500/20 text-kraft-300 text-xs font-mono font-bold uppercase">
                <ShieldCheck className="w-3.5 h-3.5" /> Custom Structural Engineering
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Require Custom Dimensions or Specific Flute Combinations?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed font-normal">
                Our packaging engineering team in Karachi will calculate the optimal Edge Crush Test (ECT) ratings, GSM caliper, and flute configuration for your payload weight and transit environment.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold text-sm transition-all shadow-lg shadow-kraft-500/25 text-center"
              >
                Request Custom Quotation
              </Link>

              <a
                href="https://wa.me/923352142887?text=Hello%20AR%20Packages,%20I%20would%20like%20to%20discuss%20custom%20carton%20specifications."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white font-semibold text-sm transition-all text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Engineer</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onSelectProduct={(item) => {
          const matched = PRODUCTS_DATA.find((p) => p.id === item.id);
          if (matched) setSelectedProduct(matched);
        }}
      />

      <WhatsAppButton />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={(p) => {
            setSelectedProduct(null);
            handleOpenQuote(p);
          }}
        />
      )}

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={selectedProductForQuote}
      />
    </main>
  );
}
