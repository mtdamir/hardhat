const hre = require("hardhat");

async function main() {

  const StakingPool = await hre.ethers.getContractFactory("StakingPool");
  const stakingpool = await StakingPool.deploy();

  await stakingpool.deployed();

  console.log("StakingPool deployed to:", stakingpool.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

