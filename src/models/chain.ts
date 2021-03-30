export interface NativeCurrency {
  name: string;
  symbol: string;
  decimals: number;
}

export interface Chain {
  name: string;
  chainId?: number;
  shortName?: string;
  chain?: string;
  network: string;
  networkId?: string;
  nativeCurrency?: NativeCurrency,
  rpc: string[];
  faucets?: string[];
  infoURL?: string[];
  url?: string;
  summary?: string;
  [k: string]: any;
}
