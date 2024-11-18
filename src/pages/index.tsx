import Link from 'next/link';
import Navbar from '../components/Navbar';
import HeroSelection from '../components/HeroSelection';
import Features from '../components/Features';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';


export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <HeroSelection />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  );
}