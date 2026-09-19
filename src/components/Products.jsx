'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Package,
  Layers,
  TreePine,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';
import ProductModal from './ProductModal';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function Products({ onOpenQuote }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  // Preview 6 featured items on the homepage for a clean, fast experience
  const previewProducts = activeCategory === 'all'
    ? PRODUCTS_DATA.slice(0, 6)
    : PRODUCTS_DATA.filter((p) => p.type === activeCategory).slice(0, 6);

  return (
    <section id="products" className="relative py-24 bg-[#F8F9FA] bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider shadow-sm">
            <Package className="w-3.5 h-3.5" />
            <span>Featured Packaging Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Packaging Solutions Built Around Your Product
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            From heavy-duty industrial shipping cartons to cold-chain waxed boxes and retail display trays, we manufacture certified solutions tailored to your requirements.
          </p>

          {/* Quick Filter Tabs */}
          <div className="pt-3 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'Featured Categories' },
              { id: 'shipping', label: 'Shipping Cartons (RSC/HSC)' },
              { id: 'industrial', label: 'Heavy Industrial (FOL/Telescope)' },
              { id: 'food', label: 'Food & Cold Chain (Pizza/Waxed)' },
              { id: 'retail', label: 'Retail Displays & Trays' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid with Real Product Photography */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {previewProducts.map((product) => (
            <div
              key={product.id}
              className="group relative rounded-2xl bg-white border border-slate-200/90 hover:border-kraft-400 p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-sm overflow-hidden"
            >
              <div>
                {/* Real Product Image Container */}
                <div className="relative w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-[#f8f9fa] border border-slate-150 mb-5 flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-contain p-2 group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
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
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-2 font-normal">
                  {product.description}
                </p>

               
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="text-xs font-bold text-kraft-700 hover:text-kraft-900 flex items-center gap-1.5 transition-colors py-2"
                >
                  <span>Specifications</span>
                  <ArrowUpRight className="w-4 h-4 text-kraft-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>

                <button
                  onClick={() => onOpenQuote(product)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-kraft-600 text-white text-xs font-semibold transition-all shadow-sm active:scale-95"
                >
                  Get Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Products CTA Bar */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-mono text-kraft-300 font-bold uppercase tracking-wider">
              <TreePine className="w-4 h-4 text-emerald-400" />
              <span>Full 11-Category Manufacturing Range</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Looking for our Complete Product Lineup &amp; Technical Specs?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal">
              Browse all standard corrugated cartons, custom die-cut trays, cold-chain waxed boxes, and angle edge protectors.
            </p>
          </div>

          <Link
            href="/products"
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-extrabold text-sm transition-all shadow-lg shadow-kraft-500/25 flex items-center justify-center gap-2 group shrink-0"
          >
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onOpenQuote={(p) => {
            setSelectedProduct(null);
            onOpenQuote(p);
          }}
        />
      )}
    </section>
  );
}