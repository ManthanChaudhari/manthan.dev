'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [result, setResult] = useState("");
  const containerRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "90f8155f-5ee8-4281-b2ef-7264174ee966");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setResult(data.success ? "Success_Connection_Established" : "Error_Signal_Lost");
  };

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
    <div ref={containerRef} className="bg-[#0a0a0a] text-gray-300 font-mono selection:bg-[#00ff41] selection:text-black relative">
      {/* Background Pattern Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
        
        {/* Technical Coordinate Markers */}
        <div className="absolute top-[20%] left-4 text-[8px] font-bold text-white/40 tracking-[0.4em] rotate-90 origin-left">01_CORE_SYSTEM</div>
        <div className="absolute top-[50%] right-4 text-[8px] font-bold text-white/40 tracking-[0.4em] -rotate-90 origin-right">02_USER_INTERFACE</div>
        <div className="absolute bottom-[10%] left-10 text-[8px] font-bold text-white/30 tracking-[0.4em]">INIT_VECTOR_X.882</div>

        {/* Multiple Small Animated Squares (Data Bits) */}
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="data-bit absolute w-1 h-1 bg-[#00ff41]/40"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              '--flicker-duration': `${2 + Math.random() * 4}s`,
              '--flicker-delay': `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Visual Spine - Connection Line */}
      <div className="absolute top-0 left-4 md:left-12 bottom-0 w-px bg-white/5 z-0 hidden sm:block">
        <div className="sticky top-0 h-screen flex flex-col items-center">
          <div className="h-1/4 w-full bg-gradient-to-b from-transparent via-[#00ff41]/20 to-transparent"></div>
          <div className="w-1 h-32 bg-gradient-to-b from-[#00ff41]/0 via-[#00ff41]/40 to-[#00ff41]/0 animate-[scan_4s_linear_infinite]"></div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        @keyframes scanVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
        @keyframes flicker {
          0%, 100% { opacity: 0.1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        .data-bit {
          animation: flicker var(--flicker-duration) ease-in-out infinite;
          animation-delay: var(--flicker-delay);
        }
      `}</style>

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
        {/* Section 1: Hero - Next.js Specialist Intro */}
        <section id="hero" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden">
          {/* Section Pattern: Centered Dot Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
            backgroundSize: '24px 24px',
            maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
          }}></div>

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
            <p className="text-xs md:text-sm font-bold text-[#00ff41] mb-12 tracking-[0.5em] text-animate uppercase">
              Full Stack Next.js Specialist
            </p>

            {/* Description */}
            <div className="mb-16 text-animate">
              <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed font-mono">
                Mastering the full lifecycle of Next.js applications—from architecting high-performance server-side logic to crafting seamless, interactive frontend experiences.
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
        <section id="skills" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24 relative overflow-hidden">
          {/* Section Pattern: Edge Markers */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/5 mx-2 md:mx-4"></div>
          <div className="absolute top-1/2 left-0 w-8 h-px bg-[#00ff41]/20"></div>

          <div className="max-w-4xl mx-auto px-4 w-full relative z-10">
            <div className="flex items-center space-x-4 mb-20 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest leading-none">
                TECHNICAL_STACK
              </h2>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
              {[
                { name: 'Next.js (Full Stack)', level: 'EXPERT' },
                { name: 'React (Client)', level: '01' },
                { name: 'Server Side Logic', level: '02' },
                { name: 'Express / Node', level: '03' },
                { name: 'MongoDB', level: '04' },
                { name: 'Tailwind CSS', level: '05' },
                { name: 'JavaScript', level: '06' },
                { name: 'GSAP / Motion', level: '07' },
                { name: 'Git Systems', level: '08' }
              ].map((skill, index) => (
                <div key={skill.name} className="animate-fade-up group">
                  <div className="border-l border-white/10 pl-6 py-2 group-hover:border-[#00ff41] transition-colors duration-300">
                    <span className="text-[9px] text-[#00ff41] block mb-2 font-bold tracking-tighter">{skill.level}</span>
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
                { title: 'E-Commerce Platform', tech: 'Next.js', type: 'WEB_APP', id: 'e-commerce-platform' },
                { title: 'Social Core', tech: 'React', type: 'SYSTEM', id: 'social-core' },
                { title: 'Portfolio OS', tech: 'Next.js', type: 'ARCHIVE', id: 'portfolio-os' }
              ].map((project, index) => (
                <Link 
                  key={index} 
                  href={`/projects/${project.id}`}
                  className="animate-fade-up bg-[#0a0a0a] p-8 md:p-12 hover:bg-[#0f0f0f] transition-all duration-500 group relative block no-underline"
                >
                  <div className="absolute top-4 right-4 text-[9px] text-gray-700 font-bold tracking-widest">{project.type}</div>
                  <h3 className="text-xl font-bold text-white mb-8 group-hover:translate-x-2 transition-transform duration-500">{project.title}</h3>
                  <div className="flex items-center text-[10px] font-bold tracking-[0.2em] text-[#00ff41]">
                    <span className="mr-4">VIEW_DETAILS</span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">--&gt;</span>
                  </div>
                </Link>
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

            <div className="max-w-xl mx-auto animate-fade-up">
              <form onSubmit={onSubmit} className="space-y-6 text-left">
                <div className="group relative">
                  <label className="text-[10px] text-gray-600 font-bold tracking-widest uppercase mb-2 block">USER_NAME</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#00ff41] transition-colors font-mono"
                    placeholder="ENTER_NAME..."
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff41] group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] text-gray-600 font-bold tracking-widest uppercase mb-2 block">AUTH_EMAIL</label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#00ff41] transition-colors font-mono"
                    placeholder="EMAIL@DOMAIN.SYS"
                  />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff41] group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <div className="group relative">
                  <label className="text-[10px] text-gray-600 font-bold tracking-widest uppercase mb-2 block">OBJECT_MESSAGE</label>
                  <textarea 
                    name="message" 
                    required 
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-white/10 p-3 text-sm focus:outline-none focus:border-[#00ff41] transition-colors font-mono resize-none"
                    placeholder="WRITE_MESSAGE_DATA..."
                  ></textarea>
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff41] group-focus-within:w-full transition-all duration-500"></div>
                </div>

                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="w-full py-4 border border-[#00ff41] text-[#00ff41] text-xs font-bold tracking-[0.4em] hover:bg-[#00ff41] hover:text-black transition-all duration-300 uppercase"
                  >
                    EXECUTE_SUBMIT
                  </button>
                  {result && (
                    <div className="mt-8 p-4 border border-white/5 bg-white/[0.02]">
                      <p className={`text-[10px] font-bold tracking-widest ${result.includes('Success') ? 'text-[#00ff41]' : 'text-white'}`}>
                        <span className="opacity-50 mr-2">&gt; STATUS:</span> {result}
                      </p>
                    </div>
                  )}
                </div>
              </form>
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