
import React from 'react';

export const TechnicalData: React.FC = () => {
  const questSchema = {
    "_id": "ObjectId",
    "questId": "BK_001",
    "title": "Bala Kanda: The Awakening",
    "chapter": 1,
    "levels": [
      {
        "id": "LVL_1",
        "name": "The Descent",
        "dharmaChoice": {
          "trigger": "dasharatha_hesitation",
          "options": [
            { "text": "Reason with Logic", "alignment": "Vidya", "reward": "logic_buff" },
            { "text": "Uphold Truth", "alignment": "Sattva", "reward": "integrity_aura" }
          ]
        },
        "rewards": {
          "shlokaId": "SH_01_001",
          "xp": 500,
          "unlockedAstra": null
        }
      }
    ],
    "requiredStats": {
      "minAtmaBala": 10,
      "minLevel": 1
    },
    "metadata": {
      "version": "1.0.4",
      "author": "Sanskrit_Scholar_Architect"
    }
  };

  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-amber-500 mb-4 tracking-tight uppercase">TECHNICAL DATA STRUCTURE</h2>
        <p className="text-slate-400 max-w-2xl mx-auto italic text-sm">
          A blueprint for the MongoDB architecture, ensuring deep data integration for stealth learning.
        </p>
      </div>

      <div className="bg-slate-950 p-6 md:p-8 rounded-3xl border border-white/10 font-mono text-sm overflow-x-auto">
        <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
          <span className="text-blue-400 font-bold">quest_schema.json</span>
          <span className="text-slate-500 text-xs">Mongoose v7.0 Ready</span>
        </div>
        <pre className="text-emerald-400">
          {JSON.stringify(questSchema, null, 2)}
        </pre>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
          <h4 className="text-xs font-black text-slate-500 uppercase mb-2">Collection Name</h4>
          <p className="text-white text-sm font-bold">itinerary_quests</p>
        </div>
        <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
          <h4 className="text-xs font-black text-slate-500 uppercase mb-2">Primary Index</h4>
          <p className="text-white text-sm font-bold">questId_unique</p>
        </div>
        <div className="p-4 bg-slate-900 rounded-xl border border-white/5">
          <h4 className="text-xs font-black text-slate-500 uppercase mb-2">Validation Rule</h4>
          <p className="text-white text-sm font-bold">Strict Alignment Checks</p>
        </div>
      </div>
    </div>
  );
};
