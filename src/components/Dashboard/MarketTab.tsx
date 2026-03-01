import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { TrendingUp, ArrowUpRight, ArrowDownRight, Search, Filter } from 'lucide-react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export const MarketTab = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search assets, cells, or trades..." className="pl-12 h-12 rounded-xl border-slate-200 focus-visible:ring-blue-600 bg-slate-50 font-medium" />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Button variant="outline" className="h-12 px-5 rounded-xl border-slate-200 font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:bg-slate-50">
            <Filter className="h-4 w-4" /> Filters
          </Button>
          <Button className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-widest text-[10px] shadow-lg shadow-blue-600/20">
            New Order
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { pair: 'WHEAT / USD', price: '$42.50', change: '+2.4%', trend: 'up', color: 'text-green-600' },
          { pair: 'COFFEE / CELL', price: '12.80', change: '-1.2%', trend: 'down', color: 'text-red-500' },
          { pair: 'LOGISTICS / USD', price: '$150.00', change: '+0.8%', trend: 'up', color: 'text-green-600' },
          { pair: 'CREDIT / BOND', price: '0.94', change: '+5.6%', trend: 'up', color: 'text-green-600' },
          { pair: 'SOLAR / CELL', price: '8.20', change: '-3.1%', trend: 'down', color: 'text-red-500' },
          { pair: 'WATER / USD', price: '$2.15', change: '+0.2%', trend: 'up', color: 'text-green-600' },
        ].map((asset, i) => (
          <Card key={i} className="border border-slate-100 hover:border-blue-600/30 transition-all hover:-translate-y-1 duration-300 shadow-sm rounded-2xl bg-white">
            <CardContent className="pt-6 pb-6 flex justify-between items-center px-6">
              <div>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-1">{asset.pair}</p>
                <h4 className="text-2xl font-bold tracking-tight text-slate-900">{asset.price}</h4>
              </div>
              <div className={`flex flex-col items-end ${asset.color}`}>
                <div className="flex items-center text-xs font-bold">
                  {asset.change} {asset.trend === 'up' ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
                </div>
                <p className="text-[8px] font-bold uppercase tracking-widest opacity-60">24h Change</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};