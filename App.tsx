
import React, { useState } from 'react';
import { MainTab } from './types';
import Markets from './components/Markets';
import CopyTrading from './components/CopyTrading';
import { LayoutGrid, FileText, TrendingUp, Copy, User } from 'lucide-react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTab>(MainTab.COPY_TRADING);

  const renderContent = () => {
    switch (activeTab) {
      case MainTab.MARKETS:
        return <Markets />;
      case MainTab.COPY_TRADING:
        return <CopyTrading />;
      default:
        return (
          <div className="flex flex-col items-center justify-center h-full text-zinc-500">
            <h2 className="text-xl font-semibold mb-2">{activeTab} Section</h2>
            <p>This section is currently under development.</p>
          </div>
        );
    }
  };

  const tabs = [
    { id: MainTab.MARKETS, icon: LayoutGrid },
    { id: MainTab.NEWS, icon: FileText },
    { id: MainTab.ANALYTICS, icon: TrendingUp },
    { id: MainTab.COPY_TRADING, icon: Copy },
    { id: MainTab.PROFILE, icon: User },
  ];

  return (
    <div className="max-w-md mx-auto h-screen bg-black flex flex-col relative overflow-hidden shadow-2xl">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-20 hide-scrollbar">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-zinc-950 border-t border-zinc-900 px-4 py-2 flex justify-between items-center z-50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-1 transition-colors ${
                isActive ? 'text-[#00e676]' : 'text-zinc-500'
              }`}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{tab.id}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default App;
