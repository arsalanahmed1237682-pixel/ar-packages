'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Check, Shield, Layers, Package, ArrowRight, TreePine } from 'lucide-react';

export default function ProductModal({ product, onClose, onOpenQuote }) {
  const [selectedImg, setSelectedImg] = useState(0);

  if (!product) return null;

  const images = product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="relative bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-kraft-500/20 border border-kraft-400/30 text-kraft-300 font-mono text-xs font-semibold">
              <Package className="w-3.5 h-3.5" />
              <span>{product.category || 'Packaging Solution'}</span>
            </span>
            {product.badge && (
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-mono text-[11px] font-semibold">
                {product.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-2">
            {product.title}
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed max-w-xl">
            {product.fullDescription || product.description}
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Real Product Image Showcase */}
          <div className="p-4 rounded-2xl bg-[#F8F9FA] border border-slate-200">
            <div className="relative w-full h-64 sm:h-80 rounded-xl overflow-hidden bg-white border border-slate-200 flex items-center justify-center">
              <Image
                src={images[selectedImg] || product.image}
                alt={product.title}
                fill
                sizes="(max-width: 768px) 100vw, 700px"
                className="object-contain p-2 transition-all duration-300"
              />
            </div>

            {/* Thumbnail selector if multiple images exist */}
            {images.length > 1 && (
              <div className="flex items-center gap-3 mt-3 overflow-x-auto pb-1">
                {images.map((imgSrc, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImg(idx)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all shrink-0 bg-white ${
                      selectedImg === idx ? 'border-kraft-600 ring-2 ring-kraft-400/30' : 'border-slate-200 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <Image src={imgSrc} alt="" fill className="object-contain p-1" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-kraft-800 font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-kraft-600" /> Technical Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {product.specs?.map((spec, i) => (
                <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="block text-[11px] text-slate-500 font-mono font-medium">{spec.label}</span>
                  <span className="block text-xs sm:text-sm font-bold text-slate-900 mt-0.5">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Performance Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-kraft-800 font-bold mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4 text-kraft-600" /> Engineering &amp; Durability Highlights
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {product.features?.map((feat, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          {product.applications && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-kraft-800 font-bold mb-2">
                Typical Industry Applications
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500 flex items-center gap-1.5">
              <TreePine className="w-4 h-4 text-emerald-600" />
              <span>100% Recyclable FSC® Certified Paperboard</span>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenQuote(product);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold transition-all text-sm shadow-md shadow-kraft-500/25 flex items-center justify-center gap-2"
            >
              <span>Request Quote For This Item</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}