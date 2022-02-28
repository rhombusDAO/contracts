pragma solidity ^0.8.0;

// hero contract
contract Hero {
    // enum creates types 
    //The Boolean type, for example is often a pre-defined enumeration of the values False and True.
    // no semicolon
    enum Class { Mage, Healer, Barbarian }

    //for every address assign a dynamic list
    mapping(address => uint[]) addressToHeros;

    // memory means that
    function getHeros() public view returns (uint[] memory) {
        return addressToHeros[msg.sender];
    }

    function getStrength(uint hero) public pure returns(uint32) {
        //to access the strength bits (2-7), shift, then & to read
        // the other bits greater than 32 will be zero, which ignores other stats
        return uint32((hero >> 2) & 0x1F);
    }

    function getHealth(uint hero) public pure returns(uint32) {
        //to access the strength bits (2-7), shift, then & to read
        // the other bits greater than 32 will be zero, which ignores other stats
        return uint32((hero >> 5) & 0x1F);
    }

    function getDex(uint hero) public pure returns(uint32) {
        //to access the strength bits (2-7), shift, then & to read
        // the other bits greater than 32 will be zero, which ignores other stats
        return uint32((hero >> 12) & 0x1F);
    }

    function getIntellect(uint hero) public pure returns(uint32) {
        //to access the strength bits (2-7), shift, then & to read
        // the other bits greater than 32 will be zero, which ignores other stats
        return uint32((hero >> 17) & 0x1F);
    }

    function getMagic(uint hero) public pure returns(uint32) {
        //to access the strength bits (2-7), shift, then & to read
        // the other bits greater than 32 will be zero, which ignores other stats
        return uint32((hero >> 22) & 0x1F);
    }

    //this function requires eth to execute
    function createHero(Class class) public payable {
        require(msg.value >= 0.05 ether, "please send more money");

        //generate stats
        // each stat is from 1 to 18\

        // the stats are stored in the function
        uint[] memory stats = new uint[](5);

        //represented by 0, 1, or 2.  so 2 bits of info
        stats[0] = 2;
        // you need 5 bits to store the number 18, so incrementing by 5
        stats[1] = 7;
        stats[2] = 12;
        stats[3] = 17;
        stats[4] = 22;

        uint len = 5;

        uint hero = uint(class);

        do {
            // generate a number between 0 and 4 inclusive
            uint pos = generateRandom() % len;
            // generate a number between 1 and 18 inclusive
            uint value = generateRandom() % (13 + len) + 1;

            // write the stat on the hero's binary number
            hero |= value << stats[pos];

            len--;
            stats[pos] = stats[len];

        } while (len > 0);

        addressToHeros[msg.sender].push(hero);


    }

    // hashes a random number based on timestamp and difficulty
    // still not super safe because it's on the same chain 
    // virtual so we can abstract it
    function generateRandom() public view virtual returns (uint) {
        return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
    }
}