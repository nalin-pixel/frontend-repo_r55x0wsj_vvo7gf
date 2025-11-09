import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = (href, label) => (
    <a
      key={href}
      href={href}
      onClick={() => setOpen(false)}
      className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
    >
      {label}
    </a>
  );

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all ${
      scrolled ? 'backdrop-blur bg-white/70 dark:bg-slate-900/60 shadow-sm' : 'bg-transparent'
    }`}>
      <nav className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-indigo-500 via-sky-500 to-emerald-400" />
            <span className="text-base font-semibold tracking-tight text-slate-800 dark:text-white">My Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItem('#projects', 'Projects')}
            {navItem('#contact', 'Contact')}
            <div className="mx-1 h-5 w-px bg-slate-200 dark:bg-slate-700" />
            <a href="mailto:hello@example.com" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" aria-label="Email">
              <Mail size={18} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-1">
              {navItem('#projects', 'Projects')}
              {navItem('#contact', 'Contact')}
              <div className="flex items-center gap-2 pt-2">
                <a href="mailto:hello@example.com" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
                  <Mail size={16} /> Email
                </a>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 dark:text-slate-300">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
