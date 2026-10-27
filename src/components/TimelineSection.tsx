import React, { useState } from 'react';
import { TIMELINE_EVENTS, TimelineEvent } from '../data/curieData';
import { soundManager } from '../utils/soundEffects';
import {
  Calendar, MapPin, Quote, ChevronRight, ChevronLeft,
  Sparkles, Award, Atom, BookOpen, Heart, Flame
} from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(1898);
  const activeEvent = TIMELINE_EVENTS.find((e) => e.year === selectedYear) || TIMELINE_EVENTS[0];

  const handleSelectYear = (year: number) => {
    soundManager.playGeigerClick(0.7);
    setSelectedYear(year);
  };

  const handlePrev = () => {
    const currentIndex = TIMELINE_EVENTS.findIndex((e) => e.year === selectedYear);
    if (currentIndex > 0) {
      handleSelectYear(TIMELINE_EVENTS[currentIndex - 1].year);
    }
  };

  const handleNext = () => {
    const currentIndex = TIMELINE_EVENTS.findIndex((e) => e.year === selectedYear);
    if (currentIndex < TIMELINE_EVENTS.length - 1) {
      handleSelectYear(TIMELINE_EVENTS[currentIndex + 1].year);
    }
  };

  const getCategoryBadge = (category: TimelineEvent['category']) => {
    switch (category) {
      case 'vida':
        return { label: 'Vida & Família', bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30' };
      case 'estudos':
        return { label: 'Formação Acadêmica', bg: 'bg-blue-500/10 text-blue-300 border-blue-500/30' };
      case 'descoberta':
        return { label: 'Grande Descoberta', bg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30' };
      case 'premio':
        return { label: 'Honraria Mundial', bg: 'bg-amber-500/10 text-amber-300 border-amber-500/30' };
      case 'legado':
        return { label: 'Legado Histórico', bg: 'bg-purple-500/10 text-purple-300 border-purple-500/30' };
    }
  };

  return (
    <section id="historia" className="py-24 relative overflow-hidden bg-[#070b1a]/60 border-t border-slate-800/80">
      {/* Glow background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Biografia & Marcos Históricos</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Quem foi <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">Marie Curie</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            De estudante clandestina em Varsóvia à maior cientista do século XX. Navegue pelos anos-chave que moldaram sua extraordinária trajetória científica e pessoal.
          </p>
        </div>

        {/* Interactive Year Selector Bar (Horizontal scroll on mobile, flex on desktop) */}
        <div className="relative mb-12">
          {/* Connecting track line */}
          <div className="hidden md:block absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/30 to-cyan-500/20 -translate-y-1/2 -z-0" />

          <div className="flex items-center justify-between gap-2 overflow-x-auto pb-4 pt-2 px-2 scrollbar-none no-scrollbar relative z-10">
            {TIMELINE_EVENTS.map((event) => {
              const isSelected = event.year === selectedYear;
              return (
                <button
                  key={event.year}
                  onClick={() => handleSelectYear(event.year)}
                  type="button"
                  className={`group shrink-0 flex flex-col items-center p-2.5 sm:p-3 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-cyan-500/20 border-2 border-cyan-400 shadow-lg shadow-cyan-500/25 scale-105 sm:scale-110'
                      : 'bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-800/80'
                  }`}
                  aria-label={`Ver evento de ${event.year}: ${event.title}`}
                >
                  <span
                    className={`font-mono text-sm sm:text-base font-bold transition-colors ${
                      isSelected ? 'text-cyan-300 text-glow-cyan' : 'text-slate-400 group-hover:text-slate-200'
                    }`}
                  >
                    {event.year}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 transition-all ${
                      isSelected ? 'bg-cyan-300 scale-125' : 'bg-slate-600 group-hover:bg-slate-400'
                    }`}
                  />
                  <span className="text-[10px] text-slate-400 font-medium max-w-[80px] text-center truncate mt-1 hidden sm:block">
                    {event.subtitle.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Milestone Detailed Showcase Card */}
        <div className="relative glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 bg-gradient-to-br from-slate-900/90 via-[#0a1026]/90 to-slate-950/90 shadow-2xl shadow-cyan-950/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Left Box: Year Spotlight & Category */}
            <div className="lg:col-span-4 space-y-4">
              <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border backdrop-blur-md shadow-sm ${getCategoryBadge(activeEvent.category).bg}`}>
                <span className={`w-2 h-2 rounded-full animate-pulse ${
                  activeEvent.category === 'premio' ? 'bg-amber-400' :
                  activeEvent.category === 'descoberta' ? 'bg-cyan-400' :
                  activeEvent.category === 'vida' ? 'bg-emerald-400' : 'bg-purple-400'
                }`} />
                {getCategoryBadge(activeEvent.category).label}
              </div>

              <div className="space-y-1">
                <div className="font-mono text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 drop-shadow-md">
                  {activeEvent.year}
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                  {activeEvent.title}
                </h3>
                <p className="text-sm font-medium text-cyan-300/90">
                  {activeEvent.subtitle}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{activeEvent.location}</span>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  onClick={handlePrev}
                  disabled={selectedYear === TIMELINE_EVENTS[0].year}
                  type="button"
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-slate-300 hover:text-white text-xs font-medium transition-all flex items-center gap-1 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={selectedYear === TIMELINE_EVENTS[TIMELINE_EVENTS.length - 1].year}
                  type="button"
                  className="px-3.5 py-2 rounded-xl bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/40 disabled:opacity-30 disabled:cursor-not-allowed text-cyan-200 hover:text-white text-xs font-medium transition-all flex items-center gap-1 cursor-pointer"
                >
                  <span>Próximo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Box: In-depth Context, Quotes, Historical Significance */}
            <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-slate-800/80 lg:pl-8">
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider text-cyan-400">
                  Resumo do Marco
                </h4>
                <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                  {activeEvent.description}
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-2">
                <h5 className="text-xs uppercase font-mono tracking-wider text-slate-400 flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Detalhes Aprofundados</span>
                </h5>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeEvent.detailedContent}
                </p>
              </div>

              {/* Historical Context Badge */}
              <div className="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-cyan-300 font-semibold">Contexto Histórico: </strong>
                  {activeEvent.historicalContext}
                </div>
              </div>

              {/* Historical Quote (if available) */}
              {activeEvent.quote && (
                <div className="p-4 sm:p-5 rounded-2xl bg-purple-950/20 border border-purple-500/20 relative">
                  <Quote className="w-6 h-6 text-purple-400/40 absolute top-3 right-4" />
                  <p className="text-sm sm:text-base italic text-purple-200 leading-relaxed pr-6">
                    “{activeEvent.quote}”
                  </p>
                  <span className="block text-[11px] font-mono text-purple-400/70 mt-2 font-medium">
                    — Marie Curie
                  </span>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
