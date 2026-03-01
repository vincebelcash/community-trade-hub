import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Sprout, 
  Car, 
  Bike, 
  Globe, 
  Palette, 
  HeartHandshake, 
  ArrowRight,
  ShieldCheck,
  Zap,
  TrendingUp,
  Target
} from 'lucide-react';

interface CommunitySectionProps {
  title: string;
  icon: React.ReactNode;
  image: string;
  description: string;
  howItWorks: string;
  empowerment: string;
  index: number;
}

const CommunitySection = ({ title, icon, image, description, howItWorks, empowerment, index }: CommunitySectionProps) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 py-20 items-center border-b border-slate-800/50 last:border-0`}
    >
      <div className="w-full lg:w-1/2 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[#008752]/20 to-[#FFD700]/10 border border-[#008752]/30 rounded-2xl flex items-center justify-center text-[#008752]">
            {icon}
          </div>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tighter text-white">
            {title}
          </h2>
        </div>

        <div className="space-y-6">
          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#008752]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#008752] mb-3 flex items-center gap-2">
              <Users size={12} />
              The Community
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {description}
            </p>
          </div>

          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#FFD700]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#FFD700] mb-3 flex items-center gap-2">
              <Zap size={12} />
              How It Works with the MTB
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {howItWorks}
            </p>
          </div>

          <div className="group p-6 bg-slate-900/40 border border-slate-800 rounded-2xl hover:border-[#EF3340]/30 transition-all duration-300">
            <h3 className="text-[10px] font-black uppercase tracking-widest text-[#EF3340] mb-3 flex items-center gap-2">
              <Target size={12} />
              Community Empowerment & Interconnection
            </h3>
            <p className="text-slate-300 leading-relaxed font-medium">
              {empowerment}
            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-br from-[#008752]/20 via-[#FFD700]/10 to-[#EF3340]/20 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-800 shadow-2xl">
            <img 
              src={image} 
              alt={title} 
              className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6 right-6">
               <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:bg-[#FFD700] transition-colors">
                  Join This Network
                  <ArrowRight size={14} />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export function CommunitiesPage() {
  const communities = [
    {
      title: "The Sustainable Farmers' Cooperative",
      icon: <Sprout size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/sustainable-farmers-cooperative-ethiopian-women-ce-28681922-1772378682159.webp",
      description: "A cooperative of 500 small-scale organic farmers seeking to cut out intermediaries, ensure fair pricing, and gain access to credit.",
      howItWorks: "The cooperative launches its own 'Farm-to-Table' marketplace. Customers scan a QR code to pay directly into the cooperative's system with no transaction fees, and each purchase earns them a free Support Bonus.",
      empowerment: "Farmers can post verified requests for cash to buy seeds. Customers and other members can use their free bonuses to support these requests, earning a share of the profit from the future harvest sales. The cooperative can interlink its network with a city's restaurant association, creating a trusted, transparent B2B channel."
    },
    {
      title: "The Collective Asset Fund",
      icon: <Car size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/collective-asset-fund-taxi-d55123a4-1772376759512.webp",
      description: "A close-knit social or family group whose members want to pool resources to create life-changing assets for one of their own, transforming communal goodwill into a structured, low-risk investment.",
      howItWorks: "Members create a 'Family Asset Fund' within the platform. They make deposits with no fees into a designated, shared digital wallet, defining a specific rule for collateralizing a loan for a taxi.",
      empowerment: "The collective fund provides the security for a partner financial institution to issue the vehicle loan. Repayments are automated through the platform with no fees. As the loan is repaid, the collateral is released pro-rata back to members' wallets. Furthermore, the taxi driver's fares processed through the platform generate Support Bonuses for passengers at no cost to them."
    },
    {
      title: "The Urban Gig Worker Collective",
      icon: <Bike size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/urban-gig-worker-collective-aef90612-1772376769188.webp",
      description: "A collective of freelance drivers, delivery personnel, and taskers in a major city, lacking access to traditional financial services and benefits.",
      howItWorks: "The collective forms a 'Gig Worker Union' network. Members receive a digital wallet and a virtual card. Clients pay for services through the platform with zero fees for the worker, and every transaction generates a free Support Bonus.",
      empowerment: "A driver needing a cash advance for urgent car repairs can post a verified request. Other members can support it with their free bonuses, sharing in the profit from the driver's next week of fares. The network interlinks with partnered service providers, allowing members to pay for essentials at a discount."
    },
    {
      title: "The Diaspora Support Network",
      icon: <Globe size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/somali-diaspora-support-pharmacy-transaction-eacec4d0-1772378314346.webp",
      description: "A diaspora community in Europe wanting to support families and local businesses in their home country with targeted, secure remittances.",
      howItWorks: "The community creates a branded, closed-loop 'Homeland Support' network. Members abroad load funds into their community digital wallet without any deposit fees and purchase specific-purpose digital gift cards (e.g., 'School Fees', 'Groceries'), sending them instantly to family back home with zero transfer fees.",
      empowerment: "Recipients redeem the cards at pre-approved local merchants. Each transaction generates a Community Support Bonus for the buyer. These bonuses can be pooled by the diaspora to provide cash-flow support to a local merchant in the homeland needing to expand, earning a share of the new profit generated. This network can then choose to interlink with a local agricultural cooperative."
    },
    {
      title: "The Cultural Arts & Crafts Guild",
      icon: <Palette size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/cultural-arts-and-crafts-guild-c561e904-1772376764551.webp",
      description: "An indigenous community of artisans whose traditional crafts are undervalued in the mainstream market, with profits lost to middlemen.",
      howItWorks: "The guild sets up its 'Heritage Makers' branded marketplace. Tourists and buyers pay directly to the artisan without any added fees, earning free Support Bonuses.",
      empowerment: "Buyers can use their free bonuses to support an artisan's request for funds to purchase bulk materials for a large order. Supporters earn a share of the profit from that specific order. The guild's network can interlink with an international fair-trade e-commerce platform."
    },
    {
      title: "The Humanitarian Aid Corridor",
      icon: <HeartHandshake size={28} />,
      image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/humanitarian-aid-and-development-corridor-e30dde2d-1772376759577.webp",
      description: "An international NGO distributing aid in a refugee camp, aiming for efficiency, transparency, and local economic stimulation.",
      howItWorks: "The NGO creates a secure, closed-loop 'Aid & Dignity' network. Aid is distributed as digital vouchers. Beneficiaries redeem vouchers instantly at approved local merchant kiosks with no redemption fees, and these transactions generate free Support Bonuses.",
      empowerment: "As small businesses emerge, they can post requests for microloans. Beneficiaries and the NGO can use accumulated free bonuses to support these businesses, sharing in their success and creating a self-strengthening local economy."
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#008752]/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#EF3340]/5 rounded-full blur-[120px] -z-10" />
        
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-full"
          >
            <ShieldCheck size={16} className="text-[#008752]" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Verified Ecosystems</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter text-white"
          >
            Empowering <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#008752] via-[#FFD700] to-[#EF3340]">Every Collective</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto font-medium"
          >
            HellOOpass isn't just a platform; it's a foundation for specialized economies designed by and for the people who live them.
          </motion.p>
        </div>
      </section>

      {/* Communities List */}
      <section className="px-6 max-w-7xl mx-auto">
        {communities.map((community, index) => (
          <CommunitySection key={index} {...community} index={index} />
        ))}
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative p-12 bg-gradient-to-br from-[#008752]/20 to-[#slate-950] border border-[#008752]/30 rounded-[3rem] overflow-hidden text-center space-y-8"
          >
            <div className="absolute top-0 right-0 p-12 opacity-10">
              <TrendingUp size={120} className="text-[#FFD700]" />
            </div>
            
            <h2 className="text-4xl font-black tracking-tighter text-white">
              Ready to create your own <br />Community Network?
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto font-medium">
              Start with the Magic Trade Box and watch your community's economic power grow through trust, transparency, and shared value.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="px-10 py-4 bg-[#008752] text-white rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-xl shadow-[#008752]/20">
                Launch My Community
              </button>
              <button className="px-10 py-4 bg-white text-black rounded-full font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform">
                Speak to an Architect
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}