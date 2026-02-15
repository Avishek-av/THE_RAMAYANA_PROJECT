
export interface Character {
  name: string;
  title: string;
  avatar: string;
  stats: {
    atmaBala: number;
    vidya: number;
    kshatriyaVirya: number;
    bhakti: number;
  };
  specialAbility: string;
  description: string;
}

export interface LoreEvent {
  title: string;
  summary: string;
  insight: string;
  slang: string;
  icon: string;
}

export interface Level {
  id: number;
  title: string;
  objective: string;
  dilemma: {
    question: string;
    pathA: string;
    pathB: string;
  };
  reward: {
    shloka: string;
    translation: string;
    buff: string;
  };
}
