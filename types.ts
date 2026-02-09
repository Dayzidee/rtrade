
export enum MainTab {
  MARKETS = 'Markets',
  NEWS = 'News',
  ANALYTICS = 'Analytics',
  COPY_TRADING = 'Copy Trading',
  PROFILE = 'Profile'
}

export enum CopyTradingSubTab {
  OVERVIEW = 'Overview',
  BROKERS = 'Brokers',
  TRADERS = 'Traders',
  POSITIONS = 'Positions',
  SETTINGS = 'Settings'
}

export interface Trader {
  id: string;
  handle: string;
  avatar: string;
  winRate: number;
  totalPL: number;
  followers: number;
  isFollowing: boolean;
  avgHoldTime?: string;
  riskStyle?: string;
}

export interface Position {
  id: string;
  ticker: string;
  contract: string;
  status: 'Open' | 'Closed';
  gainAmount: number;
  gainPercent: number;
  expDate: string;
  contractsCount: number;
  entryPrice: number;
  exitPrice?: number;
  traderHandle: string;
}

export interface OptionFlowItem {
  id: string;
  timestamp: string;
  ticker: string;
  type: 'CALL' | 'PUT';
  subtype: 'TRADE' | 'SWEEP';
  side: 'BID' | 'ASK';
  strike: number;
  premium: string;
  sizeAtPrice: string;
  volume: number;
  oi: number;
  expiry: string;
  color: string;
}

export interface AlgoEdgeItem {
  id: string;
  ticker: string;
  signal: 'Bullish' | 'Bearish' | 'Neutral';
  confidence: number;
  timestamp: string;
  price: number;
  target?: number;
}

export interface TreemapItem {
  id: string;
  ticker: string;
  change: number;
  sector: string;
  volume: string;
}
