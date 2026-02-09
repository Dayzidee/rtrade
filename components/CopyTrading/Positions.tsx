
import React from 'react';
import { Position } from '../../types';

const Positions: React.FC = () => {
  const positions: Position[] = [
    { id: '1', ticker: 'RIVN', contract: '14.5C', status: 'Closed', gainAmount: 1400.00, gainPercent: 100.0, expDate: '02/06', contractsCount: 200, entryPrice: 0.07, exitPrice: 0.14, traderHandle: '@itsCblast' },
    { id: '2', ticker: 'NVDA', contract: '180.0C', status: 'Closed', gainAmount: 20500.00, gainPercent: 30.6, expDate: '02/06', contractsCount: 500, entryPrice: 1.34, exitPrice: 1.75, traderHandle: '@itsCblast' },
    { id: '3', ticker: 'SPX', contract: '6850.0C', status: 'Closed', gainAmount: 74848.35, gainPercent: 56.7, expDate: '02/05', contractsCount: 220, entryPrice: 6.00, exitPrice: 9.40, traderHandle: '@itsCblast' },
    { id: '4', ticker: 'BABA', contract: '165.0C', status: 'Closed', gainAmount: -8250.00, gainPercent: -30.0, expDate: '02/06', contractsCount: 500, entryPrice: 0.55, exitPrice: 0.39, traderHandle: '@itsCblast' },
    { id: '5', ticker: 'MSFT', contract: '410.0P', status: 'Closed', gainAmount: 270.00, gainPercent: 43.5, expDate: '02/04', contractsCount: 10, entryPrice: 0.62, exitPrice: 0.89, traderHandle: '@Darkhorse' },
    { id: '6', ticker: 'TSLA', contract: '425.0C', status: 'Closed', gainAmount: 5824.00, gainPercent: 58.2, expDate: '02/06', contractsCount: 182, entryPrice: 0.55, exitPrice: 0.87, traderHandle: '@itsCblast' },
  ];

  return (
    <div className="p-4 space-y-3">
      {positions.map((pos) => (
        <div key={pos.id} className="bg-zinc-900/60 p-4 rounded-2xl border border-zinc-800/50">
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white">{pos.ticker} {pos.contract}</span>
              <span className="bg-zinc-800 text-zinc-400 text-[10px] px-2 py-0.5 rounded font-medium uppercase">{pos.status}</span>
            </div>
            <span className={`font-bold ${pos.gainAmount >= 0 ? 'text-[#00e676]' : 'text-red-500'}`}>
              {pos.gainAmount >= 0 ? '+' : ''}${pos.gainAmount.toFixed(2)}
            </span>
          </div>

          <div className="space-y-0.5">
             <div className="text-zinc-500 text-xs">Exp: {pos.expDate} · {pos.contractsCount} contracts</div>
             <div className="text-zinc-500 text-xs">Entry ${pos.entryPrice.toFixed(2)} → Exit ${pos.exitPrice?.toFixed(2)}</div>
             <div className={`text-xs font-bold ${pos.gainPercent >= 0 ? 'text-[#00e676]' : 'text-red-500'}`}>
               Gain: {pos.gainPercent >= 0 ? '+' : ''}{pos.gainPercent}%
             </div>
             <div className="text-zinc-600 text-[10px] mt-1 italic">Trader: {pos.traderHandle}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Positions;
