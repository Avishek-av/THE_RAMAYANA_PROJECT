
import React, { useState } from 'react';
import { LoreEngine } from './components/LoreEngine';
import { CharacterCards } from './components/CharacterCards';
import { QuestLoop } from './components/QuestLoop';
import { ModernHooks } from './components/ModernHooks';
import { TechnicalData } from './components/TechnicalData';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('lore');

  const tabs = [
    { id: 'lore', label: 'Lore Engine', icon: '📜' },
    { id: 'characters', label: 'Character RPG', icon: '⚔️' },
    { id: 'quests', label: 'Quest Loop', icon: '🗺️' },
    { id: 'hooks', label: 'Engagement', icon: '🔥' },
    { id: 'tech', label: 'Tech Schema', icon: '💾' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="py-8 px-4 text-center border-b border-white/10 bg-slate-900/50">
        <h1 className="text-4xl md:text-6xl font-bold gold-gradient mb-2 tracking-widest">
          RAMAYANA: BALA KANDA
        </h1>
        <p className="text-amber-200/60 uppercase tracking-widest text-sm font-semibold">
          Phase 1: The Awakening | Game Design Document v2.0
        </p>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 flex justify-center bg-slate-950 border-b border-amber-900/30 overflow-x-auto whitespace-nowrap scrollbar-hide">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-4 flex items-center gap-2 transition-all duration-300 border-b-2 ${
              activeTab === tab.id 
                ? 'border-amber-500 text-amber-500 bg-amber-500/10' 
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>{tab.icon}</span>
            <span className="text-xs md:text-sm font-bold uppercase tracking-wider">{tab.label}</span>
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="flex-grow p-4 md:p-8 max-w-7xl mx-auto w-full">
        {activeTab === 'lore' && <LoreEngine />}
        {activeTab === 'characters' && <CharacterCards />}
        {activeTab === 'quests' && <QuestLoop />}
        {activeTab === 'hooks' && <ModernHooks />}
        {activeTab === 'tech' && <TechnicalData />}
      </main>

      {/* Footer */}
      <footer className="py-6 px-4 text-center border-t border-white/5 bg-slate-950 text-slate-500 text-xs">
        &copy; 2026 Stealth Learning Architect Team | "Ramo Vigrahavan Dharmah"
      </footer>
    </div>
  );
};

export default App;
