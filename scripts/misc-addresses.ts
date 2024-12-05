import { SupportedChainId } from "./chains";

type Address = `0x${string}`;

export interface MiscInfo {
  POOL_FACTORY: Address; // the UniswapV2Factory
  WRAPPED_NATIVE: Address;
  WRAPPED_NATIVE_SYMBOL: string;
}

export const MISC_INFO: Partial<Record<SupportedChainId, MiscInfo>> = {
  [SupportedChainId.INK_SEPOLIA]: {
      POOL_FACTORY: "0x5cfE73b0238Bb3E636Dc4e68a31bEe5d7fbEa1fa",
      WRAPPED_NATIVE: "0x4200000000000000000000000000000000000006",
      WRAPPED_NATIVE_SYMBOL: "WETH9",
  },
};
