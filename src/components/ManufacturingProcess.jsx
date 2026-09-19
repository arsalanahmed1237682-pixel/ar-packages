'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Layers,
  Scissors,
  Printer,
  Truck,
  Package,
  ShieldCheck,
  Cog,
  CheckCircle2,
  Cpu,
  Sparkles,
  Sliders,
  Flame,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

export default function ManufacturingProcess() {
  const [activeStep, setActiveStep] = useState(0);
  const tabsContainerRef = useRef(null);
  const stepTabsRef = useRef([]);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);

  const steps = [
    {
      num: '01',
      title: 'Raw Material Selection',
      tagline: 'High-Grade Kraft & Testliner',
      color: 'amber',
      accentBg: 'bg-amber-500',
      badgeBg: 'bg-amber-100 text-amber-900 border-amber-300',
      desc: 'We source virgin kraft paper reels and high-yield recycled testliner. Every roll undergoes laboratory inspection for GSM caliper, tensile strength, and moisture index before feeding into the corrugating line.',
      specs: 'Paper GSM: 120 – 450 GSM • Tested Moisture Index: 7–9%',
      highlights: ['100% FSC® Certified Sustainable Kraft', 'Batch Mullen Burst Testing', 'Controlled Humidity Storage'],
      icon: Layers,
    },
    {
      num: '02',
      title: 'Corrugation & Fluting',
      tagline: 'High-Speed Steam Forming',
      color: 'cyan',
      accentBg: 'bg-cyan-500',
      badgeBg: 'bg-cyan-100 text-cyan-900 border-cyan-300',
      desc: 'Paper is conditioned with pressurized steam and passed through heated fluting rolls to form wave arches. Starch-based adhesives bond fluted mediums to linerboards creating rigid single, double, or triple wall structures.',
      specs: 'Flute Profiles: A, B, C, E, BC & AAC Double/Triple Wall Combinations',
      highlights: ['Multi-Profile Flute Geometry', 'Bio-Degradable Starch Adhesives', 'Computerized Heat & Tension'],
      icon: Cog,
    },
    {
      num: '03',
      title: 'High-Definition Printing',
      tagline: 'Crisp Flexo & Litho-Lamination',
      color: 'indigo',
      accentBg: 'bg-indigo-500',
      badgeBg: 'bg-indigo-100 text-indigo-900 border-indigo-300',
      desc: 'Direct-to-board high-resolution flexographic and offset-laminated printing processes apply razor-sharp brand typography, barcodes, and export handling symbols using water-based inks.',
      specs: 'Up to 4-Color HD Flexo • Odorless Water-Based Inks • Sharp Barcodes',
      highlights: ['Micro-Registration Alignment', 'Food-Safe Non-Toxic Inks', 'Zero-Smudge Fast Curing'],
      icon: Printer,
    },
    {
      num: '04',
      title: 'CNC Die-Cutting & Slotting',
      tagline: 'Sub-Millimeter Structural Precision',
      color: 'rose',
      accentBg: 'bg-rose-500',
      badgeBg: 'bg-rose-100 text-rose-900 border-rose-300',
      desc: 'Using laser-cut steel rule dies and heavy-duty rotary die cutters, boards are slotted, scored, creased, and perforated to engineering drawings without crushing flute walls.',
      specs: 'Dimensional Tolerance: ± 0.5mm • Clean Edge Slitting & Perforation',
      highlights: ['Custom Window Cutouts & Hand Grips', 'Anti-Tear Score Creases', 'Self-Locking SRP Geometry'],
      icon: Scissors,
    },
    {
      num: '05',
      title: 'Folding & High-Tensile Assembly',
      tagline: 'Automated Gluing & Heavy Stitching',
      color: 'emerald',
      accentBg: 'bg-emerald-500',
      badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-300',
      desc: 'Automated folder-gluers fold cartons square with high-tensile hot-melt resin. For heavy industrial 5-ply and 7-ply export boxes, rust-proof heavy-gauge wire stitching is applied.',
      specs: 'High-Speed Automated Gluing • Rust-Proof Heavy Gauge Stitching',
      highlights: ['Squaring Verification Devices', 'Reinforced Heavy-Load Joints', 'Rapid Batch Throughput'],
      icon: Package,
    },
    {
      num: '06',
      title: 'Lab Quality & Strength Testing',
      tagline: 'ISO 9001:2015 & Halal Certified',
      color: 'teal',
      accentBg: 'bg-teal-500',
      badgeBg: 'bg-teal-100 text-teal-900 border-teal-300',
      desc: 'Random samples from every manufacturing batch undergo Edge Crush Testing (ECT), Mullen Bursting pressure, drop simulations, and caliper verification in our Karachi testing laboratory.',
      specs: 'Bursting Strength: 14 – 35+ kg/cm² • ECT Load: 32 – 90+ lbs/in',
      highlights: ['Box Compression Test (BCT)', 'Cobb Moisture Absorption Test', 'Stacking Safety Verification'],
      icon: ShieldCheck,
    },
    {
      num: '07',
      title: 'Palletizing & Dedicated Dispatch',
      tagline: 'Direct Delivery to Your Facility',
      color: 'blue',
      accentBg: 'bg-blue-500',
      badgeBg: 'bg-blue-100 text-blue-900 border-blue-300',
      desc: 'Finished cartons are counted, bundled, flat-palletized on protective corner posts, wrapped in heavy-duty moisture-proof stretch film, and dispatched via our dedicated factory transport fleet.',
      specs: 'Dedicated In-House Fleet • Moisture-Proof Strapping & Stretch Wrap',
      highlights: ['On-Time Factory Delivery', 'Damage-Free Pallet Handling', 'Karachi, Sindh & Punjab Reach'],
      icon: Truck,
    },
  ];

  const current = steps[activeStep];
  const StepIcon = current.icon;

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  // Smoothly scroll active tab into view when activeStep changes on mobile/tablet
  useEffect(() => {
    const activeTab = stepTabsRef.current[activeStep];
    const container = tabsContainerRef.current;
    if (activeTab && container) {
      const tabLeft = activeTab.offsetLeft;
      const tabWidth = activeTab.offsetWidth;
      const containerWidth = container.offsetWidth;

      container.scrollTo({
        left: tabLeft - containerWidth / 2 + tabWidth / 2,
        behavior: 'smooth',
      });
    }
  }, [activeStep]);

  // Touch handlers for mobile swipe navigation on featured card
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;

    // Minimum swipe threshold of 40px and predominantly horizontal
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.3) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="manufacturing" className="relative py-16 sm:py-24 bg-[#F8F9FA] bg-grid-pattern overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-kraft-100 border border-kraft-300 text-kraft-900 text-xs font-mono font-bold uppercase tracking-wider shadow-xs">
            <Cpu className="w-3.5 h-3.5 text-kraft-700" />
            <span>Industrial Manufacturing Workflow</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-display tracking-tight">
            Precision Engineering From Paper to Package
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our Karachi manufacturing plant integrates continuous high-speed corrugation, CNC die-cutting, flexographic branding, and certified laboratory strength testing.
          </p>
        </div>

        {/* Mobile / Tablet Horizontal Stepper Tabs (Hidden on Desktop) */}
        <div className="lg:hidden mb-4">
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5 px-1 font-mono">
            <span className="font-bold text-slate-800">
              Stage {current.num} / 07
            </span>
            <span className="text-kraft-700 font-semibold flex items-center gap-1">
              Scroll steps or swipe &rarr;
            </span>
          </div>
          <div
            ref={tabsContainerRef}
            className="flex items-center gap-2 overflow-x-auto pb-2 scroll-smooth snap-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {steps.map((s, idx) => (
              <button
                key={idx}
                ref={(el) => (stepTabsRef.current[idx] = el)}
                onClick={() => setActiveStep(idx)}
                aria-label={`Step ${s.num}: ${s.title}`}
                className={`shrink-0 snap-start min-w-[135px] sm:min-w-[155px] p-3 rounded-xl text-left transition-all duration-200 border ${
                  activeStep === idx
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-kraft-500/40'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 active:bg-slate-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-mono font-black ${activeStep === idx ? 'text-kraft-300' : 'text-slate-400'}`}>
                    {s.num}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${s.accentBg}`} />
                </div>
                <span className="block text-xs font-bold truncate">{s.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Step Navigator (Desktop) */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-8">
          {steps.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3.5 rounded-2xl text-left transition-all duration-200 relative border ${
                activeStep === idx
                  ? 'bg-slate-900 text-white border-slate-900 shadow-lg -translate-y-1'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`text-xs font-mono font-black ${activeStep === idx ? 'text-kraft-300' : 'text-slate-400'}`}>
                  {s.num}
                </span>
                <span className={`w-2 h-2 rounded-full ${s.accentBg}`} />
              </div>
              <span className="block text-xs font-bold truncate">{s.title}</span>
            </button>
          ))}
        </div>

        {/* Featured Showcase Interactive Card */}
        <div
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="mb-14 p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Ambient Industrial Background Glow */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 bg-kraft-600/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full bg-kraft-500/20 text-kraft-300 border border-kraft-500/30 text-xs font-mono font-bold">
                  STAGE {current.num} / 07
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  {current.tagline}
                </span>
              </div>

              <h3 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-display">
                {current.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                {current.desc}
              </p>

              {/* Highlights & Technical Badges */}
              <div className="space-y-3 pt-1 sm:pt-2">
                <div className="flex flex-wrap gap-2">
                  {current.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-xs font-medium text-slate-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </span>
                  ))}
                </div>

                <div className="p-3 sm:p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/80 text-xs font-mono text-kraft-300 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-2.5">
                  <div className="flex items-center gap-2 shrink-0">
                    <Sliders className="w-4 h-4 text-kraft-400 shrink-0" />
                    <span className="font-semibold text-slate-200">Engineering Specs:</span>
                  </div>
                  <span className="text-kraft-300 font-normal break-words">{current.specs}</span>
                </div>
              </div>
            </div>

            {/* Right Industrial Graphic Visualization */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div className="w-full max-w-sm p-5 sm:p-6 rounded-2xl bg-slate-800/70 border border-slate-700/80 backdrop-blur-sm flex flex-col items-center text-center space-y-3 sm:space-y-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-kraft-500 to-kraft-700 text-white flex items-center justify-center shadow-lg shadow-kraft-600/30">
                  <StepIcon className="w-8 h-8 sm:w-10 sm:h-10 stroke-[1.75]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-[11px] font-mono text-kraft-400 font-bold uppercase tracking-wider block">
                    Manufacturing Rigor
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mt-0.5">{current.title}</h4>
                  <p className="text-xs text-slate-400 mt-1">{current.tagline}</p>
                </div>
                <div className="w-full pt-3 border-t border-slate-700/70 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Standard Tolerance</span>
                  <span className="text-white font-bold">± 0.5 mm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Controls (Previous / Next & Step Indicator Dots) */}
          <div className="mt-6 pt-5 border-t border-slate-800 lg:hidden flex flex-col gap-3">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={handlePrev}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 active:bg-slate-600 text-xs font-semibold text-slate-200 border border-slate-700 transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4 text-kraft-300" />
                <span>Prev</span>
              </button>

              {/* Step indicator dots */}
              <div className="flex items-center gap-1.5">
                {steps.map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveStep(idx)}
                    aria-label={`Go to step ${idx + 1}`}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      activeStep === idx
                        ? 'w-5 bg-kraft-400'
                        : 'w-2 bg-slate-700 hover:bg-slate-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="inline-flex items-center gap-1 px-3.5 py-2 rounded-xl bg-kraft-500 hover:bg-kraft-600 active:bg-kraft-700 text-xs font-bold text-slate-950 transition-colors shadow-sm"
                aria-label="Next step"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4 text-slate-950" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}