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
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3_ACCESS_KEY);

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
      // Individual scroll animations for all fade-up elements
      gsap.utils.toArray('.animate-fade-up').forEach((elem) => {
        gsap.fromTo(elem,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: elem,
              start: 'top 85%',
              toggleActions: 'play none none none'
            }
          }
        );
      });

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
        @keyframes gridScan {
          0% { transform: translateY(-20vh); }
          100% { transform: translateY(100vh); }
        }
        .grid-scanner {
          animation: gridScan 16s linear infinite;
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
                { name: 'EXPERIENCE', href: '#experience' },
                { name: 'EDUCATION', href: '#education' },
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
          {/* Animated Scanner Visual */}
          <div className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-[#00ff41]/[0.03] to-transparent pointer-events-none grid-scanner z-0"></div>
          {/* Section Pattern: Technical Grid & Code Stamps */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ 
            backgroundImage: `linear-gradient(rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 65, 0.1) 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
          <div className="absolute top-12 left-12 text-[8px] text-[#00ff41]/45 tracking-[0.4em] font-mono select-none">SYS_SKILLS_REF: 0x99A3B</div>
          <div className="absolute bottom-12 right-12 text-[8px] text-white/20 tracking-[0.4em] font-mono select-none">LOC_VECTOR // 45.92.A1</div>
          
          {/* Section Pattern: Edge Markers */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/5 mx-2 md:mx-4"></div>
          <div className="absolute top-1/2 left-0 w-8 h-px bg-[#00ff41]/20"></div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:p-16 w-full relative z-10 border border-white/[0.03] bg-[#0c0c0c]/40 backdrop-blur-sm">
            {/* HUD Corner Ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff41]/40"></div>

            <div className="flex items-center space-x-4 mb-20 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest leading-none">
                TECHNICAL_STACK
              </h2>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>

            {/* Skills Categories Grid */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  category: 'FRONTEND_DEVELOPMENT',
                  skills: ['Next.js', 'React.js', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Redux Toolkit']
                },
                {
                  category: 'BACKEND_&_SERVER_SIDE',
                  skills: ['Next.js API Routes', 'REST APIs', 'Authentication', 'Authorization (RBAC)', 'Database Design & Integration']
                },
                {
                  category: 'VALIDATION_&_APPLICATION_LOGIC',
                  skills: ['Zod Validation', 'Cross-Page Validation', 'Form Management', 'Business Logic Implementation']
                },
                {
                  category: 'TOOLS_&_PLATFORMS',
                  skills: ['Git', 'GitHub', 'VS Code', 'Vercel']
                },
                {
                  category: 'ADDITIONAL_AREAS',
                  skills: ['SEO Optimization', 'Responsive Web Design', 'Page Builder Development', 'Performance Optimization']
                }
              ].map((group, index) => (
                <div key={group.category} className="animate-fade-up group">
                  <div className="border-l border-white/10 pl-6 py-2 group-hover:border-[#00ff41] transition-colors duration-300">
                    <span className="text-[9px] text-[#00ff41] block mb-3 font-bold tracking-widest">0{index + 1} // {group.category}</span>
                    
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="text-xs font-bold text-gray-400 group-hover:text-white transition-colors duration-300 font-mono bg-white/[0.02] border border-white/5 px-2.5 py-1 block"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2.5: Experience - Professional Log */}
        <section id="experience" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24 relative overflow-hidden">
          {/* Animated Scanner Visual */}
          <div className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-[#00ff41]/[0.03] to-transparent pointer-events-none grid-scanner z-0 [animation-delay:4s]"></div>
          {/* Section Pattern: Radial dot field & Code Stamps */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
            backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute bottom-12 left-12 text-[8px] text-white/20 tracking-[0.4em] font-mono select-none">SYS_EXP_REF: 0x7F21</div>
          <div className="absolute top-12 right-12 text-[8px] text-[#00ff41]/45 tracking-[0.4em] font-mono select-none">STATUS // ACTIVE_RUN</div>

          {/* Section Pattern: Edge Markers */}
          <div className="absolute inset-y-0 right-0 w-px bg-white/5 mx-2 md:mx-4"></div>
          <div className="absolute top-1/2 right-0 w-8 h-px bg-[#00ff41]/20"></div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:p-16 w-full relative z-10 border border-white/[0.03] bg-[#0c0c0c]/40 backdrop-blur-sm">
            {/* HUD Corner Ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff41]/40"></div>

            <div className="flex items-center space-x-4 mb-20 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest leading-none">
                EXPERIENCE_LOG
              </h2>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>

            <div className="space-y-12">
              <div className="border-l border-[#00ff41] pl-6 py-2 animate-fade-up group relative">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 bg-[#00ff41] border border-black rounded-full"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <span className="text-[10px] text-[#00ff41] block font-bold tracking-widest mb-1">CURRENT_ROLE</span>
                    <h3 className="text-xl font-bold text-white">Next.js Web Developer</h3>
                    <p className="text-sm text-gray-400 font-bold">Bright Infonet <span className="text-gray-600 font-normal">/* Remote */</span></p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-3 py-1 border border-white/10 tracking-widest font-mono">
                      2024 – PRESENT
                    </span>
                  </div>
                </div>

                <div className="mt-6 text-sm text-gray-400 leading-relaxed max-w-3xl space-y-4 font-mono">
                  <p>
                    Working as a Full-Stack <strong className="text-white">Next.js Developer</strong> focused on building scalable web applications across frontend and backend systems. Experienced in developing APIs, authentication flows, RBAC systems, database architecture, responsive interfaces, and performance-optimized applications using <strong className="text-[#00ff41]">Next.js, React.js, JavaScript, and Tailwind CSS</strong>.
                  </p>
                  <p>
                    Contributed to complex projects involving dynamic page builders, validation systems, pharmaceutical workflows, SEO optimization, and production-ready application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2.7: Education - Academic Log */}
        <section id="education" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24 relative overflow-hidden">
          {/* Animated Scanner Visual */}
          <div className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-[#00ff41]/[0.03] to-transparent pointer-events-none grid-scanner z-0 [animation-delay:8s]"></div>
          {/* Section Pattern: Scanning Matrix Lines & Code Stamps */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ 
            backgroundImage: 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
            backgroundSize: '80px 100%'
          }}></div>
          <div className="absolute top-12 left-12 text-[8px] text-white/20 tracking-[0.4em] font-mono select-none">SYS_EDU_REF: 0xBC4E</div>
          <div className="absolute bottom-12 right-12 text-[8px] text-[#00ff41]/45 tracking-[0.4em] font-mono select-none">ACAD_INDEX // CLASS_A</div>

          {/* Section Pattern: Edge Markers */}
          <div className="absolute inset-y-0 left-0 w-px bg-white/5 mx-2 md:mx-4"></div>
          <div className="absolute top-1/2 left-0 w-8 h-px bg-[#00ff41]/20"></div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:p-16 w-full relative z-10 border border-white/[0.03] bg-[#0c0c0c]/40 backdrop-blur-sm">
            {/* HUD Corner Ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff41]/40"></div>

            <div className="flex items-center space-x-4 mb-20 animate-fade-up">
              <h2 className="text-2xl md:text-3xl font-bold text-white tracking-widest leading-none">
                ACADEMIC_RECORD
              </h2>
              <div className="flex-grow h-px bg-white/10"></div>
            </div>

            <div className="space-y-12">
              {/* Education Item 1 */}
              <div className="border-l border-white/10 pl-6 py-2 animate-fade-up group relative hover:border-[#00ff41] transition-colors duration-300">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 bg-gray-800 group-hover:bg-[#00ff41] border border-black rounded-full transition-colors duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <div>
                    <span className="text-[10px] text-[#00ff41] block font-bold tracking-widest mb-1">DEGREE_SYS</span>
                    <h3 className="text-xl font-bold text-white">BS in Computer Science</h3>
                    <p className="text-sm text-gray-400 font-bold">Gujarat Arts & Science College <span className="text-gray-600 font-normal">/* Ahmedabad, India */</span></p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-3 py-1 border border-white/10 tracking-widest font-mono">
                      2023 – 2026
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="text-xs font-bold text-[#00ff41] bg-[#00ff41]/5 px-2.5 py-1 border border-[#00ff41]/10 tracking-wider font-mono">
                    GPA: 7.6 / 10
                  </span>
                </div>
              </div>

              {/* Education Item 2 */}
              <div className="border-l border-white/10 pl-6 py-2 animate-fade-up group relative hover:border-[#00ff41] transition-colors duration-300">
                <div className="absolute -left-[5px] top-4 w-2.5 h-2.5 bg-gray-800 group-hover:bg-[#00ff41] border border-black rounded-full transition-colors duration-300"></div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#00ff41] block font-bold tracking-widest mb-1">SECONDARY_SYS</span>
                    <h3 className="text-xl font-bold text-white">Higher Secondary Education (12th – PCM)</h3>
                    <p className="text-sm text-gray-400 font-bold">Vidyamangal School <span className="text-gray-600 font-normal">/* Surat, India */</span></p>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-xs font-bold text-gray-500 bg-white/5 px-3 py-1 border border-white/10 tracking-widest font-mono">
                      2021 – 2022
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Projects - Clean Grid */}
        <section id="projects" className="min-h-screen flex items-center justify-center bg-[#000] py-24 relative overflow-hidden">
          {/* Animated Scanner Visual */}
          <div className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-[#00ff41]/[0.03] to-transparent pointer-events-none grid-scanner z-0 [animation-delay:2s]"></div>
          {/* Section Pattern: Grid Grid & Dot */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', 
            backgroundSize: '40px 40px, 40px 40px'
          }}></div>
          <div className="absolute top-12 right-12 text-[8px] text-white/20 tracking-[0.4em] font-mono select-none">SYS_WORKS_REF: 0x301D</div>
          <div className="absolute bottom-12 left-12 text-[8px] text-[#00ff41]/45 tracking-[0.4em] font-mono select-none">PORTFOLIO_RELEASE // V3.0</div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:p-16 w-full relative z-10 border border-white/[0.03] bg-[#0c0c0c]/40 backdrop-blur-sm">
            {/* HUD Corner Ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff41]/40"></div>

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 animate-fade-up">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter uppercase leading-none mb-4">
                  SELECTED_WORKS
                </h2>
                <div className="h-1 w-12 bg-[#00ff41]"></div>
              </div>
              <p className="text-[10px] text-gray-600 mt-6 md:mt-0 font-bold tracking-[0.3em]">VERSION_03.2024</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Dermatocare',
                  type: 'FULL_STACK',
                  description: 'A full-stack healthcare platform built with Next.js, where I handled the project end-to-end — from database architecture design to frontend, backend, and deployment workflows. Developed scalable APIs, implemented RBAC, authentication systems (Google Auth / Email verification), a dynamic page builder, rate limiting, and SEO optimization.',
                  tech: ['Next.js', 'React.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Authentication', 'RBAC', 'SEO'],
                  id: 'dermatocare',
                  url: 'https://dermatocare.com'
                },
                {
                  title: 'Harom India Safety Database',
                  type: 'FRONTEND_&_SYSTEMS',
                  description: 'A pharmaceutical safety management system inspired by enterprise platforms like Oracle safety systems. Worked on the frontend implementing complex ICSR pharmaceutical workflows, business rules, Zod validation, cross-page validations, and complex multi-step forms with Redux.',
                  tech: ['Next.js', 'JavaScript', 'Redux Toolkit', 'Zod', 'Form Management', 'Pharmaceutical Logic'],
                  id: 'harom-india-safety-database',
                  url: 'https://www.haromindia.com'
                }
              ].map((project, index) => (
                <div 
                  key={index} 
                  className="animate-fade-up bg-[#0c0c0c] border border-white/5 p-8 md:p-10 hover:bg-[#0f0f0f] transition-all duration-500 group relative flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[9px] text-[#00ff41] font-bold tracking-widest bg-[#00ff41]/5 px-2.5 py-1 border border-[#00ff41]/10">
                        {project.type}
                      </span>
                      <span className="text-[9px] text-gray-600 font-bold tracking-widest">
                        0{index + 1}_PRJ
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#00ff41] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-gray-400 font-mono leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((t) => (
                        <span key={t} className="text-[9px] text-gray-500 bg-white/[0.02] px-2 py-0.5 border border-white/5 font-mono">
                          {t}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-[10px] font-bold tracking-[0.2em] text-[#00ff41] no-underline hover:underline"
                    >
                      <span className="mr-3">LAUNCH_SYSTEM</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">--&gt;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Contact - Minimal Connection */}
        <section id="contact" className="min-h-screen flex items-center justify-center bg-[#0a0a0a] py-24 relative overflow-hidden">
          {/* Animated Scanner Visual */}
          <div className="absolute inset-x-0 h-[200px] bg-gradient-to-b from-transparent via-[#00ff41]/[0.03] to-transparent pointer-events-none grid-scanner z-0 [animation-delay:6s]"></div>

          {/* Section Pattern: Tech target/radar circles */}
          <div className="absolute inset-0 opacity-[0.06] pointer-events-none flex items-center justify-center">
            <div className="w-[600px] h-[600px] border border-white rounded-full animate-[spin_100s_linear_infinite] flex items-center justify-center">
              <div className="w-[450px] h-[450px] border border-dashed border-white rounded-full flex items-center justify-center">
                <div className="w-[300px] h-[300px] border border-white rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="absolute top-12 left-12 text-[8px] text-[#00ff41]/45 tracking-[0.4em] font-mono select-none">SYS_CONN_REF: 0x88FE</div>
          <div className="absolute bottom-12 right-12 text-[8px] text-white/20 tracking-[0.4em] font-mono select-none">PORT // 443_SSL_SECURE</div>

          <div className="max-w-4xl mx-auto px-6 py-12 md:p-16 w-full relative z-10 border border-white/[0.03] bg-[#0c0c0c]/40 backdrop-blur-sm">
            {/* HUD Corner Ticks */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#00ff41]/40"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#00ff41]/40"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-24 animate-fade-up tracking-tighter text-center">
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