import { NextApiRequest, NextApiResponse } from 'next';
import { locations, themes, npcRoles, encounters, quests } from '../../utils/data';

type NPC = {
    name: string;
    role: string;
    description: string;
};

type Encounter = {
    name: string;
    type: string;
    difficulty: string;
};

type Campaign = {
    location: string;
    description: string;
    theme: string;
    npcs: NPC[];
    quests: string[];
    encounters: Encounter[];
}

function generateRandomCampaign(): Campaign {
    const location = locations[Math.floor(Math.random() * locations.length)];
    const theme = themes[Math.floor(Math.random() * themes.length)];

  // Generate random NPCs
    const npcs: NPC[] = Array.from({ length: 3 }, () => ({
        name: `NPC-${Math.random().toString(36).substring(2, 7)}`,
        role: npcRoles[Math.floor(Math.random() * npcRoles.length)],
        description: "A character with their own motives and secrets.",
    }));

  // Generate random encounters
    const encounterList: Encounter[] = Array.from({ length: 2 }, () => {
    const encounter = encounters[Math.floor(Math.random() * encounters.length)];
    return { ...encounter };
  });

  // Select a few random quests
    const selectedQuests = quests.sort(() => 0.5 - Math.random()).slice(0, 2);

    return {
        location: location.name,
        description: location.description,
        theme,
        npcs,
        quests: selectedQuests,
        encounters: encounterList,
    };
 }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const campaign = generateRandomCampaign();
  res.status(200).json(campaign);
}