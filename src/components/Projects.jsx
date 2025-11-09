import { useMemo } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';

const techColors = {
  React: 'from-sky-500 to-cyan-400',
  Vite: 'from-purple-500 to-pink-500',
  Tailwind: 'from-teal-500 to-emerald-400',
  ThreeJS: 'from-indigo-500 to-blue-500',
};

export default function Projects() {
  const projects = useMemo(
    () => [
      {
        title: 'Interactive Campus Map',
        description:
          'A web app that helps new students explore campus locations with a playful, animated UI.',
        tech: ['React', 'Vite', 'Tailwind'],
        link: '#',
      },
      {
        title: '3D Portfolio Concept',
        description:
          'An experiment blending Spline 3D scenes with smooth scroll interactions and micro-animations.',
        tech: ['React', 'ThreeJS', 'Tailwind'],
        link: '#',
      },
      {
        title: 'Study Planner',
        description:
          'A minimalist planner to track assignments, exams, and weekly goals with calendar sync.',
        tech: ['React', 'Vite', 'Tailwind'],
        link: '#',
      },
    ],
    []
  );

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">
              A selection of things I’ve built recently. I focus on clean design, performance, and delightful interactions.
            </p>
          </div>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:underline">
            Get in touch <ExternalLink size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 backdrop-blur p-5 transition hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                <a href={p.link} className="shrink-0 rounded-md p-2 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" aria-label="Open project">
                  <ExternalLink size={18} />
                </a>
              </div>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className={`inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${techColors[t] || 'from-slate-700 to-slate-500'} px-2.5 py-1 text-xs font-medium text-white`}
                  >
                    <Code2 size={14} /> {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
