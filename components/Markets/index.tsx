import React, { useState } from 'react';
import { Search, Filter, Share2, MoreHorizontal } from 'lucide-react';
import { Header } from '../Layout';
import { OptionFlowItem } from '../../types';

const Markets: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('Option Flow');
  
  const subTabs = ['Option Flow', 'Algo Edge', 'Treemap', 'Dealer Edge'];
  
  const flowItems: OptionFlowItem[] = [
    { id: '1', timestamp: '02/06/2026 04:14 PM', ticker: 'TLT', type: 'CALL', subtype: 'TRADE', side: 'BID', strike: 88.0, premium: '280K', sizeAtPrice: '10000@$0.28', volume: 25630, oi: 15347, expiry: '02/13/26', color: 'bg-emerald-600' },
    { id: '2', timestamp: '02/06/2026 04:14 PM', ticker: 'SPY', type: 'PUT', subtype: 'TRADE', side: 'ASK', strike: 685.0, premium: '102.87K', sizeAtPrice: '193@$5.33', volume: 20155, oi: 28077, expiry: '02/20/26', color: 'bg-rose-600' },
    { id: '3', timestamp: '02/06/2026 04:14 PM', ticker: 'SPY', type: 'PUT', subtype: 'SWEEP', side: 'ASK', strike: 689.0, premium: '26.70K', sizeAtPrice: '142@$1.88', volume: 51948, oi: 779, expiry: '02/09/26', color: 'bg-rose-600' },
    { id: '4', timestamp: '02/06/2026 04:14 PM', ticker: 'EEM', type: 'CALL', subtype: 'TRADE', side: 'ASK', strike: 60.0, premium: '81K', sizeAtPrice: '450@$1.8', volume: 450, oi: 12000, expiry: '03/20/26', color: 'bg-emerald-600' },
  ];

  return (
    <div className="flex flex-col min-h-full">
      <Header title="Markets" showAdd={false} />

      <div className="px-4 border-b border-zinc-900 sticky top-[60px] bg-black z-40">
        <div className="flex items-center gap-6 overflow-x-auto hide-scrollbar py-2">
          {subTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveSubTab(tab)}
              className="relative py-2 whitespace-nowrap"
            >
              <span className={`text-sm font-medium transition-colors ${
                activeSubTab === tab ? 'text-[#00e676]' : 'text-zinc-500'
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

      <div className="p-4 space-y-4">
        {/* Search & Actions */}
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-zinc-900 rounded-xl px-4 py-3 flex items-center gap-3">
             <Search size={18} className="text-zinc-500" />
             <input type="text" placeholder="Search Ticker..." className="bg-transparent text-sm w-full focus:outline-none" />
             <MoreHorizontal size={18} className="text-zinc-500" />
          </div>
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 font-medium px-1">
          <div className="flex items-center gap-2">
             <div className="w-8 h-4 bg-zinc-800 rounded-full relative">
                <div className="absolute top-0.5 left-0.5 w-3 h-3 bg-[#00e676] rounded-full" />
             </div>
             <span>Auto Refresh</span>
          </div>
          <div className="flex items-center gap-4">
             <button className="flex items-center gap-1"><Filter size={14} /> Filter</button>
             <button className="flex items-center gap-1"><Share2 size={14} /> Export</button>
          </div>
        </div>

        {/* Option Flow List */}
        <div className="space-y-4">
          {flowItems.map((item) => (
            <div key={item.id} className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-zinc-500 text-[10px] font-medium uppercase">{item.timestamp}</span>
                <button className="text-zinc-500 flex items-center gap-1"><Share2 size={14} /> <span className="text-[10px]">Share</span></button>
              </div>

              <div className="grid grid-cols-4 gap-4 items-center">
                <div className={`${item.color} w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-xs`}>
                   {item.ticker}
                </div>
                <div className="text-center">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Strike</p>
                  <p className="text-sm font-bold">${item.strike.toFixed(1)}</p>
                </div>
                <div className="text-center">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Premium</p>
                  <p className="text-sm font-bold">{item.premium}</p>
                </div>
                <div className="text-right">
                  <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Price</p>
                  <p className="text-[10px] font-bold">{item.sizeAtPrice.split('@')[1]}</p>
                </div>
              </div>

              <div className="flex justify-between items-end border-t border-zinc-800/30 pt-4">
                 <div>
                    <p className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">{item.subtype} {item.type}</p>
                    <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest">At {item.side}</p>
                 </div>
                 <div className="flex gap-4">
                    <div className="text-center">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Vol</p>
                      <p className="text-[10px] font-bold">{item.volume}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">OI</p>
                      <p className="text-[10px] font-bold">{item.oi}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Exp</p>
                      <p className="text-[10px] font-bold">{item.expiry}</p>
                    </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Markets;