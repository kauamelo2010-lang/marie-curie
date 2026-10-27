import React from 'react';
import { NOBEL_PRIZES } from '../data/curieData';
import { Award, Sparkles, CheckCircle2, Star } from 'lucide-react';

export const NobelSection: React.FC = () => {
  const physicsPrize = NOBEL_PRIZES.find((p) => p.year === 1903)!;
  const chemistryPrize = NOBEL_PRIZES.find((p) => p.year === 1911)!;

  return (
    <section id="nobel" className="py-24 relative overflow-hidden bg-[#050814] border-t border-slate-800/80">
      {/* Background glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-950/80 border border-amber-500/50 text-amber-300 text-xs font-mono uppercase tracking-wider shadow-lg shadow-amber-500/10">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Feito Sem Precedentes na História Humana</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            2 Prêmios Nobel. <span className="bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-500 bg-clip-text text-transparent">2 grandes conquistas.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A primeira mulher a ser laureada e a única pessoa na história a conquistar o Prêmio Nobel em duas ciências distintas. Conheça em detalhes o que motivou cada uma dessas condecorações imortais.
          </p>
        </div>

        {/* Floating Medals Interactive Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">

          {/* CARD 1: Nobel de Física (1903) */}
          <div className="group glass-panel rounded-3xl p-6 sm:p-10 border border-amber-500/35 bg-gradient-to-br from-slate-900/95 via-[#141008] to-slate-950 hover:border-amber-400/70 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient golden glow behind card */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-amber-500/15 rounded-full blur-3xl group-hover:bg-amber-500/25 transition-colors pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Medal Header & Floating Animated Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-500/15 border border-amber-400/40 text-amber-300">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    PRÊMIO NOBEL DE FÍSICA
                  </span>
                  <div className="font-mono text-4xl sm:text-5xl font-black text-amber-300 tracking-tight mt-2 text-glow-gold">
                    1903
                  </div>
                </div>

                {/* Floating 3D-styled Golden Medal Simulation */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-700 p-1.5 shadow-2xl shadow-amber-500/40 animate-float-slow shrink-0 border-2 border-amber-200/80">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-amber-700 via-yellow-600 to-amber-400 flex flex-col items-center justify-center text-center p-2 border border-amber-300/60 shadow-inner">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-amber-100 drop-shadow-md" />
                    <span className="text-[8px] font-serif font-black tracking-widest text-amber-100 uppercase mt-0.5">
                      NOBEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Laureates */}
              <div className="p-3.5 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-xs font-mono text-amber-200/90 shadow-sm">
                <span className="text-amber-400 font-bold">Laureados: </span>
                {physicsPrize.collaborators}
              </div>

              {/* Citação Oficial */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Citação Oficial da Real Academia Sueca:
                </h4>
                <p className="text-sm italic text-slate-200 leading-relaxed bg-slate-900/70 p-4 rounded-xl border border-slate-800">
                  “{physicsPrize.officialCitation}”
                </p>
              </div>

              {/* POR QUE ELA GANHOU? (Highlighted as requested) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-amber-500/15 border-2 border-amber-400/50 space-y-2 shadow-lg shadow-amber-500/10">
                <div className="flex items-center gap-2 text-amber-300 font-bold text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Por que ela ganhou?</span>
                </div>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                  {physicsPrize.whySheWon}
                </p>
              </div>

              {/* Bastidores Históricos */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-amber-400 font-semibold">Bastidor Histórico: </strong>
                {physicsPrize.historicalDrama}
              </div>
            </div>

            {/* Bottom tag */}
            <div className="pt-6 border-t border-slate-800 text-xs font-mono text-amber-400/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>1ª Mulher da História a receber um Prêmio Nobel</span>
            </div>
          </div>

          {/* CARD 2: Nobel de Química (1911) */}
          <div className="group glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/35 bg-gradient-to-br from-slate-900/95 via-[#071324] to-slate-950 hover:border-cyan-400/70 transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            {/* Ambient cyan glow behind card */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-cyan-500/15 rounded-full blur-3xl group-hover:bg-cyan-500/25 transition-colors pointer-events-none" />

            <div className="space-y-6 relative z-10">
              {/* Medal Header & Floating Animated Badge */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/15 border border-cyan-400/40 text-cyan-300">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    PRÊMIO NOBEL DE QUÍMICA
                  </span>
                  <div className="font-mono text-4xl sm:text-5xl font-black text-cyan-300 tracking-tight mt-2 text-glow-cyan">
                    1911
                  </div>
                </div>

                {/* Floating 3D-styled Cyan/Silver Medal Simulation */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-cyan-200 via-sky-400 to-blue-700 p-1.5 shadow-2xl shadow-cyan-500/40 animate-float-slow shrink-0 border-2 border-cyan-200/80">
                  <div className="w-full h-full rounded-full bg-gradient-to-tr from-cyan-800 via-blue-600 to-cyan-400 flex flex-col items-center justify-center text-center p-2 border border-cyan-300/60 shadow-inner">
                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-100 drop-shadow-md" />
                    <span className="text-[8px] font-serif font-black tracking-widest text-cyan-100 uppercase mt-0.5">
                      NOBEL
                    </span>
                  </div>
                </div>
              </div>

              {/* Laureates */}
              <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 text-xs font-mono text-cyan-200/90 shadow-sm">
                <span className="text-cyan-400 font-bold">Laureada: </span>
                {chemistryPrize.collaborators}
              </div>

              {/* Citação Oficial */}
              <div className="space-y-1.5">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Citação Oficial da Real Academia Sueca:
                </h4>
                <p className="text-sm italic text-slate-200 leading-relaxed bg-slate-900/70 p-4 rounded-xl border border-slate-800">
                  “{chemistryPrize.officialCitation}”
                </p>
              </div>

              {/* POR QUE ELA GANHOU? (Highlighted as requested) */}
              <div className="p-5 sm:p-6 rounded-2xl bg-cyan-500/15 border-2 border-cyan-400/50 space-y-2 shadow-lg shadow-cyan-500/10">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm uppercase tracking-wide">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Por que ela ganhou?</span>
                </div>
                <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-medium">
                  {chemistryPrize.whySheWon}
                </p>
              </div>

              {/* Bastidores Históricos */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <strong className="text-cyan-400 font-semibold">Bastidor Histórico: </strong>
                {chemistryPrize.historicalDrama}
              </div>
            </div>

            {/* Bottom tag */}
            <div className="pt-6 border-t border-slate-800 text-xs font-mono text-cyan-400/90 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span>1ª Pessoa do Mundo a receber dois Prêmios Nobel</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
