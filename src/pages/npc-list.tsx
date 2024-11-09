import { useState, useEffect } from 'react';
import NPCList from '../components/NPCList';

type NPC = {
  id: string;
  name: string;
  race: string;
  class: string;
};

export default function NPCListPage() {
  const [npcs, setNpcs] = useState<NPC[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNPCs = async () => {
      setLoading(true);
      try {
        const res = await fetch('/api/generateNPC?count=5'); // Example: Fetch 5 NPCs
        if (!res.ok) throw new Error('Failed to fetch NPCs');
        const data: NPC[] = await res.json();
        setNpcs(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNPCs();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Generated NPCs</h1>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        <NPCList npcs={npcs} />
      </div>
    </div>
  );
}
