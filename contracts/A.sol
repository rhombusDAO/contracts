// pragma solidity ^0.8.0;

// import "hardhat/console.sol";
// import "./Storage.sol";

// contract A {

//     function setA(uint _a) public {
//         AppStorage storage s = Storage.get();
//         s.a = _a;
//     }

//     function getA() public view returns (uint) {
//         return s.a;
//     }
// }

// contract B {
//     //uses one slot of memory
//     // uint b;
//     // these three go the second line of memory
//     // uint8 c;
//     // uint8 d;
//     // address ContractA;

//     AppStorage s;
//     constructor(address _A) {
//         s.ContractA = _A;
//         s.b = 4;
//         s.c = 0x45;
//         s.d = 0xF5;
//     }

//     function setB(uint _b) public {
//         s.b = _b;

//         //call A, casting A's address to a contract
//         // A(ContractA).setA(_b + 1);
        
//         // do a delegat call, which calls A in perspective of B
//         (bool success, bytes memory bbb) = s.ContractA.delegatecall(
//             abi.encodeWithSignature("setA(uint256)", _b + 1)
//         );
//     }

//     function getB() public view returns (uint) {
//         return s.b;
//     }
// }