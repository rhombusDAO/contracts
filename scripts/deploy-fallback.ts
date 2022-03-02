import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy(name, ...args) {
    const Fallback = await ethers.getContractFactory(name);
    const fallback = await Fallback.deploy(...args);
    await fallback.deployed();

    return fallback;
}

async function printStorage(contract, name, count) {
    for (let i = 0; i<count; ++i) {
        console.log(name, i, await 
            ethers.provider.getStorageAt(contract.address, i));
    }
}

async function fallback() {
    //these two lines just deploy and link the addresses
    const a = await deploy("A");
    const b = await deploy("B", a.address);

    // call without values
    console.log("A", await a.getA());
    console.log("B", await b.getB());

    //call after just setting A
    await a.setA(42);
    console.log("A", await a.getA());
    console.log("B", await b.getB());

    await b.setB(60);
    // call after setting B, which sets A to B+1; 
    console.log("A", await a.getA());
    console.log("B", await b.getB());

    await printStorage(b, "B", 3);
    await b.setB(45);

    await printStorage(b, "B", 3);
}

fallback();

// class Foo {
//     private bar: number;
//     foo() { console.log("foo", this.bar) }
// }

// you can set this.bar by using call()
// const foo = new Foo();
// foo.foo();
// foo.foo.call( {
//     bar:42
// })