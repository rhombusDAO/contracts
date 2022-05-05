import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";
require("dotenv").config();

/**
 * @type import('hardhat/config').HardhatUserConfig
 */



module.exports = {
  solidity: "0.8.4",
  // change the chain id to match metamask
  networks: {
    mumbai: {
      url: process.env.ALCHEMY,
      accounts: [process.env.METAMASK],
    },
    polygon: {
      chainId: 137,
      url: process.env.ALCHEMY_PROD,
      accounts: [process.env.METAMASK],
    },
    hardhat: {
      chainId: 1337
    }
  }
};
