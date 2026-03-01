import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Fingerprint, 
  Bell, 
  Smartphone,
  ChevronRight,
  ShieldCheck,
  CreditCard,
  User
} from 'lucide-react';
import { toast } from 'sonner';

export function SettingsTab() {
  const [biometricsEnabled, setBiometricsEnabled] = useState(true);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="space-y-8"
    >
      <header>
        <h1 className="text-2xl font-bold">Member Settings</h1>
        <p className="text-slate-400 text-sm">Manage your identity, security, and preferences.</p>
      </header>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <section className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h3 className="font-bold flex items-center gap-2">
                <Shield className="text-[#008752]" size={18} />
                Security & Identity
              </h3>
            </div>
            <div className="divide-y divide-slate-800">
              <SettingsRow 
                icon={<Fingerprint size={20} className="text-slate-400" />}
                title="Biometric Authentication"
                description="Use fingerprint/FaceID for transactions"
                action={
                  <Switch 
                    active={biometricsEnabled} 
                    onToggle={() => {
                        setBiometricsEnabled(!biometricsEnabled);
                        toast.success(biometricsEnabled ? 'Biometrics Disabled' : 'Biometrics Enabled');
                    }} 
                  />
                }
              />
              <SettingsRow 
                icon={<ShieldCheck size={20} className="text-slate-400" />}
                title="KYC Verification"
                description="Status: Tier 2 (Full Access)"
                action={<span className="text-[#008752] text-[10px] font-black uppercase">Verified</span>}
              />
              <SettingsRow 
                icon={<Smartphone size={20} className="text-slate-400" />}
                title="Two-Factor Auth"
                description="Connected to +233 **** 491"
                action={<button className="text-xs font-bold text-slate-500 hover:text-white transition-colors">Change</button>}
              />
            </div>
          </section>

          <section className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-6 border-b border-slate-800">
              <h3 className="font-bold flex items-center gap-2">
                <Bell className="text-[#FFD700]" size={18} />
                Communication
              </h3>
            </div>
            <div className="divide-y divide-slate-800">
              <SettingsRow 
                icon={<Bell size={20} className="text-slate-400" />}
                title="Push Notifications"
                description="Trade alerts and community updates"
                action={
                  <Switch 
                    active={notificationsEnabled} 
                    onToggle={() => {
                        setNotificationsEnabled(!notificationsEnabled);
                        toast.success(notificationsEnabled ? 'Notifications Off' : 'Notifications On');
                    }} 
                  />
                }
              />
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl text-center">
            <div className="w-24 h-24 rounded-full bg-slate-800 mx-auto mb-4 flex items-center justify-center border-4 border-[#008752]/20">
              <User size={48} className="text-[#008752]" />
            </div>
            <h3 className="font-bold text-lg">Alex Rivera</h3>
            <p className="text-xs text-slate-500 mb-4">alex.r@community.hub</p>
            <button 
                onClick={() => toast.info('Profile editing disabled for demo')}
                className="w-full py-2 bg-slate-800 text-white rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-slate-700 transition-colors"
            >
                Edit Profile
            </button>
          </div>

          <div className="p-6 bg-[#EF3340]/10 border border-[#EF3340]/20 rounded-2xl">
            <h4 className="font-black text-xs uppercase text-[#EF3340] mb-2">Danger Zone</h4>
            <p className="text-xs text-slate-400 mb-4">Permanently close your account and liquidate community assets.</p>
            <button 
                onClick={() => toast.error('Account closure not available in demo')}
                className="w-full py-2 border border-[#EF3340] text-[#EF3340] rounded-lg text-xs font-bold uppercase tracking-widest hover:bg-[#EF3340] hover:text-white transition-all"
            >
                Close Account
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function SettingsRow({ icon, title, description, action }: any) {
  return (
    <div className="p-6 flex items-center justify-between">
      <div className="flex gap-4 items-center">
        <div className="p-2 bg-slate-950 rounded-lg">{icon}</div>
        <div>
          <h4 className="text-sm font-bold">{title}</h4>
          <p className="text-xs text-slate-500">{description}</p>
        </div>
      </div>
      <div>{action}</div>
    </div>
  );
}

function Switch({ active, onToggle }: { active: boolean, onToggle: () => void }) {
  return (
    <button 
      onClick={onToggle}
      className={`w-10 h-6 rounded-full transition-colors relative ${
        active ? 'bg-[#008752]' : 'bg-slate-700'
      }`}
    >
      <motion.div 
        animate={{ x: active ? 18 : 2 }}
        className="w-4 h-4 bg-white rounded-full absolute top-1"
      />
    </button>
  );
}