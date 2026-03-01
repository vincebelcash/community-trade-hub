import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { CommunitiesPage } from './components/CommunitiesPage';
import { EconomicCellsPage } from './components/EconomicCellsPage';
import { ArchitecturePage } from './components/ArchitecturePage';
import { CommunityTradingPage } from './components/CommunityTradingPage';
import { DeveloperPage } from './components/DeveloperPage';
import { BNPLPage } from './components/BNPLPage';
import { ConnectCommunitiesPage } from './components/ConnectCommunitiesPage';
import { AutomatedClearingHousePage } from './components/AutomatedClearingHousePage';

export type ViewState = 'landing' | 'dashboard' | 'communities' | 'economic-cells' | 'architecture' | 'community-trading' | 'developers' | 'bnpl' | 'connect-communities' | 'ach';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-indigo-950 text-white selection:bg-indigo-500/30 text-[10px] md:text-sm">
      <Navbar setView={setView} currentView={view} />
      
      <main>
        {view === 'landing' && (
          <LandingPage onEnterApp={() => setView('dashboard')} />
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
        {view === 'ach' && (
          <AutomatedClearingHousePage />
        )}
      </main>

      <footer className="py-12 px-6 border-t border-indigo-900 bg-indigo-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] md:text-sm font-black uppercase tracking-widest">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-violet-500 to-sky-400 rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-500/20 text-white">e</div>
            <span className="text-xl font-bold tracking-tight lowercase">elloopass</span>
          </div>
          <p className="text-indigo-400">
            © 2025 elloopass. Reclaiming the Economics of Community.
          </p>
          <div className="flex gap-6 text-indigo-400">
            <a href="#" className="hover:text-indigo-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Terms</a>
            <a href="#" className="hover:text-indigo-200 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
      <Toaster position="top-center" richColors />
    </div>
  );
}

export default App;