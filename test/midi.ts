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
            ethers.utils.parseEther("0.01") // mint price
        );
        await midiNotes.deployed();
    
        console.log("Contract deployed to : ", midiNotes.address);
    
        return midiNotes;
    }

    let midiNotes;

    it("should deploy and return the names", async function() {
        const midiNotes = await deploy();

        //use the getter inside the contract to pull the first ticket
        // const ticket = (await tickets.getAllTickets())[0];

        // console.log("printing the first ticket ", ticket.name);

        // //test to see if the struct attributes are on the contract
        // expect(ticket.name).to.equal("TicketOne");
        // expect(ticket.ticketIndex).to.equal("0");
        // expect(ticket.date).to.equal("6032022");

    });


})