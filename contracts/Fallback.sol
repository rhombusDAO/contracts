pragma solidity ^0.8.0;

import "hardhat/console.sol";

// this interface should allow you to call functions that may not exist
interface IFallback {
    function count() external;
}

contract Fallback {
    // this function will be called internally
    function foo() internal view {
        console.log("Hello World");
    }

    //this is executed when the function doesn't exist 
    fallback() external payable {
        foo();
        console.log("fallback");

        revert("You shouldn't be here");
    } 
}