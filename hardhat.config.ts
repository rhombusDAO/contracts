import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "hardhat-gas-reporter";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */



module.exports = {
  solidity: "0.8.4",
  // change the chain id to match metamask
  networks: {
    hardhat: {
      chainId: 1337
    }
  }
};
