import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('Thanks! I will get back to you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-black to-zinc-900 text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-6">
          <Mail className="text-emerald-400" />
          <h2 className="text-3xl font-semibold">Get in touch</h2>
        </div>
        <p className="text-white/70 mb-8">Have a project in mind or need help auditing smart contracts? Let’s talk.</p>

        <form onSubmit={onSubmit} className="grid gap-4">
          <input className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-emerald-400" placeholder="Your name" required />
          <input type="email" className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-emerald-400" placeholder="Email address" required />
          <textarea rows={5} className="bg-white/5 border border-white/10 rounded-md px-4 py-3 outline-none focus:border-emerald-400" placeholder="Tell me about your project" required />
          <button type="submit" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500 hover:bg-emerald-400 text-black font-medium transition">
            Send message <Send size={18} />
          </button>
        </form>
        {status && <p className="mt-4 text-emerald-300">{status}</p>}
      </div>
    </section>
  );
}
