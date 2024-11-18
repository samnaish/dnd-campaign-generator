export default function () {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="text-black text-3xl font-bold mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="text-black bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Random NPC Generator</h3>
          <p>Instantly create detailed NPCs to enrich your campaigns.</p>
        </div>
        <div className="text-black bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Character Stats Generator</h3>
          <p>Roll for ability scores, apply racial modifiers, and set class attributes.</p>
        </div>
        <div className="text-black bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Campaign Environment Setup</h3>
          <p>Generate settings, cities, and plot hooks for immersive storytelling.</p>
        </div>
      </div>
    </section>
  )
}