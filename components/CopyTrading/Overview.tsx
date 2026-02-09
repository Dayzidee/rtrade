import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import PerformanceModal from './PerformanceModal';

const Overview: React.FC = () => {
  const [showPerformance, setShowPerformance] = useState(false);

  const stats = [
    { label: 'Total P/L', value: '$211,748.35', sub: '+47.4% this month', valueColor: 'text-[#00e676]' },
    { label: 'Active Positions', value: '1', sub: 'Open positions' },
    { label: 'Following', value: '2 Traders', sub: 'All active' },
    { label: 'Trades Today', value: '3', sub: 'Executions' },
  ];

  const recentActivity = [
    { date: '02/06', trader: '@itsCblast', action: 'STC RIVN 14.5C 02/06', details: '5 contracts @ $0.14', pl: '+100.0% (+$350)' },
    { date: '02/06', trader: '@itsCblast', action: 'STC RIVN 14.5C 02/06', details: '200 contracts @ $0.14', pl: '+100.0% (+$1,400)' },
    { date: '02/06', trader: '@itsCblast', action: 'STC NVDA 180.0C 02/06', details: '500 contracts @ $1.75', pl: '+30.6% (+$20,500)' },
    { date: '02/05', trader: '@itsCblast', action: 'STC SPX 6850.0C 02/05', details: '220 contracts @ $9.40' },
  ];

  return (
    <div className="p-4 space-y-6 fade-in">
      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, i) => (
          <div key={i} className="bg-zinc-900 bg-opacity-50 p-4 rounded-xl border border-zinc-800 border-opacity-50">
            <p className="text-zinc-500 text-xs mb-1 font-medium">{stat.label}</p>
            <h3 className={`text-xl font-bold ${stat.valueColor || 'text-white'}`}>{stat.value}</h3>
            <p className="text-zinc-600 text-[10px] mt-0.5">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Recent Activity */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Recent Activity</h2>
          <button 
            onClick={() => setShowPerformance(true)}
            className="text-zinc-400 hover:text-white transition-colors p-1"
          >
            <Share2 size={18} />
          </button>
        </div>

        <div className="space-y-3">
          {recentActivity.map((item, i) => (
            <div key={i} className="bg-zinc-900 bg-opacity-40 border border-zinc-800 border-opacity-50 rounded-xl p-4 flex flex-col gap-1 relative overflow-hidden">
               <div className="flex justify-between items-start">
                  <span className="text-zinc-600 text-xs font-medium">{item.date}</span>
                  <span className="text-[#00e676] text-[10px] font-bold uppercase tracking-wider">filled</span>
               </div>
               <div className="text-sm font-semibold text-zinc-300">
                  <span className="text-zinc-500 mr-2">{item.trader}</span>
                  <span>{item.action}</span>
               </div>
               <div className="text-xs text-zinc-500">{item.details}</div>
               {item.pl && <div className="text-xs font-bold text-[#00e676] mt-1">P/L: {item.pl}</div>}
            </div>
          ))}
        </div>
      </div>

      {showPerformance && <PerformanceModal onClose={() => setShowPerformance(false)} />}
    </div>
  );
};

export default Overview;