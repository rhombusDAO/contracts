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
    async function createTickets() {
        const Tickets = await ethers.getContractFactory("NFTTicket");
        const tickets = await Tickets.deploy(
            //three tickets (name, date)
            ["TicketOne", "TicketTwo", "TicketThree"],
            [6032022, 7032022, 8032022]
        );
        await tickets.deployed();

        console.log("Contract deployed to : ", tickets.address);

        return tickets;
    };

    let tickets;

    it("should deploy and return the names", async function() {
        const tickets = await createTickets();

        //use the getter inside the contract to pull the first ticket
        const ticket = (await tickets.getAllTickets())[0];

        console.log("printing the first ticket ", ticket.name);

        //test to see if the struct attributes are on the contract
        expect(ticket.name).to.equal("TicketOne");
        expect(ticket.ticketIndex).to.equal("0");
        expect(ticket.date).to.equal("6032022");

    });


})