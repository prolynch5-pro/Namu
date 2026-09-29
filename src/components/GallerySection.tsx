import React, { useState } from 'react';
import { Camera, ExternalLink, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import { GALLERY_PHOTOS } from '../data/cafeData';

export const GallerySection: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);

  return (
    <section id="suasana" className="py-16 md:py-20 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-xl">
            <div className="text-xs font-semibold text-amber-800 tracking-wider uppercase">
              Foto Asli Pengunjung & Google Maps
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif-title font-bold text-stone-900 tracking-tight">
              Galeri Suasana Namu Coffee
            </h2>
            <p className="text-stone-600 text-sm">
              Dokumentasi visual nyata dari listing Google Maps Namu Coffee and Eatery di Jl. Karimata No. 26 Sumbersari, Jember.
            </p>
          </div>

          <div className="p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-600 max-w-sm self-start md:self-auto">
            <div className="flex items-center gap-1.5 font-semibold text-stone-800 text-[11px] mb-0.5">
              <span>Postingan Pengunjung Google Maps</span>
              <span className="text-stone-400">· 4 bulan lalu</span>
            </div>
            <p className="italic">"kasirnya cakep, nih kasirnya 😌😌 tempatnya bersih dan pelayanannya super ramah!"</p>
          </div>
        </div>

        {/* 2 Big Real Verified Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GALLERY_PHOTOS.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              {/* Photo */}
              <div
                onClick={() => setSelectedPhoto(photo)}
                className="cursor-pointer relative aspect-[16/10] bg-stone-100 overflow-hidden"
              >
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md border border-white/10 flex items-center gap-1.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  <span>{photo.category}</span>
                </div>

                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-xs text-stone-900 text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-xs flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Klik untuk perbesar</span>
                </div>
              </div>

              {/* Caption & External link */}
              <div className="p-5 space-y-2">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold text-stone-900">
                    {photo.title}
                  </h3>
                  {photo.sourceUrl && (
                    <a
                      href={photo.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-amber-800 hover:text-amber-950 inline-flex items-center gap-1 shrink-0"
                    >
                      <span>Lihat di Maps</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {photo.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/85 backdrop-blur-xs">
            <div className="relative max-w-4xl w-full bg-stone-900 rounded-2xl overflow-hidden shadow-2xl border border-stone-800">
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 p-2 text-stone-300 hover:text-white bg-stone-800/80 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[16/10] bg-black">
                <img
                  src={selectedPhoto.image}
                  alt={selectedPhoto.title}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <h4 className="text-base font-semibold">{selectedPhoto.title}</h4>
                  <p className="text-xs text-stone-300">{selectedPhoto.caption}</p>
                </div>
                {selectedPhoto.sourceUrl && (
                  <a
                    href={selectedPhoto.sourceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 rounded-lg text-xs font-semibold transition-colors shrink-0"
                  >
                    <span>Buka Tautan Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
