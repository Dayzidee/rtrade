
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Settings: React.FC = () => {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="p-6 space-y-8">
      {/* Position Sizing */}
      <div className="space-y-2">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-black px-1 text-[10px] text-zinc-500 font-medium">Position Sizing</label>
          <div className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-4 flex items-center justify-between text-sm">
            <span>Follow Trader 1:1</span>
            <ChevronDown size={18} className="text-zinc-500" />
          </div>
        </div>
        <p className="text-[10px] text-zinc-600 pl-1">Mirrors trader size exactly (same contracts).</p>
      </div>

      {/* Max Slippage */}
      <div className="relative">
        <label className="absolute -top-2.5 left-3 bg-black px-1 text-[10px] text-zinc-500 font-medium">Max Slippage %</label>
        <input 
          type="text" 
          defaultValue="5.0"
          className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#00e676]"
        />
      </div>

      {/* Take Profit */}
      <div className="space-y-2">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-black px-1 text-[10px] text-zinc-500 font-medium">Take Profit % (optional)</label>
          <input 
            type="text" 
            placeholder=""
            className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#00e676]"
          />
        </div>
        <p className="text-[10px] text-zinc-600 pl-1">Close position at this % gain (e.g. 50 = +50%). Leave empty to disabled.</p>
      </div>

      {/* Stop Loss */}
      <div className="space-y-2">
        <div className="relative">
          <label className="absolute -top-2.5 left-3 bg-black px-1 text-[10px] text-zinc-500 font-medium">Stop Loss % (optional)</label>
          <input 
            type="text" 
            defaultValue="30.0"
            className="w-full bg-transparent border border-zinc-800 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-[#00e676]"
          />
        </div>
        <p className="text-[10px] text-zinc-600 pl-1">Close position at this % loss (e.g. 20 = -20%). Leave empty to disabled.</p>
      </div>

      {/* Toggle */}
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h3 className="text-sm font-semibold text-white">Enable Copy Trading</h3>
          <p className="text-[10px] text-zinc-600">Stops mirroring when disabled</p>
        </div>
        <button 
          onClick={() => setEnabled(!enabled)}
          className={`w-12 h-6 rounded-full relative transition-colors duration-200 ${enabled ? 'bg-[#00e676]' : 'bg-zinc-800'}`}
        >
          <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ${enabled ? 'translate-x-6' : ''}`} />
        </button>
      </div>
    </div>
  );
};

export default Settings;
