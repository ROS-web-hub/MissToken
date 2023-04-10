require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: true
    },
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