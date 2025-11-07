import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black text-white" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs mb-6">
            <Rocket size={14} className="text-emerald-400" />
            <span>Web3 • Blockchain • Smart Contracts</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold leading-tight tracking-tight">
            Wahyu Rifki Andriansyah
          </h1>
          <p className="mt-4 text-white/80 text-lg">
            Web3/Blockchain Developer building secure smart contracts, performant dApps, and delightful on-chain user experiences.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-white/20 hover:border-white/40 text-white font-medium transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
