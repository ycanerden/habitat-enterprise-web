import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/70 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center group">
            <span className="text-slate-300 font-mono text-xl group-hover:text-indigo-500 transition-colors">[</span>
            <span className="px-2 text-slate-900 font-bold tracking-tight">
              HABITAT <span className="text-indigo-500 tracking-[0.2em] text-[10px] uppercase ml-1 font-black">Enterprise</span>
            </span>
            <span className="text-slate-300 font-mono text-xl group-hover:text-indigo-500 transition-colors">]</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-widest text-slate-400">
            <Link href="#solutions" className="hover:text-indigo-600 transition-colors">Solutions</Link>
            <Link href="#methodology" className="hover:text-indigo-600 transition-colors">OS Framework</Link>
            <Link href="https://joinhabitat.eu" target="_blank" className="hover:text-indigo-600 transition-colors">Global Community</Link>
          </div>

          <div className="flex items-center">
            <Link 
              href="#pilot" 
              className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-indigo-600 transition-all shadow-xl shadow-indigo-100/50"
            >
              Start Pilot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}