import { Contract, ethers } from "ethers";

import SiriusContract from "../contractArtifacts/hardhat/contracts/Sirius.sol/Sirious.json";

export const ETHEREUM = {
  chainId: "0x1",
  serverId: "eth",
  rpcUrls: [
    "https://eth-mainnet.g.alchemy.com/v2/_ADx07SfvidDd5H9zRplR0mBSXjHYWmE",
  ],
  chainName: "Ethereum",
  nativeCurrency: {
    name: "Ethereum",
    decimals: 18,
    symbol: "ETH",
  },
  blockExplorerUrls: ["https://etherscan.io/"],
  iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png"],
};

const AVALANCHE = {
  chainId: "0xa86a",
  chainName: "Avalanche",
  nativeCurrency: {
    name: "Avalanche",
    decimals: 18,
    symbol: "AVAX",
  },
  rpcUrls: ["https://api.avax.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
  iconUrls: [
    "https://static.debank.com/image/chain/logo_url/avax/4d1649e8a0c7dec9de3491b81807d402.png",
  ],
  contractAddress: "0x1a9Ae54bf1F89Ee447f7916B180140188dC9d197",
};

const POLYGON = {
  chainId: "0x89",
  rpcUrls: ["https://polygon-rpc.com"],
  chainName: "Polygon",
  nativeCurrency: { name: "Polygon", decimals: 18, symbol: "MATIC" },
  blockExplorerUrls: ["https://www.polygonscan.com"],
  iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png"],
  contractAddress: "0x614496821EA377e4FA4B8AE5d571Fc2Be1eA8CfB",
};

const HARMONY = {
  chainId: "0x63564c40",
  rpcUrls: ["https://api.harmony.one"],
  chainName: "Harmony",
  nativeCurrency: { name: "ONE", decimals: 18, symbol: "ONE" },
  blockExplorerUrls: ["https://explorer.harmony.one"],
  iconUrls: ["https://s2.coinmarketcap.com/static/img/coins/64x64/3945.png"],
};

const OPTIMISM = {
  chainId: "0xa",
  chainName: "Optimism",
  nativeCurrency: {
    name: "Ethereum",
    decimals: 18,
    symbol: "ETH",
  },
  rpcUrls: ["https://mainnet.optimism.io"],
  iconUrls: [
    "https://static.debank.com/image/chain/logo_url/op/01ae734fe781c9c2ae6a4cc7e9244056.png",
  ],
  blockExplorerUrls: ["https://explorer.optimism.io"],
};

const ARBITRUM = {
  chainId: "",
  chainName: "Arbitrum",
  nativeCurrency: {
    name: "Ethereum",
    decimals: 18,
    symbol: "ETH",
  },
  rpcUrls: ["	https://arb1.arbitrum.io/rpc"],
  iconUrls: ["https://arbiscan.io/images/svg/brands/arbitrum.svg?v=1.3"],
  blockExplorerUrls: ["	https://arbiscan.io/"],
};

const BINANCE = {
  chainId: "",
  chainName: "Binance (BSC)",
  nativeCurrency: {
    name: "BNB",
    decimals: 18,
    symbol: "BNB",
  },
  rpcUrls: ["https://bsc-dataseed1.binance.org"],
  iconUrls: [
    "https://static.debank.com/image/bsc_token/logo_url/bsc/8bfdeaa46fe9be8f5cd43a53b8d1eea1.png",
  ],
  blockExplorerUrls: ["https://www.bscscan.com/"],
};

const MUMBAI = {
  rpcUrls: ["https://matic-mumbai.chainstacklabs.com"],
};

export const networks = {
  1: ETHEREUM,
  10: OPTIMISM,
  56: BINANCE,
  137: POLYGON,
  42161: ARBITRUM,
  43114: AVALANCHE,
  80001: MUMBAI,
};

export const chainIdToContract = {
  1: "0x1a9Ae54bf1F89Ee447f7916B180140188dC9d197",
  80001: "0x2f45DA1658E57a213fe1c611c8139E3245f99326",
};

export const getContract = (chainId, provider) => {
  return new Contract(
    chainIdToContract[chainId],
    SiriusContract.abi,
    provider ??
      new ethers.providers.JsonRpcProvider(networks[chainId]?.rpcUrls?.[0])
  );
};
