import React, { useState, useEffect } from 'react';
import { Toaster } from 'sonner';
import { LandingPage } from './components/LandingPage';
import { Dashboard } from './components/Dashboard';
import { Navbar } from './components/Navbar';
import { CommunitiesPage } from './components/CommunitiesPage';
import { EconomicCellsPage } from './components/EconomicCellsPage';

export type ViewState = 'landing' | 'dashboard' | 'communities' | 'economic-cells';

function App() {
  const [view, setView] = useState<ViewState>('landing');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-[#008752]/30">
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
      </main>

      <footer className="py-12 px-6 border-t border-slate-800 bg-slate-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView('landing')}>
            <div className="w-10 h-10 bg-gradient-to-br from-[#008752] via-[#FFD700] to-[#EF3340] rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-[#008752]/20 text-white">H</div>
            <span className="text-xl font-bold tracking-tight">HellOOpass</span>
          </div>
          <p className="text-slate-400 text-sm">
            © 2025 HellOOpass. Reclaiming the Economics of Community.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
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