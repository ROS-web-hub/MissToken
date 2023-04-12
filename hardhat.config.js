require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  etherscan: {
    apiKey: "QH174CURA1RG1VT37EKU9ZBIQC694GRMBQ"
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
    bsctest: {
      url: `https://data-seed-prebsc-1-s3.binance.org:8545/`,
      accounts: [`346d047cb31d446bb9a30dddc798f070ddab4dfeb193156bf924ee807408fdc6`]
    },
    mainnet: {
      url: "https://bsc-dataseed1.binance.org/",
      accounts: [`346d047cb31d446bb9a30dddc798f070ddab4dfeb193156bf924ee807408fdc6`]
    }

  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.4.18",
        settings: {},
      },
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.6.0",
        settings: {},
      },
      {
        version: "0.5.0",
        settings: {},
      },
      {
        version: "0.5.16",
        settings: {},
      },
      {
        version: "0.6.6",
        settings: {},
      },
      {
        version: "0.6.2",
        settings: {},
      },
      {
        version: "0.8.0",
        settings: {},
      },
      {
        version: "0.8.5",
        settings: {},
      },
    ]
  }
};