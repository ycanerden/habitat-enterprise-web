import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-habitat-border bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group">
            <span className="text-habitat-muted font-mono text-xl group-hover:text-habitat-indigo transition-colors">[</span>
            <span className="px-2 text-habitat-slate font-bold tracking-tight">
              HABITAT <span className="text-habitat-indigo uppercase tracking-wider text-sm ml-1">Enterprise</span>
            </span>
            <span className="text-habitat-muted font-mono text-xl group-hover:text-habitat-indigo transition-colors">]</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-habitat-muted">
            <Link href="#solutions" className="hover:text-habitat-indigo transition-colors">Solutions</Link>
            <Link href="#methodology" className="hover:text-habitat-indigo transition-colors">Methodology</Link>
            <Link href="#contact" className="px-4 py-2 rounded-lg bg-habitat-indigo text-white hover:bg-habitat-indigo/90 transition-all">
              Request Pilot
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
