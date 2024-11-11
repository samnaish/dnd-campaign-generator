import type { NextApiRequest, NextApiResponse } from 'next';
import { firstNames, lastNames } from "../../utils/NPCNames";
import { races, classes, backgrounds, alignments } from "../../utils/PCStats";

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



function generateRandomPC(): PC {
  const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;

  const race = races[Math.floor(Math.random() * races.length)];
  const classType = classes[Math.floor(Math.random() * classes.length)];
  const alignment = alignments[Math.floor(Math.random() * alignments.length)];
  const background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

  // Roll ability scores and apply race modifiers


  // Hit points calculation based on class and Constitution modifier
  const hitPoints = classType.hitDie + Math.floor((abilities.constitution - 10) / 2);
  
  // Level set to 1 by default
  const level = 1;

  // Combine proficiencies from class and background
  const proficiencies = [...classType.proficiencies, ...background.proficiencies];

  return {
    name,
    race: race.name,
    class: classType.name,
    background: background.name,
    alignment,
    abilities,
    hitPoints,
    level,
    proficiencies
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