
import React from 'react';
import { Share2 } from 'lucide-react';

interface PerformanceModalProps {
  onClose: () => void;
}

const PerformanceModal: React.FC<PerformanceModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-md bg-zinc-950 rounded-t-3xl border-t border-zinc-800 p-6 space-y-8 animate-in slide-in-from-bottom duration-300">
        <div className="text-center space-y-1">
          <h2 className="text-xl font-bold text-white">Copy Trading Performance</h2>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-zinc-900 p-4 rounded-xl text-center">
            <p className="text-zinc-500 text-[10px] mb-1">Daily</p>
            <p className="text-[#00e676] text-lg font-bold">+32.5%</p>
            <p className="text-zinc-600 text-[10px]">$22,250</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl text-center border border-[#00e676]/20">
            <p className="text-zinc-500 text-[10px] mb-1">Weekly</p>
            <p className="text-[#00e676] text-lg font-bold">+47.0%</p>
            <p className="text-zinc-600 text-[10px]">$181,778</p>
          </div>
          <div className="bg-zinc-900 p-4 rounded-xl text-center">
            <p className="text-zinc-500 text-[10px] mb-1">Monthly</p>
            <p className="text-[#00e676] text-lg font-bold">+47.4%</p>
            <p className="text-zinc-600 text-[10px]">$211,748</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-zinc-500 text-xs font-medium uppercase tracking-widest">By trader</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold">@itsCblast</span>
              <div className="flex gap-4">
                <span className="text-[#00e676] font-medium">+47.5%</span>
                <span className="text-[#00e676] font-bold">$205,328</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-bold">@Darkhorse</span>
              <div className="flex gap-4">
                <span className="text-[#00e676] font-medium">+45.1%</span>
                <span className="text-[#00e676] font-bold">$6,420</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 pt-4">
          <button 
            onClick={onClose}
            className="flex-1 py-4 px-6 border border-zinc-700 rounded-full font-bold text-white text-sm"
          >
            Close
          </button>
          <button className="flex-1 py-4 px-6 bg-[#00e676] rounded-full font-bold text-black text-sm flex items-center justify-center gap-2">
            <Share2 size={16} />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default PerformanceModal;
