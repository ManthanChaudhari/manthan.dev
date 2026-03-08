'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Minimal animations for elements
      gsap.fromTo('.animate-fade-up', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2,
          scrollTrigger: {
            trigger: '.animate-fade-up',
            start: 'top 80%',
          }
        }
      );

      // Profile image animation
      gsap.fromTo('.profile-image', 
        { scale: 0.7, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2, 
          ease: 'back.out(1.7)',
          delay: 0.3
        }
      );

      // Text animations
      gsap.fromTo('.text-animate', 
        { opacity: 0, y: 20 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1,
          delay: 0.8
        }
      );

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#0a0a0a] text-gray-300 font-mono selection:bg-[#00ff41] selection:text-black">
      {/* Navigation */}
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-sm border-b border-white/5 fixed top-0 w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-1 md:flex-none">
              <h1 className="text-sm font-bold tracking-widest flex items-center">
                <span className="text-[#00ff41] mr-2">/</span>
                <span className="text-white">MANTHAN</span>
              </h1>
            </div>

            <div className="hidden md:flex space-x-8 ml-auto text-[10px] font-bold tracking-widest leading-none">
              {[
                { name: 'HOME', href: '#hero' },
                { name: 'SKILLS', href: '#skills' },
                { name: 'PROJECTS', href: '#projects' },
                { name: 'CONTACT', href: '#contact' }
              ].map((item) => (
                <a 
                  key={item.name}
                  href={item.href} 
                  className="text-gray-500 hover:text-[#00ff41] transition-colors duration-300"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#00ff41] p-2"
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content - Normal Vertical Scrolling */}
      <main>
        {/* Section 1: Hero - Minimal Intro */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
          <div className="text-center z-10 relative px-4 max-w-3xl">
            {/* Simple Visual Element */}
            <div className="mb-12 profile-image relative mx-auto">
              <div className="w-24 h-24 md:w-32 md:h-32 mx-auto border border-white/10 relative p-1">
                <div className="w-full h-full bg-[#111] flex items-center justify-center grayscale opacity-80 group-hover:opacity-100 transition-all duration-500">
                  <svg className="w-12 h-12 text-[#00ff41]/20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Name */}
            <div className="mb-6 animate-fade-up">
              <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tighter uppercase leading-none">
                MANTHAN<span className="text-[#00ff41]">.</span>
              </h1>
            </div>

            {/* Title */}
            <p className="text-xs md:text-sm font-bold text-gray-500 mb-12 tracking-[0.5em] text-animate uppercase">
              Full Stack Developer & Designer
            </p>

            {/* Description */}
            <div className="mb-16 text-animate">
              <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed font-mono">
                Crafting robust digital solutions with clean code and high-performance architectures. Focused on Next.js, React, and Scalable Backend Systems.
              </p>
            </div>

            <div className="flex justify-center space-x-6 text-animate">
              <div className="w-1.5 h-1.5 bg-[#00ff41] rounded-full animate-pulse"></div>
              <div className="w-1.5 h-1.5 bg-white/20 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white/10 rounded-full"></div>
            </div>
          </div>
        </section>

        {/* Section 2: Skills - Minimal Stack */}
        <section id="skills" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-4 w-full">
            <div className="flex items-center space-x-4 mb-20 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest leading-none">
                TECHNICAL_STACK
              </h2>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { name: 'React', level: '01' },
                { name: 'Next.js', level: '02' },
                { name: 'Express', level: '03' },
                { name: 'Node.js', level: '04' },
                { name: 'MongoDB', level: '05' },
                { name: 'Tailwind', level: '06' },
                { name: 'JavaScript', level: '07' },
                { name: 'Git', level: '08' },
                { name: 'GitHub', level: '09' }
              ].map((skill, index) => (
                <div key={skill.name} className="animate-fade-up group">
                  <div className="border-l border-white/10 pl-6 py-2 group-hover:border-[#00ff41] transition-colors duration-300">
                    <span className="text-[9px] text-gray-600 block mb-2 font-bold tracking-tighter">LVL_{skill.level}</span>
                    <h3 className="text-base font-bold text-gray-400 group-hover:text-white transition-colors">{skill.name}</h3>
                    <div className="mt-4 h-[1px] w-full bg-white/5 overflow-hidden">
                      <div className="h-full bg-[#00ff41] w-0 group-hover:w-full transition-all duration-700"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Projects - Clean Grid */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24">
          <div className="max-w-6xl mx-auto px-4 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 animate-fade-up">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none mb-4">
                  SELECTED_WORKS
                </h2>
                <div className="h-1 w-12 bg-[#00ff41]"></div>
              </div>
              <p className="text-[10px] text-gray-600 mt-6 md:mt-0 font-bold tracking-[0.3em]">VERSION_03.2024</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
              {[
                { title: 'E-Commerce Platform', tech: 'Next.js', type: 'WEB_APP' },
                { title: 'Social Core', tech: 'React', type: 'SYSTEM' },
                { title: 'Portfolio OS', tech: 'Next.js', type: 'ARCHIVE' }
              ].map((project, index) => (
                <div key={index} className="animate-fade-up bg-[#0a0a0a] p-8 md:p-12 hover:bg-[#0f0f0f] transition-all duration-500 group relative">
                  <div className="absolute top-4 right-4 text-[9px] text-gray-700 font-bold tracking-widest">{project.type}</div>
                  <h3 className="text-xl font-bold text-white mb-8 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-[#00ff41]">
                    <span className="mr-4">VIEW_RESOURCES</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">--&gt;</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact - Minimal Connection */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-24 animate-fade-up tracking-tighter">
              START_REACHING_OUT<span className="text-[#00ff41]">_</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 mb-24">
              {[
                { title: 'EMAIL', value: 'manthan.dev@net.local' },
                { title: 'CONNECT', value: 'linkedin.com/in/manthan' }
              ].map((contact, index) => (
                <div key={index} className="bg-[#0a0a0a] p-12 group hover:bg-[#0f0f0f] transition-all duration-500">
                  <h3 className="text-[9px] font-bold text-gray-600 mb-4 tracking-[0.3em]">{contact.title}</h3>
                  <p className="text-white font-bold group-hover:text-[#00ff41] transition-colors">{contact.value}</p>
                </div>
              ))}
            </div>

            <div className="pt-24 border-t border-white/5 opacity-20">
              <p className="text-[9px] font-bold tracking-[1em] text-white">MANTHAN_V.03 // 2024</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}