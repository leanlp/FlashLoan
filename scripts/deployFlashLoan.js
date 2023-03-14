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
    "0x0496275d34753A48320CA58103d5220d394FF77F" //pool address provider
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
