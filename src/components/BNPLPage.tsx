import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HandCoins, AlertCircle, ArrowRight, Wallet, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const BNPLPage = () => {
  return (
    <div className="pt-32 pb-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold tracking-widest uppercase mb-6 inline-block border border-blue-100"
            >
              Risk-Smart Credit Models
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-[0.9] tracking-tight uppercase italic"
            >
              Community <br /><span className="text-blue-600">BNPL</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed max-w-xl"
            >
              HellOOpass reinvents Buy Now Pay Later through a trade-based, risk-sharing model built on community trust.
            </motion.p>
            
            <div className="space-y-6 pt-6">
              {[
                { icon: ShieldCheck, title: 'Community Risk Pooling', color: 'text-blue-600', bg: 'bg-blue-600/10' },
                { icon: HandCoins, title: 'Zero Interest, High Trust', color: 'text-blue-500', bg: 'bg-blue-500/10' },
                { icon: AlertCircle, title: 'Smart Collateralization', color: 'text-slate-900', bg: 'bg-slate-100' }
              ].map((item, i) => (
                <motion.div 
                  key={item.title} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex items-center space-x-6 group"
                >
                  <div className={`p-4 ${item.bg} ${item.color} rounded-xl group-hover:scale-110 transition-transform shadow-sm`}>
                    <item.icon className="h-6 w-6" />
                  </div>
                  <span className="font-bold text-xl tracking-tight uppercase italic">{item.title}</span>
                </motion.div>
              ))}
            </div>

            <Button size="lg" className="h-20 px-12 text-lg font-bold uppercase tracking-widest rounded-2xl bg-slate-900 hover:bg-blue-600 text-white shadow-xl mt-8 transition-all">
              Explore BNPL Models <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[100px]" />
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/bnpl-model-cefb4049-1772395282898.webp" 
                alt="BNPL Illustration" 
                className="relative z-10 w-full h-auto rounded-[3rem] border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <TrendingUp className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Growth Rate</p>
                    <p className="text-xl font-bold italic text-slate-900">+24%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BNPLPage;