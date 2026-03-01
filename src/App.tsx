import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import { Navbar } from './components/Navbar';
import CommunitiesPage from './components/CommunitiesPage';
import { EconomicCellsPage } from './components/EconomicCellsPage';
import { ArchitecturePage } from './components/ArchitecturePage';
import { CommunityTradingPage } from './components/CommunityTradingPage';
import { DeveloperPage } from './components/DeveloperPage';
import { BNPLPage } from './components/BNPLPage';
import { ConnectCommunitiesPage } from './components/ConnectCommunitiesPage';

export type ViewState = 'landing' | 'dashboard' | 'communities' | 'economic-cells' | 'architecture' | 'community-trading' | 'developers' | 'bnpl' | 'connect-communities';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#008752]/30 text-[10px] md:text-sm">
      <Navbar setView={setView} currentView={view} />
      
      <main>
        {view === 'landing' && (
          <LandingPage />
        )}
        {view === 'dashboard' && (
          <Dashboard />
        )}
        {view === 'communities' && (
          <CommunitiesPage />
        )}
        {view === 'economic-cells' && (
          <EconomicCellsPage />
        )}
        {view === 'architecture' && (
          <ArchitecturePage />
        )}
        {view === 'community-trading' && (
          <CommunityTradingPage />
        )}
        {view === 'developers' && (
          <DeveloperPage />
        )}
        {view === 'bnpl' && (
          <BNPLPage />
        )}
        {view === 'connect-communities' && (
          <ConnectCommunitiesPage />
        )}
      </main>

      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-sm font-black uppercase tracking-widest">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setView('landing')}>
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-[#008752]/10 rounded-xl blur-md group-hover:bg-[#008752]/20 transition-colors" />
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/helloopass-logo-34ed4d53-1772394210950.webp" 
                alt="HellOOpass Logo" 
                className="h-10 w-10 object-contain relative z-10 group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
            <span className="text-2xl font-black tracking-tighter group-hover:translate-x-1 transition-transform">HellOOpass</span>
          </div>
          <p className="text-slate-400">
            © 2025 HellOOpass. Reclaiming the Economics of Community.
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-[#FFD700] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#FFD700] transition-colors">Contact</a>
          </div>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;