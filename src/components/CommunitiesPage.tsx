import React from 'react';
import { motion } from 'framer-motion';
import { Users, Zap, ArrowRight, Shield, Globe, Database, Network } from 'lucide-react';
import { Button } from './ui/button';

const communities = [
  {
    title: "Agricultural Cooperatives",
    description: "Small-scale farmers pooling resources to eliminate intermediaries and access global markets directly.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/the-sustainable-farmers--cooperative-0ed2ba34-1772398850622.webp",
    features: ["Direct Trade", "Fair Pricing", "Zero Fees"],
    cellId: "CELL-AGRI-01"
  },
  {
    title: "Urban Gig Collectives",
    description: "Distributed networks of independent workers creating their own financial safety nets and benefit pools.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/the-urban-gig-worker-collective-73c4cb63-1772398850055.webp",
    features: ["Shared Risk", "Credit Access", "Transparent Governance"],
    cellId: "CELL-GIG-42"
  },
  {
    title: "Diaspora Support Networks",
    description: "Communities connecting across borders to facilitate targeted remittances and local merchant growth.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/the-diaspora-support-network-02b0a30d-1772398849109.webp",
    features: ["Low-Cost Remittance", "Merchant Support", "Global Corridors"],
    cellId: "CELL-DIA-09"
  }
];

const CommunitiesPage = () => {
  return (
    <div className="pt-32 pb-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 uppercase italic"
          >
            The Living <span className="text-blue-600">Network</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Explore the diverse economic cells that are redefining prosperity across borders using the elloopass protocol.
          </motion.p>
        </div>

        <div className="space-y-32">
          {communities.map((community, index) => (
            <motion.div
              key={community.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className="flex-1">
                <div className="relative">
                  <div className="absolute -inset-4 bg-blue-600/5 rounded-[2rem] blur-2xl" />
                  <img 
                    src={community.image} 
                    alt={community.title}
                    className="relative w-full aspect-[4/3] object-cover rounded-[2rem] shadow-2xl"
                  />
                  <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-bold uppercase tracking-widest text-slate-900 shadow-sm">
                    {community.cellId}
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-blue-600/10 rounded-lg text-blue-600">
                    <Users className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">Community Cell</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 uppercase italic leading-tight">{community.title}</h3>
                <p className="text-xl text-slate-600 font-medium leading-relaxed">
                  {community.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {community.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm font-bold uppercase tracking-tight text-slate-900">
                      <div className="h-2 w-2 rounded-full bg-blue-600" />
                      {feature}
                    </div>
                  ))}
                </div>
                <Button size="lg" className="h-16 px-10 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[10px] shadow-xl transition-all group">
                  Explore Cell <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-48 p-12 md:p-24 bg-blue-600 text-white rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 italic uppercase tracking-tight">Ready to build your community's future?</h2>
            <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto font-medium">
              Whether you're starting from scratch or moving an existing network, we provide the tools you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button size="lg" className="h-20 px-12 text-lg font-bold uppercase tracking-widest rounded-2xl bg-white text-blue-600 hover:bg-slate-100 transition-all transform hover:scale-105 shadow-2xl">
                Start a New Cell
              </Button>
              <Button size="lg" variant="outline" className="h-20 px-12 text-lg font-bold uppercase tracking-widest rounded-2xl border-2 border-white/40 text-white hover:bg-white/10 transition-all">
                Documentation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitiesPage;