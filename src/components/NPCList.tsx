import { NPC } from "../utils/types";
import NPCDetails from "./NPCDetails";

type NPCListProps = {
  npcs: NPC[]

}

export default function NPCList({ npcs }: NPCListProps) {
  // const [showDetails, setDetails ] = useState();
  return (
    <div className="space-y-4">
      {npcs?.map((npc, index) => (
          <NPCDetails npc={npc} key={index}/>
      ))}
    </div>
  );
}