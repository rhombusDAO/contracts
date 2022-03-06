
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";


async function deploy() {
    const Tickets = await ethers.getContractFactory("NFTTicket");
    const tickets = await Tickets.deploy(
        //three tickets (name, date)
        ["TicketOne", "TicketTwo", "TicketThree"],
        [6032022, 7032022, 8032022]
    );
    await tickets.deployed();

    console.log("Contract deployed to : ", tickets.address);

    return tickets;
}

// @ts-ignore
async function sayHello(tickets) {
    console.log("Say Hello", await tickets.getAllTickets());
}

deploy().then(sayHello);
