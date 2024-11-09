export const races = [
  { 
    name: 'Human',
    abilities: { 
        strength: 1, 
        dexterity: 1, 
        constitution: 1, 
        intelligence: 1, 
        wisdom: 1, 
        charisma: 1 
    } 
},
  { 
    name: 'Elf', 
    abilities: { 
        dexterity: 2, 
        intelligence: 1, 
        strength: 0, 
        constitution: 0, 
        wisdom: 0, 
        charisma: 0 
    } 
},
  { 
    name: 'Dwarf', 
    abilities: { 
        constitution: 2, 
        strength: 1, 
        dexterity: 0, 
        intelligence: 0, 
        wisdom: 0, 
        charisma: 0 
    } 
},
  { 
    name: 'Orc', 
    abilities: { 
        strength: 2, 
        constitution: 1, 
        dexterity: 0, 
        intelligence: 0, 
        wisdom: 0, 
        charisma: 0 
    } 
}
];

export const classes = [
  { 
    name: 'Warrior', 
    hitDie: 10, 
    proficiencies: 
    [
        'Armor', 
        'Weapons', 
        'Saving Throws: Strength, Constitution'
    ] 
},
  {
    name: 'Mage', 
    hitDie: 6, 
    proficiencies: [
        'Armor', 
        'Weapons', 
        'Saving Throws: Intelligence, Wisdom'
    ] 
},
  { 
    name: 'Ranger', 
    hitDie: 8, 
    proficiencies: [
        'Armor', 
        'Weapons', 
        'Saving Throws: Dexterity, Wisdom'
    ] 
},
  { 
    name: 'Rogue', 
    hitDie: 8, 
    proficiencies: [
        'Armor', 
        'Weapons', 
        'Saving Throws: Dexterity, Intelligence'
    ] 
}
];

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