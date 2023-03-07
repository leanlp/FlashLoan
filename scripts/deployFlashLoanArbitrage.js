const hre = require("hardhat");

async function main() {
  console.log("deploying...");
  const FlashLoanArbitrage = await hre.ethers.getContractFactory(
    "FlashLoanArbitrage"
  );
  const flashLoanArbitrage = await FlashLoanArbitrage.deploy(
    "0xC911B590248d127aD18546B186cC6B324e99F02c" // this address is a flashloan contract
  );

  await flashLoanArbitrage.deployed();

  console.log("Flash loan contract deployed: ", flashLoanArbitrage.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
