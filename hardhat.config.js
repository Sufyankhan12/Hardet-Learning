/**  @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");



// this is two more important thing URl varibale have infura project link where it is deployed 
// and Accounts have my rinkeby account private link 
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: {
      url: Url,
      accounts :Accounts,
      chainId : 4, 
      gasMultiplyer2 : 1,
      gas : 2100000,
      gasPrice : 8000000000,
      timeout : 2000,
      saveDeployment : true ,
      

    },
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },

};
