import { useState, useEffect } from 'react';
import NPCDetails from '../components/NPCDetails';
import NPCList from '../components/NPCList';

type NPC = {
  id: string;
  name: string;
  race: string;
  class: string;
};

export default function NPCEncounter() {
  const [npcCount, setNpcCount] = useState(1);
  const [npcs, setNpcs] = useState<NPC[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNPCs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/generateNPC?count=${npcCount}`);
      if (!res.ok) throw new Error('Failed to fetch NPCs');
      const data: NPC[] = await res.json();
      setNpcs(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Generate NPCs</h1>
        <label className="block mb-2 text-sm">
          Number of NPCs to Generate:
        </label>
        <input
          type="number"
          value={npcCount}
          onChange={(e) => setNpcCount(parseInt(e.target.value))}
          min="1"
          className="border rounded px-2 py-1 mb-4 w-full"
        />
        <button
          onClick={generateNPCs}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? 'Generating...' : 'Generate NPCs'}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {npcs.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Generated NPCs</h2>
            <NPCList npcs={npcs} />
          </div>
        )}
      </div>
    </div>
  );
}