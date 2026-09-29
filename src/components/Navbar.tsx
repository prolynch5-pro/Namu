import React, { useState } from 'react';
import { Navigation, Menu as MenuIcon, X, Phone, MessageCircle } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-serif-title font-bold tracking-tight text-stone-900 hover:text-amber-800 transition-colors whitespace-nowrap"
        >
          {CAFE_INFO.name}
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <a href="#tentang" className="hover:text-stone-900 transition-colors">
            Tentang
          </a>
          <a href="#menu" className="hover:text-stone-900 transition-colors">
            Menu
          </a>
          <a href="#jam-ramai" className="hover:text-stone-900 transition-colors">
            Jam Ramai
          </a>
          <a href="#suasana" className="hover:text-stone-900 transition-colors">
            Suasana
          </a>
          <a href="#ulasan" className="hover:text-stone-900 transition-colors">
            Ulasan
          </a>
          <a href="#lokasi" className="hover:text-stone-900 transition-colors">
            Lokasi
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-2.5">
          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
          >
            <Navigation className="w-3.5 h-3.5 text-amber-700" />
            <span>Rute Maps</span>
          </a>

          <a
            href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya info tempat / reservasi.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg transition-colors shadow-xs whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Hubungi Kami</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-stone-900 focus:outline-none"
            aria-label="Buka menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-stone-200 bg-[#FAF8F5] px-4 pt-3 pb-5 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-medium text-stone-700">
            <a
              href="#tentang"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Tentang Kafe
            </a>
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Menu & Harga
            </a>
            <a
              href="#jam-ramai"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Jam Ramai
            </a>
            <a
              href="#suasana"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Galeri Suasana
            </a>
            <a
              href="#ulasan"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Ulasan Pengunjung (4.5★)
            </a>
            <a
              href="#lokasi"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-md hover:bg-stone-100 transition-colors"
            >
              Lokasi & Jam Buka
            </a>
          </div>

          <div className="pt-2 border-t border-stone-200 flex flex-col gap-2">
            <a
              href={CAFE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-stone-800 bg-stone-100 rounded-lg hover:bg-stone-200 transition-colors"
            >
              <Navigation className="w-4 h-4 text-amber-700" />
              <span>Petunjuk Rute (Google Maps)</span>
            </a>
            <a
              href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya info ketersediaan tempat/menu.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-stone-800 border border-stone-300 rounded-lg hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-4 h-4 text-stone-700" />
              <span>Telepon: {CAFE_INFO.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
