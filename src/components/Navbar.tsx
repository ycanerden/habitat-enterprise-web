import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">[</span>
            <span className="px-2 text-slate-950 font-bold tracking-tight text-sm uppercase">
              HABITAT <span className="text-habitat-indigo">Enterprise</span>
            </span>
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">]</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="#solutions" className="hover:text-slate-950 transition-colors">Solutions</Link>
            <Link href="#methodology" className="hover:text-slate-950 transition-colors">Methodology</Link>
            <Link href="https://joinhabitat.eu" target="_blank" className="hover:text-slate-950 transition-colors text-habitat-indigo">Community</Link>
          </div>

          <div className="flex items-center">
            <Link 
              href="#contact" 
              className="px-6 py-2.5 rounded-full bg-slate-950 text-white text-xs font-bold hover:bg-habitat-indigo transition-all duration-300 shadow-sm"
            >
              Initiate Pilot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}