import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { CreditCard, ArrowRight, Wallet, History, Send, Download, Zap, MoreVertical } from 'lucide-react';
import { Button } from '../ui/button';

export const WalletTab = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Card className="bg-slate-900 text-white border-0 overflow-hidden relative group p-4 rounded-[2.5rem] shadow-2xl">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
          <CardHeader className="relative z-10 pb-0 px-8 pt-8">
            <div className="flex justify-between items-center mb-12">
              <div className="flex items-center gap-3">
                <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                  <Wallet className="h-7 w-7 text-white" />
                </div>
                <span className="font-bold uppercase italic tracking-tight text-xl">elloopass <span className="text-blue-500">Pay</span></span>
              </div>
              <div className="text-[8px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-2 rounded-full">Secure Protocol V2.1</div>
            </div>
          </CardHeader>
          <CardContent className="relative z-10 px-8 pb-10">
            <div className="space-y-1 mb-12">
              <p className="text-[9px] font-bold opacity-40 uppercase tracking-widest">Total Available Balance</p>
              <h2 className="text-6xl md:text-7xl font-bold tracking-tight italic text-blue-500">$4,250.00</h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-xl bg-white text-slate-900 hover:bg-blue-500 hover:text-white h-16 px-8 font-bold uppercase tracking-widest text-[10px] flex-1 shadow-lg transition-all group">
                <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Send Assets
              </Button>
              <Button variant="outline" className="rounded-xl border border-white/20 text-white hover:bg-white/5 h-16 px-8 font-bold uppercase tracking-widest text-[10px] flex-1 transition-all">
                <Download className="h-4 w-4 mr-2" /> Deposit Assets
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-slate-100 p-4 shadow-sm rounded-[2.5rem] bg-white">
          <CardHeader className="px-4">
            <CardTitle className="flex items-center gap-3 font-bold uppercase italic tracking-tight text-xl text-slate-900">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <History className="h-5 w-5" />
              </div>
              Transaction History
            </CardTitle>
          </CardHeader>
          <CardContent className="px-4 pt-4">
            <div className="space-y-1">
              {[
                { type: 'Received', from: 'Agri-Cell Reward', amount: '+240.00', date: 'Mar 01, 2024', color: 'text-green-600' },
                { type: 'Sent', from: 'Market Order #482', amount: '-150.00', date: 'Feb 28, 2024', color: 'text-slate-900' },
                { type: 'Received', from: 'Staking Yield', amount: '+12.50', date: 'Feb 25, 2024', color: 'text-green-600' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-all cursor-pointer group border border-transparent hover:border-slate-100">
                  <div className="flex items-center gap-4">
                    <div className={`h-12 w-12 rounded-xl flex items-center justify-center shadow-sm ${tx.type === 'Received' ? 'bg-green-50 text-green-600' : 'bg-slate-100 text-slate-900'}`}>
                      {tx.type === 'Received' ? <Download className="h-5 w-5" /> : <Send className="h-5 w-5" />}
                    </div>
                    <div>
                      <p className="font-bold uppercase tracking-tight text-lg italic text-slate-900">{tx.from}</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{tx.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`text-xl font-bold tracking-tight ${tx.color}`}>{tx.amount}</p>
                    <p className="text-[8px] font-bold uppercase tracking-widest opacity-40">COMPLETED</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-8">
        <Card className="border border-slate-100 p-6 h-full shadow-sm rounded-[2.5rem] bg-white group">
          <CardHeader className="px-0 pb-8 flex flex-row items-center justify-between">
            <CardTitle className="font-bold uppercase italic tracking-tight text-xl flex items-center gap-3">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <CreditCard className="h-5 w-5" />
              </div>
              Virtual Card
            </CardTitle>
            <MoreVertical className="text-slate-400 h-5 w-5 cursor-pointer" />
          </CardHeader>
          <CardContent className="px-0">
            <div className="aspect-[1.6/1] w-full bg-slate-900 rounded-2xl p-6 relative overflow-hidden shadow-xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Zap className="h-32 w-32 text-white" />
              </div>
              <div className="absolute top-0 left-0 w-24 h-24 bg-blue-600/20 rounded-full blur-[40px]" />
              <div className="relative z-10 h-full flex flex-col justify-between text-white">
                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <span className="text-white/40 text-[8px] font-bold uppercase tracking-widest">elloopass Platinum</span>
                    <div className="font-bold italic text-base uppercase tracking-tight">COMMUNITY CARD</div>
                  </div>
                  <div className="h-8 w-12 bg-white/10 rounded-lg backdrop-blur-md flex items-center justify-center font-bold italic text-[10px] border border-white/10">DALA</div>
                </div>
                <div className="space-y-4">
                  <p className="text-white text-xl font-bold tracking-[0.2em]">●●●● ●●●● ●●●● 4821</p>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-white/40 text-[7px] font-bold uppercase tracking-widest mb-0.5">Card Holder</p>
                      <p className="text-white text-xs font-bold uppercase italic tracking-tight">ELIAS GEBEYA</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white/40 text-[7px] font-bold uppercase tracking-widest mb-0.5">Expires</p>
                      <p className="text-white text-xs font-bold tracking-widest">12 / 26</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 space-y-3">
              <Button className="w-full rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[10px] h-14 transition-all">
                Card Settings
              </Button>
              <Button variant="outline" className="w-full rounded-xl border-slate-200 font-bold uppercase tracking-widest text-[10px] h-14 hover:bg-slate-50">
                View PIN & Info
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};