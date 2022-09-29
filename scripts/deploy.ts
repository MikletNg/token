import { ethers } from "hardhat";

async function main() {
	const EDNSToken = await ethers.getContractFactory("EDNSToken");
	const ednsToken = await EDNSToken.deploy();
	await ednsToken.deployed();

	console.log(`EDNS Token deployed to ${ednsToken.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
