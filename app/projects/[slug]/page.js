'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

const projectsData = {
  'e-commerce-platform': {
    title: 'E-Commerce Platform',
    about: 'A full-featured digital marketplace designed for high-performance and scalability. It handles everything from product discovery to secure checkout.',
    work: [
      'Developed the core Next.js architecture using App Router for optimal routing.',
      'Implemented server-side cart logic and session management.',
      'Integrated Stripe API for secure payment processing.',
      'Designed a responsive, conversion-focused frontend using Tailwind CSS.',
      'Built a robust product filtering system using search parameters.'
    ],
    tech: ['Next.js', 'Stripe', 'Tailwind', 'Node.js', 'MongoDB'],
    link: 'https://github.com/ManthanChaudhari/ecommerce'
  },
  'social-core': {
    title: 'Social Core',
    about: 'A robust backbone for social networking applications, focusing on real-time interactions and data consistency.',
    work: [
      'Architected the real-time messaging system using WebSockets.',
      'Designed a scalable MongoDB schema for complex social relationships.',
      'Created a comprehensive RESTful API using Express.',
      'Handled server-side authentication and JWT management.',
      'Optimized image processing and storage workflows.'
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    link: 'https://github.com/ManthanChaudhari/social-core'
  },
  'portfolio-os': {
    title: 'Portfolio OS',
    about: 'This very portfolio. A minimalist, terminal-inspired interface designed to showcase technical expertise through a unique aesthetic.',
    work: [
      'Developed the custom "Minimalist Console" design system.',
      'Implemented complex background animations using GSAP.',
      'Created a dynamic layout that bridges technical detail with clean minimalism.',
      'Integrated Web3Forms for serverless contact functionality.',
      'Optimized performance for smooth browsing and instant load times.'
    ],
    tech: ['Next.js', 'GSAP', 'Tailwind', 'Three.js'],
    link: 'https://github.com/ManthanChaudhari/manthan.dev'
  }
};

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug;
  const project = projectsData[slug];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] text-white font-mono flex items-center justify-center p-4">
        <div className="text-center">
          <h1 className="text-xl mb-4 text-[#00ff41]">ERROR_404: PROJECT_NOT_FOUND</h1>
          <Link href="/" className="text-xs border border-[#00ff41] px-4 py-2 hover:bg-[#00ff41] hover:text-black transition-all">
            RETURN_TO_CORE
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-mono selection:bg-[#00ff41] selection:text-black relative">
       {/* Background Pattern Elements */}
       <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
      </div>

      <nav className="border-b border-white/5 p-6 animate-fade-in">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="group flex items-center text-xs font-bold tracking-widest text-gray-500 hover:text-[#00ff41] transition-colors">
            <span className="mr-2 opacity-50 group-hover:translate-x-[-4px] transition-transform">&lt;--</span>
            BACK_TO_ROOT
          </Link>
          <div className="text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em]">
            FILE_ID: {slug.toUpperCase()}
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-20 relative z-10">
        <header className="mb-20">
          <div className="flex items-center space-x-4 mb-6">
            <div className="h-px flex-grow bg-white/5"></div>
            <span className="text-[10px] text-[#00ff41] font-bold tracking-[0.4em]">PROJECT_DETAILS</span>
            <div className="h-px flex-grow bg-white/5"></div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase mb-8">
            {project.title}<span className="text-[#00ff41]">_</span>
          </h1>
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span key={t} className="text-[10px] bg-white/5 border border-white/10 px-3 py-1 text-gray-400">
                {t}
              </span>
            ))}
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2 space-y-16">
            <section>
              <h2 className="text-sm font-bold text-white tracking-[0.3em] mb-6 flex items-center">
                <span className="text-[#00ff41] mr-2">/</span>ABOUT_THE_PROJECT
              </h2>
              <p className="text-gray-400 leading-relaxed text-sm md:text-base italic">
                {project.about}
              </p>
            </section>

            <section>
              <h2 className="text-sm font-bold text-white tracking-[0.3em] mb-6 flex items-center">
                <span className="text-[#00ff41] mr-2">/</span>CORE_CONTRIBUTIONS
              </h2>
              <ul className="space-y-4">
                {project.work.map((item, i) => (
                  <li key={i} className="flex items-start text-sm group">
                    <span className="text-[#00ff41] mr-4 mt-1 opacity-40 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                    <span className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="space-y-8">
            <div className="bg-white/[0.02] border border-white/5 p-8">
              <h3 className="text-[10px] text-gray-600 font-bold tracking-[0.3em] mb-6 uppercase">System_Links</h3>
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-4 border border-[#00ff41] text-[#00ff41] text-center text-[10px] font-bold tracking-[0.2em] hover:bg-[#00ff41] hover:text-black transition-all mb-4"
              >
                ACCESS_REPOSITORY
              </a>
              <button 
                className="block w-full py-4 border border-white/10 text-white/50 text-center text-[10px] font-bold tracking-[0.2em] cursor-not-allowed uppercase"
              >
                LIVE_DEPLOYMENT (DOWN)
              </button>
            </div>

            <div className="text-[9px] text-gray-800 font-bold leading-relaxed tracking-widest uppercase">
              // DATA_INTEGRITY_VERIFIED <br/>
              // ENCRYPTION_ACTIVE <br/>
              // SOURCE: MANTHAN.SYS
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 py-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-700 tracking-[0.5em] uppercase">End_Of_Document</p>
      </footer>
    </div>
  );
}
