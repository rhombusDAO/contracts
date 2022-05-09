/*
testing the nft tickets

1. create the contract, deploy
2. test the names
3. test the token ids
4. test the dates

*/

import _ from "@nomiclabs/hardhat-ethers";

import { ethers } from "hardhat";
import { expect } from "chai";

describe("Ticket", function() {
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

    let midiNotes;

    it("should deploy and return the names", async function() {
        const midiNotes = await deploy();

        console.log("deployed");

        // (boolean mintingEnables, uint256 supply);
       await midiNotes.setMintingEnabled(true, ethers.BigNumber.from(10));

       console.log("set minting to true");

       await midiNotes.addFirstMelodyPart(
           0,  //numchord progressions
           '0x40393E373C353B34' // melody call data
       )


      console.log("added melody");

       const tokenID = await midiNotes.mint(
           {
                value: ethers.utils.parseEther("0.001")
            }
        );



       console.log(tokenID.data)

        const myMidi = await midiNotes.midi();

    //    for (var thing in myMidi) {
    //        console.log(thing);
    //    }

       console.log(myMidi)

        //use the getter inside the contract to pull the first ticket
        // const ticket = (await tickets.getAllTickets())[0];

        // console.log("printing the first ticket ", ticket.name);

        // //test to see if the struct attributes are on the contract
        // expect(ticket.name).to.equal("TicketOne");
        // expect(ticket.ticketIndex).to.equal("0");
        // expect(ticket.date).to.equal("6032022");

    });


})