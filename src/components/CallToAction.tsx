import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="py-16 bg-blue-600 text-black text-center">
      <h2 className="text-2xl font-bold mb-4">Ready to Build Your Adventure?</h2>
      <p className="mb-8">Jump in and start creating unforgettable experiences.</p>
      <Link href="/npc-encounter" className="bg-white text-blue-600 px-6 py-3 rounded text-lg font-semibold hover:bg-gray-200">
        Start Generating
      </Link>
    </section>
  )
}