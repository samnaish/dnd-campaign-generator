import type { NextApiRequest, NextApiResponse } from 'next';
import { firstNames, lastNames } from "../../utils/NPCNames";
import { races, classes } from "../../utils/data";
import { racesStats, classStats, backgrounds, alignments } from "../../utils/PCStats";

type AbilityScores = {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
};

type PC = {
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

// Function to roll 4d6, drop the lowest roll, and sum the remaining three
function rollAbilityScore(): number {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  return rolls.slice(1).reduce((a, b) => a + b, 0);
}

function generateRandomPC(): PC {
  const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
  const race = races[Math.floor(Math.random() * races.length)];
  const classType = classes[Math.floor(Math.random() * classes.length)];
  const alignment = alignments[Math.floor(Math.random() * alignments.length)];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Roll initial ability scores
  let abilities: AbilityScores = {
    strength: rollAbilityScore(),
    dexterity: rollAbilityScore(),
    constitution: rollAbilityScore(),
    intelligence: rollAbilityScore(),
    wisdom: rollAbilityScore(),
    charisma: rollAbilityScore(),
  };

  // Apply racial modifiers to abilities
  const raceModifiers = racesStats[race];
  abilities = {
    strength: abilities.strength + (raceModifiers.strength || 0),
    dexterity: abilities.dexterity + (raceModifiers.dexterity || 0),
    constitution: abilities.constitution + (raceModifiers.constitution || 0),
    intelligence: abilities.intelligence + (raceModifiers.intelligence || 0),
    wisdom: abilities.wisdom + (raceModifiers.wisdom || 0),
    charisma: abilities.charisma + (raceModifiers.charisma || 0),
  };

  // Calculate hit points based on class hit die and Constitution modifier
  const hitDie = classStats[classType]?.hitDie || 8;
  const constitutionModifier = Math.floor((abilities.constitution - 10) / 2);
  const hitPoints = hitDie + constitutionModifier;

  // Level set to 1 by default
  const level = 1;

  // Combine proficiencies from class and background
  const proficiencies = [
    ...(classStats[classType]?.proficiencies || []),
    ...(background.proficiencies || [])
  ];

  return {
    name,
    race,
    class: classType,
    background: background.name,
    alignment,
    abilities,
    hitPoints,
    level,
    proficiencies,
  };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const count = parseInt(req.query.count as string) || 1;
  const characters = Array.from({ length: count }, generateRandomPC);

  res.status(200).json(characters);
}