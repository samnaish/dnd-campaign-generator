type NPC = {
  name: string;
  race: string;
  class: string;
};

export default function NPCDetails({ npc }: { npc: NPC }) {
  return (
    <div>
      <h2 className="text-xl font-bold">{npc.name}</h2>
      <p>Race: {npc.race}</p>
      <p>Class: {npc.class}</p>
    </div>
  );
}