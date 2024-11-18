
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

export default function NPCList({ npcs }: { npcs: PC[] }) {
  return (
    <div className="space-y-4">
      {npcs?.map((npc, index) => (
        <div key={index} className="bg-white p-4 rounded border shadow-md">
          <h2 className="text-xl font-bold">{npc.name}</h2>
          <p><strong>Race:</strong> {npc.race}</p>
          <p><strong>Class:</strong> {npc.class}</p>
          <p><strong>Level:</strong> {npc.level}</p>
          <p><strong>Alignment:</strong> {npc.alignment}</p>
          <p><strong>Hit Points:</strong> {npc.hitPoints}</p>

          {/* Button to toggle the detailed view */}
          <button
            className="mt-2 bg-blue-500  p-2 rounded"
            onClick={() => {
              const detailsSection = document.getElementById(`details-${npc.name}`);
              if (detailsSection) {
                detailsSection.classList.toggle('hidden');
              }
            }}
          >
            {`Show Details`}
          </button>

          {/* Detailed Information Toggle */}
          <div id={`details-${npc.name}`} className="hidden mt-4 space-y-2">
            <h3 className="font-semibold">Ability Scores</h3>
            <ul>
              <li><strong>Strength:</strong> {npc.abilities.strength}</li>
              <li><strong>Dexterity:</strong> {npc.abilities.dexterity}</li>
              <li><strong>Constitution:</strong> {npc.abilities.constitution}</li>
              <li><strong>Intelligence:</strong> {npc.abilities.intelligence}</li>
              <li><strong>Wisdom:</strong> {npc.abilities.wisdom}</li>
              <li><strong>Charisma:</strong> {npc.abilities.charisma}</li>
            </ul>

            <h3 className="font-semibold">Proficiencies</h3>
            <ul>
              {npc.proficiencies?.map((proficiency, idx) => (
                <li key={idx}>{proficiency}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
