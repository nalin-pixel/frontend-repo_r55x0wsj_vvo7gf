import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-[70vh]">
          <div className="backdrop-blur-sm/0">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Hey, I’m <span className="bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-400 bg-clip-text text-transparent">a Student</span>
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg md:text-xl max-w-xl">
              I build playful, modern web experiences and love exploring 3D and interactive design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center rounded-md bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-4 py-2 text-sm font-medium shadow hover:opacity-90">
                View Projects
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hidden md:block" />
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-slate-950 dark:via-slate-950/60" />
    </section>
  );
}
