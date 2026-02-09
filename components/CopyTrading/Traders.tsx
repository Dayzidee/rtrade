
import React, { useState } from 'react';
import { Trader } from '../../types';
import { Clock, TrendingUp } from 'lucide-react';

const Traders: React.FC = () => {
  const [selectedTrader, setSelectedTrader] = useState<Trader | null>(null);

  const traders: Trader[] = [
    { id: '1', handle: '@itsCblast', avatar: 'https://picsum.photos/seed/dog/100/100', winRate: 82, totalPL: 641185, followers: 561, isFollowing: true },
    { id: '2', handle: '@Darkhorse', avatar: 'https://picsum.photos/seed/man/100/100', winRate: 89, totalPL: 533164, followers: 491, isFollowing: true, avgHoldTime: '22 min', riskStyle: 'Balanced' },
    { id: '3', handle: '@Steel', avatar: 'https://picsum.photos/seed/tech/100/100', winRate: 85, totalPL: 1008391, followers: 490, isFollowing: false },
  ];

  if (selectedTrader) {
    return (
      <div className="p-6 space-y-8 animate-in fade-in slide-in-from-right duration-300">
        <button onClick={() => setSelectedTrader(null)} className="text-zinc-500 text-sm mb-4">← Back</button>
        
        <div className="flex flex-col items-center gap-4">
          <img src={selectedTrader.avatar} className="w-24 h-24 rounded-full border-2 border-[#00e676] object-cover" alt="" />
          <h2 className="text-2xl font-bold">{selectedTrader.handle}</h2>
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-lg font-bold">{selectedTrader.winRate}%</p>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Win Rate</p>
          </div>
          <div>
            <p className="text-lg font-bold">${selectedTrader.totalPL.toLocaleString()}</p>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Total P/L</p>
          </div>
          <div>
            <p className="text-lg font-bold">{selectedTrader.followers}</p>
            <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest">Followers</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="bg-zinc-900 p-4 rounded-xl flex items-center gap-3">
            <Clock size={18} className="text-zinc-500" />
            <span className="text-zinc-300 text-sm">Avg hold time: {selectedTrader.avgHoldTime || 'N/A'}</span>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl flex items-center gap-3">
            <TrendingUp size={18} className="text-zinc-500" />
            <span className="text-zinc-300 text-sm">Risk style: {selectedTrader.riskStyle || 'N/A'}</span>
          </div>
        </div>

        <button 
          className={`w-full py-4 rounded-full font-bold text-sm transition-colors ${
            selectedTrader.isFollowing ? 'bg-[#00e676] text-black' : 'bg-zinc-800 text-white'
          }`}
        >
          {selectedTrader.isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {traders.map((trader) => (
        <div 
          key={trader.id} 
          onClick={() => setSelectedTrader(trader)}
          className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/50 space-y-4 cursor-pointer hover:bg-zinc-900/80 transition-colors"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={trader.avatar} className="w-10 h-10 rounded-full border border-zinc-800" alt="" />
              <span className="font-bold text-zinc-300">{trader.handle}</span>
            </div>
            <button className={`px-6 py-2 rounded-full text-xs font-bold ${
              trader.isFollowing ? 'bg-[#00e676] text-black' : 'text-zinc-500 border border-zinc-800'
            }`}>
              {trader.isFollowing ? 'Following' : 'Follow'}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center pt-2">
            <div>
              <p className="text-sm font-bold text-white">{trader.winRate}%</p>
              <p className="text-[10px] text-zinc-600 font-medium">Win Rate</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">${trader.totalPL.toLocaleString()}</p>
              <p className="text-[10px] text-zinc-600 font-medium">Total P/L</p>
            </div>
            <div>
              <p className="text-sm font-bold text-white">{trader.followers}</p>
              <p className="text-[10px] text-zinc-600 font-medium">Followers</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Traders;
