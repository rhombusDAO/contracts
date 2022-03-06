// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

// NFT contract to inherit from.
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

// Helper functions OpenZeppelin provides.
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

//what's happening in our contract?

/*
1. the nft is created through string list and a date list (see constructor)
2. the attribute struct list (tickets) is created with a for loop
3. nothing.  We now need a user to go in and mint the nft using the function
*/


contract NFTTicket is ERC721 {

    //ticket nft attributes
    struct TicketAttributes {
        string name;
        uint256 ticketIndex;
        uint256 date;
    }

    //create the struct
    TicketAttributes[] tickets;

    // The tokenId is the NFTs unique identifier, it's just a number that goes
    // 0, 1, 2, 3, etc.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    //mappings for address to ticket attributes
    mapping(address => uint256) public nftHolders;
    mapping(uint256 => TicketAttributes) public nftHolderAttributes;

    //create an event for when the nft is created
    event NFTTicketMinted(address sender, uint256 tokenId, uint256 ticketIndex);

    constructor(
        string[] memory ticketNames,
        uint256[] memory dates
    )

    //create nft
    ERC721("Tickets", "TIX") {
        for(uint256 i = 0; i<ticketNames.length; i++) {
            tickets.push(
                    TicketAttributes({
                    name: ticketNames[i],
                    ticketIndex: i,
                    date: dates[i]
                })
            );

            TicketAttributes memory c = tickets[i];
            console.log("done initializing %s", c.name);    
        }

        _tokenIds.increment();
    }

    function mintTicketNFT(uint256 _ticketIndex) external {
        uint256 newId = _tokenIds.current();

        _safeMint(msg.sender, newId);

        // pass the index parameter to create the mapping to uint256
        nftHolderAttributes[newId] = TicketAttributes({
            name: tickets[_ticketIndex].name,
            ticketIndex: _ticketIndex,
            date: tickets[_ticketIndex].date
        });

        console.log(
            "minted NFT ticket %s with index %s", 
            newId,
            _ticketIndex
        );
        
        //keep track of who owns the nft
        nftHolders[msg.sender] = newId;

        //increment the id counter
        _tokenIds.increment();

        //emit event
        emit NFTTicketMinted(msg.sender, newId, _ticketIndex);

    }

    function checkIfUserHasNFT() public view returns (TicketAttributes memory) {
        uint256 userTokenId = nftHolders[msg.sender];

        //if the user has a token id , return their ticket
        if (userTokenId > 0 ) {
            return nftHolderAttributes[userTokenId];
        } else {
            TicketAttributes memory emptyTicket;
            return emptyTicket;
        }
    } 

    function getAllTickets() public view returns(TicketAttributes[] memory) {
        return tickets;
    }

}