import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Wallet, ShoppingCart, Network, BarChart3, ArrowUpRight, ArrowDownRight, Activity, Users } from 'lucide-react';

export const OverviewTab = () => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Balance', value: '$4,250.00', change: '+12.5%', icon: Wallet, trend: 'up', color: 'bg-blue-600' },
          { label: 'Active Trades', value: '18', change: '+5.2%', icon: ShoppingCart, trend: 'up', color: 'bg-blue-500' },
          { label: 'Network Score', value: '94/100', change: '-2.1%', icon: Users, trend: 'down', color: 'bg-slate-900' },
          { label: 'Yield Earned', value: '$342.10', change: '+15.0%', icon: BarChart3, trend: 'up', color: 'bg-blue-600' },
        ].map((stat, i) => (
          <Card key={i} className="border border-slate-100 hover:border-blue-200 transition-all group overflow-hidden relative rounded-[2rem] bg-white shadow-sm">
            <CardContent className="pt-8 pb-8 px-8">
              <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-xl text-white shadow-lg transition-transform duration-500 ${stat.color} group-hover:scale-110`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className={`flex items-center text-xs font-bold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-500'}`}>
                  {stat.change} {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 ml-1" /> : <ArrowDownRight className="h-3 w-3 ml-1" />}
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-bold tracking-tight italic text-slate-900">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border border-slate-100 bg-white rounded-[2.5rem] shadow-sm">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold uppercase italic tracking-tight flex items-center gap-3 text-slate-900">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Activity className="h-5 w-5" />
              </div>
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-1">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl hover:bg-slate-50 transition-all group">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                      <Activity className="h-5 w-5 text-slate-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                    <div>
                      <p className="text-base font-bold uppercase tracking-tight italic text-slate-900">Trade #{i}482 completed</p>
                      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">2 hours ago \u2022 Cell-Alpha</p>
                    </div>
                  </div>
                  <span className="text-lg font-bold text-green-600">+$250.00</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="border border-slate-100 bg-white rounded-[2.5rem] shadow-sm relative overflow-hidden group">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl font-bold uppercase italic tracking-tight flex items-center gap-3 text-slate-900">
              <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
                <Network className="h-5 w-5" />
              </div>
              Community Network
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center h-[300px] bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200 p-6">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/b88df19d-56b8-43a3-a0ec-e63c9a3dc9ca/community-trading-d6ad422a-1772395284455.webp" 
                alt="Market Activity" 
                className="max-h-full rounded-xl object-contain shadow-xl group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};