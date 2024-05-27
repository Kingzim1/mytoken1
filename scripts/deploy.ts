import { expect } from "chai";
import { ethers } from "hardhat";

Describe("MyToken", function () {
  it ("deploy contract", async function () {
    const ContractFactory = await ethers.getContractFactory("MyToken");

    const initialOwner = (await ethers.getSigners())[0].address;

    const instance = await ContractFactory.deploy(initialOwner);
    await instance.waitForDeployment();

    expect(await instance.name()).to.equal("MyToken");
  });
});


function Describe(arg0: string, arg1: () => void) {
  throw new Error("Function not implemented.");
}

