
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";


async function deploy() { 
        const Midis = await ethers.getContractFactory("MidiNotes");
        const midiNotes = await Midis.deploy(
            "https://justinkuhn.media/", // base URI
            4, // num chord progessions
            ethers.utils.parseEther("0.001") // mint price
        );
        await midiNotes.deployed();
    
        console.log("Contract deployed to : ", midiNotes.address);
    
        return midiNotes;
    }

// @ts-ignore
async function sayHello(midiNotes) {
    // console.log("Say Hello", await midiNotes.setComposer("Justin"));
            // (boolean mintingEnables, uint256 supply);
            await midiNotes.setMintingEnabled(true, ethers.BigNumber.from(10));

            console.log("set minting to true");
     
            await midiNotes.addFirstMelodyPart(
                0,  //numchord progressions
                '0x40393E373C353B34' // melody call data
            )
     
}

deploy().then(sayHello);
