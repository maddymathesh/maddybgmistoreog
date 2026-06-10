"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { useTransactionStore } from './useTransactionStore';
import PinLogin from './PinLogin';
import Dashboard from './Dashboard';
import TransactionsList from './TransactionsList';
import CreateTransaction from './CreateTransaction';
import CreateXsuitTransaction from './CreateXsuitTransaction';
import CreateSupercarTransaction from './CreateSupercarTransaction';
import CreateUcTransaction from './CreateUcTransaction';
import CustomersList from './CustomersList';
import GuaranteesList from './GuaranteesList';
import ReportsView from './ReportsView';
import SettingsView from './SettingsView';
import ProductInsights from './ProductInsights';
import TasksAlerts from './TasksAlerts';
import CustomerFeedback from './CustomerFeedback';
import AdminActivityLog from './AdminActivityLog';
import FinancialOverview from './FinancialOverview';

import {
  LayoutDashboard,
  Receipt,
  UserSquare2,
  Gift,
  Car,
  Coins,
  Users,
  ShieldCheck,
  FileCheck,
  FileBarChart,
  Settings,
  LogOut,
  Plus,
  Layers,
  CheckSquare,
  MessageSquare,
  History,
  DollarSign,
  Menu,
  X
} from 'lucide-react';


const SIDEBAR_ITEMS = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'transactions', label: 'Transactions', icon: Receipt },
  { id: 'insights', label: 'Product Insights', icon: Layers },
  { id: 'tasks', label: 'Tasks & Alerts', icon: CheckSquare },
  { id: 'activity', label: 'Admin Activity Log', icon: History },
  { id: 'financials', label: 'Financial Overview', icon: DollarSign },
  { id: 'customers', label: 'Customers', icon: Users },
  { id: 'guarantees', label: 'Guarantees', icon: ShieldCheck },
  { id: 'reports', label: 'Reports', icon: FileBarChart },
  { id: 'settings', label: 'Settings', icon: Settings },
];

export default function TransactionsLayout() {
  const isAuthenticated = useTransactionStore((state: any) => state.isAuthenticated);
  const logout = useTransactionStore((state: any) => state.logout);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  if (!isAuthenticated) {
    return <PinLogin />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'transactions':
        return <TransactionsList onAddNew={() => setActiveTab('create_account')} />;
      case 'create_account':
        return <CreateTransaction onBack={() => setActiveTab('transactions')} />;
      case 'create_xsuit':
        return <CreateXsuitTransaction onBack={() => setActiveTab('transactions')} />;
      case 'create_supercar':
        return <CreateSupercarTransaction onBack={() => setActiveTab('transactions')} />;
      case 'create_uc':
        return <CreateUcTransaction onBack={() => setActiveTab('transactions')} />;
      case 'insights':
        return <ProductInsights />;
      case 'tasks':
        return <TasksAlerts />;
      case 'activity':
        return <AdminActivityLog />;
      case 'financials':
        return <FinancialOverview />;
      case 'customers':
        return <CustomersList />;
      case 'guarantees':
        return <GuaranteesList />;
      case 'reports':
        return <ReportsView />;
      case 'settings':
        return <SettingsView />;
      default:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '40vh', color: 'var(--muted)' }}>
            <h2 style={{ fontFamily: 'var(--font-h)', fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>Coming Soon</h2>
            <p>This module is currently under development.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] font-[var(--font-b)] flex overflow-hidden">
      {/* Sidebar Overlay Backdrop on Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-72 glass-panel border-r border-white/5 flex flex-col transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static`}>
        <div className="p-6 border-b border-white/5 flex items-center justify-between">
          <div className="leading-tight">
            <span className="font-[var(--font-h)] font-bold text-2xl text-[var(--color-gold)]">MBSx</span> <br/>
            <span className="text-xs text-white uppercase tracking-widest font-semibold">Transaction Panel</span>
          </div>
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-[var(--color-muted)] hover:text-white hover:bg-white/5 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1 scrollbar-thin">
          {SIDEBAR_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 text-[13.5px] font-bold tracking-wide ${isActive ? 'bg-[var(--color-gold-dim)] text-[var(--color-gold)] shadow-inner' : 'text-[var(--color-muted)] hover:bg-white/5 hover:text-white'}`}
              >
                <Icon size={18} />
                {item.label}
              </button>
            );
          })}
        </div>

        <div className="p-6 border-t border-white/5">
          <button
            onClick={() => { logout(); router.push('/'); }}
            className="w-full btn btn-outline border-red-500/30 text-red-500 hover:bg-red-500/10 justify-center"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto scrollbar-thin">
        <div className="p-4 md:p-8 xl:p-10 flex-1 max-w-7xl mx-auto w-full">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8 md:mb-12">
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsSidebarOpen(true)} 
                className="lg:hidden p-2.5 rounded-xl bg-white/5 text-white hover:bg-white/10 transition-colors border border-white/10" 
                aria-label="Toggle Sidebar"
              >
                <Menu size={22} />
              </button>
              <div>
                <h1 className="font-[var(--font-h)] text-2xl md:text-3xl xl:text-4xl font-bold capitalize tracking-tight">
                  {activeTab.replace('_', ' ')} <span className="text-[var(--color-gold)]">Panel</span>
                </h1>
                <p className="text-xs md:text-sm text-[var(--color-muted)] mt-1.5 font-medium">
                  {new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 lg:gap-4">
              {(activeTab === 'transactions') && (
                <>
                  <button onClick={() => setActiveTab('create_account')} className="btn btn-gold text-[12px] px-4 py-2.5"><Plus size={15}/> Account</button>
                  <button onClick={() => setActiveTab('create_xsuit')} className="btn btn-outline border-[var(--color-border-gold)] text-[var(--color-gold)] text-[12px] px-4 py-2.5"><Plus size={15}/> XSuit</button>
                  <button onClick={() => setActiveTab('create_supercar')} className="btn btn-outline border-red-500/40 text-red-500 text-[12px] px-4 py-2.5 hover:border-red-500 hover:bg-red-500/10"><Plus size={15}/> Supercar</button>
                  <button onClick={() => setActiveTab('create_uc')} className="btn btn-outline border-blue-500/40 text-blue-500 text-[12px] px-4 py-2.5 hover:border-blue-500 hover:bg-blue-500/10"><Plus size={15}/> UC</button>
                </>
              )}
              <div className="hidden md:flex w-11 h-11 rounded-full bg-gradient-to-br from-[var(--color-gold)] to-[var(--color-orange)] items-center justify-center text-black shadow-lg shadow-[var(--color-gold-dim)]">
                <ShieldCheck size={22} />
              </div>
            </div>
          </div>

          {/* Content Render */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  );
}
