import React from 'react';
import { ArrowRight, Sparkles, Award, Atom, Compass, ChevronDown, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

// Image generated
import mariePortrait from '../assets/images/marie_curie_portrait_1791470954329.jpg';

export const Hero: React.FC = () => {
  const scrollTo = (targetId: string) => {
    soundManager.playGeigerClick(0.7);
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen pt-24 pb-16 sm:pt-32 sm:pb-24 flex items-center justify-center overflow-hidden">
      {/* Decorative Science Laboratory Lighting Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] sm:h-[600px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-12 -left-12 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Subtle scientific grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text and Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">

            {/* Scientific Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-cyan-400/40 text-cyan-300 text-xs sm:text-sm font-medium shadow-lg shadow-cyan-500/20 backdrop-blur-md hover:border-cyan-400 transition-all">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Atom className="w-4 h-4 text-cyan-300 animate-spin-slow" />
              <span className="tracking-wide">Exposição Científica Interativa • 1867 – 1934</span>
            </div>

            {/* Main Name in Display Serif */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-none drop-shadow-2xl">
                MARIE <span className="bg-gradient-to-r from-cyan-300 via-teal-200 to-purple-300 bg-clip-text text-transparent">CURIE</span>
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl font-serif font-medium text-cyan-300 tracking-wide text-glow-cyan">
                “A cientista que mudou a história da radioatividade”
              </p>
            </div>

            {/* Intro paragraph with exact required info */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Física e química polonesa naturalizada francesa, Marie Curie foi uma pioneira absoluta nos estudos da
              radioatividade e a <strong className="text-white font-semibold underline decoration-cyan-400/60 underline-offset-4">primeira pessoa no mundo a receber dois Prêmios Nobel em áreas científicas distintas</strong> (Física e Química). Sua coragem, rigor metódico e genialidade moldaram as bases da física atômica e da medicina moderna.
            </p>

            {/* Key Accomplishment Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="glass-panel glass-panel-hover p-3.5 rounded-2xl border border-cyan-500/25 bg-slate-900/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-400/30 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">2 Prêmios Nobel</div>
                  <div className="text-[10px] text-slate-400 font-mono">Física & Química</div>
                </div>
              </div>

              <div className="glass-panel glass-panel-hover p-3.5 rounded-2xl border border-purple-500/25 bg-slate-900/70 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center shrink-0">
                  <Atom className="w-5 h-5 text-purple-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">2 Elementos</div>
                  <div className="text-[10px] text-slate-400 font-mono">Polônio & Rádio</div>
                </div>
              </div>

              <div className="glass-panel glass-panel-hover p-3.5 rounded-2xl border border-emerald-500/25 bg-slate-900/70 flex items-center gap-3 col-span-2 sm:col-span-1">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-tight">1ª Mulher</div>
                  <div className="text-[10px] text-slate-400 font-mono">Nobel & Sorbonne</div>
                </div>
              </div>
            </div>

            {/* Call to action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-3">
              <button
                onClick={() => scrollTo('historia')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Conheça sua história</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollTo('nobel')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 hover:border-cyan-300 text-cyan-200 hover:text-white font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-cyan-500/20"
              >
                <Award className="w-4 h-4 text-amber-400" />
                <span>Ver seus Prêmios Nobel</span>
              </button>
            </div>

          </div>

          {/* Right Column: Hero Illustration & Laboratory Plate Card */}
          <div className="lg:col-span-5 relative flex justify-center">

            {/* Glowing frame around Marie Curie's portrait */}
            <div className="relative w-full max-w-md group">

              {/* Radium ambient glow around artwork */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-400 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000 -z-10 group-hover:blur-2xl" />

              {/* Frame Container */}
              <div className="relative rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-950 shadow-2xl shadow-cyan-950/60">

                <img
                  src={mariePortrait}
                  alt="Marie Curie em seu laboratório em Paris cercada por vidrarias e instrumentos luminosos"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 aspect-[4/3]"
                  loading="eager"
                />

                {/* Laboratory Plaque / Vintage Scientific Caption */}
                <div className="p-4 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-900/80 border-t border-cyan-500/20 backdrop-blur-md">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-400/90 mb-1">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Rue Lhomond, Paris • c. 1898
                    </span>
                    <span className="text-slate-400">RaCl₂ • Po₈₄</span>
                  </div>
                  <h3 className="text-sm font-semibold text-slate-100">
                    O Laboratório que Iluminou a Física Atômica
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-snug">
                    Onde Marie e Pierre isolaram os primeiros decigramas de cloreto de rádio após refinarem toneladas de minério.
                  </p>
                </div>
              </div>

              {/* Floating Decorative Molecule Badge */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 glass-panel p-3 rounded-2xl border border-cyan-400/30 bg-slate-900/90 items-center gap-3 shadow-xl shadow-black/50 animate-float-slow">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
                  <Atom className="w-5 h-5 animate-spin-slow" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Propriedade Atômica</div>
                  <div className="text-xs font-bold text-white">Radioatividade Espontânea</div>
                </div>
              </div>

              {/* Floating Nobel Laurel Badge */}
              <div className="hidden sm:flex absolute -top-5 -right-5 glass-panel p-3 rounded-2xl border border-amber-400/30 bg-slate-900/90 items-center gap-2.5 shadow-xl shadow-black/50">
                <Award className="w-5 h-5 text-amber-400" />
                <div>
                  <div className="text-[10px] font-mono text-amber-400/90 font-medium">1903 & 1911</div>
                  <div className="text-xs font-bold text-white">Dois Prêmios Nobel</div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Scroll indicator prompt */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <button
            onClick={() => scrollTo('historia')}
            className="flex flex-col items-center gap-1 text-slate-400 hover:text-cyan-300 transition-colors text-xs font-mono group cursor-pointer"
            aria-label="Rolar para a seção de história"
          >
            <span>Role para explorar a trajetória</span>
            <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>

      </div>
    </section>
  );
};
