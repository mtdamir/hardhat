require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
let secrets =  require("./secrets.json")


task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});


module.exports = {
  solidity: "0.7.5",
  networks: {
    ropsten: {
      url: secrets.url,
      accounts: [secrets.key]
    }
  },
  etherscan: {
    apiKey: "Z3VKSXMD5PF1GCMIKK9JFXY755TTVHWRD3"
  }
};