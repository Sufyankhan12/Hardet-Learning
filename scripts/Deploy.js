
async function main() {
  const Num = await ethers.getContractFactory("Num");
  console.log ("Deploying transfer Project .... ")
  const num = await Num.deploy();

  await num.deployed();

  console.log("Num Contract deployed to:", num.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
