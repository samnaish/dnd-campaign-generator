import {classes, races} from "./data";
import { AbilityScores } from "./types";

export const racesStats:Record<typeof races[number], AbilityScores> = {
  "Half-Elf": { 
        strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    "Half-Orc": {
        strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Dragonborn: {
        strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Dwarf: {
        strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Elf: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Gnome: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Halfling: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Human: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Orc: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    },
    Tiefling: {
              strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    }
}


type Stats = {
  hitDie: number,
}



export const classStats:Record<typeof classes[number], Stats> = {
  Fighter: {
    hitDie: 10,
    
  },
    Wizard: {
    hitDie: 10
  },
    Rogue: {
    hitDie: 10
  },
    Cleric: {
    hitDie: 10
  },
    Paladin: {
      hitDie: 10
  },
  Ranger: {
    hitDie: 10
  },  
  Bard: {
    hitDie: 10
  },  
  Monk: {
    hitDie: 10
  },  
  Druid: {
    hitDie: 10
  },  
  Warlock: {
    hitDie: 10
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