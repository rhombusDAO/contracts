pragma solidity ^0.8.0;

//stores data in a more reasonable way
struct AppStorage {
    uint a;
    uint b;
    uint8 c;
    uint8 d;
    address ContractA;
}

// //never have to worry about to 
// library Storage {
//     bytes32 KEY = keccak256("my-storage-location");
//     function get() internal pure returns(AppStorage storage s) {
//         bytes32 k = KEY;
//         assembly {
//             s.slot = k;
//         }
//     }
// }