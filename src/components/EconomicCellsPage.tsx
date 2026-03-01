import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Zap, ArrowRight, Share2, ShieldCheck, Box } from 'lucide-react';
import { Button } from './ui/button';

const EconomicCellsPage = () => {
  return (
    <div className="pt-32 pb-32 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="max-w-4xl mb-32 text-center mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-[10px] font-bold tracking-widest mb-10 uppercase border border-blue-100"
          >
            <Hexagon className="h-4 w-4" />
            <span>Foundational Economic Units</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase italic leading-none">Economic <span className="text-blue-600">Cells</span></h1>
          <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            The fundamental unit of the elloopass ecosystem. Economic cells are autonomous, community-led financial hubs.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-40">
          <div className="space-y-8">
            {[
              {
                icon: Box,
                title: "Cell Structure",
                desc: "Each cell is a self-contained unit with its own treasury and governance rules, secured by the elloopass protocol.",
                color: "text-blue-600",
                bg: "bg-blue-600/10"
              },
              {
                icon: Share2,
                title: "Inter-Cell Liquidity",
                desc: "Cells can bridge assets and share liquidity, creating a resilient web of economic activity.",
                color: "text-blue-500",
                bg: "bg-blue-500/10"
              },
              {
                icon: ShieldCheck,
                title: "Autonomous Risk",
                desc: "Communities define their own risk tolerance and credit parameters for specialized financial models.",
                color: "text-slate-900",
                bg: "bg-slate-100"
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300"
              >
                <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-bold mb-3 uppercase italic tracking-tight">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-blue-600/5 rounded-full blur-[100px]" />
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/economic-cells-27f4e167-1772395288434.webp" 
              alt="Economic Cells Illustration" 
              className="relative w-full h-auto rounded-[3rem] border-4 border-white shadow-2xl transform hover:rotate-0 transition-transform duration-700"
            />
          </motion.div>
        </div>

        <div className="bg-slate-900 p-12 lg:p-24 rounded-[3rem] text-white text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic uppercase tracking-tight">Ready to <span className="text-blue-600">Evolve</span>?</h2>
          <p className="text-xl opacity-80 mb-12 max-w-xl mx-auto font-medium">
            Whether you're a small cooperative or a large trade network, elloopass cells provide the tools you need to thrive.
          </p>
          <Button size="lg" className="h-20 px-12 text-lg font-bold uppercase tracking-widest rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition-all transform hover:scale-105 shadow-2xl">
            Register Your Cell <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EconomicCellsPage;