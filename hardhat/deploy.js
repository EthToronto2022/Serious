// npx hardhat run hardhat/deploy.js --network polygon
// npx hardhat verify --network polygon 0x614496821EA377e4FA4B8AE5d571Fc2Be1eA8CfB

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const factory = await ethers.getContractFactory("Sirius");
  const contract = await factory.deploy();

  await contract.deployed();
  console.log("Address:", contract.address);

  const tx = await contract.setKeyword("mortgage", {
    value: ethers.utils.parseEther("0.01"),
  });
  await tx.await();
}

main();
