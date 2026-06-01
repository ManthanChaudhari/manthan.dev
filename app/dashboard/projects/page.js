'use client';

import { useState } from 'react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    { id: 'e-commerce-platform', title: 'E-Commerce Platform', tech: 'Next.js, Stripe' }
  ]);
  const [newProject, setNewProject] = useState({ title: '', id: '', tech: '' });

  return (
    <div className="space-y-8 animate-fade-in text-sm px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input 
          type="text" 
          placeholder="OBJ_TITLE" 
          value={newProject.title}
          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
          className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
        />
        <input 
          type="text" 
          placeholder="SLUG_ID" 
          value={newProject.id}
          onChange={(e) => setNewProject({...newProject, id: e.target.value})}
          className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
        />
        <input 
          type="text" 
          placeholder="TECH_SPLIT" 
          value={newProject.tech}
          onChange={(e) => setNewProject({...newProject, tech: e.target.value})}
          className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
        />
      </div>
      <button 
        onClick={() => {
          if (newProject.title && newProject.id) {
            setProjects([...projects, newProject]);
            setNewProject({ title: '', id: '', tech: '' });
          }
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
}
