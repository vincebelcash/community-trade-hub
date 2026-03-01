import React from 'react';
import { motion } from 'framer-motion';
import { Code, Share2, TrendingUp, Zap, Server, Database, Globe } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const DeveloperPage = () => {
  return (
    <div className="pt-32 pb-32 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-32 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 bg-slate-100 px-4 py-2 rounded-full text-slate-900 text-[10px] font-bold tracking-widest mb-10 uppercase border border-slate-200"
          >
            <Code className="h-4 w-4" />
            <span>Developer Ecosystem & API</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight uppercase italic leading-none">Build <span className="text-blue-600">Tomorrow</span> Today</h1>
          <p className="text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Build on elloopass and unlock the power of community-driven trade using our high-performance API.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight italic uppercase leading-none">Scalable <span className="text-blue-500">Infrastructure</span></h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We provide developers with advanced machine learning models for risk assessment and market optimization within the elloopass ecosystem.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-base mb-1 italic">Simple Integration</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">REST and GraphQL endpoints designed for rapid deployment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-6 group">
                <div className="bg-blue-50 p-4 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all shadow-sm">
                  <Share2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-base mb-1 italic">Revenue Sharing</h4>
                  <p className="text-slate-500 font-medium leading-relaxed">Earn <span className="text-blue-600 font-bold">15%</span> of all transaction fees generated through your apps.</p>
                </div>
              </div>
            </div>
            <Button size="lg" className="h-16 px-10 text-base font-bold uppercase tracking-widest rounded-xl bg-slate-900 hover:bg-blue-600 text-white shadow-xl transition-all">
              Get API Key Now
            </Button>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-[3rem] overflow-hidden relative group aspect-square shadow-2xl"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/developer-ecosystem-6573dcb7-1772395288792.webp" 
              alt="Developer Ecosystem"
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-10">
              <p className="text-white font-bold italic uppercase tracking-widest text-lg">The Future of OSS Trade</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Market API', icon: TrendingUp, desc: 'Access real-time community trading data and market trends across the network.', color: 'text-blue-600', bg: 'bg-blue-600/10' },
            { title: 'Wallet API', icon: Zap, desc: 'Securely manage multi-currency community wallets and cross-border settlements.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
            { title: 'Cell API', icon: Server, desc: 'Interact with economic cells directly to manage membership and governance.', color: 'text-slate-900', bg: 'bg-slate-100' }
          ].map((api, i) => (
            <motion.div
              key={api.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="hover:border-blue-200 transition-all p-8 border-slate-100 bg-white rounded-[2rem] shadow-sm group">
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="flex items-center space-x-3 text-xl font-bold uppercase italic tracking-tight">
                    <div className={`${api.bg} ${api.color} p-3 rounded-xl shadow-sm group-hover:scale-110 transition-transform`}>
                      <api.icon className="h-5 w-5" />
                    </div>
                    <span>{api.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-slate-600 font-medium">{api.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeveloperPage;