import { classes, races } from "./data";
import { AbilityScores } from "./types";

export const racesStats: Record<typeof races[number], AbilityScores> = {
  "Half-Elf": {
    strength: 0,
    dexterity: 1,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 2,
  },
  "Half-Orc": {
    strength: 2,
    dexterity: 0,
    constitution: 1,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  Dragonborn: {
    strength: 2,
    dexterity: 0,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 1,
  },
  Dwarf: {
    strength: 0,
    dexterity: 0,
    constitution: 2,
    intelligence: 0,
    wisdom: 1,
    charisma: 0,
  },
  Elf: {
    strength: 0,
    dexterity: 2,
    constitution: 0,
    intelligence: 1,
    wisdom: 0,
    charisma: 0,
  },
  Gnome: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 2,
    wisdom: 0,
    charisma: 0,
  },
  Halfling: {
    strength: 0,
    dexterity: 2,
    constitution: 0,
    intelligence: 0,
    wisdom: 0,
    charisma: 1,
  },
  Human: {
    strength: 1,
    dexterity: 1,
    constitution: 1,
    intelligence: 1,
    wisdom: 1,
    charisma: 1,
  },
  Orc: {
    strength: 2,
    dexterity: 0,
    constitution: 1,
    intelligence: 0,
    wisdom: 0,
    charisma: 0,
  },
  Tiefling: {
    strength: 0,
    dexterity: 0,
    constitution: 0,
    intelligence: 1,
    wisdom: 0,
    charisma: 2,
  }
}


type Stats = {
  hitDie: number,
  proficiencies: string[]
}



export const classStats: Record<typeof classes[number], Stats> = {
  Fighter: {
    hitDie: 10,
    proficiencies:
      [
        'Armor',
        'Weapons',
        'Saving Throws: Strength, Constitution'
      ]
  },
  Wizard: {
    hitDie: 6,
    proficiencies: [
      'Armor',
      'Weapons',
      'Saving Throws: Intelligence, Wisdom'
    ]
  },
  Rogue: {
    hitDie: 8,
    proficiencies: [
      'Armor',
      'Weapons',
      'Saving Throws: Dexterity, Intelligence'
    ]
  },
  Cleric: {
    hitDie: 10,
    proficiencies: [
      "Armor",
      "Weapons",
      "Saving Throws: Wisdom, Charisma"
    ]
  },
  Paladin: {
    hitDie: 10,
    proficiencies: [
      "Armor",
      "Weapons",
      "Saving Throws: Wisdom, Charisma"
    ],
  },
  Ranger: {
    hitDie: 10,
    proficiencies: [
      'Armor',
      'Weapons',
      'Saving Throws: Dexterity, Wisdom'
    ]
  },
  Bard: {
    hitDie: 8,
    proficiencies: [
      "Performance",
      "Persuasion",
      "Saving Throws: Dexterity, Charisma"
    ]
  },
  Monk: {
    hitDie: 8,
    proficiencies: [
      "Martial Arts",
      "Acrobatics",
      "Saving Throws: Strength, Dexterity"
    ]
  },
  Druid: {
    hitDie: 8,
    proficiencies: [
      "Nature",
      "Spellcasting",
      "Saving Throws: Intelligence, Wisdom"
    ]
  },
  Warlock: {
    hitDie: 8,
    proficiencies: ["Spellcasting", "Deception", "Saving Throws: Wisdom, Charisma"]
  },
};

// export const classes = [
//   { 
//     name: 'Warrior', 
//     hitDie: 10, 
//     proficiencies: 
//     [
//         'Armor', 
//         'Weapons', 
//         'Saving Throws: Strength, Constitution'
//     ] 
// },
//   {
//     name: 'Mage', 
//     hitDie: 6, 
//     proficiencies: [
//         'Armor', 
//         'Weapons', 
//         'Saving Throws: Intelligence, Wisdom'
//     ] 
// },
//   { 
//     name: 'Ranger', 
//     hitDie: 8, 
//     proficiencies: [
//         'Armor', 
//         'Weapons', 
//         'Saving Throws: Dexterity, Wisdom'
//     ] 
// },
//   { 
//     name: 'Rogue', 
//     hitDie: 8, 
//     proficiencies: [
//         'Armor', 
//         'Weapons', 
//         'Saving Throws: Dexterity, Intelligence'
//     ] 
// }
// ];

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
];




export const backgrounds = [
  {
    name: 'Soldier',
    proficiencies: [
      'Athletics',
      'Intimidation'
    ]
  },
  {
    name: 'Acolyte',
    proficiencies: [
      'History',
      'Insight'
    ]
  },
  {
    name: 'Criminal',
    proficiencies: [
      'Deception',
      'Stealth'
    ]
  },
  {
    name: 'Folk Hero',
    proficiencies: [
      'Animal Handling',
      'Survival'
    ]
  },
  {
    name: 'Noble',
    proficiencies: [
      'Persuasion',
      'History'
    ]
  }
];

// export const backgroundMap 