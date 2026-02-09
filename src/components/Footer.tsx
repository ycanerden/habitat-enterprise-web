import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-slate-100 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <span className="text-slate-300 font-mono text-xl">[</span>
          <span className="px-2 text-slate-900 font-bold tracking-tight text-sm uppercase">
            HABITAT{" "}
            <span className="text-habitat-indigo tracking-widest text-xs ml-1">
              Enterprise
            </span>
          </span>
          <span className="text-slate-300 font-mono text-xl">]</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-slate-400">
          <Link
            href="https://joinhabitat.eu"
            target="_blank"
            className="hover:text-habitat-indigo transition-colors"
          >
            Community
          </Link>
          <a
            href="mailto:ycanerden@gmail.com"
            className="hover:text-habitat-indigo transition-colors"
          >
            Contact
          </a>
        </div>

        <p className="text-slate-300 text-xs">
          &copy; 2026 Habitat. Brussels & Leuven.
        </p>
      </div>
    </footer>
  );
}
