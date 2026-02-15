
import React from 'react';

export const ModernHooks: React.FC = () => {
  const hooks = [
    {
      title: "Stealth Learning Mechanics",
      desc: "Players learn over 100 Sanskrit shlokas not by rote memorization, but because they are required to cast 'Ultimates' in high-stakes boss fights.",
      tag: "Skill-based Learning"
    },
    {
      title: "Skins & Avatars (Kshatriya Fashion)",
      desc: "Unlockable 'Divya-Vastras' (Divine Garments) and 'Kavachas' (Armors) based on historical and celestial descriptions. Customization for Lakshman's forest gear vs. Ayodhya royal robes.",
      tag: "Customization"
    },
    {
      title: "The Dharma-Meter",
      desc: "Every dialogue choice moves your alignment. Being 'Too Aggressive' (Raja-Guna) or 'Too Passive' (Tamo-Guna) changes how characters react to you. Aim for 'Sattva' (The Golden Mean).",
      tag: "Social Interaction"
    },
    {
      title: "Multiplayer 'Yagna-Defense'",
      desc: "Co-op mode where players protect a digital hermitage from waves of Asuric attacks, requiring synchronized mantra chanting to maintain the ritual energy shield.",
      tag: "Co-op Raids"
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-tight uppercase">MODERN NARRATIVE HOOKS</h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic">
          How we make the oldest story in history the stickiest game in the app store.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {hooks.map((hook, i) => (
          <div key={i} className="bg-slate-900 border border-white/5 p-8 rounded-3xl hover:border-amber-500/30 transition-all group">
            <div className="mb-4">
              <span className="text-[10px] bg-amber-500/10 text-amber-500 font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                {hook.tag}
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-500 transition-colors">{hook.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{hook.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gradient-to-r from-amber-600 to-orange-600 p-8 rounded-3xl text-center">
        <h3 className="text-2xl font-bold text-white mb-2 cinzel">"Not just a game. A lineage."</h3>
        <p className="text-amber-100/80 text-sm">Targeting 50M+ downloads by bridging 5,000 years of wisdom with 2026 tech.</p>
      </div>
    </div>
  );
};
