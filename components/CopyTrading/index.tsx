
import React, { useState } from 'react';
import { CopyTradingSubTab } from '../../types';
import { Header } from '../Layout';
import Overview from './Overview';
import Traders from './Traders';
import Positions from './Positions';
import Settings from './Settings';
import Brokers from './Brokers';

const CopyTrading: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<CopyTradingSubTab>(CopyTradingSubTab.OVERVIEW);

  const renderSubContent = () => {
    switch (activeSubTab) {
      case CopyTradingSubTab.OVERVIEW:
        return <Overview />;
      case CopyTradingSubTab.TRADERS:
        return <Traders />;
      case CopyTradingSubTab.POSITIONS:
        return <Positions />;
      case CopyTradingSubTab.SETTINGS:
        return <Settings />;
      case CopyTradingSubTab.BROKERS:
        return <Brokers />;
      default:
        return null;
    }
  };

  const subTabs = Object.values(CopyTradingSubTab);

  return (
    <div className="flex flex-col min-h-full">
      <Header title="Copy Trading" />
      
      {/* Sub-tab Navigation */}
      <div className="px-4 border-b border-zinc-900 sticky top-[60px] bg-black z-40">
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar py-2">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className="relative py-2 whitespace-nowrap"
            >
              <span className={`text-sm font-medium transition-colors ${
                activeSubTab === tab ? 'text-white' : 'text-zinc-500'
              }`}>
                {tab}
              </span>
              {activeSubTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#00e676]" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1">
        {renderSubContent()}
      </div>
    </div>
  );
};

export default CopyTrading;
