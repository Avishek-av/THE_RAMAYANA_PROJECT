
import React from 'react';
import { Character } from '../types';

const characters: Character[] = [
  {
    name: "Sri Rama",
    title: "Maryada Purushottama",
    avatar: "https://picsum.photos/seed/rama/400/600",
    stats: {
      atmaBala: 99,
      vidya: 90,
      kshatriyaVirya: 95,
      bhakti: 85
    },
    specialAbility: "Dharma-Astra: Unblockable truth-based strike.",
    description: "The embodiment of Dharma. Calm, resolute, and possessing immense inner strength."
  },
  {
    name: "Lakshmana",
    title: "The Eternal Guardian",
    avatar: "https://picsum.photos/seed/lakshman/400/600",
    stats: {
      atmaBala: 85,
      vidya: 80,
      kshatriyaVirya: 98,
      bhakti: 99
    },
    specialAbility: "Ananta-Focus: 100% crit rate when protecting Rama.",
    description: "Rama's loyal shadow. Fierce, protective, and the ultimate secondary specialist."
  },
  {
    name: "Vishwamitra",
    title: "Master of Astras",
    avatar: "https://picsum.photos/seed/vishwamitra/400/600",
    stats: {
      atmaBala: 92,
      vidya: 99,
      kshatriyaVirya: 80,
      bhakti: 88
    },
    specialAbility: "Tapas-Intel: Reveals all enemy weaknesses in a 50m radius.",
    description: "Once a king, now a sage. He bridges the gap between material power and spiritual wisdom."
  }
];

const StatBar: React.FC<{ label: string; value: number; color: string }> = ({ label, value, color }) => (
  <div className="mb-3">
    <div className="flex justify-between text-[10px] uppercase font-bold text-slate-400 mb-1">
      <span>{label}</span>
      <span>{value}/100</span>
    </div>
    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
      <div 
        className={`h-full ${color} transition-all duration-1000 ease-out`} 
        style={{ width: `${value}%` }}
      />
    </div>
  </div>
);

export const CharacterCards: React.FC = () => {
  return (
    <div className="animate-in slide-in-from-bottom-10 duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-tight uppercase">Character RPG Stats</h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          High-performance stats for the heroes of the Awakening.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {characters.map((char, i) => (
          <div key={i} className="glass-card rounded-3xl overflow-hidden group hover:border-amber-500/50 transition-colors">
            <div className="h-64 overflow-hidden relative">
              <img src={char.avatar} alt={char.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <h3 className="text-2xl font-bold cinzel text-white">{char.name}</h3>
                <p className="text-amber-500 text-xs font-bold uppercase tracking-widest">{char.title}</p>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-slate-400 text-sm mb-6 h-12 italic">"{char.description}"</p>
              
              <div className="space-y-4">
                <StatBar label="Atma-Bala (Soul Strength)" value={char.stats.atmaBala} color="bg-orange-500" />
                <StatBar label="Vidya (Knowledge)" value={char.stats.vidya} color="bg-blue-500" />
                <StatBar label="Kshatriya-Virya (Valor)" value={char.stats.kshatriyaVirya} color="bg-red-500" />
                <StatBar label="Bhakti (Devotion)" value={char.stats.bhakti} color="bg-green-500" />
              </div>

              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-amber-500">✨</span>
                  <span className="text-xs font-black uppercase text-amber-500">Special Ability</span>
                </div>
                <p className="text-sm font-semibold text-slate-200">{char.specialAbility}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
