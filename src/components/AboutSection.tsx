import React from 'react';
import { BookOpen, Coffee, Wifi, Music2, Sparkles, Heart } from 'lucide-react';
import { CAFE_INFO, CAFE_IMAGES } from '../data/cafeData';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="py-16 md:py-20 border-t border-stone-200/70 bg-stone-50/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase">
            Tentang Namu Coffee & Eatery
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight text-balance">
            Tempat Hangat yang Dibuat untuk Fokus, Cerita, dan Secangkir Ketenangan
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Berada di kawasan Karimata Sumbersari yang strategis dekat kampus, Namu menghadirkan oase kopi dengan atmosfer tenang, pencahayaan lembut, dan fasilitas lengkap untuk nugas maupun melepas penat.
          </p>
        </div>

        {/* 2-Column Content + Visual Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-sm border border-stone-200 aspect-[4/3] bg-stone-100 group">
              <img
                src={CAFE_IMAGES.interiorReal}
                alt="Interior toska asli Namu Coffee and Eatery di Google Maps"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-stone-900/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-3 right-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Foto Asli Interior</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white text-xs space-y-0.5">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-sm">Interior Estetik & Ruang Santai</p>
                  <a
                    href="https://maps.app.goo.gl/4QLR9RzxwKb5h3f78"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[10px] text-amber-300 underline hover:text-white"
                  >
                    Buka di Maps ↗
                  </a>
                </div>
                <p className="text-stone-300 text-[11px]">Sofa empuk, rak ornamen bacaan, dan meja nugas nyaman</p>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-stone-200 shadow-xs space-y-2">
              <div className="flex items-center gap-2 text-stone-900 font-semibold text-xs">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>Kutipan Pengunjung Terverifikasi</span>
              </div>
              <p className="text-xs text-stone-600 italic leading-relaxed">
                "Kopi sama makanannya enak, pelayanan ramah, dan musiknya juga pas. Ada juga buku yang disediakan pihak cafe... Pas banget buat yang suka me-time."
              </p>
              <p className="text-[11px] text-stone-400 font-medium">
                — Dirangkum dari ulasan Google Maps
              </p>
            </div>
          </div>

          {/* Features Grid (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center">
                <Wifi className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-stone-900">Area Nugas & WFC</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Meja ergonomis dan colokan listrik memadai di setiap sudut meja. Wi-Fi berkecepatan stabil untuk kuliah, tugas skripsi, maupun remote working.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <BookOpen className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-stone-900">Pojok Baca & Buku</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Disediakan rak buku pilihan—termasuk novel-novel favorit karya Tere Liye—yang siap menemani momen santai sendirian atau bersama kawan.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center">
                <Music2 className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-stone-900">Musik Pas & Ambiance</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Playlist kurasi bernuansa akustik, indie folk, dan lo-fi lembut dengan volume pas agar obrolan maupun fokus kerja tidak terganggu.
              </p>
            </div>

            <div className="p-5 bg-white rounded-xl border border-stone-200/90 shadow-xs space-y-2.5">
              <div className="w-9 h-9 rounded-lg bg-rose-50 text-rose-800 flex items-center justify-center">
                <Heart className="w-4 h-4" />
              </div>
              <h3 className="text-base font-semibold text-stone-900">Pelayanan Hangat & Ramah</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Barista dan staf kasir kami selalu menyapa dengan ramah dan siap membantu kebutuhan tempat duduk atau rekomendasi menu terbaik.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
