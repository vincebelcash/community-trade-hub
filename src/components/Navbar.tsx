import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, Bell, User, Users, LogOut, Settings, ShieldCheck, Zap, ChevronDown, ChevronRight, Globe, ShoppingBag, Link, Landmark, Network, Share2, Layers, Code } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { ViewState } from '../App';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export function Navbar({ setView, currentView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);

  const scrollToEcosystem = () => {
    setView('landing');
    setTimeout(() => {
      const element = document.getElementById('ecosystem');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsOpen(false);
  };

  const showComingSoon = (feature: string) => {
    toast.info(`${feature} platform features are currently being synchronized with our biometric engine. Check back soon!`, {
      style: { background: '#4f46e5', color: '#fff' }
    });
  };

  const howItWorksItems = [
    { 
      title: 'Distributed Economic cells System', 
      icon: <Network size={14} />,
      view: 'economic-cells' as ViewState
    },
    { 
      title: 'Your own community trading network', 
      icon: <Share2 size={14} />,
      view: 'community-trading' as ViewState
    },
    { 
      title: 'Define favorite services', 
      icon: <Settings size={14} />,
      subItems: [
        { title: 'At shop', icon: <ShoppingBag size={12} /> },
        { title: 'Online', icon: <Globe size={12} /> }
      ]
    },
    { 
      title: 'Platform for African developers', 
      icon: <Code size={14} />,
      view: 'developers' as ViewState
    },
    { 
      title: 'Buy Now Pay Later', 
      icon: <Zap size={14} />,
      view: 'bnpl' as ViewState
    },
    { 
      title: 'Connect communities', 
      icon: <Link size={14} />,
      view: 'connect-communities' as ViewState
    },
    { title: 'Automated Clearing Houses', icon: <Landmark size={14} />, view: 'ach' as ViewState },
    { title: 'Main partners', icon: <Users size={14} /> },
  ];

  const isHowItWorksActive = ['economic-cells', 'community-trading', 'developers', 'bnpl', 'connect-communities', 'ach'].includes(currentView);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-indigo-950/80 backdrop-blur-md border-b border-indigo-900/50 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between font-black uppercase tracking-widest text-[10px]">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setView('landing')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 via-violet-500 to-sky-400 rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-indigo-500/20 text-white transition-transform group-hover:scale-110">
              e
          </div>
          <span className="text-xl font-black tracking-tighter lowercase">elloopass</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView('landing')}
            className={`transition-colors ${currentView === 'landing' ? 'text-indigo-400' : 'text-indigo-200/60 hover:text-white'}`}
          >
            The Vision
          </button>
          
          <button 
            onClick={scrollToEcosystem}
            className="text-indigo-200/60 hover:text-sky-400 transition-colors flex items-center gap-2"
          >
            <Zap size={10} className="text-sky-400 animate-pulse" />
            Wildfire Growth
          </button>
          
          <button 
            onClick={() => setView('communities')}
            className={`transition-colors ${currentView === 'communities' ? 'text-indigo-400' : 'text-indigo-200/60 hover:text-white'}`}
          >
            Communities
          </button>

          <button 
            onClick={() => setView('architecture')}
            className={`transition-colors flex items-center gap-2 ${currentView === 'architecture' ? 'text-indigo-400' : 'text-indigo-200/60 hover:text-white'}`}
          >
            <Layers size={10} className="text-violet-400" />
            Architecture
          </button>

          {/* How It Works Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHowItWorksOpen(true)}
            onMouseLeave={() => setIsHowItWorksOpen(false)}
          >
            <button 
              className={`transition-colors flex items-center gap-1 py-4 ${isHowItWorksOpen || isHowItWorksActive ? 'text-indigo-400' : 'text-indigo-200/60 hover:text-white'}`}
            >
              How it works?
              <ChevronDown size={12} className={`transition-transform duration-300 ${isHowItWorksOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {isHowItWorksOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className="absolute top-full left-0 mt-0 w-72 bg-indigo-900 border border-indigo-800 rounded-2xl shadow-2xl overflow-hidden p-2"
                >
                  <div className="p-2 space-y-1">
                    {howItWorksItems.map((item, idx) => (
                      <div key={idx} className="group/item">
                        <button 
                          onClick={() => {
                            if (item.view) {
                              setView(item.view);
                              setIsHowItWorksOpen(false);
                            } else if (!item.subItems) {
                              showComingSoon(item.title);
                            }
                          }}
                          className={`w-full flex items-center justify-between px-3 py-2.5 ${currentView === item.view ? 'text-indigo-400 bg-indigo-800/50' : 'text-indigo-300'} hover:text-white hover:bg-indigo-800 rounded-lg transition-all ${item.subItems ? 'cursor-default' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-violet-400 group-hover/item:scale-110 transition-transform">{item.icon}</span>
                            {item.title}
                          </div>
                          {item.subItems && <ChevronRight size={12} className="text-indigo-600" />}
                        </button>
                        
                        {item.subItems && (
                          <div className="ml-9 mt-1 space-y-1 border-l border-indigo-800 pl-4 mb-2">
                            {item.subItems.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => showComingSoon(sub.title)}
                                className="w-full flex items-center gap-2 py-2 text-[9px] text-indigo-500 hover:text-indigo-300 transition-colors"
                              >
                                {sub.icon}
                                {sub.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          
          <div className="h-4 w-px bg-indigo-900" />

          <button 
            onClick={() => setView('dashboard')}
            className="px-6 py-2.5 bg-indigo-600 text-white rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-indigo-600/20 hover:bg-indigo-500"
          >
            <LayoutDashboard size={14} />
            Enter MTB
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-indigo-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
            <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-indigo-950 border-b border-indigo-900 overflow-hidden"
            >
            <div className="p-6 space-y-4 font-black uppercase tracking-widest text-[10px]">
                <button 
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 ${currentView === 'landing' ? 'text-indigo-400' : 'text-indigo-300'}`}
                >
                    Vision
                </button>
                <button 
                    onClick={() => { setView('communities'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 ${currentView === 'communities' ? 'text-indigo-400' : 'text-indigo-300'}`}
                >
                    Communities
                </button>

                <button 
                    onClick={() => { setView('architecture'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 flex items-center gap-2 ${currentView === 'architecture' ? 'text-indigo-400' : 'text-indigo-300'}`}
                >
                    <Layers size={14} className="text-violet-400" />
                    Architecture
                </button>

                {/* Mobile How It Works */}
                <div className="space-y-2">
                  <div className="text-indigo-500 pb-2 border-b border-indigo-900">How it works?</div>
                  <div className="pl-4 space-y-4 pt-2">
                    {howItWorksItems.map((item, idx) => (
                      <div key={idx}>
                        <button 
                          onClick={() => {
                            if (item.view) {
                                setView(item.view);
                                setIsOpen(false);
                            } else if (!item.subItems) {
                                showComingSoon(item.title);
                            }
                          }}
                          className={`block w-full text-left ${currentView === item.view ? 'text-indigo-400' : 'text-indigo-300'} hover:text-white flex items-center gap-2`}
                        >
                          {item.icon}
                          {item.title}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <button 
                    onClick={() => { setView('dashboard'); setIsOpen(false); }}
                    className="w-full bg-indigo-600 text-white py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
                >
                    <LayoutDashboard size={16} />
                    Enter Dashboard
                </button>
            </div>
            </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}