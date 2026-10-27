import React from 'react';
import { Atom, ArrowUp, Heart, Sparkles, BookOpen } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playGeigerClick(0.7);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'História', href: '#historia' },
    { label: 'Prêmios Nobel', href: '#nobel' },
    { label: 'Legado', href: '#legado' },
    { label: '1ª Guerra', href: '#guerra' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playGeigerClick(0.5);
    const targetId = href.replace('#', '');
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
    <footer className="relative bg-[#04060f] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden text-slate-400">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-cyan-600/10 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top block: Quote & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80 items-center">

          {/* Brand & Motto */}
          <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                <Atom className="w-5 h-5 animate-spin-slow" />
              </div>
              <span className="font-display text-2xl font-bold tracking-wider text-white">
                MARIE CURIE
              </span>
            </div>
            <p className="text-cyan-300 font-medium text-base tracking-wide font-serif">
              Ciência que mudou o mundo.
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md mx-auto lg:mx-0">
              A trajetória de Marie Curie permanece como um dos mais luminosos exemplos de rigor ético, coragem contra o preconceito e devoção incansável ao avanço da humanidade através do conhecimento científico.
            </p>
          </div>

          {/* Marie Curie Famous Quote */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-7 rounded-2xl border border-cyan-500/30 bg-slate-900/80 text-center lg:text-left shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            <p className="italic text-sm sm:text-base text-slate-100 leading-relaxed font-serif">
              “Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais, para temer menos.”
            </p>
            <span className="block text-xs font-mono text-cyan-300 mt-2.5 font-semibold tracking-wide">
              — Marie Curie (1867 – 1934)
            </span>
          </div>

        </div>

        {/* Navigation Quick Links */}
        <div className="py-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="hover:text-cyan-300 transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Back to Top Button */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            Exposição Educativa Digital Interativa • Homenagem à pioneira da radioatividade.
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-all cursor-pointer group shadow-sm"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao Topo</span>
            <ArrowUp className="w-4 h-4 text-cyan-400 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
};
