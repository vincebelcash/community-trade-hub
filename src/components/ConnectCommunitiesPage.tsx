import React from 'react';
import { motion } from 'framer-motion';
import { Globe, RefreshCw, Link2, MapPin, Zap, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const ConnectCommunitiesPage = () => {
  return (
    <div className="pt-32 pb-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-[10px] font-bold tracking-widest mb-10 uppercase border border-blue-100 shadow-sm"
          >
            <Globe className="h-4 w-4" />
            <span>Borderless Connectivity</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase italic leading-none">Connect <span className="text-blue-600">Global</span></h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            elloopass enables autonomous community connections that transcend geographic boundaries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {[
            { 
              title: 'Cross-Border Trade', 
              icon: Globe, 
              desc: 'Eliminate middlemen with direct peer-to-cell-to-peer international trade settlements.',
              color: 'text-blue-600',
              bg: 'bg-blue-600/10'
            },
            { 
              title: 'Autonomous Sync', 
              icon: RefreshCw, 
              desc: 'Community cells automatically synchronize trade data and trust scores via the protocol.',
              color: 'text-blue-500',
              bg: 'bg-blue-500/10'
            },
            { 
              title: 'Smart Bridging', 
              icon: Link2, 
              desc: 'Bridge value between diverse economic ecosystems effortlessly with our connectivity tools.',
              color: 'text-slate-900',
              bg: 'bg-slate-100'
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] shadow-sm hover:shadow-xl hover:bg-white hover:border-blue-100 transition-all duration-300 group"
            >
              <div className={`h-14 w-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-sm`}>
                <item.icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase italic tracking-tight">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl mb-32 group">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/global-connections-c37e697b-1772395283889.webp" 
            alt="Global Connections" 
            className="w-full h-[600px] object-cover transition-transform duration-[3000ms] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent flex items-end p-12">
            <div className="max-w-2xl text-white">
              <div className="flex items-center space-x-2 mb-6 bg-blue-600 px-4 py-1.5 rounded-full w-fit shadow-lg">
                <MapPin className="h-3.5 w-3.5" />
                <span className="text-[9px] font-bold uppercase tracking-widest">Active Corridors</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 italic uppercase tracking-tight leading-none">East Africa to <br /> SEA Corridor</h3>
              <p className="text-lg font-medium opacity-90 leading-relaxed mb-10">
                See how agricultural cells connect directly with logistics cells to facilitate frictionless trade.
              </p>
              <Button size="lg" className="h-16 px-10 text-base font-bold uppercase tracking-widest rounded-xl bg-white text-slate-900 hover:bg-blue-600 hover:text-white transition-all shadow-xl transform hover:scale-105">
                View Network Map <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCommunitiesPage;