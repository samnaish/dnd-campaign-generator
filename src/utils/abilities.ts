import { races } from "./data";
import { racesStats } from "./PCStats";
import { AbilityScores } from "./types";


function rollAbilityScore(): number {
  const rolls = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  rolls.sort((a, b) => a - b);
  return rolls.slice(1).reduce((sum, roll) => sum + roll, 0);
}


  export const generateAbilityScores = (race: typeof races[number]) : AbilityScores => {
    const raceAbilities = racesStats[race];
    return {
        strength: rollAbilityScore() + raceAbilities.strength,
        dexterity: rollAbilityScore() + raceAbilities.dexterity,
        constitution: rollAbilityScore() + raceAbilities.constitution,
        intelligence: rollAbilityScore() + raceAbilities.intelligence,
        wisdom: rollAbilityScore() + raceAbilities.wisdom,
        charisma: rollAbilityScore() + raceAbilities.charisma,
    };
  }