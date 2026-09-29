import React, { useState } from 'react';
import { Star, ShieldCheck, ThumbsUp, ArrowUpRight } from 'lucide-react';
import { REVIEWS_DATA, CAFE_INFO } from '../data/cafeData';

export const ReviewsSection: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<string>('semua');

  const filterTags = [
    { id: 'semua', label: 'Semua Ulasan', count: 57 },
    { id: 'ayam', label: 'Ayam & Makanan', count: 5 },
    { id: 'parkir', label: 'Parkir', count: 5 },
    { id: 'santai', label: 'Santai & Suasana', count: 4 },
    { id: 'estetik', label: 'Estetik', count: 3 },
    { id: 'nugas', label: 'Nugas & WFC', count: 6 }
  ];

  const filteredReviews = REVIEWS_DATA.filter((review) => {
    if (selectedTag === 'semua') return true;
    return review.tags.includes(selectedTag);
  });

  return (
    <section id="ulasan" className="py-16 md:py-20 border-t border-stone-200/80 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase">
              Ulasan Pengunjung Google Maps
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight">
              Cerita & Penilaian Pengunjung
            </h2>
            <p className="text-stone-600 text-sm">
              Transparansi pengalaman berkunjung langsung dilaporkan oleh para penikmat kopi, mahasiswa Sumbersari, dan Google Local Guide.
            </p>
          </div>

          <a
            href={CAFE_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-semibold transition-colors shadow-xs whitespace-nowrap self-start md:self-auto"
          >
            <span>Buka 57 Ulasan di Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
          </a>
        </div>

        {/* Rating Breakdown Card */}
        <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Big Score (4 cols) */}
          <div className="md:col-span-4 text-center md:text-left space-y-2 border-b md:border-b-0 md:border-r border-stone-200 pb-6 md:pb-0 md:pr-6">
            <div className="text-5xl sm:text-6xl font-serif-title font-bold text-stone-900 tabular-nums">
              4,5
            </div>
            <div className="flex items-center justify-center md:justify-start text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < 4 ? 'fill-amber-400' : 'fill-amber-400/50'
                  }`}
                />
              ))}
            </div>
            <p className="text-xs font-medium text-stone-500">
              Berdasarkan <strong className="text-stone-800">57 ulasan</strong> di Google Maps
            </p>
          </div>

          {/* Star Distribution Bars (5 cols) */}
          <div className="md:col-span-5 space-y-2">
            {[
              { star: 5, pct: 78 },
              { star: 4, pct: 16 },
              { star: 3, pct: 4 },
              { star: 2, pct: 1 },
              { star: 1, pct: 1 }
            ].map((bar) => (
              <div key={bar.star} className="flex items-center gap-2 text-xs">
                <span className="w-3 text-stone-500 font-mono tabular-nums">{bar.star}</span>
                <div className="flex-1 h-2 bg-stone-100 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${bar.pct}%` }}
                    className="h-full bg-amber-400 rounded-full"
                  />
                </div>
                <span className="w-8 text-right text-stone-400 font-mono tabular-nums text-[11px]">
                  {bar.pct}%
                </span>
              </div>
            ))}
          </div>

          {/* Highlight Quotes (3 cols) */}
          <div className="md:col-span-3 space-y-2 text-xs text-stone-600 bg-stone-50 p-4 rounded-xl border border-stone-100">
            <p className="font-semibold text-stone-800 text-[11px] uppercase tracking-wider">
              Kesan Pengunjung
            </p>
            <p className="italic">"Kopi sama makanannya enak, pelayanan ramah, dan musiknya juga pas."</p>
            <p className="italic">"Overall a good experience, good service too."</p>
          </div>

        </div>

        {/* Filter Tags */}
        <div className="space-y-3">
          <div className="text-xs font-semibold text-stone-700">Filter ulasan berdasarkan topik:</div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {filterTags.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTag(t.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-1.5 cursor-pointer ${
                  selectedTag === t.id
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                <span>{t.label}</span>
                <span className="opacity-70 tabular-nums">({t.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-xs space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Author Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-9 h-9 rounded-full ${review.avatarColor} text-white font-semibold text-xs flex items-center justify-center`}
                    >
                      {review.avatarText}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h4 className="text-sm font-semibold text-stone-900">
                          {review.author}
                        </h4>
                        {review.isNew && (
                          <span className="text-[10px] text-emerald-700 font-semibold">
                            Baru
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-stone-500">
                        {review.authorSubtitle}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] text-stone-400 whitespace-nowrap">
                    {review.timeAgo}
                  </span>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < review.rating ? 'fill-amber-400' : 'text-stone-200'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  "{review.content}"
                </p>

                {/* Owner Response if exists */}
                {review.ownerReply && (
                  <div className="p-3 bg-stone-50 border border-stone-200/90 rounded-xl space-y-1 text-xs mt-3">
                    <div className="flex items-center gap-1.5 text-stone-900 font-semibold text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                      <span>Tanggapan dari pemilik</span>
                      <span className="text-stone-400 font-normal">· {review.ownerReply.timeAgo}</span>
                    </div>
                    <p className="text-stone-600 leading-relaxed text-[11px]">
                      {review.ownerReply.text}
                    </p>
                  </div>
                )}

              </div>

              {/* Footer */}
              <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                <div className="flex items-center gap-1.5">
                  {review.tags.map((tag) => (
                    <span key={tag} className="text-[11px] text-stone-400">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-1.5 text-stone-500 text-[11px]">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  <span className="tabular-nums font-mono">{review.likes} Suka</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
