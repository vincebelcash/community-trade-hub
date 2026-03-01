import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Layout, Network, Users, TrendingUp, Globe } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Architecture', path: '/architecture', icon: Layout },
    { name: 'Economic Cells', path: '/economic-cells', icon: Network },
    { name: 'Communities', path: '/communities', icon: Users },
    { name: 'Trading', path: '/trading', icon: TrendingUp },
    { name: 'Connect', path: '/connect', icon: Globe },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-blue-600 p-2 rounded-lg text-white shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform duration-300">
              <Zap className="h-5 w-5" fill="currentColor" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900 uppercase italic">
              HellOOpass
            </span>
          </Link>

          <div className="hidden lg:flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="font-bold uppercase tracking-widest text-[10px]" asChild>
              <Link to="/dashboard">Registry</Link>
            </Button>
            <Button size="sm" className="rounded-lg font-bold uppercase tracking-widest text-[10px] bg-slate-900 hover:bg-blue-600 text-white shadow-lg transition-all" asChild>
              <Link to="/dashboard">Launch App</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-900 hover:bg-blue-600 hover:text-white transition-colors focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 animate-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-4 pb-8 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-4 text-base font-medium rounded-xl transition-all ${
                  isActive(item.path)
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-center font-bold uppercase tracking-widest py-6 rounded-xl" asChild>
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>Registry</Link>
              </Button>
              <Button className="w-full justify-center rounded-xl font-bold uppercase tracking-widest py-6 bg-slate-900 hover:bg-blue-600 text-white" asChild>
                <Link to="/dashboard" onClick={() => setIsOpen(false)}>Launch App</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;