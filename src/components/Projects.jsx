import { ExternalLink, Shield, Boxes, Wallet } from 'lucide-react';

const projects = [
  {
    title: 'DeFi Yield Aggregator',
    desc: 'Smart-contract driven aggregator optimizing yields across protocols with automated rebalancing.',
    tags: ['Solidity', 'Hardhat', 'Ethers.js'],
    link: '#'
  },
  {
    title: 'NFT Launchpad',
    desc: 'Full-stack minting dApp with whitelist, Merkle proofs, and reveal mechanics.',
    tags: ['Solidity', 'Next.js', 'IPFS'],
    link: '#'
  },
  {
    title: 'Wallet Analytics',
    desc: 'On-chain analytics dashboard with wallet labeling and token flow visualizations.',
    tags: ['The Graph', 'React', 'Dune'],
    link: '#'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Featured Projects</h2>
            <p className="text-white/70 mt-2">Production-grade dApps and smart contracts.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition overflow-hidden">
              <div className="p-6">
                <div className="flex items-center gap-2 text-emerald-400 mb-3">
                  <Shield size={18} />
                  <Boxes size={18} />
                  <Wallet size={18} />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">{t}</span>
                  ))}
                </div>
              </div>
              <div className="px-6 pb-6">
                <a href={p.link} className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition">
                  View project <ExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
