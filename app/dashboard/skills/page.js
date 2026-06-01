'use client';

import { useState } from 'react';

export default function SkillsPage() {
  const [skills, setSkills] = useState([
    { name: 'Next.js (Full Stack)', level: 'EXPERT' },
    { name: 'React (Client)', level: '01' }
  ]);
  const [newSkill, setNewSkill] = useState({ name: '', level: '' });

  const addSkill = () => {
    if (newSkill.name && newSkill.level) {
      setSkills([...skills, newSkill]);
      setNewSkill({ name: '', level: '' });
    }
  };

  return (
    <div className="space-y-8 animate-fade-in text-sm px-10">
      <div className="grid grid-cols-2 gap-4">
        <input 
          type="text" 
          placeholder="SKILL_NAME" 
          value={newSkill.name}
          onChange={(e) => setNewSkill({...newSkill, name: e.target.value})}
          className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
        />
        <input 
          type="text" 
          placeholder="LEVEL_CODE" 
          value={newSkill.level}
          onChange={(e) => setNewSkill({...newSkill, level: e.target.value})}
          className="bg-[#111] border border-white/5 p-3 focus:border-[#00ff41] outline-none text-white"
        />
      </div>
      <button 
        onClick={addSkill}
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
}
