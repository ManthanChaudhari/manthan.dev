'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('projects');
  
  // Local state for frontend demonstration
  const [about, setAbout] = useState({
    name: 'MANTHAN',
    title: 'Full Stack Next.js Specialist',
    description: 'Mastering the full lifecycle of Next.js applications—from architecting high-performance server-side logic to crafting seamless, interactive frontend experiences.'
  });

  const [skills, setSkills] = useState([
    { name: 'Next.js (Full Stack)', level: 'EXPERT' },
    { name: 'React (Client)', level: '01' }
  ]);

  const [projects, setProjects] = useState([
    { id: 'e-commerce-platform', title: 'E-Commerce Platform', tech: 'Next.js, Stripe' }
  ]);

  const [newSkill, setNewSkill] = useState({ name: '', level: '' });
  const [newProject, setNewProject] = useState({ title: '', id: '', tech: '' });

  const renderTabContent = () => {
    switch(activeTab) {
      case 'about':
        return (
          <div className="space-y-6 animate-fade-in text-sm px-10">
            <div>
              <label className="block text-[10px] text-gray-600 font-bold mb-2 tracking-widest uppercase">ENTITY_NAME</label>
              <input 
                type="text" 
                value={about.name} 
                onChange={(e) => setAbout({...about, name: e.target.value})}
                className="w-full bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white "
              />
            </div>
            <div>
              <label className="block text-[10px] text-gray-600 font-bold mb-2 tracking-widest uppercase">CORE_TITLE</label>
              <input 
                type="text" 
                value={about.title} 
                onChange={(e) => setAbout({...about, title: e.target.value})}
                className="w-full bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
              />
            </div>
            <div>
              <label className="block text-[10px] text-gray-600 font-bold mb-2 tracking-widest uppercase">PRIMARY_BIO</label>
              <textarea 
                rows={4}
                value={about.description} 
                onChange={(e) => setAbout({...about, description: e.target.value})}
                className="w-full bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white resize-none"
              />
            </div>
            <button className="bg-[#00ff41] text-black text-[10px] font-bold px-6 py-2 tracking-widest hover:opacity-80 transition-opacity">
              UPDATE_SYSTEM_DATA
            </button>
          </div>
        );
      case 'skills':
        return (
          <div className="space-y-8 animate-fade-in text-sm px-10">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="SKILL_NAME" 
                value={newSkill.name}
                onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
                className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none "
              />
              <input 
                type="text" 
                placeholder="LEVEL_CODE" 
                value={newSkill.level}
                onChange={(e) => setNewSkill({...newSkill, level: e.target.value})}
                className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none "
              />
            </div>
            <button 
              onClick={() => {
                setSkills([...skills, newSkill]);
                setNewSkill({ name: '', level: '' });
              }}
              className="border border-[#00ff41] text-[#00ff41] text-[10px] font-bold px-6 py-2 tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            >
              INJECT_NEW_MODULE
            </button>

            <div className="space-y-4 pt-10">
              <label className="block text-[10px] text-gray-600 font-bold mb-4 tracking-widest uppercase">active_stack_inventory</label>
              {skills.map((s, i) => (
                <div key={i} className="flex items-center justify-between bg-[#111] p-4 border-l-2 border-[#00ff41]/30 group hover:border-[#00ff41] transition-all">
                   <div className="flex space-x-8 items-center">
                    <span className="text-[10px] opacity-20 group-hover:opacity-50 transition-opacity">MOD_0{i+1}</span>
                    <span className="font-bold text-white">{s.name}</span>
                    <span className="text-[#00ff41] text-[10px] tracking-widest bg-[#00ff41]/5 px-2 py-0.5 border border-[#00ff41]/10">{s.level}</span>
                   </div>
                   <button 
                    onClick={() => setSkills(skills.filter((_, idx) => idx !== i))}
                    className="text-gray-600 hover:text-red-500 text-[10px] font-bold"
                   >
                    [ERASE_DATA]
                   </button>
                </div>
              ))}
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="space-y-8 animate-fade-in text-sm px-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input 
                type="text" 
                placeholder="OBJ_TITLE" 
                value={newProject.title}
                onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none "
              />
              <input 
                type="text" 
                placeholder="SLUG_ID" 
                value={newProject.id}
                onChange={(e) => setNewProject({...newProject, id: e.target.value})}
                className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none "
              />
               <input 
                type="text" 
                placeholder="TECH_SPLIT" 
                value={newProject.tech}
                onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
                className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none "
              />
            </div>
            <button 
               onClick={() => {
                setProjects([...projects, newProject]);
                setNewProject({ title: '', id: '', tech: '' });
              }}
              className="border border-[#00ff41] text-[#00ff41] text-[10px] font-bold px-6 py-2 tracking-widest hover:bg-[#00ff41] hover:text-black transition-all"
            >
              INITIALIZE_OBJECT_ENTRY
            </button>

            <div className="space-y-4 pt-10">
              <label className="block text-[10px] text-gray-600 font-bold mb-4 tracking-widest uppercase">system_manifest_projects</label>
              {projects.map((p, i) => (
                <div key={i} className="flex items-center justify-between bg-[#111] p-4 border-l-2 border-[#00ff41]/30 group hover:border-[#00ff41] transition-all">
                   <div className="flex space-x-12 items-center">
                    <span className="text-[10px] opacity-20 group-hover:opacity-50 transition-opacity">OBJ_0{i+1}</span>
                    <span className="font-bold text-white uppercase tracking-tighter">{p.title}</span>
                    <span className="text-gray-500 text-[9px] font-bold uppercase tracking-widest hidden md:block">{p.tech}</span>
                   </div>
                   <button 
                     onClick={() => setProjects(projects.filter((_, idx) => idx !== i))}
                    className="text-gray-600 hover:text-red-500 text-[10px] font-bold"
                   >
                    [TERMINATE_RECORD]
                   </button>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

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
              {[
                { id: 'projects', label: 'WORK_ARCHIVE', icon: '01', desc: `Manage ${projects.length} project records` },
                { id: 'about', label: 'ENTITY_DATA', icon: '02', desc: 'Update profile information' },
                { id: 'skills', label: 'TECH_MATRIX', icon: '03', desc: `Sync ${skills.length} capabilities` }
              ].map(tab => (
                <button 
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-5 transition-all relative group overflow-hidden ${activeTab === tab.id ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'}`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 transition-all duration-500 ${activeTab === tab.id ? 'bg-[#00ff41]' : 'bg-transparent'}`}></div>
                  
                  <div className="flex items-start space-x-4">
                    <span className={`text-[10px] font-bold transition-colors ${activeTab === tab.id ? 'text-[#00ff41]' : 'text-gray-800'}`}>
                      {tab.icon}
                    </span>
                    <div>
                      <div className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${activeTab === tab.id ? 'text-white' : 'text-gray-600 group-hover:text-gray-400'}`}>
                        {tab.label}
                      </div>
                      <div className="text-[8px] text-gray-800 font-medium tracking-widest mt-1 opacity-100 group-hover:opacity-100 transition-opacity">
                        {tab.desc}
                      </div>
                    </div>
                  </div>
                  
                  {activeTab === tab.id && (
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-1 h-1 bg-[#00ff41] shadow-[0_0_8px_rgba(0,255,65,0.5)]"></div>
                  )}
                </button>
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
                  {activeTab.toUpperCase()}<span className="text-[#00ff41]">_MODULE</span>
                </h2>
                <div className="flex items-center text-[9px] font-bold tracking-[0.3em] text-gray-700">
                  <span className="text-[#00ff41] mr-3">ACTIVE_NODE:</span>
                  <span>SYSTEM/ADMIN/WORKSPACE/{activeTab.toUpperCase()}</span>
                </div>
              </div>
              <div className="text-[10px] text-gray-800 font-bold border border-white/5 px-4 py-2 hidden sm:block">
                REF_ID: MOD_00{activeTab === 'projects' ? '1' : activeTab === 'about' ? '2' : '3'}
              </div>
            </header>

            <div className="flex-grow">
              {renderTabContent()}
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
