'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('IDLE'); // IDLE, AUTHENTICATING, SUCCESS, ERROR
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    setStatus('AUTHENTICATING');
    
    // Simulate authentication lag
    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        setStatus('SUCCESS');
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);
      } else {
        setStatus('ERROR');
        setTimeout(() => setStatus('IDLE'), 2000);
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-400 font-mono relative overflow-hidden flex items-center justify-center p-6">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        ></div>
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#00ff41]/20 to-transparent"></div>
      </div>

      <div className="max-w-md w-full relative z-10">
        {/* Terminal Header */}
        <div className="bg-[#111] border border-white/5 p-4 flex items-center justify-between mb-px">
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
            <div className="w-2 h-2 rounded-full bg-[#00ff41]/20"></div>
          </div>
          <div className="text-[9px] font-bold tracking-[0.3em] text-gray-600">SECURITY_SHELL_V4</div>
        </div>

        {/* Login Body */}
        <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 shadow-2xl">
          <header className="mb-10 text-center">
            <h1 className="text-xl font-bold text-white tracking-[0.4em] uppercase mb-2">ACCESS_LOGIN</h1>
            <p className="text-[10px] text-gray-600 font-bold tracking-widest">RESTRICTED_AREA // ADMIN_ONLY</p>
          </header>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-2">
              <label className="text-[9px] text-gray-700 font-bold tracking-widest uppercase block">TERMINAL_ID</label>
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="w-full bg-[#111] border border-white/5 p-4 text-white text-xs focus:border-[#00ff41] outline-none transition-colors"
                placeholder="ENTER_UID..."
              />
            </div>

            <div className="space-y-2">
              <label className="text-[9px] text-gray-700 font-bold tracking-widest uppercase block">SECURE_PASS</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-[#111] border border-white/5 p-4 text-white text-xs focus:border-[#00ff41] outline-none transition-colors"
                placeholder="••••••••"
              />
            </div>

            <div className="pt-4">
              <button 
                type="submit" 
                disabled={status === 'AUTHENTICATING'}
                className="w-full bg-transparent border border-[#00ff41] py-4 text-[#00ff41] text-[10px] font-bold tracking-[0.5em] uppercase hover:bg-[#00ff41] hover:text-black transition-all duration-300 relative overflow-hidden group disabled:opacity-50"
              >
                <span className="relative z-10">
                  {status === 'AUTHENTICATING' ? 'VERIFYING...' : 'INITIATE_AUTH'}
                </span>
                <div className="absolute inset-0 bg-[#00ff41]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
            </div>
          </form>

          {/* Status Indicators */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center justify-between text-[8px] font-bold tracking-widest">
                <span className="text-gray-700">ENCRYPTION:</span>
                <span className="text-gray-500">AES-256_ACTIVE</span>
              </div>
              <div className="flex items-center justify-between text-[8px] font-bold tracking-widest">
                <span className="text-gray-700">STATUS:</span>
                <span className={status === 'SUCCESS' ? 'text-[#00ff41]' : status === 'ERROR' ? 'text-red-500' : 'text-gray-500 italic'}>
                  {status === 'IDLE' && 'AWAITING_INPUT'}
                  {status === 'AUTHENTICATING' && 'PROCESSING_HANDSHAKE...'}
                  {status === 'SUCCESS' && 'ACCESS_GRANTED'}
                  {status === 'ERROR' && 'CREDENTIAL_MISMATCH'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 text-center">
          <Link href="/" className="text-[9px] font-bold text-gray-700 hover:text-[#00ff41] tracking-[0.4em] uppercase transition-colors">
            &lt; Return_to_Root
          </Link>
        </div>
      </div>

      {/* Aesthetic Scanning Line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="h-40 w-full bg-gradient-to-b from-transparent via-[#00ff41]/[0.02] to-transparent absolute top-0 animate-[scanVertical_10s_linear_infinite]"></div>
      </div>

      <style jsx global>{`
        @keyframes scanVertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
      `}</style>
    </div>
  );
}
