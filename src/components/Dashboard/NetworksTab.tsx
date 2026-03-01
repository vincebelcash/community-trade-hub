import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Users, Shield, MapPin, Globe, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

export const NetworksTab = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { name: 'East Africa Agri-Cell', members: '1.2k', reputation: '98/100', location: 'Nairobi, Kenya', active: true, color: 'bg-blue-600' },
        { name: 'SEA Logistics Collective', members: '850', reputation: '92/100', location: 'Ho Chi Minh, Vietnam', active: true, color: 'bg-blue-500' },
        { name: 'EU Energy Cooperative', members: '2.4k', reputation: '95/100', location: 'Berlin, Germany', active: false, color: 'bg-slate-900' },
        { name: 'LatAm Credit Union', members: '500', reputation: '88/100', location: 'S\u00e3o Paulo, Brazil', active: true, color: 'bg-blue-600' },
      ].map((network, i) => (
        <Card key={i} className="border border-slate-100 overflow-hidden group shadow-sm rounded-3xl bg-white hover:border-blue-100 transition-all duration-300">
          <CardContent className="p-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-xl flex items-center justify-center text-white shadow-lg transition-all ${network.color} group-hover:scale-110`}>
                  <Users className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight mb-1 uppercase italic text-slate-900">{network.name}</h3>
                  <div className="flex items-center text-slate-400 text-[9px] font-bold uppercase tracking-widest">
                    <MapPin className="h-3 w-3 mr-1 text-blue-600" /> {network.location}
                  </div>
                </div>
              </div>
              <div className={`px-3 py-1 rounded-full text-[8px] font-bold uppercase tracking-widest ${network.active ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-500'}`}>
                {network.active ? '\u25cf Active' : '\u25cb Offline'}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Members</p>
                <p className="text-xl font-bold text-slate-900">{network.members}</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-1">Trust Score</p>
                <p className="text-xl font-bold text-blue-600">{network.reputation}</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Button className="flex-1 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[10px] h-12 transition-all">
                Enter Cell <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="flex-1 rounded-xl border-slate-200 font-bold uppercase tracking-widest text-[10px] h-12 hover:bg-slate-50">
                Governance
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};