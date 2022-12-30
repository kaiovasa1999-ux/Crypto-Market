require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/v68Rma6rDYybUuLlxGwU6MjtlToPseq7",
      accounts: [
        "ffab1e91cfa8feed1e9f7965607c360bdb171019c223d82524a796a84fd973b2",
      ],
    },
  },
};
