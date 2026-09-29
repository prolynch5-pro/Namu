import React, { useState } from 'react';
import { Clock, TrendingUp, Users, Coffee } from 'lucide-react';
import { POPULAR_HOURS } from '../data/cafeData';

export const PopularTimes: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState('Selasa');
  const [activeHourIndex, setActiveHourIndex] = useState(4); // 18:00 peak

  const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'];

  // Slightly modify density depending on day
  const getMultiplier = (day: string) => {
    if (day === 'Sabtu' || day === 'Minggu') return 1.1;
    if (day === 'Jumat') return 1.05;
    return 1.0;
  };

  const currentHour = POPULAR_HOURS[activeHourIndex];

  return (
    <section id="jam-ramai" className="py-14 md:py-16 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAF8F5] border border-stone-200 rounded-2xl p-6 sm:p-8 space-y-6">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-wider">
                <Clock className="w-3.5 h-3.5" />
                <span>Wawasan Google Maps</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-serif-title font-bold text-stone-900 mt-1">
                Jam Ramai Pengunjung (Popular Times)
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                Pantau kepadatan untuk memilih waktu terbaik nugas tenang atau nongkrong seru.
              </p>
            </div>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200/80 rounded-lg text-xs text-amber-900 font-medium">
              <span className="w-2 h-2 rounded-full bg-amber-600 animate-ping inline-block" />
              <span>Aktif: Lebih ramai dari biasanya (pukul 18.00–21.00)</span>
            </div>
          </div>

          {/* Day Selector Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Bar Chart Representation */}
          <div className="space-y-2 pt-2">
            <div className="h-44 flex items-end justify-between gap-2 sm:gap-4 px-2 sm:px-6 pt-6 pb-2 bg-white rounded-xl border border-stone-200">
              {POPULAR_HOURS.map((item, idx) => {
                const heightPercent = Math.min(100, Math.round(item.percentage * getMultiplier(selectedDay)));
                const isSelected = activeHourIndex === idx;

                return (
                  <button
                    key={item.hour}
                    onClick={() => setActiveHourIndex(idx)}
                    className="flex-1 flex flex-col items-center gap-2 group h-full justify-end focus:outline-none"
                  >
                    {/* Hover or selected tooltip badge */}
                    <span
                      className={`text-[10px] font-mono tabular-nums transition-opacity duration-200 ${
                        isSelected ? 'opacity-100 font-semibold text-stone-900' : 'opacity-0 group-hover:opacity-100 text-stone-500'
                      }`}
                    >
                      {heightPercent}%
                    </span>

                    {/* Bar */}
                    <div className="w-full max-w-[42px] bg-stone-100 rounded-t-md relative flex items-end overflow-hidden h-28">
                      <div
                        style={{ height: `${heightPercent}%` }}
                        className={`w-full rounded-t-md transition-all duration-300 ${
                          isSelected
                            ? 'bg-amber-600'
                            : heightPercent > 75
                            ? 'bg-amber-400 group-hover:bg-amber-500'
                            : 'bg-stone-300 group-hover:bg-stone-400'
                        }`}
                      />
                    </div>

                    {/* Hour label */}
                    <span
                      className={`text-[11px] font-mono tabular-nums ${
                        isSelected ? 'font-bold text-stone-900' : 'text-stone-500'
                      }`}
                    >
                      {item.hour}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Selected Hour Insight Box */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-white rounded-lg border border-stone-200 text-xs text-stone-600">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-amber-700" />
                <span>
                  Pukul <strong className="text-stone-900">{currentHour.hour}</strong>: {currentHour.label} ({Math.min(100, Math.round(currentHour.percentage * getMultiplier(selectedDay)))}% kapasitas).
                </span>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-stone-300 inline-block" />
                  Tenang / Nugas
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500 inline-block" />
                  Ramai / Hangout
                </span>
              </div>
            </div>
          </div>

          {/* Quick Visiting Tips */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs">
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <span className="font-semibold text-stone-900 block mb-0.5">💻 Rekomendasi Waktu Nugas & Kerja</span>
              <p className="text-stone-600">
                Datang pada pukul <span className="font-medium text-stone-800">09.00 – 14.30 WIB</span> untuk suasana paling hening, leluasa memilih spot meja dekat colokan dan sofa bacaan.
              </p>
            </div>
            <div className="p-3 bg-white rounded-lg border border-stone-200/80">
              <span className="font-semibold text-stone-900 block mb-0.5">☕ Rekomendasi Nongkrong & Melepas Penat</span>
              <p className="text-stone-600">
                Sore hingga malam pukul <span className="font-medium text-stone-800">16.30 – 21.30 WIB</span> memiliki atmosfer hangat dan hidup untuk berkumpul bersama teman.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
