'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = '923352142887';
  const message = 'Hello AR Packages, I would like to inquire about corrugated packaging solutions.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover/initial hint */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-800 text-xs font-semibold transition-all duration-300 ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        aria-label="Chat on WhatsApp with AR Packages"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-2xl shadow-emerald-900/30 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-400/40"
      >
        {/* Radar Pulse Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />

        {/* WhatsApp Official SVG Icon */}
        <svg
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.312.045-.694.062-1.848-.396-1.579-.628-2.613-2.227-2.693-2.333-.08-.106-.644-.858-.644-1.637 0-.779.406-1.162.55-1.318.144-.155.316-.194.421-.194.106 0 .211.001.303.006.098.005.228-.037.357.272.132.318.452 1.104.492 1.186.04.082.066.177.013.283-.053.106-.08.172-.158.265-.08.093-.168.207-.24.278-.08.079-.163.165-.07.325.092.159.412.678.883 1.097.608.541 1.121.708 1.28.788.159.08.252.066.345-.04.093-.106.398-.463.504-.622.106-.159.212-.132.357-.08.146.053.927.437 1.086.517.159.08.265.119.304.185.04.066.04.384-.104.789zm-3.392-10.416c-5.523 0-10 4.477-10 10 0 1.77.464 3.432 1.274 4.876L2 22l3.238-1.246c1.397.762 2.996 1.246 4.793 1.246 5.522 0 10-4.477 10-10s-4.478-10-10-10z" />
        </svg>

        {/* Online Status Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </span>
      </a>
    </div>
  );
}
