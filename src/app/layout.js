import './globals.css';

export const metadata = {
  title: 'AR Packages | Manufacturer & Exporter of Corrugated Cartons Since 1999',
  description: 'ISO 9001:2015, FSC® & Halal Certified manufacturer of high-performance corrugated cartons, folding boxes, die-cut display trays, and custom packaging solutions in Karachi, Pakistan.',
  keywords: 'AR Packages, corrugated cartons Karachi, packaging manufacturer Pakistan, ISO 9001 packaging, FSC certified packaging, regular slotted cartons, pizza boxes, waxed cartons, die-cut display trays',
};

export const viewport = {
  themeColor: '#F8F9FA',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#F8F9FA] text-slate-800 selection:bg-kraft-500 selection:text-white antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}