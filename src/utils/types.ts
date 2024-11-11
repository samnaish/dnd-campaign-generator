export type NPC = {
    id: string;
    name: string;
    role: string;
    description: string;
    class: string;
    race: string;
    alignment: string;
    abilities: AbilityScores;
    hitPoints: number;
};

export type Encounter = {
    name: string;
    type: string;
    difficulty: string;
};

export type Campaign = {
    location: string;
    description: string;
    theme: string;
    npcs: NPC[];
    quests: string[];
    encounters: Encounter[];
}

export type AbilityScores = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

export type PC = {
    id: string;
    name: string;
  race: string;
  class: string;
  background: string;
  alignment: string;
  abilities: AbilityScores;
  hitPoints: number;
  level: number;
  proficiencies: string[];
};