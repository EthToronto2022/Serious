require("dotenv").config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  networks: {
    polygon: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY],
      chainId: 137,
    },
  },
  solidity: {
    version: "0.8.15",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  etherscan: {
    apiKey: {
      polygon: process.env.POLYGONSCAN_API_KEY,
    },
  },
  paths: {
    sources: "./hardhat/contracts",
    tests: "./hardhat/test",
    cache: "./hardhat/cache",
    artifacts: "./hardhat/contractArtifacts",
  },
};
