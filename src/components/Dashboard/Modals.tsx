import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Zap, ArrowRightLeft, TrendingUp, X } from 'lucide-react';

export const QuickTradeModal = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] rounded-[2.5rem] p-0 overflow-hidden border-0 shadow-3xl bg-white">
        <div className="bg-slate-900 p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <TrendingUp className="h-32 w-32" />
          </div>
          <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" />
          <DialogHeader className="relative z-10">
            <DialogTitle className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-2">Quick <span className="text-blue-500">Trade</span></DialogTitle>
            <p className="text-slate-400 font-medium text-lg leading-snug">Execute a protocol-level trade instantly across cells.</p>
          </DialogHeader>
        </div>

        <div className="p-12 space-y-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">You Pay</Label>
              <div className="flex gap-3">
                <Input type="number" placeholder="0.00" className="h-16 rounded-2xl border-slate-100 bg-slate-50/50 text-2xl font-black flex-1 focus:ring-blue-600 shadow-sm transition-all" />
                <Select defaultValue="usd">
                  <SelectTrigger className="w-36 h-16 rounded-2xl border-slate-100 font-black uppercase bg-white shadow-sm transition-all">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200">
                    <SelectItem value="usd" className="font-black uppercase tracking-widest text-[10px]">USD</SelectItem>
                    <SelectItem value="cell" className="font-black uppercase tracking-widest text-[10px]">CELL</SelectItem>
                    <SelectItem value="btc" className="font-black uppercase tracking-widest text-[10px]">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-center -my-4 relative z-10">
              <div className="bg-blue-600 text-white p-4 rounded-2xl shadow-xl shadow-blue-200 hover:rotate-180 transition-all duration-700 cursor-pointer border-4 border-white transform hover:scale-110">
                <ArrowRightLeft className="h-6 w-6" />
              </div>
            </div>

            <div className="space-y-4">
              <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">You Receive</Label>
              <div className="flex gap-3">
                <Input type="number" placeholder="0.00" disabled className="h-16 rounded-2xl border-slate-100 bg-slate-50 text-2xl font-black flex-1" />
                <Select defaultValue="cell">
                  <SelectTrigger className="w-36 h-16 rounded-2xl border-slate-100 font-black uppercase bg-white shadow-sm transition-all">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="rounded-2xl border-slate-200">
                    <SelectItem value="usd" className="font-black uppercase tracking-widest text-[10px]">USD</SelectItem>
                    <SelectItem value="cell" className="font-black uppercase tracking-widest text-[10px]">CELL</SelectItem>
                    <SelectItem value="wheat" className="font-black uppercase tracking-widest text-[10px]">WHEAT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl space-y-3 shadow-sm">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Exchange Rate</span>
              <span className="text-slate-900 font-bold">1 USD = 0.85 CELL</span>
            </div>
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Network Fee</span>
              <span className="text-emerald-600 font-black">PROTOCOL SUBSIDIZED</span>
            </div>
          </div>

          <Button className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs shadow-2xl shadow-blue-100 group transition-all transform hover:translate-y-[-2px]">
            Confirm Trade <Zap className="ml-2 h-5 w-5 fill-current group-hover:scale-125 transition-transform" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const Modals = () => {
  return null; // For now, we only use the specific modal in Dashboard.tsx
};