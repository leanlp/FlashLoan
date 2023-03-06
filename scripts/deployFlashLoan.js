// const { ethers, providers } = require("ethers");
const hre = require("hardhat");
require("dotenv").config();

// const provider = new ethers.providers.AlchemyProvider("goerli", {alchemy: "r0nkGmym0W20Gm4Dieo1fktmAch6E4WO"})
// const provider = new ethers.providers.InfuraProvider("goerli", {infura: process.env.INFURA_GOERLI_ENDPOINT});
// const wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
// const signer = wallet.connect(provider);

async function bb() {
  const bb= await hre.ethers.provider.getBlockNumber()
  // const bb = await provider._getBlock()
  console.log(bb)
}
// bb()


async function main() {
  console.log("deploying...");
  const flashLoanFactory = await hre.ethers.getContractFactory("FlashLoan");
  const flashLoan = await flashLoanFactory.deploy(   
    // "0xc4dCB5126a3AfEd129BC3668Ea19285A9f56D15D"
    "0xC911B590248d127aD18546B186cC6B324e99F02c"
  );
console.log("step")
console.log(flashLoan)
  await flashLoan.deployed();
  console.log(flashLoan)

  console.log("Flash loan contract deployed: ", flashLoan.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
