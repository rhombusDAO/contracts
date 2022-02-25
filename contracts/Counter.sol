// state mutating contract

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint counter;

    // create an event
    event CounterInc(uint counter);

    //this function writes to state
    //you can't get data from a write function
    function count() public {
        counter++;
        console.log("counter is now ", counter);
        emit CounterInc(counter);
    }

    //reading is free
    //this function reads from state, you'll want to distinguish
    function getCounter() public view returns (uint) {
        return counter;
    }
}