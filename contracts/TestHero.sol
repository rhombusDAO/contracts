pragma solidity ^0.8.0;

import './Hero.sol';

//making predictable results for testing
contract TestHero is Hero {
    uint random;
    //random numbers make testing difficult
    // 
    function generateRandom() public override view returns (uint) {
        return random;
    }

    function setRandom(uint r) public {
        random = r;
    }
} 