/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PopularTimes } from './components/PopularTimes';
import { MenuSection } from './components/MenuSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-800 font-sans-body">
      {/* Header Navigasi */}
      <Navbar />

      <main className="flex-1">
        {/* Ringkasan & Profil Utama */}
        <Hero />

        {/* Tentang & Fasilitas (Nugas, Colokan, Buku Tere Liye, Musik) */}
        <AboutSection />

        {/* Jam Ramai (Google Maps Popular Times) */}
        <PopularTimes />

        {/* Menu & Harga */}
        <MenuSection />

        {/* Foto & Suasana */}
        <GallerySection />

        {/* Ringkasan & Ulasan Pengunjung (4.5★) */}
        <ReviewsSection />

        {/* Lokasi, Rute, & Info Sekitar */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
