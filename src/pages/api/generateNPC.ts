import type { NextApiRequest, NextApiResponse } from 'next';
import { races, classes } from "../../utils/data";
import { firstNames, lastNames } from "../../utils/NPCNames";

type NPC = {
  id: string;
  name: string;
  race: string;
  class: string;
};

function generateRandomNPC(): NPC {
    const id = Math.random().toString(36).substring(7); // Random ID
    const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${
    lastNames[Math.floor(Math.random() * lastNames.length)]
  }`;
    const race = races[Math.floor(Math.random() * races.length)];
    const classType = classes[Math.floor(Math.random() * classes.length)];

  return { id, name, race, class: classType };
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const count = parseInt(req.query.count as string) || 1;
  const npcs = Array.from({ length: count }, generateRandomNPC);

  res.status(200).json(npcs);
}