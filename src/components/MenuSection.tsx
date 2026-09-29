import React, { useState, useMemo } from 'react';
import { 
  Search, 
  Sparkles, 
  MessageCircle, 
  HelpCircle,
  ExternalLink,
  MapPin
} from 'lucide-react';
import { OFFICIAL_MENU_ITEMS, MENU_CATEGORIES_TABS } from '../data/officialMenuData';
import { CAFE_INFO } from '../data/cafeData';
import { MenuCategoryType } from '../types';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MenuCategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return OFFICIAL_MENU_ITEMS.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.groupName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.ingredients && item.ingredients.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.notes && item.notes.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (item.badge && item.badge.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <section id="menu" className="py-16 md:py-24 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
          <div className="space-y-2.5 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Daftar Menu & Harga Resmi Namu Coffee</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight">
              Katalog Sajian & Menu Resmi
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed">
              Daftar lengkap 52 menu kopi, minuman segar, rice bowl, pasta, dan camilan nugas. Pemesanan dilakukan langsung di meja kasir saat berkunjung ke kafe.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 self-start md:self-auto shrink-0">
            <a
              href="#lokasi"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 bg-white border border-stone-300 text-stone-700 rounded-xl text-xs font-semibold hover:bg-stone-50 transition-colors shadow-2xs"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-800" />
              <span>Rute ke Kafe</span>
            </a>

            <a
              href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya ketersediaan tempat / reservasi meja untuk nugas rombongan.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs font-semibold hover:bg-stone-800 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Tanya / Reservasi Tempat</span>
            </a>
          </div>
        </div>

        {/* Search Bar & Category Filters */}
        <div className="space-y-3">
          <div className="relative max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari menu... (contoh: lychee, astrocano, ketumbar, taichan, creamy)"
              className="w-full pl-10 pr-4 py-2.5 text-xs bg-white border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-800/20 focus:border-amber-800 transition-all text-stone-800 placeholder-stone-400 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
              >
                Reset
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {MENU_CATEGORIES_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as MenuCategoryType)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-stone-900 text-white shadow-xs font-semibold'
                    : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid - Clean & Elegant Price List (Tanpa tombol pesan per item) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-stone-200/90 p-4 shadow-2xs hover:shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-1.5">
                {/* Group Tag & Badges */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold text-stone-400 tracking-wider uppercase">
                    {item.groupName}
                  </span>
                  
                  <div className="flex items-center gap-1">
                    {item.servingTemp && (
                      <span className="text-[9px] font-medium bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded">
                        {item.servingTemp}
                      </span>
                    )}
                    {item.badge && (
                      <span className="text-[9px] font-semibold bg-amber-50 text-amber-900 border border-amber-200/60 px-1.5 py-0.5 rounded">
                        {item.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name & Price */}
                <div className="flex items-baseline justify-between gap-3 pt-0.5">
                  <h3 className="text-sm font-semibold text-stone-900 leading-snug">
                    {item.name}
                  </h3>
                  <span className="text-sm font-bold text-amber-900 font-mono tracking-tight shrink-0">
                    {item.priceFormatted}
                  </span>
                </div>

                {/* Ingredients or Notes */}
                {(item.ingredients || item.notes) && (
                  <p className="text-[11px] text-stone-500 leading-relaxed pt-0.5">
                    {item.ingredients ? (
                      <span className="italic text-stone-600">Komposisi: {item.ingredients}</span>
                    ) : (
                      item.notes
                    )}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Empty Search Result */}
        {filteredItems.length === 0 && (
          <div className="p-8 text-center bg-white rounded-2xl border border-stone-200 space-y-2">
            <p className="text-sm text-stone-600 font-medium">
              Tidak ada menu yang cocok dengan kata kunci "{searchQuery}".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveTab('all');
              }}
              className="text-xs text-amber-900 font-semibold underline"
            >
              Lihat semua 52 menu
            </button>
          </div>
        )}

        {/* Info Box Footer - Panduan Pemesanan di Kasir */}
        <div className="p-5 bg-white border border-stone-200 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xs">
          <div className="space-y-1 max-w-xl">
            <h4 className="text-xs font-semibold text-stone-900 flex items-center gap-1.5">
              <span>Informasi Pemesanan & Kasir</span>
              <span className="px-2 py-0.5 bg-stone-100 text-stone-700 text-[10px] rounded-full font-bold">Order di Kasir</span>
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed">
              Seluruh pemesanan makanan dan minuman dilakukan langsung di kasir (*counter order*) saat Anda tiba di Namu Coffee. Untuk reservasi tempat bagi acara rombongan atau nugas kelompok, silakan kontak melalui WhatsApp.
            </p>
          </div>

          <a
            href={`https://wa.me/${CAFE_INFO.whatsappRaw}?text=${encodeURIComponent('Halo Namu Coffee and Eatery, saya ingin tanya informasi reservasi meja / tempat nugas rombongan.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 rounded-xl text-xs font-semibold transition-colors shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>Kontak WhatsApp Kasir</span>
          </a>
        </div>

      </div>
    </section>
  );
};
