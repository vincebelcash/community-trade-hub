import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Globe, Database, Network, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="pt-20 min-h-screen bg-white text-zinc-900">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center space-x-2 bg-indigo-50 px-4 py-2 rounded-full text-indigo-600 text-[10px] font-bold tracking-widest mb-10 uppercase border border-indigo-100"
            >
              <Zap className="h-4 w-4" />
              <span>Protocol for Autonomous Commerce</span>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1]"
            >
              Reclaiming <br /> <span className="text-indigo-600">Economics</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              HellOOpass provides the foundational infrastructure for community-driven economies and seamless global connectivity.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button size="lg" className="h-16 px-10 text-base font-bold uppercase tracking-widest rounded-xl shadow-xl shadow-indigo-600/20 bg-indigo-600 hover:bg-indigo-700 text-white transition-all transform hover:scale-105" asChild>
                <Link to="/communities">Explore Ecosystem <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-base font-bold uppercase tracking-widest rounded-xl border-2 border-zinc-900 hover:bg-zinc-900 hover:text-white transition-all" asChild>
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-24 border-y border-zinc-100 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: 'Communities Connected', value: '500+', icon: Network },
              { label: 'Total Trade Volume', value: '$1.2B', icon: TrendingUp },
              { label: 'Active Economic Cells', value: '12k', icon: Database },
              { label: 'Protocol Reliability', value: '99.9%', icon: Shield },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center group">
                <div className="mb-4 p-3 bg-white rounded-xl shadow-sm group-hover:bg-indigo-50 transition-colors duration-300">
                  <stat.icon className="h-6 w-6 text-indigo-600" />
                </div>
                <div className="text-4xl font-bold text-zinc-900 mb-1 tracking-tight">{stat.value}</div>
                <div className="text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">Built for <span className="text-indigo-600">Autonomous</span> Scaling</h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium">
              Our core pillars empower communities to take control of their economic destiny.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Autonomous Connectivity', icon: Globe, desc: 'Empowering communities with the tools to connect and trade globally without centralized intermediaries.' },
              { title: 'Risk-Smart BNPL', icon: Shield, desc: 'Advanced financial modeling that scales credit fairly based on community participation and reputation.' },
              { title: 'Hyper-Efficient Trading', icon: Zap, desc: 'Real-time settlement and liquidity solutions designed for the modern community-driven economy.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-xl hover:bg-white hover:border-indigo-100 transition-all duration-500 group">
                <div className="w-16 h-16 bg-indigo-600/10 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto bg-zinc-900 text-white rounded-[3rem] overflow-hidden relative shadow-2xl p-12 md:p-24 text-center">
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight leading-none">Ready to join the revolution?</h2>
            <p className="text-xl mb-12 opacity-80 max-w-xl mx-auto font-medium">
              Start building your community's economic future today with HellOOpass.
            </p>
            <Button size="lg" className="h-20 px-12 text-lg font-bold uppercase tracking-widest rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all transform hover:scale-105 shadow-2xl" asChild>
              <Link to="/dashboard">Get Started Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;