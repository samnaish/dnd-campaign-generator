import { generateAbilityScores } from "./abilities";
import { alignments, classes, npcRoles, races } from "./data";
import { firstNames, lastNames } from "./NPCNames";
import { classStats } from "./PCStats";
import { NPC } from "./types";


export function randomChoice<T>(arr: T[] | Readonly<T[]>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function generateRandomNPC(): NPC {
  const id = Math.random().toString(36).substring(7); // Random ID
  const name = `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]
    }`;
  const race = randomChoice(races);
  const classType = randomChoice(classes);
  const role = randomChoice(npcRoles);
  const description = "A character with their own motives and secrets.";
  const alignment = randomChoice(alignments);
  const hitPoints = classStats[classType].hitDie;
  const abilities = generateAbilityScores(race);

  return { id, name, race, class: classType, role, description, alignment, hitPoints, abilities };
}