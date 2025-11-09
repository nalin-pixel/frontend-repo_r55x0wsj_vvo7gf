import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('Please fill in all fields.');
      return;
    }
    setStatus('Thanks! I will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Let’s Connect</h2>
        <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
          Whether you have a question or just want to say hi, my inbox is always open.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Your name"
            />
          </div>
          <div className="md:col-span-1">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="you@example.com"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full rounded-md border border-slate-300 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tell me about your project or say hello"
            />
          </div>
          <div className="md:col-span-2 flex items-center gap-3">
            <button type="submit" className="inline-flex items-center gap-2 rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-5 py-2.5 text-sm font-medium shadow hover:opacity-90">
              <Send size={16} /> Send Message
            </button>
            {status && <span className="text-sm text-slate-600 dark:text-slate-300">{status}</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
