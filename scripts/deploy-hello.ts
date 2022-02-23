import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";


async function deploy() {
        //get contract
        const HelloWorld = await ethers.getContractFactory("HelloWorld");

        //deploy contract
        const hello = await HelloWorld.deploy();
        //making sure that it's been confirmed on the network to be considered on the network
        await hello.deployed();

        return hello;
}

// @ts-ignore
async function sayHello(hello) {
    console.log("Say Hello", await hello.hello());
}

deploy().then(sayHello);
