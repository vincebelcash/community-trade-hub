import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Wallet, 
  Coins, 
  Store, 
  Banknote, 
  CreditCard, 
  Users, 
  Languages, 
  ExternalLink, 
  Gavel, 
  CheckCircle,
  Network
} from 'lucide-react';

const EconomicCellCard = ({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#008752]/40 transition-all duration-300"
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 bg-slate-800/50 rounded-xl flex items-center justify-center text-[#008752] group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="text-sm font-black uppercase tracking-widest text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
);

export function EconomicCellsPage() {
  const cellsData = [
    {
      icon: <ShieldCheck size={20} />,
      title: "You Are a Cell in the Global Economy",
      description: "Your identity and economic activity are tied to your digital 'cell,' which acts as your passport in this system."
    },
    {
      icon: <Wallet size={20} />,
      title: "Automatic Wallet for Every Cell",
      description: "Each cell comes with a default digital wallet for transactions."
    },
    {
      icon: <Coins size={20} />,
      title: "Real-Time Wallet Funding",
      description: "You can add funds instantly using any recognized payment method, with no restrictions."
    },
    {
      icon: <CheckCircle size={20} />,
      title: "Stablecoin can backup credits",
      description: "All wallet credits are backed by a stablecoin from the country where you opened your cell account."
    },
    {
      icon: <Store size={20} />,
      title: "Sell Goods & Services Freely",
      description: "Cells can open shops and trade with others, following the trade license rules of their chosen country."
    },
    {
      icon: <Banknote size={20} />,
      title: "Earning Wallets for Shops",
      description: "Each shop gets a dedicated wallet to collect sales revenue."
    },
    {
      icon: <CreditCard size={20} />,
      title: "Link Earnings to Bank Accounts",
      description: "You can connect your earning wallet to your preferred bank accounts."
    },
    {
      icon: <Wallet size={20} />,
      title: "Instant Cash-Out",
      description: "Convert credits to cash with one click; the amount (minus fees) transfers to your bank."
    },
    {
      icon: <Users size={20} />,
      title: "Create & Govern Communities",
      description: "Cells can form groups, set trading rules, and communicate under the legal framework of their stablecoin’s country."
    },
    {
      icon: <Languages size={20} />,
      title: "Seamless Multilingual Communication",
      description: "AI instantly translates messages so cells can interact in any language."
    },
    {
      icon: <ExternalLink size={20} />,
      title: "Integrate External Platforms",
      description: "Cells can connect their digital tools, as long as they follow system policies."
    },
    {
      icon: <Gavel size={20} />,
      title: "Custom Payment Solutions",
      description: "Communities and sales networks can set up escrow accounts and offer flexible payment terms (like Buy Now, Pay Later)."
    },
    {
      icon: <Network size={20} />,
      title: "Bank & Financial Institution Integration",
      description: "All cash-based transactions go through regulated escrow accounts for secure clearance."
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Full Regulatory Compliance",
      description: "Every transaction follows the laws of the countries involved."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="max-w-4xl mx-auto text-center space-y-8 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full"
          >
            <Network size={16} className="text-[#008752]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">System Architecture</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Distributed <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">Economic Cells</span> System
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            The Global Economic Cell System is the foundation of our decentralized economy, where every participant is a vital part of a self-sustaining network.
          </motion.p>
        </div>

        {/* Illustrations and Content Section 1 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-[#EF3340]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/african-woman-with-au-flag-biometric-style-960b8740-1772380638710.webp"
                alt="Digital Cell Passport - African Union"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-2">Illustration 01</p>
                <h3 className="text-2xl font-black text-white tracking-tighter">Your Digital Cell Passport</h3>
              </div>
            </div>
          </motion.div>

          <div className="space-y-4">
            {cellsData.slice(0, 4).map((cell, idx) => (
              <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* Content Section 2 */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div className="order-2 lg:order-1 space-y-4">
            {cellsData.slice(4, 9).map((cell, idx) => (
              <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#EF3340]/20 via-[#FFD700]/10 to-[#008752]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/global-economic-cell-network-bfe6b722-1772380252235.webp"
                alt="Global Economic Cell Network"
                className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#EF3340] mb-2">Illustration 02</p>
                <h3 className="text-2xl font-black text-white tracking-tighter">Global Economic Connectivity</h3>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cellsData.slice(9).map((cell, idx) => (
            <EconomicCellCard key={idx} {...cell} delay={idx * 0.1} />
          ))}
        </div>

        {/* Global Economy Section (Closing) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 bg-slate-900/40 border border-slate-800 rounded-[3rem] text-center max-w-4xl mx-auto space-y-6"
        >
          <h2 className="text-3xl font-black tracking-tighter text-white">Join the Global Economy</h2>
          <p className="text-slate-400 font-medium leading-relaxed">
            This version keeps the original meaning while making it more fluid and easier to understand. 
            The Global Economic Cell System is your gateway to a world of borderless commerce and community-driven prosperity.
          </p>
          <div className="flex justify-center pt-4">
            <button className="px-10 py-4 bg-[#008752] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[#008752]/20">
              Activate Your Cell
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}