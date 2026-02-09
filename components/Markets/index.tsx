import React, { useState } from 'react';
import { Search, Filter, Share2, MoreHorizontal, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { Header } from '../Layout';
import { OptionFlowItem, AlgoEdgeItem, TreemapItem } from '../../types';

const Markets: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState('Option Flow');
  
  const subTabs = ['Option Flow', 'Algo Edge', 'Treemap', 'Dealer Edge'];
  
  const flowItems: OptionFlowItem[] = [
    { id: '1', timestamp: '02/06/2026 04:14 PM', ticker: 'TLT', type: 'CALL', subtype: 'TRADE', side: 'BID', strike: 88.0, premium: '280K', sizeAtPrice: '10000@$0.28', volume: 25630, oi: 15347, expiry: '02/13/26', color: 'bg-green-600' },
    { id: '2', timestamp: '02/06/2026 04:14 PM', ticker: 'SPY', type: 'PUT', subtype: 'TRADE', side: 'ASK', strike: 685.0, premium: '102.87K', sizeAtPrice: '193@$5.33', volume: 20155, oi: 28077, expiry: '02/20/26', color: 'bg-red-600' },
    { id: '3', timestamp: '02/06/2026 04:14 PM', ticker: 'SPY', type: 'PUT', subtype: 'SWEEP', side: 'ASK', strike: 689.0, premium: '26.70K', sizeAtPrice: '142@$1.88', volume: 51948, oi: 779, expiry: '02/09/26', color: 'bg-red-600' },
    { id: '4', timestamp: '02/06/2026 04:14 PM', ticker: 'EEM', type: 'CALL', subtype: 'TRADE', side: 'ASK', strike: 60.0, premium: '81K', sizeAtPrice: '450@$1.8', volume: 450, oi: 12000, expiry: '03/20/26', color: 'bg-green-600' },
  ];

  const algoSignals: AlgoEdgeItem[] = [
    { id: '1', ticker: 'NVDA', signal: 'Bullish', confidence: 92, timestamp: '10:45 AM', price: 135.20, target: 142.00 },
    { id: '2', ticker: 'TSLA', signal: 'Bearish', confidence: 78, timestamp: '10:42 AM', price: 210.15, target: 195.00 },
    { id: '3', ticker: 'AAPL', signal: 'Bullish', confidence: 85, timestamp: '10:38 AM', price: 228.45, target: 235.00 },
    { id: '4', ticker: 'AMD', signal: 'Neutral', confidence: 60, timestamp: '10:35 AM', price: 152.30 },
  ];

  const treemapItems: TreemapItem[] = [
    { id: '1', ticker: 'AAPL', change: 1.25, sector: 'Technology', volume: '25M' },
    { id: '2', ticker: 'MSFT', change: 0.85, sector: 'Technology', volume: '18M' },
    { id: '3', ticker: 'GOOGL', change: -0.45, sector: 'Communication', volume: '12M' },
    { id: '4', ticker: 'AMZN', change: 2.10, sector: 'Consumer Cyclical', volume: '15M' },
    { id: '5', ticker: 'META', change: -1.20, sector: 'Communication', volume: '10M' },
    { id: '6', ticker: 'NVDA', change: 3.45, sector: 'Technology', volume: '35M' },
    { id: '7', ticker: 'TSLA', change: -2.30, sector: 'Consumer Cyclical', volume: '22M' },
    { id: '8', ticker: 'NFLX', change: 0.15, sector: 'Communication', volume: '8M' },
  ];

  const renderSubContent = () => {
    switch (activeSubTab) {
      case 'Option Flow':
        return (
          <div className="space-y-4">
            {flowItems.map((item) => (
              <div key={item.id} className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 space-y-4">
                <div className="flex justify-between items-start">
                  <span className="text-zinc-500 text-[10px] font-medium uppercase">{item.timestamp}</span>
                  <button className="text-zinc-500 flex items-center gap-1"><Share2 size={14} /> <span className="text-[10px]">Share</span></button>
                </div>

                <div className="grid grid-cols-4 gap-4 items-center">
                  <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm`}>
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
                    <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest mb-1">Size@Price</p>
                    <p className="text-[10px] font-bold">{item.sizeAtPrice}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                   <div>
                      <p className="text-[10px] font-bold tracking-widest text-zinc-400 uppercase">{item.subtype} {item.type}</p>
                      <p className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">At {item.side}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Volume</p>
                      <p className="text-[10px] font-bold">{item.volume}</p>
                   </div>
                   <div className="text-center">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">OI</p>
                      <p className="text-[10px] font-bold">{item.oi}</p>
                   </div>
                   <div className="text-right col-span-3 -mt-4">
                      <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-0.5">Expiry</p>
                      <p className="text-[10px] font-bold">{item.expiry}</p>
                   </div>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Algo Edge':
        return (
          <div className="space-y-3">
            {algoSignals.map((signal) => (
              <div key={signal.id} className="bg-zinc-900/50 rounded-2xl p-4 border border-zinc-800/50 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    signal.signal === 'Bullish' ? 'bg-green-500/10 text-green-500' :
                    signal.signal === 'Bearish' ? 'bg-red-500/10 text-red-500' : 'bg-zinc-500/10 text-zinc-500'
                  }`}>
                    {signal.signal === 'Bullish' ? <TrendingUp size={20} /> :
                     signal.signal === 'Bearish' ? <TrendingDown size={20} /> : <Minus size={20} />}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{signal.ticker}</h4>
                    <p className="text-[10px] text-zinc-500">{signal.timestamp} • {signal.signal} Signal</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold">${signal.price}</p>
                  <p className={`text-[10px] font-medium ${
                    signal.confidence > 80 ? 'text-[#00e676]' : 'text-zinc-500'
                  }`}>{signal.confidence}% Confidence</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'Treemap':
        return (
          <div className="grid grid-cols-2 gap-3">
            {treemapItems.map((item) => (
              <div key={item.id} className={`rounded-2xl p-4 border ${
                item.change > 0 ? 'bg-green-500/10 border-green-500/20' : 'bg-red-500/10 border-red-500/20'
              }`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="font-bold text-sm">{item.ticker}</span>
                  <span className={`text-[10px] font-bold ${
                    item.change > 0 ? 'text-green-500' : 'text-red-500'
                  }`}>{item.change > 0 ? '+' : ''}{item.change}%</span>
                </div>
                <p className="text-[10px] text-zinc-500">{item.sector}</p>
                <p className="text-[10px] text-zinc-400 font-medium mt-1">Vol: {item.volume}</p>
              </div>
            ))}
          </div>
        );
      case 'Dealer Edge':
        return (
          <div className="flex flex-col items-center justify-center py-12 text-zinc-500">
            <MoreHorizontal size={40} className="mb-4 opacity-20" />
            <p className="text-sm font-medium">Dealer Edge data is loading...</p>
          </div>
        );
      default:
        return null;
    }
  };

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

        {renderSubContent()}
      </div>
    </div>
  );
};

export default Markets;