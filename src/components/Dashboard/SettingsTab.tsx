import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { User, Bell, Shield, Globe, Smartphone, LogOut, Check } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';

export const SettingsTab = () => {
  return (
    <div className="max-w-3xl space-y-8">
      <Card className="border border-slate-100 p-4 shadow-sm rounded-[2.5rem] bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-bold uppercase italic tracking-tight text-xl">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <User className="h-5 w-5" />
            </div>
            Profile Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 px-1">Display Name</Label>
              <Input defaultValue="Community Member" className="rounded-xl border-slate-200 focus-visible:ring-blue-600 h-12 font-bold bg-slate-50 px-5" />
            </div>
            <div className="space-y-2">
              <Label className="text-[9px] font-bold uppercase tracking-widest text-slate-400 px-1">Email Address</Label>
              <Input defaultValue="member@elloopass.org" className="rounded-xl border-slate-200 focus-visible:ring-blue-600 h-12 font-bold bg-slate-50 px-5" />
            </div>
          </div>
          <Button className="rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-bold uppercase tracking-widest text-[10px] h-12 px-8 transition-all">
            Save Changes
          </Button>
        </CardContent>
      </Card>

      <Card className="border border-slate-100 p-4 shadow-sm rounded-[2.5rem] bg-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-bold uppercase italic tracking-tight text-xl">
            <div className="p-2 bg-blue-50 rounded-xl text-blue-600">
              <Bell className="h-5 w-5" />
            </div>
            Notifications
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 pt-4">
          {[
            { label: 'Trade Execution', desc: 'Notify me when my market orders are filled.', defaultChecked: true },
            { label: 'Cell Proposals', desc: 'Notify me of new governance proposals in my cells.', defaultChecked: true },
            { label: 'Price Alerts', desc: 'Send alerts for significant price movements in watched assets.', defaultChecked: false },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all group">
              <div className="space-y-0.5">
                <p className="font-bold uppercase tracking-tight text-base italic text-slate-900">{item.label}</p>
                <p className="text-xs text-slate-400 font-medium">{item.desc}</p>
              </div>
              <Switch defaultChecked={item.defaultChecked} className="data-[state=checked]:bg-blue-600" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-red-100 bg-red-50/20 p-4 rounded-[2.5rem] shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 font-bold uppercase italic tracking-tight text-xl text-red-600">
            <div className="p-2 bg-red-100 rounded-xl text-red-600">
              <Shield className="h-5 w-5" />
            </div>
            Security & Danger Zone
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-3">
            <Button variant="outline" className="rounded-xl border-red-200 font-bold uppercase tracking-widest text-[9px] flex-1 h-12 hover:bg-red-50 text-red-700">Change Password</Button>
            <Button variant="outline" className="rounded-xl border-red-200 font-bold uppercase tracking-widest text-[9px] flex-1 h-12 hover:bg-red-50 text-red-700">Export Keys</Button>
            <Button variant="destructive" className="rounded-xl font-bold uppercase tracking-widest text-[9px] flex-1 h-12 shadow-lg shadow-red-200">
              <LogOut className="h-4 w-4 mr-2" /> Deactivate Account
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};