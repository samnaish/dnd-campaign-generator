import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">D&D Campaign</h1>
      <Link href="/npc-encounter" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
          Go to NPC Encounter
      </Link>
    </div>
  );
}