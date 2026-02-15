
import React from 'react';
import { Level } from '../types';

const levels: Level[] = [
  {
    id: 1,
    title: "The Palace Departure",
    objective: "Convince King Dasharatha to let you go into the wild with Sage Vishwamitra.",
    dilemma: {
      question: "The King is weeping and refuses to let you go. What is your response?",
      pathA: "Argue with Logic: Explain the importance of the Yagna for the kingdom.",
      pathB: "Appeal to Duty: Remind him that his word is his bond (Raghukul Reet)."
    },
    reward: {
      shloka: "Raghu kula reet sada chali aayi...",
      translation: "The tradition of the Raghu dynasty has always been: Life may go, but a promise must be kept.",
      buff: "Aura of Integrity: +10% Persuasion with allies."
    }
  },
  {
    id: 2,
    title: "Bala & Atibala",
    objective: "Master the twin mantras taught by Vishwamitra while crossing the Sarayu.",
    dilemma: {
      question: "You are exhausted from the trek. Do you stop for rest or push through the training?",
      pathA: "Rest: Recovery increases your physical stats for tomorrow.",
      pathB: "Push Through: Sacrifice sleep for spiritual mastery of the mantras."
    },
    reward: {
      shloka: "Bala Atibala chaiva vidye...",
      translation: "Knowledge of Bala and Atibala protects from fatigue, hunger, and evil spirits.",
      buff: "Endurance: Unlimited sprint stamina for 60 seconds."
    }
  },
  {
    id: 3,
    title: "The Curse of the Tataka Forest",
    objective: "Defeat the demonic Queen Tataka to restore light to the forest.",
    dilemma: {
      question: "You hesitate to kill a woman. Vishwamitra orders the strike. What do you prioritize?",
      pathA: "Traditional Morality: Try to wound or subdue her without killing.",
      pathB: "Royal Duty: Execute the command to protect the innocents, regardless of the target's gender."
    },
    reward: {
      shloka: "Adharma nivaranarthaya...",
      translation: "For the removal of unrighteousness, one must act with precision.",
      buff: "Astra: Kodanda Bow (Enhanced Projectile Speed)."
    }
  },
  {
    id: 4,
    title: "Guardian of the Flame",
    objective: "Protect the Siddhashrama Yagna for six consecutive days without sleeping.",
    dilemma: {
      question: "Mareecha and Subahu attack. Do you focus on the enemies or stay close to the ritual fire?",
      pathA: "Aggressive Offense: Hunt down the demons in the dark forest.",
      pathB: "Steadfast Defense: Guard the perimeter of the Yagna, refusing to be baited."
    },
    reward: {
      shloka: "Yajne rakshati dharman...",
      translation: "He who protects the sacrifice, protects the cosmic order.",
      buff: "Passive: Divine shield against elemental damage."
    }
  },
  {
    id: 5,
    title: "The Pinaka Challenge",
    objective: "Lift and string the massive Bow of Shiva in King Janaka's court.",
    dilemma: {
      question: "The Bow is impossibly heavy. Will you use physical might or pray for divine grace?",
      pathA: "Physical Prowess: Rely on your training as a Kshatriya warrior.",
      pathB: "Spiritual Surrender: Ask for permission from Shiva and Vishwamitra internally before touching it."
    },
    reward: {
      shloka: "Bhanjan Shail-Dhanusha...",
      translation: "Like a dry mountain twig, he snapped the ancient bow.",
      buff: "Ultimate: Shiv-Shakti Resonance (AoE damage burst)."
    }
  }
];

export const QuestLoop: React.FC = () => {
  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-tight uppercase">THE QUEST LOOP</h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          Five stages of evolution. Five challenges of character.
        </p>
      </div>

      <div className="space-y-16">
        {levels.map((lvl) => (
          <div key={lvl.id} className="relative pl-12 border-l border-amber-500/30 ml-4 pb-8">
            <div className="absolute -left-6 top-0 w-12 h-12 bg-slate-900 border-2 border-amber-500 rounded-full flex items-center justify-center text-amber-500 font-bold">
              {lvl.id}
            </div>
            
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-wider">{lvl.title}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-amber-500 text-xs font-black uppercase mb-2">Objective</h4>
                  <p className="text-slate-300 mb-6">{lvl.objective}</p>
                  
                  <div className="bg-slate-950 p-6 rounded-2xl border border-white/5">
                    <h4 className="text-red-500 text-xs font-black uppercase mb-3 tracking-widest">Dharma Choice</h4>
                    <p className="text-white font-semibold mb-4 text-sm">{lvl.dilemma.question}</p>
                    <div className="space-y-3">
                      <button className="w-full text-left p-3 text-xs border border-blue-500/30 rounded-lg hover:bg-blue-500/10 transition-colors text-blue-200">
                        <span className="font-bold mr-2">Option A:</span> {lvl.dilemma.pathA}
                      </button>
                      <button className="w-full text-left p-3 text-xs border border-purple-500/30 rounded-lg hover:bg-purple-500/10 transition-colors text-purple-200">
                        <span className="font-bold mr-2">Option B:</span> {lvl.dilemma.pathB}
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="bg-amber-950/20 border border-amber-500/20 p-6 rounded-2xl">
                    <h4 className="text-amber-500 text-xs font-black uppercase mb-3">Sanskrit Reward (Buff Unlock)</h4>
                    <p className="text-amber-100 font-bold mb-1 italic text-lg cinzel">"{lvl.reward.shloka}"</p>
                    <p className="text-slate-400 text-xs mb-4">Translation: {lvl.reward.translation}</p>
                    <div className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-1 inline-block rounded">
                      Passive Buff: {lvl.reward.buff}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
