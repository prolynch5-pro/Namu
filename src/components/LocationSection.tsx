import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Copy, Check, ExternalLink, Share2 } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(CAFE_INFO.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: CAFE_INFO.name,
        text: `Namu Coffee and Eatery di Jl. Karimata No.26 Sumbersari, Jember.`,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyAddress();
    }
  };

  const nearbyPlaces = [
    { name: 'Namae Cafe', rating: '4,6 (149)', type: 'Kafe' },
    { name: 'NAN COFFEE', rating: '5,0 (10)', type: 'Kedai Kopi' },
    { name: 'Kopi Kelingan Jember', rating: 'Populer', type: 'Kedai Kopi' },
    { name: 'Caffee NARUBUK by deva', rating: 'Lokal', type: 'Kedai Kopi' },
    { name: 'Teman Kamu Cafe', rating: 'Mahasiswa', type: 'Kafe' }
  ];

  return (
    <section id="lokasi" className="py-16 md:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-xl space-y-2">
          <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase">
            Lokasi, Akses, & Rute
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight">
            Kunjungi Kami di Sumbersari
          </h2>
          <p className="text-stone-600 text-sm">
            Lokasi strategis di koridor Jl. Karimata No. 26, sangat dekat dengan area kampus UNEJ, kos mahasiswa, dan pusat kuliner kota Jember.
          </p>
        </div>

        {/* 2-Column Info & Map Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Details Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="p-6 bg-[#FAF8F5] border border-stone-200 rounded-2xl space-y-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-amber-700" />
                  <span>Alamat Lengkap</span>
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  {CAFE_INFO.address}
                </p>
                <p className="text-[11px] text-stone-500 font-mono pt-1">
                  Plus Code: <span className="font-semibold text-stone-800">{CAFE_INFO.plusCode}</span>
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Petunjuk Rute Maps</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 bg-white border border-stone-200 hover:bg-stone-100 text-stone-700 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Alamat Tersalin</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-stone-500" />
                      <span>Salin Alamat</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Hours & Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Jam Operasional</span>
                </div>
                <p className="text-xs text-stone-700 font-medium">Buka Setiap Hari</p>
                <p className="text-xs text-stone-500">09.00 – 23.00 WIB</p>
                <span className="inline-block mt-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Buka Sekarang
                </span>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-stone-200 rounded-xl space-y-1.5">
                <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                  <Phone className="w-3.5 h-3.5 text-amber-700" />
                  <span>Telepon / WhatsApp</span>
                </div>
                <a
                  href={`https://wa.me/${CAFE_INFO.whatsappRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-stone-900 hover:text-amber-800 block truncate"
                >
                  {CAFE_INFO.phone}
                </a>
                <p className="text-[11px] text-stone-500">Fast response via pesan WA</p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-between p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 hover:text-stone-900 transition-colors cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5 text-stone-500" />
                <span>Bagikan ke Ponsel / Teman</span>
              </button>
              <span className="text-stone-300">|</span>
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-stone-900 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
                <span>Buka di Google Maps</span>
              </a>
            </div>

          </div>

          {/* Map Preview & Nearby Card (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Embedded Map */}
            <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-xs aspect-[16/10] bg-stone-100">
              <iframe
                title="Peta Lokasi Namu Coffee and Eatery Jember"
                src="https://maps.google.com/maps?q=Namu%20Coffee%20and%20Eatery,%20Jl.%20Karimata%20No.26,%20Sumbersari,%20Jember&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter saturate-90 contrast-95"
                loading="lazy"
              />

              {/* Overlay Badge */}
              <div className="absolute top-3 left-3 bg-stone-900/90 backdrop-blur-xs text-white p-2.5 rounded-xl shadow-md text-xs space-y-0.5 pointer-events-none">
                <p className="font-semibold">{CAFE_INFO.name}</p>
                <p className="text-[11px] text-stone-300">Sumbersari, Kab. Jember</p>
              </div>

              {/* Floating Route Button */}
              <a
                href={CAFE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-white hover:bg-stone-50 text-stone-900 text-xs font-semibold px-3.5 py-2 rounded-lg shadow-md border border-stone-200 flex items-center gap-1.5 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-amber-700" />
                <span>Buka Rute Maps</span>
              </a>
            </div>

            {/* Nearby Places Strip */}
            <div className="p-4 bg-stone-50 border border-stone-200 rounded-xl space-y-2">
              <div className="flex items-center justify-between text-xs font-semibold text-stone-700">
                <span>Di Sekitar / Orang Lain Juga Menelusuri</span>
                <span className="text-[11px] text-stone-400 font-normal">Kawasan Kuliner Sumbersari</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-1">
                {nearbyPlaces.map((p) => (
                  <div key={p.name} className="p-2 bg-white border border-stone-200/80 rounded-lg text-xs">
                    <p className="font-semibold text-stone-800 truncate">{p.name}</p>
                    <p className="text-[10px] text-stone-500 mt-0.5">
                      {p.type} · {p.rating}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
