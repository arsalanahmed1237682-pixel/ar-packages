'use client';

import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Calculator, Send, ShieldCheck, TreePine } from 'lucide-react';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function QuoteModal({ isOpen, onClose, preselectedProduct = null }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productType: 'Regular Slotted Cartons (RSC)',
    fluteType: 'B-Flute (Standard Shipping)',
    length: '12',
    width: '10',
    height: '8',
    units: 'inches',
    quantity: '1000',
    waxing: 'No Waxing (Standard Kraft)',
    printing: '1-2 Color Flexo Printing',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProduct?.title || preselectedProduct?.name || preselectedProduct?.shortTitle) {
      setFormData((prev) => ({
        ...prev,
        productType: preselectedProduct.title || preselectedProduct.name || preselectedProduct.shortTitle,
      }));
    }
  }, [preselectedProduct]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white border border-kraft-300 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-slate-900 text-white p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-kraft-500/20 border border-kraft-400/40 flex items-center justify-center text-kraft-300">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Request a Custom Packaging Quote
              </h3>
              <p className="text-xs text-kraft-300 font-mono">
                AR PACKAGES (EST. 1999) • Direct Factory Estimation
              </p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 sm:p-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-700 flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-2">Quote Request Received!</h4>
            <p className="text-slate-600 text-sm max-w-md mb-6 leading-relaxed">
              Thank you for reaching out. Our engineering and production team in Karachi will review your packaging specifications and provide a factory-direct quote within 24 hours.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 w-full max-w-md text-left text-xs font-mono text-slate-700 space-y-1.5 mb-8">
              <div className="flex justify-between"><span>Product:</span> <span className="text-slate-900 font-bold">{formData.productType}</span></div>
              <div className="flex justify-between"><span>Dimensions:</span> <span className="text-slate-900">{formData.length} × {formData.width} × {formData.height} {formData.units}</span></div>
              <div className="flex justify-between"><span>Quantity:</span> <span className="text-slate-900">{formData.quantity} Units</span></div>
              <div className="flex justify-between"><span>Direct Phone/WhatsApp:</span> <span className="text-kraft-700 font-bold">+92 335 2142887</span></div>
            </div>
            <button onClick={handleReset} className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all text-sm shadow-md">
              Done &amp; Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-kraft-100 text-kraft-800 font-mono text-xs flex items-center justify-center font-bold">1</span>
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Packaging Specifications</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Product Category</label>
                  <select
                    value={formData.productType}
                    onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  >
                    {PRODUCTS_DATA.map((p) => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Flute / Material Type</label>
                  <select
                    value={formData.fluteType}
                    onChange={(e) => setFormData({ ...formData, fluteType: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  >
                    <option>B-Flute (Standard Shipping &amp; Puncture Resistance)</option>
                    <option>C-Flute (High Vertical Stacking Strength)</option>
                    <option>E-Flute (Fine Micro-Flute for Retail Trays)</option>
                    <option>Double Wall (BC Flute - Heavy Industrial)</option>
                    <option>Triple Wall (Export Freight)</option>
                    <option>Duplex / Bleached White Top Kraft Liner</option>
                  </select>
                </div>
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-700">Dimensions (L × W × H)</label>
                  <div className="flex gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, units: 'inches' })}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono ${formData.units === 'inches' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 bg-slate-100'}`}
                    >
                      Inches
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, units: 'mm' })}
                      className={`px-2 py-0.5 rounded text-[11px] font-mono ${formData.units === 'mm' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600 bg-slate-100'}`}
                    >
                      MM
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="number"
                    placeholder="Length"
                    value={formData.length}
                    onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                    className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Width"
                    value={formData.width}
                    onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                    className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                    required
                  />
                  <input
                    type="number"
                    placeholder="Height"
                    value={formData.height}
                    onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                    className="px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Target Quantity</label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  >
                    <option value="500">500 units (Trial Run)</option>
                    <option value="1000">1,000 units</option>
                    <option value="2500">2,500 units</option>
                    <option value="5000">5,000 units</option>
                    <option value="10000">10,000+ units (Wholesale Tier)</option>
                    <option value="50000">50,000+ units (Continuous Contract)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Waxing / Moisture Coating</label>
                  <select
                    value={formData.waxing}
                    onChange={(e) => setFormData({ ...formData, waxing: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  >
                    <option>No Waxing (Standard Dry Cargo)</option>
                    <option>Wax Cascade Impregnated (Seafood / Ice)</option>
                    <option>Water-Resistant Barrier Coating</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-5 h-5 rounded-full bg-kraft-100 text-kraft-800 font-mono text-xs flex items-center justify-center font-bold">2</span>
                <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Contact &amp; Delivery Information</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Mill / Brand</label>
                  <input
                    type="text"
                    placeholder="e.g. Textile Mill, Exporter"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Business Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 335 2142887"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-xs font-semibold text-slate-700 mb-1">Special Requirements / Notes</label>
                <textarea
                  rows={2}
                  placeholder="e.g., Die-cut window like Avocado display box, export specifications, custom printing, moisture barrier..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-slate-900 text-sm focus:outline-none focus:border-kraft-500 resize-none"
                />
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ISO 9001:2015 &amp; FSC® Certified Quality Factory Direct</span>
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-kraft-500 to-kraft-600 hover:from-kraft-600 hover:to-kraft-700 text-white font-bold transition-all text-sm shadow-md shadow-kraft-500/25 flex items-center gap-2"
              >
                <span>Submit Quote Request</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}