export default function Footer() {
  return (
    <footer className="py-10">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Built with love, React, and a dash of 3D.
          </p>
        </div>
      </div>
    </footer>
  );
}
