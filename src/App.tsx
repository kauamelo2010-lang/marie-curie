/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TimelineSection } from './components/TimelineSection';
import { NobelSection } from './components/NobelSection';
import { LegacySection } from './components/LegacySection';
import { WarEffortSection } from './components/WarEffortSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#050814] text-[#e2e8f0] relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Interactive Particle & Atom Simulation */}
      <ParticleBackground />

      {/* Sticky Header Navigation with Sound Toggle & Reading Progress */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <Hero />

        {/* Seção 1 — Quem foi Marie Curie? (Linha do Tempo Interativa) */}
        <TimelineSection />

        {/* Seção 2 — Os dois Prêmios Nobel (1903 e 1911) */}
        <NobelSection />

        {/* Seção 3 — Por que Marie Curie foi tão importante? (Estatísticas e Aplicações) */}
        <LegacySection />

        {/* Seção 4 — Marie Curie durante a Primeira Guerra Mundial (Petites Curies) */}
        <WarEffortSection />
      </main>

      {/* Footer com citação e voltar ao topo */}
      <Footer />
    </div>
  );
}
