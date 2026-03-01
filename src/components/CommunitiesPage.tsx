import React from "react";
import { motion } from "framer-motion";
import { Users, UserPlus, Heart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

const CommunitiesPage = () => {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-20">
          <div className="flex-1 order-2 lg:order-1">
            <img 
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/communities-illustration-af327822-1772393685556.webp" 
              alt="Communities" 
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div className="flex-1 order-1 lg:order-2">
            <h1 className="text-4xl font-bold mb-6">Building Stronger Communities</h1>
            <p className="text-xl text-muted-foreground mb-8">
              HellOOpass provides the tools for communities to self-organize, grow, and thrive in a decentralized digital economy.
            </p>
            <div className="space-y-4">
              {[
                { icon: UserPlus, title: "Onboarding", text: "Simplified entry for new members with HellOOpass identity." },
                { icon: Heart, title: "Engagement", text: "Rewards and incentives built into the core of interaction." },
                { icon: MessageSquare, title: "Communication", text: "Integrated tools for transparent governance and talk." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="text-center bg-primary text-primary-foreground p-12 rounded-3xl">
          <h2 className="text-3xl font-bold mb-4 text-white">Ready to bring your community to HellOOpass?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Join thousands of others who are already using our infrastructure to power their digital growth.
          </p>
          <Button size="lg" variant="secondary" className="font-bold">
            Start Your Community
          </Button>
        </section>
      </div>
    </div>
  );
};

export default CommunitiesPage;