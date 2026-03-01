import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import ArchitecturePage from './components/ArchitecturePage';
import EconomicCellsPage from './components/EconomicCellsPage';
import CommunitiesPage from './components/CommunitiesPage';
import CommunityTradingPage from './components/CommunityTradingPage';
import DeveloperPage from './components/DeveloperPage';
import Dashboard from './components/Dashboard';
import BNPLPage from './components/BNPLPage';
import ConnectCommunitiesPage from './components/ConnectCommunitiesPage';
import { Test as TestFile } from './components/TestFile';
import { Toaster } from 'sonner';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/10">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/architecture" element={<ArchitecturePage />} />
            <Route path="/economic-cells" element={<EconomicCellsPage />} />
            <Route path="/communities" element={<CommunitiesPage />} />
            <Route path="/trading" element={<CommunityTradingPage />} />
            <Route path="/developer" element={<DeveloperPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/bnpl" element={<BNPLPage />} />
            <Route path="/connect" element={<ConnectCommunitiesPage />} />
            <Route path="/test" element={<TestFile />} />
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </main>
        
        <footer className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
              <div className="col-span-1 md:col-span-2">
                <span className="text-3xl font-black tracking-tighter uppercase italic text-blue-600">
                  HellOOpass
                </span>
                <p className="mt-6 text-slate-400 max-w-md text-lg leading-relaxed">
                  The foundational protocol for global community-driven commerce. Empowering networks to build, trade, and scale autonomously.
                </p>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-8 text-blue-500">Product</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-300">
                  <li><a href="/architecture" className="hover:text-blue-500 transition-colors">Architecture</a></li>
                  <li><a href="/communities" className="hover:text-blue-500 transition-colors">Communities</a></li>
                  <li><a href="/economic-cells" className="hover:text-blue-500 transition-colors">Economic Cells</a></li>
                  <li><a href="/trading" className="hover:text-blue-500 transition-colors">Trading</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest mb-8 text-blue-500">Resources</h4>
                <ul className="space-y-4 text-sm font-medium text-slate-300">
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Documentation</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Whitepaper</a></li>
                  <li><a href="#" className="hover:text-blue-500 transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-24 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-widest text-slate-500">
              <div>© 2024 HellOOpass Foundation</div>
              <div className="flex space-x-12">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster position="bottom-right" richColors />
      </div>
    </Router>
  );
}

export default App;