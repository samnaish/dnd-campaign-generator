import { useState } from 'react';
import CampaignDetails from '../components/CampaignDetails';

type NPC = {
  name: string;
  role: string;
  description: string;
};

type Campaign = {
  location: string;
  description: string;
  theme: string;
  npcs: NPC[];
  quests: string[];
  encounters: { name: string; type: string; difficulty: string }[];
};

export default function NPCEncounter() {
  const [campaign, setCampaign] = useState<Campaign | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCampaign = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('/api/generateCampaign');
      if (!res.ok) throw new Error("Failed to fetch campaign");
      const data: Campaign = await res.json();
      setCampaign(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h1 className="text-black text-2xl font-bold mb-4">Generate Campaign Starting Environment</h1>

        <button
          onClick={generateCampaign}
          className="bg-blue-600  px-4 py-2 rounded w-full"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate Campaign"}
        </button>

        {error && <p className="text-red-500 mt-4">{error}</p>}

        {campaign && (
          <div className="text-black mt-4">
            <CampaignDetails campaign={campaign} />
          </div>
        )}
      </div>
    </div>
  );
}