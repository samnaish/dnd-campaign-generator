import { useState } from 'react';
import NPCList from '../components/NPCList';

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

export default function NPCEncounter() {
  const [npcCount, setNpcCount] = useState(1);
  const [npcs, setNpcs] = useState<PC[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateNPCs = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/generatePC?count=${npcCount}`);
      if (!res.ok) throw new Error('Failed to fetch NPCs');
      const data: PC[] = await res.json();
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
        <h1 className="text-2xl font-bold mb-4">Generate D&D Player Characters</h1>
        <label className="block mb-2 text-sm">Number of Characters to Generate:</label>
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
          {loading ? 'Generating...' : 'Generate Characters'}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {npcs.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Generated Characters</h2>
            <NPCList npcs={npcs} />
          </div>
        )}
      </div>
    </div>
  );
}