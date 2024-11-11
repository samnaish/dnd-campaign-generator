export const races = [
  'Human',
  'Elf',
  'Dwarf',
  'Halfling',
  'Orc',
  'Tiefling',
  'Dragonborn',
  'Gnome',
  'Half-Elf',
  'Half-Orc',
] as const;

// List of classes available for NPCs
export const classes = [
  'Fighter',
  'Wizard',
  'Rogue',
  'Cleric',
  'Paladin',
  'Ranger',
  'Bard',
  'Monk',
  'Druid',
  'Warlock',
] as const;

// List of environments for encounters
export const environments = [
  'Forest',
  'Desert',
  'Mountain',
  'Swamp',
  'Plains',
  'Coast',
  'Underground',
  'Urban',
  'Jungle',
  'Arctic',
] as const;

// List of creatures for encounters
export const creatures = [
  'Goblin',
  'Orc',
  'Dragon',
  'Skeleton',
  'Troll',
  'Zombie',
  'Bandit',
  'Giant Spider',
  'Werewolf',
  'Vampire',
] as const;

export const alignments = [
  'Lawful Good', 
  'Neutral Good', 
  'Chaotic Good', 
  'Lawful Neutral', 
  'True Neutral', 
  'Chaotic Neutral', 
  'Lawful Evil', 
  'Neutral Evil', 
  'Chaotic Evil'
] as const;

export const backgrounds = [
  'Soldier', 
  'Acolyte', 
  'Criminal', 
  'Folk Hero', 
  'Noble'
] as const;

export const locations = [
  { 
    name: "Quiet Village", 
    description: "A peaceful, isolated village surrounded by dense forest." 
  },
  { 
    name: "Barren Desert Outpost", 
    description: "A desolate outpost in the heart of the desert." 
  },
  { 
    name: "Mountain Pass", 
    description: "A treacherous pass high in the mountains, prone to landslides." 
  },
  { 
    name: "Haunted Castle Ruins", 
    description: "The abandoned ruins of an old castle, rumored to be haunted." 
  },
] as const;

export const themes = [
  "mysterious", 
  "cheerful", 
  "tense", 
  "foreboding", 
  "hopeful"
] as const;

export const npcRoles = [
  "Village Elder",
  "Mysterious Stranger",
  "Local Merchant",
  "Guard Captain",
  "Traveling Bard",
] as const;

export const encounters = [
  { 
    name: "Bandit Ambush", 
    type: "combat", 
    difficulty: "medium" 

  },
  { 
    name: "Forest Spirit", 
    type: "social", 
    difficulty: "easy" 

  },
  { 
    name: "Ghostly Apparition", 
    type: "combat", 
    difficulty: "hard" 

  },
  { 
    name: "Lost Merchant", 
    type: "social", 
    difficulty: "easy" 

  },
] as const;

export const quests: string[] = [
  "Investigate the strange lights in the forest.",
  "Find the missing heirloom of the village elder.",
  "Escort a merchant to the neighboring town.",
  "Deal with the bandit problem plaguing the road.",
] as const;
