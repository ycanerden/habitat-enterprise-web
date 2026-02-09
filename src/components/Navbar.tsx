import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-black bg-white/90 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center group">
            <span className="text-black font-mono text-2xl group-hover:text-habitat-indigo transition-colors">[</span>
            <span className="px-2 text-black font-black tracking-tighter text-2xl uppercase">
              HABITAT <span className="text-habitat-indigo">Enterprise</span>
            </span>
            <span className="text-black font-mono text-2xl group-hover:text-habitat-indigo transition-colors">]</span>
          </Link>
          
          <div className="hidden lg:flex items-center space-x-12 text-[10px] font-bold uppercase tracking-[0.2em] text-black">
            <Link href="#solutions" className="hover:text-habitat-indigo transition-colors">Venture Services</Link>
            <Link href="#methodology" className="hover:text-habitat-indigo transition-colors">The Framework</Link>
            <Link href="https://joinhabitat.eu" target="_blank" className="hover:text-habitat-indigo transition-colors">Community</Link>
            <Link 
              href="#pilot" 
              className="px-8 py-3 rounded-full bg-black text-white text-[10px] font-bold uppercase tracking-widest hover:bg-habitat-indigo transition-all duration-300"
            >
              Initiate Pilot
            </Link>
          </div>

          <div className="lg:hidden">
             <div className="w-8 h-[2px] bg-black mb-1.5" />
             <div className="w-8 h-[2px] bg-black" />
          </div>
        </div>
      </div>
    </nav>
  );
}
