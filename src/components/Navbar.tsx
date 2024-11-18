import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-blue-600 text-white">
      <nav className="max-w-6xl mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">DnD Character Generator</h1>
        <div>
          <Link href="/npc-encounter" className="px-4 py-2 rounded hover:bg-blue-700">NPC Encounters</Link>
          <Link href="/campaign-generator" className="ml-4 px-4 py-2 rounded hover:bg-blue-700">Campaign Generator</Link>
        </div>
      </nav>
    </header>
  )
}