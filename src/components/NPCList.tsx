import NPCDetails from './NPCDetails';

type NPC = {
  id: string;
  name: string;
  race: string;
  class: string;
};

export default function NPCList({ npcs }: { npcs: NPC[] }) {
  return (
    <div className="space-y-4">
      {npcs.map((npc) => (
        <NPCDetails key={npc.id} npc={npc} />
      ))}
    </div>
  );
}