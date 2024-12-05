import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";
import { MISC_INFO } from "../../scripts/misc-addresses";
import { getChainId } from "../../scripts/utils";

export default buildModule("UniswapV2Periphery", (m) => {
  const chainId = getChainId();

  // Get addresses from configuration
  const FACTORY_ADDRESS = MISC_INFO[chainId]?.POOL_FACTORY!;  // UniswapV2Factory address
  const WRAPPED_NATIVE = MISC_INFO[chainId]?.WRAPPED_NATIVE!; // WETH address

  // Deploy UniswapV2Router01 (the original router)
  const router01 = m.contract(
    "UniswapV2Router01",
    [
      FACTORY_ADDRESS,
      WRAPPED_NATIVE
    ]
  );

  // Deploy UniswapV2Router02 (the upgraded router with additional features)
  const router02 = m.contract(
    "UniswapV2Router02",
    [
      FACTORY_ADDRESS,
      WRAPPED_NATIVE
    ]
  );

  // Return all deployed contracts
  return {
    router01,
    router02
  };
});
