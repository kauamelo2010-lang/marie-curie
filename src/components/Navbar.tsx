import React, { useState, useEffect } from 'react';
import { Atom, Volume2, VolumeX, Menu, X, Sparkles, Award, History, Shield } from 'lucide-react';
import { soundManager } from '../utils/soundEffects';

interface NavbarProps {
  onNavigate?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSoundActive, setIsSoundActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = soundManager.toggleMute();
    setIsSoundActive(active);
  };

  const navItems = [
    { label: 'Início', href: '#inicio', icon: Sparkles },
    { label: 'História', href: '#historia', icon: History },
    { label: 'Prêmios Nobel', href: '#nobel', icon: Award },
    { label: 'Legado', href: '#legado', icon: Sparkles },
    { label: '1ª Guerra', href: '#guerra', icon: Shield },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    soundManager.playGeigerClick(0.6);
    setIsMobileMenuOpen(false);

    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#050814]/90 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20' : 'bg-transparent'
    }`}>
      {/* Scroll Reading Progress Bar */}
      <div className="h-[2px] w-full bg-slate-900/60 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Brand */}
          <a
            href="#inicio"
            onClick={(e) => handleLinkClick(e, '#inicio')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-105 shadow-sm shadow-cyan-500/20">
              <Atom className="w-5 h-5 text-cyan-300 animate-spin-slow transition-transform group-hover:rotate-180" />
              <span className="absolute -inset-0.5 rounded-xl bg-cyan-400/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <span className="font-display text-lg sm:text-xl font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                MARIE CURIE
              </span>
              <span className="block text-[10px] tracking-widest uppercase font-mono text-cyan-400/80 -mt-0.5">
                1867 — 1934 • Pioneira da Ciência
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20 transition-all duration-200"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Sound Synthesizer Toggle & Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle (Geiger & Lab Synth) */}
            <button
              onClick={toggleSound}
              type="button"
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 border ${
                isSoundActive
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-sm shadow-cyan-500/30'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-slate-200 hover:border-slate-700'
              }`}
              title={isSoundActive ? 'Desativar efeito sonoro do laboratório' : 'Ativar efeito sonoro interativo'}
            >
              {isSoundActive ? (
                <>
                  <Volume2 className="w-4 h-4 text-cyan-300 animate-pulse" />
                  <span className="hidden sm:inline text-[11px]">Áudio Lab: ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden sm:inline text-[11px]">Áudio: Mudo</span>
                </>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                soundManager.playGeigerClick(0.5);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              type="button"
              className="lg:hidden p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-cyan-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070b1a]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 py-4 space-y-1 shadow-2xl transition-all animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 border border-transparent hover:border-cyan-500/30 transition-all"
              >
                <Icon className="w-4 h-4 text-cyan-400" />
                {item.label}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
