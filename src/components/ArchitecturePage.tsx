import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Zap, Shield, Database, Workflow, CheckCircle2 } from 'lucide-react';

const ArchitecturePage = () => {
  return (
    <div className="pt-32 pb-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block p-4 bg-blue-600/10 rounded-2xl text-blue-600 mb-8"
          >
            <Layers className="h-12 w-12" />
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase italic">System <span className="text-blue-600">Architecture</span></h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            HellOOpass is built on a modular, decentralized foundation designed for high-throughput trade and community sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute -inset-6 bg-blue-600/5 rounded-[3rem] blur-3xl" />
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/decentralized-architecture-01e433e2-1772395283889.webp" 
                alt="Architecture Diagram" 
                className="relative w-full h-auto rounded-[2rem] border-4 border-white shadow-2xl shadow-blue-600/5"
              />
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 space-y-12"
          >
            {[
              { 
                icon: Database, 
                title: 'Distributed State Layer', 
                desc: 'Every HellOOpass economic cell maintains its own verifiable state, ensuring local control while maintaining global interoperability.',
                color: 'text-blue-600',
                bg: 'bg-blue-600/10'
              },
              { 
                icon: Workflow, 
                title: 'Trade Execution Engine', 
                desc: 'A high-performance matching engine that facilitates cross-cell trades with sub-second finality and guaranteed settlement.',
                color: 'text-blue-500',
                bg: 'bg-blue-500/10'
              },
              { 
                icon: Shield, 
                title: 'Community Consensus', 
                desc: 'Decision-making is baked into the protocol, allowing cells to vote on risk parameters and membership autonomously.',
                color: 'text-slate-900',
                bg: 'bg-slate-100'
              }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 group">
                <div className={`shrink-0 w-16 h-16 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm`}>
                  <item.icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 uppercase italic tracking-tight">{item.title}</h3>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="p-12 md:p-24 bg-slate-900 text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
            {[
              { value: '10k+', label: 'TPS', color: 'text-blue-500' },
              { value: '0ms', label: 'Downtime', color: 'text-blue-400' },
              { value: '100%', label: 'Verifiable', color: 'text-white' },
              { value: 'Open', label: 'Source', color: 'text-blue-500' }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <p className={`text-4xl md:text-5xl font-bold tracking-tight italic uppercase ${stat.color}`}>{stat.value}</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitecturePage;