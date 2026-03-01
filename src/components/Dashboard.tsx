import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from "recharts";
import { 
  TrendingUp, 
  Wallet, 
  Activity, 
  Globe, 
  Settings as SettingsIcon,
  Plus
} from "lucide-react";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 600 },
  { name: "Apr", value: 800 },
  { name: "May", value: 500 },
  { name: "Jun", value: 900 },
  { name: "Jul", value: 1100 },
];

const Dashboard = () => {
  return (
    <div className="pt-20 pb-10 min-h-screen bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold">HellOOpass Dashboard</h1>
            <p className="text-muted-foreground">Welcome back to your overview.</p>
          </div>
          <Button className="flex items-center gap-2">
            <Plus className="h-4 w-4" /> Create New Link
          </Button>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-background border border-border p-1">
            <TabsTrigger value="overview" className="gap-2">
              <TrendingUp className="h-4 w-4" /> Overview
            </TabsTrigger>
            <TabsTrigger value="markets" className="gap-2">
              <Activity className="h-4 w-4" /> Markets
            </TabsTrigger>
            <TabsTrigger value="networks" className="gap-2">
              <Globe className="h-4 w-4" /> Networks
            </TabsTrigger>
            <TabsTrigger value="wallet" className="gap-2">
              <Wallet className="h-4 w-4" /> Wallet
            </TabsTrigger>
            <TabsTrigger value="settings" className="gap-2">
              <SettingsIcon className="h-4 w-4" /> Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Total Value", value: "$124,592.00", trend: "+12.5%", color: "text-green-500" },
                { title: "Active Nodes", value: "1,204", trend: "+3.2%", color: "text-green-500" },
                { title: "Pending Orders", value: "48", trend: "-2.4%", color: "text-red-500" },
              ].map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="pb-2">
                    <CardDescription>{stat.title}</CardDescription>
                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-sm font-medium ${stat.color}`}>{stat.trend} from last month</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="col-span-1 md:col-span-2">
              <CardHeader>
                <CardTitle>Activity Overview</CardTitle>
                <CardDescription>Performance tracking for HellOOpass networks</CardDescription>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `$${value}`} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: "hsl(var(--background))", border: "1px solid hsl(var(--border))", borderRadius: "8px" }}
                      itemStyle={{ color: "hsl(var(--primary))" }}
                    />
                    <Area type="monotone" dataKey="value" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorValue)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="markets">
            <Card>
              <CardHeader>
                <CardTitle>Market Insights</CardTitle>
                <CardDescription>Real-time data across HellOOpass enabled markets.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-20 text-center text-muted-foreground">
                  No market data available for your current region.
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="networks">
            <Card>
              <CardHeader>
                <CardTitle>Network Connections</CardTitle>
                <CardDescription>Manage your connections within the HellOOpass ecosystem.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Globe className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">Network Alpha {i}</p>
                          <p className="text-xs text-muted-foreground">Active since Jan 2024</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">Manage</Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;