import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ShieldCheck, Zap, ArrowRight, Layers, CreditCard, RefreshCw, BarChart3, Database } from 'lucide-react';

export function AutomatedClearingHousePage() {
  const layers = [
    {
      level: 'Layer 1',
      title: 'Real-Time Clearing',
      icon: <Zap className="text-sky-400" />,
      desc: 'Instant validation and routing of transactions within the local community node.',
      features: ['Sub-second latency', 'Community-driven validation', 'Zero-hop routing']
    },
    {
      level: 'Layer 2',
      title: 'Net Settlement Engine',
      icon: <Layers className="text-indigo-400" />,
      desc: 'Aggregate and offset balances between multiple community organs to minimize liquidity requirements.',
      features: ['Multilateral netting', 'Intraday settlement', 'Liquidity optimization']
    },
    {
      level: 'Layer 3',
      title: 'Inter-Network Finality',
      icon: <ShieldCheck className="text-violet-400" />,
      desc: 'Final batch settlement between independent community networks and external banking partners.',
      features: ['Immutable proof of trade', 'External bridge connectivity', 'Regulatory compliance']
    }
  ];

  return (
    <div className="pt-24 pb-20 bg-indigo-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section className="mb-20 text-center relative">
          <div className="absolute inset-0 bg-indigo-500/10 blur-3xl -z-10 rounded-full" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-900/50 rounded-full border border-indigo-800 text-indigo-400 text-xs font-black uppercase tracking-widest">
              <Landmark size={14} />
              Financial Infrastructure
            </div>
            <h1 className="text-4xl md:text-6xl font-black">Automated Clearing House</h1>
            <p className="text-indigo-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Redefining how communities move value. Our tiered settlement model ensures liquidity flows freely without the overhead of traditional banking.
            </p>
          </motion.div>
        </section>

        {/* Feature Visual */}
        <section className="mb-24 relative rounded-3xl overflow-hidden border border-indigo-900 bg-indigo-900/20">
          <div className="grid lg:grid-cols-2">
            <div className="p-12 flex flex-col justify-center">
              <h2 className="text-3xl font-black mb-6">Tiered Settlement Model</h2>
              <p className="text-indigo-400 mb-8">
                elloopass ACH separates clearing from settlement across three distinct layers, providing the speed of fintech with the security of traditional finance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-indigo-950/50 rounded-2xl border border-indigo-800/50">
                  <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
                    <RefreshCw size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Real-Time Credit</h4>
                    <p className="text-xs text-indigo-500">Balances update instantly for the user, regardless of backend settlement time.</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-indigo-950/50 rounded-2xl border border-indigo-800/50">
                  <div className="w-10 h-10 rounded-full bg-sky-600/20 flex items-center justify-center text-sky-400">
                    <CreditCard size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Flexible Settlement</h4>
                    <p className="text-xs text-indigo-500">Settlement cycles can be customized for each community organ (Daily, Weekly, or On-Demand).</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-auto">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/ach-concept-7ba371ef-1772408133494.webp" 
                className="absolute inset-0 w-full h-full object-cover"
                alt="ACH Concept"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-indigo-950/0 via-indigo-950/20 to-indigo-950" />
            </div>
          </div>
        </section>

        {/* Layers Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {layers.map((layer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-indigo-900/30 border border-indigo-800 hover:border-indigo-600 transition-colors group relative overflow-hidden"
            >
              <div className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">{layer.level}</div>
              <div className="mb-6 p-4 bg-indigo-950 rounded-2xl w-fit group-hover:scale-110 transition-transform">
                {layer.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{layer.title}</h3>
              <p className="text-sm text-indigo-400 mb-6 leading-relaxed">{layer.desc}</p>
              <ul className="space-y-2">
                {layer.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs text-indigo-300">
                    <ArrowRight size={12} className="text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Technical Specs */}
        <section className="bg-indigo-900/10 border border-indigo-800 rounded-[40px] p-12">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-black mb-8">Scalable Trust Infrastructure</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <Database className="text-indigo-500 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Distributed Ledger Technology</h4>
                    <p className="text-sm text-indigo-400">elloopass uses a private, permissioned DLT to ensure every transaction is verifiable and tamper-proof.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <BarChart3 className="text-sky-500 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-2">Real-time Monitoring</h4>
                    <p className="text-sm text-indigo-400">Advanced analytics track velocity of money and system health to prevent liquidity bottlenecks.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-indigo-950/80 rounded-3xl p-8 border border-indigo-800 shadow-2xl space-y-6">
              <h3 className="font-bold text-lg">Clearing Status</h3>
              <div className="space-y-4">
                {[ 
                  { label: 'Layer 1 Local Nodes', status: 'Online', color: 'bg-emerald-500' },
                  { label: 'Layer 2 Netting Service', status: 'Healthy', color: 'bg-emerald-500' },
                  { label: 'Layer 3 Settlement Bridge', status: 'Standby', color: 'bg-amber-500' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-indigo-900/30 rounded-xl">
                    <span className="text-xs font-bold">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse`} />
                      <span className="text-[10px] uppercase font-black">{item.status}</span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="w-full py-4 bg-indigo-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20">
                Open Node Console
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}