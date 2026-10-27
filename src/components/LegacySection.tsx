import React from 'react';
import { Award, Atom, HeartPulse, Sparkles, Compass, ShieldCheck, Microscope, Flame } from 'lucide-react';

export const LegacySection: React.FC = () => {
  const stats = [
    {
      value: "2",
      label: "Prêmios Nobel",
      subtext: "Física (1903) & Química (1911)",
      icon: Award,
      color: "text-amber-400",
      glow: "border-amber-500/30"
    },
    {
      value: "2",
      label: "Áreas Científicas",
      subtext: "Única pessoa laureada em Física e Química",
      icon: Compass,
      color: "text-cyan-400",
      glow: "border-cyan-500/30"
    },
    {
      value: "2",
      label: "Novos Elementos",
      subtext: "Polônio (Po, 84) e Rádio (Ra, 88)",
      icon: Atom,
      color: "text-purple-400",
      glow: "border-purple-500/30"
    },
    {
      value: "1ª",
      label: "Mulher Professora",
      subtext: "Cátedra na Universidade de Sorbonne (1906)",
      icon: Microscope,
      color: "text-emerald-400",
      glow: "border-emerald-500/30"
    }
  ];

  const applications = [
    {
      icon: HeartPulse,
      title: "Medicina Oncológica & Radioterapia",
      subtitle: "A histórica 'Curieterapia' salva milhões de vidas",
      description: "Marie Curie liderou a aplicação de tubos de emanação de radônio e rádio diretamente em tumores malignos. Hoje, a radioterapia, braquiterapia e exames de medicina nuclear (como tomografia por emissão de pósitrons - PET) são pilares mundiais no combate ao câncer.",
      color: "text-rose-400",
      border: "border-rose-500/30"
    },
    {
      icon: Compass,
      title: "Datação Radiométrica & História da Terra",
      subtitle: "Revelando a idade do nosso planeta e fósseis",
      description: "A descoberta de que o decaimento radioativo ocorre a taxas temporais constantes (meia-vida) permitiu aos cientistas calcular com exatidão a idade de meteoritos, rochas e ossadas antigas (métodos Carbono-14 e Urânio-Chumbo).",
      color: "text-cyan-400",
      border: "border-cyan-500/30"
    },
    {
      icon: Flame,
      title: "Física Nuclear & Energia Elétrica",
      subtitle: "Compreensão íntima da estrutura do núcleo",
      description: "Ao provar que a energia radioativa emanava do interior do átomo, Marie Curie abriu caminho para a física de partículas de Rutherford, Bohr, Fermi e para a geração de energia nuclear de baixa pegada de carbono.",
      color: "text-amber-400",
      border: "border-amber-500/30"
    },
    {
      icon: Sparkles,
      title: "Exploração Espacial Profunda",
      subtitle: "Geradores Termoelétricos de Radioisótopos (RTGs)",
      description: "A energia gerada pelo calor de decaimento de elementos radioativos alimenta satélites, os rovers Curiosity e Perseverance em Marte e as sondas Voyager navegando no espaço interestelar há mais de 45 anos.",
      color: "text-purple-400",
      border: "border-purple-500/30"
    }
  ];

  return (
    <section id="legado" className="py-24 relative overflow-hidden bg-[#070b1a]/70 border-t border-slate-800">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Impacto Histórico & Ciência Contemporânea</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
            Por que Marie Curie foi <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-purple-400 bg-clip-text text-transparent">tão importante</span>?
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Seu impacto transcendeu os muros do laboratório. Além de quebrar barreiras sociais intransponíveis para as mulheres de sua época, suas descobertas inauguraram a era atômica e salvaram incontáveis vidas humanas.
          </p>
        </div>

        {/* Big Statistics Counter Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className={`glass-panel glass-panel-hover p-6 sm:p-7 rounded-3xl border ${stat.glow} bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 flex flex-col items-center text-center group relative overflow-hidden`}
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-950 border border-slate-800/80 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-cyan-400/50 transition-all shadow-lg">
                  <Icon className={`w-7 h-7 ${stat.color} transition-transform`} />
                </div>
                <div className={`font-mono text-4xl sm:text-5xl font-black ${stat.color} tracking-tight mb-1 drop-shadow-md`}>
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-400 leading-snug">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modern Scientific Applications Grid */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Das Anotações de Marie à Tecnologia do Século XXI
            </h3>
            <p className="text-sm text-slate-400 mt-2">
              Como a compreensão da radioatividade revolucionou a medicina, a física e a exploração do cosmos:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
            {applications.map((app, idx) => {
              const Icon = app.icon;
              return (
                <div
                  key={idx}
                  className={`glass-panel glass-panel-hover p-6 sm:p-8 rounded-3xl border ${app.border} bg-slate-900/80 hover:bg-slate-900 transition-all duration-300 space-y-3 relative overflow-hidden`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center shrink-0 shadow-md">
                      <Icon className={`w-5 h-5 ${app.color}`} />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {app.title}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400 font-medium">
                        {app.subtitle}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {app.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
