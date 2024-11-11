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
};

export default function CampaignDetails({ campaign }: { campaign: Campaign }) {
  return (
    <div className="p-4 bg-gray-100 rounded border mb-4">
      <h2 className="text-2xl font-bold">{campaign.location}</h2>
      <p className="italic mb-2">{campaign.description}</p>
      <p><strong>Theme:</strong> {campaign.theme}</p>
      
      <h3 className="font-semibold mt-4">NPCs</h3>
      <ul>
        {campaign.npcs.map((npc, index) => (
          <li key={index}>
            <strong>{npc.role}:</strong> {npc.name} - {npc.description}
          </li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Quests</h3>
      <ul>
        {campaign.quests.map((quest, index) => (
          <li key={index}>- {quest}</li>
        ))}
      </ul>

      <h3 className="font-semibold mt-4">Encounters</h3>
      <ul>
        {campaign.encounters.map((encounter, index) => (
          <li key={index}>
            <strong>{encounter.name}</strong> ({encounter.type} - Difficulty: {encounter.difficulty})
          </li>
        ))}
      </ul>
    </div>
  );
}