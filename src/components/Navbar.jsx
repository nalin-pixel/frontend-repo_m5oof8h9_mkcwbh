import { Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-white text-lg">
          Wahyu Rifki Andriansyah
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <div className="flex items-center gap-3 ml-4">
            <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@wahyurifki.dev" aria-label="Email" className="hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
