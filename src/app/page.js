'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AnnouncementStrip from '@/components/AnnouncementStrip';
import PakistanQualityShowcase from '@/components/PakistanQualityShowcase';
import TrustHighlights from '@/components/TrustHighlights';
import Products from '@/components/Products';
import About from '@/components/About';
import ManufacturingProcess from '@/components/ManufacturingProcess';
import Industries from '@/components/Industries';
import NationwideDelivery from '@/components/NationwideDelivery';
import ClientsSection from '@/components/ClientsSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import FAQSection from '@/components/FAQSection';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import QuoteModal from '@/components/QuoteModal';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState(null);

  const handleOpenQuote = (product = null) => {
    setSelectedProductForQuote(product);
    setQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setQuoteModalOpen(false);
    setSelectedProductForQuote(null);
  };

  const handleSelectProduct = (product) => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#F8F9FA] text-slate-800 selection:bg-kraft-500 selection:text-white">
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onSelectProduct={handleSelectProduct}
      />
      <Hero onOpenQuote={() => handleOpenQuote()} />
      <AnnouncementStrip />
      <TrustHighlights />
      <PakistanQualityShowcase onOpenQuote={() => handleOpenQuote()} />
      <Products onOpenQuote={(product) => handleOpenQuote(product)} />
      <About onOpenQuote={() => handleOpenQuote()} />
      <ManufacturingProcess />
      <Industries onOpenQuote={() => handleOpenQuote()} />
      <NationwideDelivery onOpenQuote={() => handleOpenQuote()} />
      <ClientsSection />
      <WhyChooseUs onOpenQuote={() => handleOpenQuote()} />
      <FAQSection onOpenQuote={() => handleOpenQuote()} />
      <CTA onOpenQuote={() => handleOpenQuote()} />
      <Footer
        onOpenQuote={() => handleOpenQuote()}
        onSelectProduct={handleSelectProduct}
      />
      <WhatsAppButton />
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={handleCloseQuote}
        preselectedProduct={selectedProductForQuote}
      />
    </main>
  );
}