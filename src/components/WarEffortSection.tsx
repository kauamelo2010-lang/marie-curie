import React, { useState } from 'react';
import { Shield, Sparkles, HeartPulse, Truck, Users, Activity, CheckCircle2 } from 'lucide-react';
import { WAR_STATS } from '../data/curieData';
import { soundManager } from '../utils/soundEffects';

// Image generated
import ambulanceImg from '../assets/images/petites_curies_ambulance_1791470967048.jpg';

export const WarEffortSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<number>(0);

  const hotspots = [
    {
      title: "Dínamo Acoplado ao Motor",
      desc: "Um gerador elétrico adaptado ao motor da camionete fornecia a alta voltagem elétrica necessária para operar o tubo de raios X mesmo no meio do barro e das trincheiras.",
      tag: "Energia Móvel"
    },
    {
      title: "Tubo de Raios X Portátil",
      desc: "Instalado em um suporte dobrável de madeira e metal. Permitia aos cirurgiões militares enxergar a localização exata de estilhaços de granadas e balas antes de qualquer corte.",
      tag: "Diagnóstico Rápido"
    },
    {
      title: "Câmara Escura de Revelação",
      desc: "Cortinas grossas e caixas escuras permitiam revelar chapas fotográficas de vidro em menos de 10 minutos após o exame do soldado ferido.",
      tag: "Fotografia Médica"
    },
    {
      title: "Treinamento de Mulheres",
      desc: "Marie e sua filha Irène (de apenas 17 anos) treinaram pessoalmente 150 jovens mulheres em física, anatomia e operação radiológica, criando as primeiras técnicas de radiologia do mundo.",
      tag: "Pioneirismo Feminino"
    }
  ];

  return (
    <section id="guerra" className="py-24 relative overflow-hidden bg-[#050814] border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-950/70 border border-red-500/30 text-red-300 text-xs font-mono uppercase tracking-wider">
            <Shield className="w-3.5 h-3.5 text-red-400" />
            <span>1914 – 1918 • Ciência a Serviço da Humanidade</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Marie Curie na <span className="bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 bg-clip-text text-transparent">Primeira Guerra Mundial</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Em vez de se resguardar no laboratório, Marie Curie foi para a frente de batalha. Ela transformou veículos civis em unidades móveis de radiografia, apelidadas com carinho pelos soldados de <strong className="text-white font-semibold">“Petites Curies”</strong>.
          </p>
        </div>

        {/* Hero Artwork of the Petite Curie Ambulance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">

          {/* Left Column: Image with frame */}
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-red-600/30 via-amber-500/20 to-cyan-500/30 rounded-3xl blur-2xl opacity-60 group-hover:opacity-90 transition duration-700 pointer-events-none -z-10" />

            <div className="rounded-3xl overflow-hidden border border-slate-700/80 bg-slate-950 shadow-2xl">
              <img
                src={ambulanceImg}
                alt="Ambulância radiológica móvel Petite Curie operada por Marie Curie durante a Primeira Guerra Mundial"
                className="w-full h-auto object-cover aspect-[16/9] group-hover:scale-102 transition-transform duration-700"
                loading="lazy"
              />
              <div className="p-4 bg-slate-900/95 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-300">
                <span className="flex items-center gap-2 text-red-400 font-semibold">
                  <Truck className="w-4 h-4" />
                  Voiture Radiologique • Petite Curie
                </span>
                <span className="text-slate-400">Frente Ocidental • 1914–1918</span>
              </div>
            </div>
          </div>

          {/* Right Column: Historical Narrative and Stats */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-red-400 uppercase tracking-wider font-semibold">
                Heroísmo nas Trincheiras
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Como os Raios X Evitaram Amputações e Salvaram Vidas
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Nos primeiros meses da guerra em 1914, os médicos nos hospitais de campanha operavam soldados às cegas, tateando estilhaços pontiagudos com os dedos, o que causava hemorragias fatais e amputações desnecessárias.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                Marie Curie arrecadou fundos com doadores parisienses, requisitou automóveis de luxo, aprendeu mecânica e direção de caminhões e equipou <strong className="text-white font-semibold">20 furgões com geradores e aparelhos de raio X</strong> para viajar até as linhas de combate.
              </p>
            </div>

            {/* Quick Stat Pill Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="glass-panel glass-panel-hover p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-red-500/40">
                <div className="font-mono text-2xl font-bold text-red-400">
                  {WAR_STATS.soldiersExamined}
                </div>
                <div className="text-xs text-slate-200 font-medium">Soldados Radiografados</div>
                <div className="text-[10px] text-slate-400 font-mono">Serviço de Saúde Francês</div>
              </div>

              <div className="glass-panel glass-panel-hover p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40">
                <div className="font-mono text-2xl font-bold text-cyan-400">
                  {WAR_STATS.mobileUnits}
                </div>
                <div className="text-xs text-slate-200 font-medium">Unidades Móveis</div>
                <div className="text-[10px] text-slate-400 font-mono">As "Petites Curies"</div>
              </div>

              <div className="glass-panel glass-panel-hover p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40">
                <div className="font-mono text-2xl font-bold text-purple-400">
                  {WAR_STATS.womenTechniciansTrained}
                </div>
                <div className="text-xs text-slate-200 font-medium">Mulheres Treinadas</div>
                <div className="text-[10px] text-slate-400 font-mono">1ª turma de radiologia</div>
              </div>

              <div className="glass-panel glass-panel-hover p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40">
                <div className="font-mono text-2xl font-bold text-emerald-400">
                  {WAR_STATS.fixedStations}
                </div>
                <div className="text-xs text-slate-200 font-medium">Postos Fixos Instalados</div>
                <div className="text-[10px] text-slate-400 font-mono">Hospitais militares</div>
              </div>
            </div>

          </div>

        </div>

        {/* Interactive Diagram of the Mobile Unit */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-slate-800 bg-slate-900/60 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-red-400" />
                <span>Anatomia Técnica de uma "Petite Curie"</span>
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Clique nos componentes para entender como a ciência se transformou em socorro humanitário:
              </p>
            </div>
            <span className="text-xs font-mono text-cyan-400 self-start sm:self-auto">
              Tecnologia de Campo • 1914
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {hotspots.map((item, idx) => {
              const isSelected = activeHotspot === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    soundManager.playGeigerClick(0.6);
                    setActiveHotspot(idx);
                  }}
                  className={`p-4 rounded-2xl text-left transition-all border cursor-pointer ${
                    isSelected
                      ? 'bg-red-500/15 border-red-400 shadow-md shadow-red-500/20'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-slate-800 text-slate-300">
                    {item.tag}
                  </span>
                  <div className="text-sm font-bold text-white mt-2 mb-1">
                    {item.title}
                  </div>
                  <p className="text-xs text-slate-400 line-clamp-3">
                    {item.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Expanded Selected Component Highlight */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-white font-semibold">{hotspots[activeHotspot].title}: </strong>
              {hotspots[activeHotspot].desc}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
