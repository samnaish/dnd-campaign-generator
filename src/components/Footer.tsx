import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <p>&copy; 2023 DnD Character Generator</p>
        <div className="flex space-x-4">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  )
}