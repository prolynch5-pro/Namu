import React from 'react';
import { MapPin, Phone, Clock, ArrowUp, Navigation } from 'lucide-react';
import { CAFE_INFO } from '../data/cafeData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-stone-200 bg-[#FAF8F5] pt-12 pb-8 text-xs text-stone-600">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xl font-serif-title font-bold text-stone-900 block">
              {CAFE_INFO.name}
            </span>
            <p className="text-stone-500 leading-relaxed max-w-sm">
              Kedai kopi dan eatery dengan estetika minimalis, colokan nugas lengkap, buku bacaan, serta sajian kopi dan makanan nikmat di Jember, Jawa Timur.
            </p>
            <div className="text-[11px] text-stone-400">
              Google Maps Rating: <span className="font-semibold text-stone-700">4,5 ★ (57 Ulasan)</span>
            </div>
          </div>

          {/* Quick Links (2 cols) */}
          <div className="md:col-span-2 space-y-2.5">
            <p className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
              Navigasi
            </p>
            <ul className="space-y-1.5 text-stone-600">
              <li>
                <a href="#tentang" className="hover:text-stone-950 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-stone-950 transition-colors">
                  Menu Andalan
                </a>
              </li>
              <li>
                <a href="#jam-ramai" className="hover:text-stone-950 transition-colors">
                  Jam Ramai
                </a>
              </li>
              <li>
                <a href="#suasana" className="hover:text-stone-950 transition-colors">
                  Galeri Suasana
                </a>
              </li>
              <li>
                <a href="#ulasan" className="hover:text-stone-950 transition-colors">
                  Ulasan Pengunjung
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-stone-950 transition-colors">
                  Lokasi & Rute
                </a>
              </li>
            </ul>
          </div>

          {/* Operational Hours (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
              Jam Operasional
            </p>
            <div className="space-y-1">
              <p className="font-medium text-stone-800">Senin – Minggu</p>
              <p className="text-stone-500">09.00 – 23.00 WIB</p>
              <div className="pt-2 text-[11px] text-stone-500 space-y-0.5">
                <p>• Makan di Tempat (Dine-in)</p>
                <p>• Bawa Pulang (Takeaway)</p>
                <p>• Pesanan Cepat WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Contact & Address (3 cols) */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="font-semibold text-stone-900 uppercase tracking-wider text-[11px]">
              Kontak & Alamat
            </p>
            <div className="space-y-1.5 text-stone-600">
              <p className="leading-snug">{CAFE_INFO.address}</p>
              <p className="font-mono text-[11px] text-stone-500">Plus Code: {CAFE_INFO.plusCode}</p>
              <a
                href={`https://wa.me/${CAFE_INFO.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block pt-1 font-bold text-stone-900 hover:text-amber-800"
              >
                📞 {CAFE_INFO.phone}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500">
          <p>© {new Date().getFullYear()} {CAFE_INFO.name}. Hak cipta dilindungi undang-undang.</p>
          
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 hover:text-stone-900 transition-colors"
          >
            <span>Kembali ke atas</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
