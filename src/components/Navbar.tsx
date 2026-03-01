import React, { useState } from 'react';
import { Menu, X, LayoutDashboard, Bell, User, LogOut, Settings, ShieldCheck, Zap, ChevronDown, ChevronRight, Globe, ShoppingBag, CreditCard, Link, Landmark, Network, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import { ViewState } from '../App';

interface NavbarProps {
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

export function Navbar({ setView, currentView }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);

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
      style: { background: '#008752', color: '#fff' }
    });
  };

  const howItWorksItems = [
    { 
      title: 'Distributed Economic cells System', 
      icon: <Network size={14} />,
      view: 'economic-cells' as ViewState
    },
    { title: 'Your own community trading network', icon: <Share2 size={14} /> },
    { 
      title: 'Define favorite services', 
      icon: <Settings size={14} />,
      subItems: [
        { title: 'At shop', icon: <ShoppingBag size={12} /> },
        { title: 'Online', icon: <Globe size={12} /> }
      ]
    },
    { title: 'Your own community payment acceptance network', icon: <CreditCard size={14} /> },
    { title: 'Buy Now Pay Later', icon: <Zap size={14} /> },
    { title: 'Connect communities', icon: <Link size={14} /> },
    { title: 'Automated Clearing Houses', icon: <Landmark size={14} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800 h-20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => setView('landing')}
        >
          <div className="w-10 h-10 bg-gradient-to-br from-[#008752] via-[#FFD700] to-[#EF3340] rounded-lg flex items-center justify-center font-black text-xl shadow-lg shadow-[#008752]/20 text-white transition-transform group-hover:scale-110">
              H
          </div>
          <span className="text-xl font-black tracking-tighter">HellOOpass</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button 
            onClick={() => setView('landing')}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${currentView === 'landing' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
          >
            The Vision
          </button>
          
          <button 
            onClick={scrollToEcosystem}
            className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-[#EF3340] transition-colors flex items-center gap-2"
          >
            <Zap size={10} className="text-[#EF3340] animate-pulse" />
            Wildfire Growth
          </button>
          
          <button 
            onClick={() => setView('communities')}
            className={`text-[10px] font-black uppercase tracking-widest transition-colors ${currentView === 'communities' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
          >
            Communities
          </button>

          {/* How It Works Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsHowItWorksOpen(true)}
            onMouseLeave={() => setIsHowItWorksOpen(false)}
          >
            <button 
              className={`text-[10px] font-black uppercase tracking-widest transition-colors flex items-center gap-1 py-4 ${isHowItWorksOpen || currentView === 'economic-cells' ? 'text-[#FFD700]' : 'text-slate-400 hover:text-white'}`}
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
                  className="absolute top-full left-0 mt-0 w-72 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-2"
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
                          className={`w-full flex items-center justify-between px-3 py-2.5 text-[10px] font-black uppercase tracking-wider text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all ${item.subItems ? 'cursor-default' : ''}`}
                        >
                          <div className="flex items-center gap-3">
                            <span className="text-[#008752] group-hover/item:scale-110 transition-transform">{item.icon}</span>
                            {item.title}
                          </div>
                          {item.subItems && <ChevronRight size={12} className="text-slate-600" />}
                        </button>
                        
                        {item.subItems && (
                          <div className="ml-9 mt-1 space-y-1 border-l border-slate-800 pl-4 mb-2">
                            {item.subItems.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => showComingSoon(sub.title)}
                                className="w-full flex items-center gap-2 py-2 text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-[#FFD700] transition-colors"
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
          
          <div className="h-4 w-px bg-slate-800" />

          {currentView === 'dashboard' ? (
            <div className="flex items-center gap-4">
                <button 
                    onClick={() => {
                        setHasNotifications(false);
                        toast.info('You have 2 new trade confirmations.', { style: { background: '#008752', color: '#fff' } });
                    }}
                    className="relative p-2 text-slate-400 hover:text-white transition-colors"
                >
                    <Bell size={20} />
                    {hasNotifications && <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF3340] rounded-full ring-2 ring-slate-950" />}
                </button>
                
                <div className="relative">
                    <button 
                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                        className="flex items-center gap-2 pl-2 pr-1 py-1 bg-slate-900 border border-slate-800 rounded-full hover:border-slate-700 transition-all"
                    >
                        <span className="text-[10px] font-black uppercase pl-2 text-slate-300">Alex</span>
                        <div className="w-8 h-8 rounded-full bg-[#008752] flex items-center justify-center font-bold text-xs">AR</div>
                    </button>

                    <AnimatePresence>
                        {isProfileOpen && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                className="absolute top-full right-0 mt-4 w-56 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden p-2"
                            >
                                <div className="px-4 py-3 border-b border-slate-800 mb-2">
                                    <p className="text-xs font-bold">Alex Rivera</p>
                                    <div className="flex items-center gap-1.5 mt-1">
                                        <ShieldCheck size={12} className="text-[#008752] transition-all" />
                                        <span className="text-[8px] font-black text-slate-500 uppercase tracking-tighter">Biometric Verified</span>
                                    </div>
                                </div>
                                <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                    <User size={16} /> Profile
                                </button>
                                <button className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                                    <Settings size={16} /> Settings
                                </button>
                                <button 
                                    onClick={() => { setView('landing'); setIsProfileOpen(false); }}
                                    className="w-full flex items-center gap-3 px-4 py-2 text-xs font-bold text-[#EF3340] hover:bg-[#EF3340]/10 rounded-lg transition-colors mt-2"
                                >
                                    <LogOut size={16} /> Logout
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
          ) : (
            <button 
              onClick={() => setView('dashboard')}
              className="px-6 py-2.5 bg-[#008752] text-white rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#008752]/20"
            >
              <LayoutDashboard size={14} />
              Enter MTB
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
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
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
            >
            <div className="p-6 space-y-4">
                <button 
                    onClick={() => { setView('landing'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 text-xs font-black uppercase tracking-widest ${currentView === 'landing' ? 'text-[#FFD700]' : 'text-slate-400'}`}
                >
                    Vision
                </button>
                <button 
                    onClick={scrollToEcosystem}
                    className="block w-full text-left py-2 text-xs font-black uppercase tracking-widest text-slate-400"
                >
                    Wildfire Growth
                </button>
                <button 
                    onClick={() => { setView('communities'); setIsOpen(false); }}
                    className={`block w-full text-left py-2 text-xs font-black uppercase tracking-widest ${currentView === 'communities' ? 'text-[#FFD700]' : 'text-slate-400'}`}
                >
                    Communities
                </button>

                {/* Mobile How It Works */}
                <div className="space-y-2">
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 pb-2 border-b border-slate-800">How it works?</div>
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
                          className="block w-full text-left text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white flex items-center gap-2"
                        >
                          {item.icon}
                          {item.title}
                        </button>
                        {item.subItems && (
                          <div className="pl-8 mt-4 space-y-4">
                            {item.subItems.map((sub, sIdx) => (
                              <button
                                key={sIdx}
                                onClick={() => showComingSoon(sub.title)}
                                className="block w-full text-left text-[9px] font-black uppercase tracking-widest text-slate-500 hover:text-[#FFD700] flex items-center gap-2"
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
                </div>

                <button 
                    onClick={() => { setView('dashboard'); setIsOpen(false); }}
                    className="w-full bg-[#008752] text-white font-black text-xs uppercase tracking-widest py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-[#008752]/20"
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