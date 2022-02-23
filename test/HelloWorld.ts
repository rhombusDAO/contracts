import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("hello world", function() {
    it("should say hi", async function() {

        // setup

        // deploy

        //get contract
        const HelloWorld = await ethers.getContractFactory("HelloWorld");

        //deploy contract
        const hello = await HelloWorld.deploy();
        //making sure that it's been confirmed on the network to be considered on the network
        await hello.deployed();

        // test
        expect(await hello.hello()).to.equal("Hello World");


    });
});
