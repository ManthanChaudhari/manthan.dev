'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const pathname = usePathname();

  const navItems = [
    { id: 'projects', label: 'WORK_ARCHIVE', icon: '01', href: '/dashboard/projects', desc: 'Manage project records' },
    { id: 'about', label: 'ENTITY_DATA', icon: '02', href: '/dashboard/about', desc: 'Update profile information' },
    { id: 'skills', label: 'TECH_MATRIX', icon: '03', href: '/dashboard/skills', desc: 'Sync capabilities' }
  ];

  const getActiveId = () => {
    if (pathname === '/dashboard/projects') return 'projects';
    if (pathname === '/dashboard/about') return 'about';
    if (pathname === '/dashboard/skills') return 'skills';
    return '';
  };

  const activeId = getActiveId();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-400 font-mono relative overflow-hidden flex flex-col">
       {/* Global Minimal Decor - Subtle Grid */}
       <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-0">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
        {/* Animated Scanning Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/[0.01] to-transparent h-64 w-full animate-[scanVertical_12s_linear_infinite]"></div>
      </div>

       {/* Top Status Bar */}
       <nav className="h-14 border-b border-white/5 flex items-center justify-between px-6 relative z-30 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-[10px] font-bold tracking-[0.3em] text-[#00ff41] hover:text-white transition-colors flex items-center group">
            <span className="mr-3 opacity-50 group-hover:opacity-100 transition-opacity">::</span>
            EXIT_TO_CORE
          </Link>
          <div className="h-4 w-px bg-white/10 hidden md:block"></div>
          <span className="text-white text-[10px] font-bold tracking-[0.4em] uppercase opacity-90 hidden md:block">ADMIN_CONTROL_PANEL_V2.0</span>
        </div>
        <div className="flex items-center space-x-8 text-[9px] font-bold">
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="w-1.5 h-1.5 bg-[#00ff41] rounded-full animate-pulse"></div>
            <span className="tracking-widest">SERVER_READY</span>
          </div>
          <div className="text-gray-800 tracking-[0.2em] hidden sm:block">SESSION_ID: 0x88F2A</div>
        </div>
      </nav>

      {/* Primary Layout Container */}
      <div className="flex-grow flex relative z-20 overflow-hidden">
        
        {/* Sidebar - Nav Control */}
        <aside className="w-72 border-r border-white/5 bg-[#0a0a0a] relative flex flex-col shrink-0">
          <div className="p-8 pb-4">
            <h3 className="text-[9px] text-gray-700 font-bold tracking-[0.5em] mb-8 uppercase">Navigation_Tree</h3>
          </div>
          
          <div className="flex-grow px-4">
            <nav className="space-y-4">
              {navItems.map(item => (
                <Link 
                  key={item.id}
                  href={item.href}
                  className={`w-full text-left p-5 transition-all relative block group overflow-hidden ${activeId === item.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500 ${activeId === item.id ? 'bg-[#00ff41]' : 'bg-transparent'}`}></div>
                  
                  <div className="flex items-start space-x-4">
                    <span className={`text-[10px] font-bold transition-colors ${activeId === item.id ? 'text-[#00ff41]' : 'text-gray-800'}`}>
                      {item.icon}
                    </span>
                    <div>
                      <div className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${activeId === item.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                        {item.label}
                      </div>
                      <div className="text-[8px] text-gray-800 font-medium tracking-widest mt-1 opacity-100 group-hover:opacity-100 transition-opacity">
                        {item.desc}
                      </div>
                    </div>
                  </div>
                  
                  {activeId === item.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.5)]"></div>
                  )}
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-8 border-t border-white/5 opacity-20 text-[8px] font-bold tracking-[0.2em]">
            SYSTEM_ENCRYPTED_AUTH // v2.4.9
          </div>
        </aside>

        {/* Workspace - Content Area */}
        <main className="flex-grow bg-[#0a0a0a] overflow-y-auto relative scrollbar-hide">
          {/* Workspace Decorative Corner Markers */}
          <div className="absolute top-10 left-10 w-4 h-4 border-t border-l border-white/10"></div>
          <div className="absolute top-10 right-10 w-4 h-4 border-t border-r border-white/10"></div>
          <div className="absolute bottom-10 left-10 w-4 h-4 border-b border-l border-white/10"></div>
          <div className="absolute bottom-10 right-10 w-4 h-4 border-b border-r border-white/10"></div>

          <div className="max-w-4xl mx-auto py-24 px-12 md:px-20 min-h-full flex flex-col">
            <header className="mb-20 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold text-white tracking-tighter uppercase mb-4">
                  {(activeId || 'DASHBOARD').toUpperCase()}<span className="text-[#00ff41]">_MODULE</span>
                </h2>
                <div className="flex items-center text-[9px] font-bold tracking-[0.3em] text-gray-700">
                  <span className="text-[#00ff41] mr-3">ACTIVE_NODE:</span>
                  <span>SYSTEM/ADMIN/WORKSPACE/{(activeId || 'DASHBOARD').toUpperCase()}</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-800 font-bold border border-white/5 px-4 py-2 hidden sm:block">
                REF_ID: MOD_00{activeId === 'projects' ? '1' : activeId === 'about' ? '2' : activeId === 'skills' ? '3' : '0'}
              </div>
            </header>

            <div className="flex-grow">
              {children}
            </div>
          </div>
        </main>
      </div>

      {/* Terminal Mini-Footer */}
      <footer className="h-10 border-t border-white/5 bg-[#0a0a0a] flex items-center justify-between px-6 text-[9px] font-bold tracking-[0.3em] text-gray-800 uppercase relative z-30">
        <div>© manthan_core // data_integrity_verified</div>
        <div className="flex space-x-6">
          <span>LAT: 12.012</span>
          <span className="text-gray-900">|</span>
          <span>LNG: 44.992</span>
        </div>
      </footer>
    </div>
  );
}
