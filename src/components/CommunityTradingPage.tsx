import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, ShoppingBag, ArrowRightLeft, Zap, Layers } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Button } from './ui/button';

const CommunityTradingPage = () => {
  return (
    <div className="pt-32 pb-32 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-full text-blue-600 text-[10px] font-bold tracking-widest mb-10 uppercase border border-blue-100"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Autonomous Trading Engine</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase italic leading-none">Community <span className="text-blue-600">Trading</span></h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Leverage collective bargaining and community-driven liquidity to trade assets within and across economic cells.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: 'Market Discovery', 
              icon: TrendingUp, 
              desc: 'Community-led price discovery mechanisms ensure fair trading for all members.',
              color: 'text-blue-600',
              bg: 'bg-blue-600/10'
            },
            { 
              title: 'Bulk Purchasing', 
              icon: ShoppingBag, 
              desc: 'Pool resources within your cell to negotiate better rates for commodities and services.',
              color: 'text-blue-500',
              bg: 'bg-blue-500/10'
            },
            { 
              title: 'Inter-Cell Swap', 
              icon: ArrowRightLeft, 
              desc: 'Exchange assets directly between different economic cells without centralized intermediaries.',
              color: 'text-slate-900',
              bg: 'bg-slate-100'
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:border-blue-200 transition-all p-8 border-slate-100 bg-white rounded-[2rem] shadow-sm group h-full">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center space-x-3 text-xl font-bold uppercase italic tracking-tight">
                    <div className={`${item.bg} ${item.color} p-3 rounded-xl group-hover:scale-110 transition-transform shadow-sm`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[3rem] bg-white p-10 md:p-16 flex flex-col lg:flex-row items-center gap-16 border border-slate-100 shadow-xl"
        >
          <div className="flex-1 space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 uppercase italic leading-none">Next-Gen <br /><span className="text-blue-600">Trading Platform</span></h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              The HellOOpass trading engine is designed to prioritize social trust and community value.
            </p>
            <div className="space-y-4">
              {[
                'Verified Community Membership',
                'Smart Contract Escrow Protection',
                'Cross-Cell Liquidity Aggregation'
              ].map((feature, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="h-10 w-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-bold">0{i+1}</div>
                  <p className="text-lg font-bold uppercase tracking-tight italic">{feature}</p>
                </div>
              ))}
            </div>
            <Button size="lg" className="h-16 px-10 text-base font-bold uppercase tracking-widest rounded-xl bg-slate-900 hover:bg-blue-600 text-white shadow-xl transition-all">
              Open Trading Terminal
            </Button>
          </div>
          <div className="flex-1 w-full lg:w-auto">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/community-trading-d6ad422a-1772395284455.webp" 
              alt="Trading Interface" 
              className="w-full h-auto rounded-[2rem] shadow-2xl border border-slate-100"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityTradingPage;