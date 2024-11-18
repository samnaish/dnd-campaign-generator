import Link from "next/link";

export default function HeroSelection() {
  return (
    <section className="bg-cover bg-center h-[50vh] flex items-center justify-center text-center text-black bg-[url('/hero-bg.jpg')]">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Create Unique D&D Characters</h2>
        <p className="text-lg mb-6">Generate PCs, NPCs, and entire campaigns with ease.</p>
        <Link href="/npc-encounter" className="bg-blue-600 px-6 py-3 rounded text-lg hover:bg-blue-700">
          Get Started
        </Link>
      </div>
    </section>
  )
}