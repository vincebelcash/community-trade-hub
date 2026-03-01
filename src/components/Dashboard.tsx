import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Network, Wallet, BarChart3, ArrowUpRight, ArrowDownRight, Activity } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { OverviewTab } from './Dashboard/OverviewTab';
import { MarketTab } from './Dashboard/MarketTab';
import { NetworksTab } from './Dashboard/NetworksTab';
import { WalletTab } from './Dashboard/WalletTab';
import { SettingsTab } from './Dashboard/SettingsTab';
import { QuickTradeModal } from './Dashboard/Modals';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [isTradeModalOpen, setIsTradeModalOpen] = React.useState(false);

  return (
    <div className="pt-32 min-h-screen bg-zinc-50 text-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="space-y-1">
            <h1 className="text-4xl font-bold tracking-tight leading-none">HellOOpass <span className="text-indigo-600">Registry</span></h1>
            <p className="text-lg text-zinc-500 font-medium italic">Manage your community participation and trading activity.</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="rounded-xl font-bold uppercase tracking-widest text-[9px] border border-zinc-200 h-14 px-6 hover:bg-zinc-100 transition-all">Report</Button>
            <Button onClick={() => setIsTradeModalOpen(true)} className="rounded-xl font-bold uppercase tracking-widest text-[9px] bg-indigo-600 hover:bg-indigo-700 text-white shadow-xl h-14 px-8 transition-all transform hover:scale-105">
              Quick Trade
            </Button>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="bg-white border border-zinc-100 w-full md:w-auto overflow-x-auto justify-start h-auto p-1.5 rounded-2xl shadow-sm">
            {['Overview', 'Networks', 'Market', 'Wallet', 'Settings'].map((tab) => (
              <TabsTrigger 
                key={tab.toLowerCase()} 
                value={tab.toLowerCase()} 
                className="px-8 py-3.5 font-bold uppercase tracking-widest text-[9px] data-[state=active]:bg-zinc-900 data-[state=active]:text-white transition-all rounded-xl"
              >
                {tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="overview" className="focus-visible:outline-none"><OverviewTab /></TabsContent>
          <TabsContent value="networks" className="focus-visible:outline-none"><NetworksTab /></TabsContent>
          <TabsContent value="market" className="focus-visible:outline-none"><MarketTab /></TabsContent>
          <TabsContent value="wallet" className="focus-visible:outline-none"><WalletTab /></TabsContent>
          <TabsContent value="settings" className="focus-visible:outline-none"><SettingsTab /></TabsContent>
        </Tabs>
      </div>
      <QuickTradeModal open={isTradeModalOpen} onOpenChange={isTradeModalOpen => setIsTradeModalOpen(isTradeModalOpen)} />
    </div>
  );
};

export default Dashboard;