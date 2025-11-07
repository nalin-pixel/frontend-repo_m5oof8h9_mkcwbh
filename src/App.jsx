import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Wahyu Rifki Andriansyah. All rights reserved.</p>
        <div className="text-sm text-white/60">Built with passion for decentralized future.</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
