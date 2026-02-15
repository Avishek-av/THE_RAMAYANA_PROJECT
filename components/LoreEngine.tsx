
import React from 'react';
import { LoreEvent } from '../types';

const events: LoreEvent[] = [
  {
    title: "The Celestial Birth",
    summary: "King Dasharatha performs the Putrakameshti Yagna. Lord Vishnu descends as the four sons to restore cosmic order.",
    insight: "Your potential is a gift from the universe, but your character is what you build with it.",
    slang: "Rama spawning in Ayodhya is the ultimate Main Character Energy. It's about realizing you were born for a 'Global Quest,' not just a 9-to-5.",
    icon: "🏹"
  },
  {
    title: "Vishwamitra's Arrival",
    summary: "The great sage demands young Rama to protect his yagna. Dasharatha is hesitant, but Vashistha intervenes.",
    insight: "The Call to Adventure often looks like a disruption to your comfort zone.",
    slang: "When the legendary coach slides into your DMs, you don't ghost. Dasharatha was gatekeeping, but Rama knew it was time to level up.",
    icon: "🧘"
  },
  {
    title: "Confronting Tataka",
    summary: "In the forest, Rama faces the demonic Tataka. He hesitates because she is a woman, but duty prevails.",
    insight: "Dharma requires prioritizing the greater good over rigid social conventions.",
    slang: "Tataka is that 'Toxic Boss' energy. Rama had to cancel his hesitation because letting a troll thrive for 'optics' is bad for the server.",
    icon: "👹"
  },
  {
    title: "The Wedding at Mithila",
    summary: "Rama strings the Shiva Dhanush, breaking it in the process, and wins Sita’s hand in marriage.",
    insight: "True strength is the ability to bear a burden that others find impossible.",
    slang: "Breaking the Shiva Dhanush was the hardest flex in history. No cap, Sita and Rama are the OG Power Couple.",
    icon: "💍"
  }
];

export const LoreEngine: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-tight">THE LORE ENGINE</h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          Translating ancient cosmic truths into the frequency of the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 text-6xl opacity-10 group-hover:scale-125 transition-transform duration-500">
              {event.icon}
            </div>
            <h3 className="text-xl font-bold text-amber-200 mb-2">{event.title}</h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">{event.summary}</p>
            
            <div className="bg-amber-900/20 border-l-4 border-amber-600 p-3 mb-4">
              <span className="text-[10px] uppercase font-black text-amber-500 block mb-1">Dharma Insight</span>
              <p className="text-amber-100 text-sm italic">"{event.insight}"</p>
            </div>

            <div className="bg-blue-900/20 border-l-4 border-blue-500 p-3">
              <span className="text-[10px] uppercase font-black text-blue-400 block mb-1">2026 Slang Translation</span>
              <p className="text-blue-100 text-sm">{event.slang}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
