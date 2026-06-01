'use client';

import { useState } from 'react';

export default function AboutPage() {
  const [about, setAbout] = useState({
    name: 'MANTHAN',
    title: 'Full Stack Next.js Specialist',
    description: 'Mastering the full lifecycle of Next.js applications—from architecting high-performance server-side logic to crafting seamless, interactive frontend experiences.'
  });

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
          rows={6}
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
}
