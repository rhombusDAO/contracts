
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";


async function deploy() {
    const Midis = await ethers.getContractFactory("MidiNotes");
    const midiNotes = await Midis.deploy(
        "https://justinkuhn.media/", // base URI
        4, // num chord progessions
        ethers.utils.parseEther("0.01") // mint price
    );
    await midiNotes.deployed();

    console.log("Contract deployed to : ", midiNotes.address);

    return midiNotes;
}

// @ts-ignore
async function sayHello(midiNotes) {
    // console.log("Say Hello", await midiNotes.setComposer("Justin"));
}

deploy().then(sayHello);
