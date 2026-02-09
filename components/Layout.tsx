
import React from 'react';
import { Plus, Share2 } from 'lucide-react';

interface HeaderProps {
  title: string;
  showAdd?: boolean;
  showShare?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showAdd = true, showShare = false }) => {
  return (
    <header className="px-6 py-4 flex items-center justify-between sticky top-0 bg-black z-40">
      <div className="w-8" /> {/* Spacer */}
      <h1 className="text-lg font-bold">{title}</h1>
      <div className="flex items-center gap-4">
        {showShare && <Share2 size={20} className="text-white" />}
        {showAdd && (
          <div className="border border-white/20 rounded-full p-0.5">
            <Plus size={18} className="text-white" />
          </div>
        )}
      </div>
    </header>
  );
};
