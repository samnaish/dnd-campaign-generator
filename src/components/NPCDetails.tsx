import { NPC } from "../utils/types";


export default function NPCDetails({ npc }: { npc: NPC }) {
  return (
    <div className="p-4 border rounded mb-4 bg-gray-100">
      <h2 className="text-xl font-bold">{npc.name}</h2>
      <p><strong>Race:</strong> {npc.race}</p>
      <p><strong>Class:</strong> {npc.class}</p>
      <p><strong>Alignment:</strong> {npc.alignment}</p>
      <p><strong>Hit Points:</strong> {npc.hitPoints}</p>

      <h3 className="mt-2 font-semibold">Ability Scores</h3>
      <ul>
        <li><strong>Strength:</strong> {npc.abilities.strength}</li>
        <li><strong>Dexterity:</strong> {npc.abilities.dexterity}</li>
        <li><strong>Constitution:</strong> {npc.abilities.constitution}</li>
        <li><strong>Intelligence:</strong> {npc.abilities.intelligence}</li>
        <li><strong>Wisdom:</strong> {npc.abilities.wisdom}</li>
        <li><strong>Charisma:</strong> {npc.abilities.charisma}</li>
      </ul>

      <h3 className="mt-2 font-semibold">Proficiencies</h3>
      <ul>
        {/* {npc.proficiencies.map((proficiency, index) => (
          <li key={index}>{proficiency}</li>
        ))} */}
      </ul>
    </div>
  );
}