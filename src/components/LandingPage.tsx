import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Globe, Zap, Network } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-start mb-8"
            >
              <div className="relative w-24 h-24 flex items-center justify-center">
                <div className="absolute inset-0 bg-[#008752]/20 rounded-2xl blur-2xl animate-pulse" />
                <img 
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/helloopass-logo-34ed4d53-1772394210950.webp" 
                  alt="HellOOpass Logo" 
                  className="w-24 h-24 object-contain relative z-10 drop-shadow-2xl" 
                />
              </div>
            </motion.div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Empowering Connectivity with <span className="text-primary">HellOOpass</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
              Join the platform that bridges communities, developers, and businesses through advanced economic cells and community trading.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="h-12 px-8 text-lg font-semibold bg-[#008752] hover:bg-[#007044]">
                Join the platform <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg font-semibold border-[#008752] text-[#008752] hover:bg-[#008752]/10">
                View Documentation
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 w-full max-w-xl"
          >
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/helloopass-hero-illustration-6c843da1-1772393686833.webp" 
              alt="HellOOpass Hero" 
              className="rounded-2xl shadow-2xl w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-accent/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why choose HellOOpass?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide the infrastructure for the next generation of digital communities and economic interaction.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure", desc: "Enterprise-grade security for every transaction." },
              { icon: Globe, title: "Global", desc: "Connect with communities across the world seamlessly." },
              { icon: Zap, title: "Fast", desc: "Optimized for high-speed performance and low latency." },
              { icon: Network, title: "Scalable", desc: "Built to grow with your community's needs." },
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-background p-6 rounded-xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                  <feature.icon className="h-6 w-6 text-[#008752]" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;