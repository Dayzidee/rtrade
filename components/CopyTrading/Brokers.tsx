
import React from 'react';
import { Plus } from 'lucide-react';

const Brokers: React.FC = () => {
  return (
    <div className="p-4 space-y-6">
      <div className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/50 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#4e34e1] rounded-full flex items-center justify-center text-white font-bold text-xs">
            WE
          </div>
          <div>
            <h3 className="font-bold text-white text-sm">WEBULL</h3>
            <p className="text-zinc-500 text-xs">Account ····4521</p>
            <div className="flex gap-2 text-[10px] text-zinc-600">
               <span>Follower</span>
               <span>·</span>
               <span>Active</span>
            </div>
          </div>
        </div>
        <button className="text-white font-bold text-sm">Manage</button>
      </div>

      <button className="w-full py-4 border border-zinc-700 rounded-full flex items-center justify-center gap-2 text-white font-bold text-sm">
        <Plus size={18} />
        Connect Broker
      </button>
    </div>
  );
};

export default Brokers;
