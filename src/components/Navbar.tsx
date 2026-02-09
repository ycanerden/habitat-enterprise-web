import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">[</span>
            <span className="px-2 text-slate-900 font-bold tracking-tight">
              HABITAT <span className="text-habitat-indigo tracking-widest text-xs uppercase ml-1">Enterprise</span>
            </span>
            <span className="text-slate-300 font-mono text-xl group-hover:text-habitat-indigo transition-colors">]</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-500">
            <Link href="#solutions" className="hover:text-habitat-indigo transition-colors">Solutions</Link>
            <Link href="#methodology" className="hover:text-habitat-indigo transition-colors">Methodology</Link>
            <Link href="https://joinhabitat.eu" target="_blank" className="hover:text-habitat-indigo transition-colors">Community</Link>
          </div>

          <div className="flex items-center">
            <Link 
              href="#pilot" 
              className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-habitat-indigo transition-all duration-300 shadow-lg shadow-indigo-100"
            >
              Start Pilot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}