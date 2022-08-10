// npx hardhat run hardhat/deploy.js --network polygon
// npx hardhat verify --network polygon 0x614496821EA377e4FA4B8AE5d571Fc2Be1eA8CfB

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const contract = await ethers.getContractFactory("Sirius");
  const instance = await contract.deploy();

  await instance.deployed();
  console.log("Address:", instance.address);
}

main();
