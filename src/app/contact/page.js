'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Calculator,
  ShieldCheck,
  TreePine,
  ArrowLeft,
  ChevronRight,
  Package,
  Layers,
  Sparkles,
  HelpCircle,
  MessageCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { PRODUCTS_DATA } from '@/data/productsData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    productCategory: 'Regular Slotted Cartons (RSC)',
    ply: '5-ply',
    length: '18',
    width: '12',
    height: '10',
    units: 'inches',
    quantity: '1,000 – 5,000',
    printing: '1-2 Color Flexo Printing',
    name: '',
    company: '',
    phone: '',
    email: '',
    productDetails: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const productOptions = [
    'Regular Slotted Cartons (RSC)',
    'E-Commerce & Courier Postal Boxes',
    'Heavy-Duty 5-Ply & 7-Ply Boxes',
    'Die-Cut Retail & Display Trays (PDQ)',
    'Corrugated Partitions & Inserts',
    'Ramzan Ration & Gift Cartons',
    'Corrugated Sheets & Layer Pads',
    'Pizza & Food Delivery Boxes',
    'Waxed Cartons (Cold Chain & Seafood)',
    'Corner Posts & Edge Protectors',
    'Custom Bespoke Packaging',
    'Not sure yet',
  ];

  const plyOptions = [
    { id: '3-ply', label: '3-Ply (Single Wall, 4–15 kg)' },
    { id: '5-ply', label: '5-Ply (Double Wall, 20–45 kg)' },
    { id: '7-ply', label: '7-Ply (Triple Wall, 45+ kg)' },
    { id: 'not-sure', label: 'Not sure yet' },
  ];

  const quantityOptions = [
    'Under 500 (Trial Batch)',
    '500 – 2,000',
    '2,000 – 10,000',
    '10,000+ (Wholesale Contract)',
    'Not sure yet',
  ];

  const printingOptions = [
    'Plain Unprinted (Kraft)',
    '1-2 Color Brand Flexo',
    'Full Multi-Color / HD Graphics',
    'Not sure yet',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-800 selection:bg-kraft-500 selection:text-white">
      <Navbar onOpenQuote={() => {}} />

      {/* Header & Breadcrumb Section */}
      <section className="relative pt-32 pb-14 bg-gradient-to-b from-white via-slate-50 to-[#F8F9FA] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-6">
            <Link href="/" className="hover:text-kraft-700 transition-colors flex items-center gap-1">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold">Contact &amp; Request a Quote</span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-semibold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5" />
              <span>Direct Factory Pricing</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight leading-tight">
              Request a Custom Packaging Quotation
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Every carton we manufacture is custom-specified for your exact product geometry, stacking load, and transit environment. Tell us what you need to pack and our Karachi plant will price it within 24 hours.
            </p>
          </div>

        </div>
      </section>

      {/* Main Quotation Form & Plant Contact Section */}
      <section className="py-14 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left 7 Columns: Interactive Quotation Form */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-10">
                
                {submitted ? (
                  <div className="py-12 text-center flex flex-col items-center space-y-6">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-700 flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2 max-w-md">
                      <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                        Quotation Request Received!
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        Thank you for contacting AR Packages. Our estimation team in Karachi is calculating your specifications and will respond within 2 hours on business days.
                      </p>
                    </div>

                    <div className="w-full max-w-md bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs font-mono text-slate-700 space-y-2.5">
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Box Type:</span>
                        <span className="text-slate-900 font-bold">{formData.productCategory}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Strength:</span>
                        <span className="text-slate-900 font-bold">{formData.ply}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Dimensions:</span>
                        <span className="text-slate-900 font-semibold">{formData.length} × {formData.width} × {formData.height} {formData.units}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Quantity:</span>
                        <span className="text-slate-900 font-semibold">{formData.quantity}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-200/80 pb-2">
                        <span className="text-slate-500">Name:</span>
                        <span className="text-slate-900 font-semibold">{formData.name} {formData.company && `(${formData.company})`}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Direct Contact:</span>
                        <span className="text-kraft-700 font-bold">{formData.phone}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all"
                      >
                        Submit Another Inquiry
                      </button>
                      <a
                        href={`https://wa.me/923352142887?text=Hello%20AR%20Packages,%20I%20just%20submitted%20a%20quote%20request%20for%20${encodeURIComponent(formData.productCategory)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-xs flex items-center gap-2 shadow-sm transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {/* Step 1: What do you need? */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                        <span className="w-7 h-7 rounded-full bg-kraft-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          1
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            What do you need? <span className="text-xs font-normal text-slate-500">(all optional)</span>
                          </h3>
                        </div>
                      </div>

                      {/* Product Category Pills */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          Type of box
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {productOptions.map((opt, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => setFormData({ ...formData, productCategory: opt })}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border ${
                                formData.productCategory === opt
                                  ? 'bg-kraft-600 text-white border-kraft-600 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              {opt}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Ply Selection */}
                      <div className="space-y-2 pt-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold text-slate-700">
                            How strong does it need to be? (optional)
                          </label>
                          <Link
                            href="/guides/3-ply-5-ply-7-ply"
                            className="text-xs text-kraft-700 hover:text-kraft-900 underline flex items-center gap-0.5 font-medium"
                          >
                            <span>View 3-ply/5-ply guide</span>
                            <ChevronRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {plyOptions.map((p) => (
                            <button
                              type="button"
                              key={p.id}
                              onClick={() => setFormData({ ...formData, ply: p.label })}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border ${
                                formData.ply === p.label
                                  ? 'bg-kraft-600 text-white border-kraft-600 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              {p.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Internal Box Dimensions */}
                      <div className="space-y-2.5 pt-2">
                        <div className="flex items-center justify-between">
                          <label className="block text-xs font-semibold text-slate-700">
                            Internal size (optional)
                          </label>
                          <div className="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-xs">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, units: 'inches' })}
                              className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-colors ${
                                formData.units === 'inches'
                                  ? 'bg-white font-bold text-slate-900 shadow-xs'
                                  : 'text-slate-500 hover:text-slate-900'
                              }`}
                            >
                              Inches
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, units: 'mm' })}
                              className={`px-2.5 py-1 rounded-md font-mono text-[11px] transition-colors ${
                                formData.units === 'mm'
                                  ? 'bg-white font-bold text-slate-900 shadow-xs'
                                  : 'text-slate-500 hover:text-slate-900'
                              }`}
                            >
                              MM
                            </button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="relative">
                            <span className="block text-[11px] font-mono text-slate-500 mb-1">LENGTH</span>
                            <input
                              type="number"
                              placeholder="18"
                              value={formData.length}
                              onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all font-mono"
                            />
                          </div>
                          <div className="relative">
                            <span className="block text-[11px] font-mono text-slate-500 mb-1">WIDTH</span>
                            <input
                              type="number"
                              placeholder="12"
                              value={formData.width}
                              onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all font-mono"
                            />
                          </div>
                          <div className="relative">
                            <span className="block text-[11px] font-mono text-slate-500 mb-1">HEIGHT</span>
                            <input
                              type="number"
                              placeholder="10"
                              value={formData.height}
                              onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all font-mono"
                            />
                          </div>
                        </div>
                      </div>

                      {/* How Many Quantity */}
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          How many? (optional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {quantityOptions.map((q, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => setFormData({ ...formData, quantity: q })}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border ${
                                formData.quantity === q
                                  ? 'bg-kraft-600 text-white border-kraft-600 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              {q}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Printed or Plain */}
                      <div className="space-y-2 pt-2">
                        <label className="block text-xs font-semibold text-slate-700">
                          Printed or plain? (optional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {printingOptions.map((pr, i) => (
                            <button
                              type="button"
                              key={i}
                              onClick={() => setFormData({ ...formData, printing: pr })}
                              className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all border ${
                                formData.printing === pr
                                  ? 'bg-kraft-600 text-white border-kraft-600 shadow-xs'
                                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                              }`}
                            >
                              {pr}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Step 2: Who should we reply to? */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-5">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                        <span className="w-7 h-7 rounded-full bg-kraft-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          2
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            Who should we reply to?
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Your name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Company (optional)
                          </label>
                          <input
                            type="text"
                            placeholder="Company name"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+92 335 2142887"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all font-mono"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-slate-700 mb-1">
                            Email (optional)
                          </label>
                          <input
                            type="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Anything else? */}
                    <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                      <div className="flex items-center gap-3 pb-3 border-b border-slate-100">
                        <span className="w-7 h-7 rounded-full bg-kraft-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                          3
                        </span>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-slate-900">
                            Anything else?
                          </h3>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-slate-700 mb-1.5">
                          What are you packing? (optional, but it helps)
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Weight of product, how high you stack, destination, any specific requirements..."
                          value={formData.productDetails}
                          onChange={(e) => setFormData({ ...formData, productDetails: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-kraft-500 focus:bg-white transition-all resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Section */}
                    <div className="space-y-4">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 px-8 rounded-full bg-kraft-600 hover:bg-kraft-700 active:scale-[0.99] text-white font-bold text-base transition-all shadow-md shadow-kraft-600/20 flex items-center justify-center gap-2 cursor-pointer"
                      >
                        {submitting ? (
                          <span>Processing Request...</span>
                        ) : (
                          <>
                            <span>Send request</span>
                            <ChevronRight className="w-5 h-5" />
                          </>
                        )}
                      </button>

                      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Fast turnaround</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>No minimum order for standard sizes</span>
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Karachi plant direct</span>
                        </span>
                      </div>
                    </div>

                  </form>
                )}

              </div>
            </div>

            {/* Right 4 Columns: Direct Plant Contact Details & Accreditations */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Plant Card */}
              <div className="p-7 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-xl space-y-6">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-kraft-400">
                    Factory &amp; Head Office
                  </span>
                  <h3 className="text-xl font-bold text-white">AR Packages (Est. 1999)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Manufacturing high-precision corrugated cartons and export packaging for over two decades.
                  </p>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                    <div className="text-slate-300 leading-relaxed">
                      <strong className="block text-white">Karachi Plant Address:</strong>
                      Plot # B-472, Block-02, Bhangori Goth, F.B Area, Karachi, Pakistan
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                    <div className="text-slate-300 leading-relaxed">
                      <strong className="block text-white">Direct Phone Lines:</strong>
                      <a href="tel:+923352142887" className="hover:text-white font-mono block">+92 335 2142887</a>
                      <a href="tel:+923363042100" className="hover:text-white font-mono block">+92 336 3042100</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                    <div className="text-slate-300 leading-relaxed">
                      <strong className="block text-white">Official Email:</strong>
                      <a href="mailto:arpkgs@gmail.com" className="hover:text-white block font-mono">
                        arpkgs@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-kraft-400 shrink-0 mt-0.5" />
                    <div className="text-slate-300 leading-relaxed">
                      <strong className="block text-white">Operational Hours:</strong>
                      Monday – Saturday: 9:00 AM – 7:00 PM PKT
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
                  <a
                    href="https://wa.me/923352142887?text=Hello%20AR%20Packages,%20I%20would%20like%20to%20request%20a%20packaging%20quotation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20b858] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Direct WhatsApp Inquiry</span>
                  </a>

                  <a
                    href="tel:+923352142887"
                    className="w-full py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-all text-center flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4 text-kraft-400" />
                    <span>Call Factory Direct</span>
                  </a>
                </div>
              </div>

              {/* Quality Standards & Trust Box */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-bold flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-kraft-600" /> Verified Accreditations
                </h4>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>ISO 9001:2015:</strong> Strict quality assurance testing for bursting strength (Mullen) and Edge Crush (ECT).</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <TreePine className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>FSC® Certified:</strong> 100% responsibly sourced sustainable kraft paperboard and eco-friendly inks.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Halal Certified (ACTS PS 3733-2022):</strong> Certified hygienic food contact packaging for food chains and bakery products.</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer onOpenQuote={() => {}} />
      <WhatsAppButton />
    </main>
  );
}
