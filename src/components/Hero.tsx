import React, { useState } from 'react';
import { Star, Navigation, MapPin, Phone, MessageCircle, Copy, Check, Clock } from 'lucide-react';
import { CAFE_INFO, CAFE_IMAGES } from '../data/cafeData';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Metadata Line with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-stone-600">
              <span className="text-stone-900 font-semibold">{CAFE_INFO.category}</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-emerald-700 font-medium flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block animate-pulse"></span>
                Buka · Tutup pukul 23.00
              </span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>{CAFE_INFO.priceRange}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif-title font-bold text-stone-950 tracking-tight leading-[1.15] text-balance">
                Ruang Teduh untuk Secangkir Kopi, Buku, dan Cerita di Karimata
              </h1>
              <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
                Suasana estetik minimalis yang tenang dengan koneksi kencang, meja nugas nyaman, koleksi buku bacaan, serta sajian kopi dan makanan nikmat di jantung Sumbersari, Jember.
              </p>
            </div>

            {/* Google Maps Trust Badge Row */}
            <div className="flex flex-wrap items-center gap-4 py-2 border-y border-stone-200/80">
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4
                          ? 'fill-amber-400 text-amber-400'
                          : 'fill-amber-400/50 text-amber-400'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-base font-bold text-stone-900 tabular-nums">4,5</span>
                <span className="text-xs text-stone-500">
                  (57 ulasan di Google Maps)
                </span>
              </div>
              <span aria-hidden="true" className="text-stone-300 hidden sm:inline">|</span>
              <div className="text-xs text-stone-500">
                Dilaporkan oleh 18 pengunjung: <span className="font-medium text-stone-700">Rp 25.000–50.000 / orang</span>
              </div>
            </div>

            {/* Static Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              >
                <span>Lihat Menu & Harga</span>
              </a>

              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-stone-800 bg-stone-200/80 hover:bg-stone-200 rounded-lg transition-colors whitespace-nowrap"
              >
                <Navigation className="w-4 h-4 text-amber-700" />
                <span>Petunjuk Rute</span>
              </a>

              <a
                href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya info tempat / pemesanan.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200/70 rounded-lg transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>0821-7408-0280</span>
              </a>
            </div>

            {/* Address & Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-stone-600">
              <a
                href="#lokasi"
                className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-stone-500" />
                <span>Jl. Karimata No.26, Sumbersari</span>
              </a>
              <span aria-hidden="true" className="text-stone-300">·</span>
              <button
                onClick={handleCopyAddress}
                className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Alamat Disalin!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-stone-400" />
                    <span>Salin Alamat</span>
                  </>
                )}
              </button>
            </div>

            {/* Service Highlights */}
            <div className="pt-2 grid grid-cols-3 gap-3 text-center sm:text-left">
              <div className="p-3 bg-stone-100/70 border border-stone-200/60 rounded-lg">
                <p className="text-xs font-semibold text-stone-900">Makan di Tempat</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Sofa & meja nugas santai</p>
              </div>
              <div className="p-3 bg-stone-100/70 border border-stone-200/60 rounded-lg">
                <p className="text-xs font-semibold text-stone-900">Bawa Pulang</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Kemasan aman & higienis</p>
              </div>
              <div className="p-3 bg-stone-100/70 border border-stone-200/60 rounded-lg">
                <p className="text-xs font-semibold text-stone-900">Pesan Online</p>
                <p className="text-[11px] text-stone-500 mt-0.5">Langsung via WhatsApp</p>
              </div>
            </div>

          </div>

          {/* Visual Showcase Column (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-stone-200/70 aspect-[4/3] lg:aspect-[5/6] bg-stone-100 group">
              <img
                src={CAFE_IMAGES.facadeReal}
                alt="Fasad asli Namu Coffee and Eatery Jember di Google Maps"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/75 via-stone-950/20 to-transparent pointer-events-none" />

              {/* Real Photo Badge */}
              <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Foto Asli Google Maps</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white p-3 backdrop-blur-md bg-stone-900/60 rounded-xl border border-white/10 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-wide uppercase text-amber-300">
                    Fasad & Suasana Nyata
                  </span>
                  <span className="text-[11px] text-stone-300">Jl. Karimata No. 26</span>
                </div>
                <p className="text-xs text-stone-200 leading-snug">
                  "I was pleasantly surprised by the cafe’s interior, the space has a clean, well designed aesthetic..."
                </p>
                <div className="flex items-center justify-between pt-0.5">
                  <p className="text-[10px] text-stone-400 italic">
                    — Ricky, Google Local Guide (619 ulasan)
                  </p>
                  <a
                    href="https://maps.app.goo.gl/aLWMF6eCcn3jFti78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-amber-300 underline hover:text-white"
                  >
                    Buka Foto Maps ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-stone-500 px-1">
              <span>📍 Plus Code: {CAFE_INFO.plusCode.split(' ')[0]}</span>
              <span>🕒 Buka setiap hari s/d 23.00 WIB</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
