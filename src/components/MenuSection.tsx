import React from 'react';
import { Coffee, Utensils, CupSoda, Cookie, MessageCircle, HelpCircle, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, CAFE_INFO } from '../data/cafeData';

export const MenuSection: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'kopi':
        return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'non-kopi':
        return <CupSoda className="w-5 h-5 text-emerald-700" />;
      case 'makanan':
        return <Utensils className="w-5 h-5 text-orange-700" />;
      default:
        return <Cookie className="w-5 h-5 text-stone-700" />;
    }
  };

  return (
    <section id="menu" className="py-16 md:py-20 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase">
              Sajian Kopi & Eatery
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight">
              Pilihan Sajian Minuman & Makanan
            </h2>
            <p className="text-stone-600 text-sm">
              Nikmati racikan kopi andalan, minuman buah segar, hingga santapan eatery gurih dengan kisaran harga terjangkau bagi mahasiswa dan umum: <strong className="text-stone-800">{CAFE_INFO.priceRange}</strong>.
            </p>
          </div>

          <a
            href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya daftar menu dan harga lengkap hari ini.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors whitespace-nowrap self-start md:self-auto shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Tanya Menu Hari Ini via WA</span>
          </a>
        </div>

        {/* Category Overview Grid (Tanpa foto spekulatif, berbasis informasi riil) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MENU_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-stone-200/90 p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 bg-stone-100 rounded-xl">
                      {getCategoryIcon(cat.id)}
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-stone-900">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-stone-500 font-medium">
                        {cat.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-amber-900/90 bg-amber-50 px-2 py-0.5 rounded">
                  {cat.badge}
                </span>

                <a
                  href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent(`Halo Namu Coffee, saya mau tanya menu ${cat.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-700 hover:text-stone-950 inline-flex items-center gap-1 text-[11px]"
                >
                  <span>Info Menu</span>
                  <ArrowRight className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informasi Transparan Harga & Pemesanan */}
        <div className="p-5 bg-white border border-stone-200 rounded-2xl space-y-3 text-xs text-stone-600 shadow-xs">
          <div className="flex items-center gap-2 font-semibold text-stone-800 text-sm">
            <HelpCircle className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Keterangan Menu & Kisaran Harga</span>
          </div>
          <p className="leading-relaxed">
            Daftar menu lengkap serta menu musiman (seasonal items) selalu diperbarui langsung di meja kasir. Berdasarkan laporan 18 pengunjung terverifikasi di Google Maps, rata-rata pengeluaran pengunjung berkisar antara <strong>Rp 25.000 – Rp 50.000 per orang</strong>.
          </p>
          <div className="pt-2 border-t border-stone-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-stone-500">
              <span>✓ Makan di tempat (Dine-in)</span>
              <span>✓ Bawa pulang (Takeaway)</span>
              <span>✓ Pesan cepat via WhatsApp</span>
            </div>

            <a
              href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee, apakah saya bisa pesan takeaway / reservasi tempat?')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-900 font-semibold underline hover:text-amber-800 text-xs"
            >
              Hubungi WhatsApp Resmi: 0821-7408-0280 →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
