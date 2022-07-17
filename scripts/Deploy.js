
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

// some importand points
// 1.npx hardhat ndoe 
// 2.npx hardhat compile
// 3.npx hardhat run --network localhost scripts/Deploy.js
// 4. npx hardhat console
// 5. const Num = await ethers.getContractFactory("Num");
// 6.   const num = await Num.deploy();
          //  or const num = await Num.attach("contract addreess");
// 7. await num.Setnumber(23);
// just set and get number if some problem go to hardhat website
 
