const hre = require("hardhat");

async function main() {
  const TransferOwner = await hre.ethers.getContractFactory("TransferOwner");
  console.log ("Deploying transfer Project")
  const transferOwner = await TransferOwner.deploy("Hello, TransferOwner");

  await transferOwner.deployed();

  console.log("TransferOwner deployed to:", TransferOwner.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
