the problem is that getting contracts to point to each other is going to result in messy things if there's a bug or an update that needs to happen

## Diamond Pattern

 - the outside world interacts with the diamond contract
 - using a microservice-like archeture, the diamond uses functionality from other contracts but stores data in itself

 ### Fallbacks

 - you don't have to specify a return, you can just revert and the message sends, the fallback executes functions when a function doesn't exist
  -  

### delegate calls

 - calling in perspective of another contract
 - they all share the same memory
 - the child contract never uses its memory
 - there's 2^256 - 1 slots
 - 

 ### storage layout

 - storage is really important
  - each contract has slots of memory that are 256 bits long each
 - there's 2^256 - 1 slots
  - the first variable declared goes into the first slot
  - as long as the contracts are ordered the same way, all of the contracts will be pointing to the same slots
   - storing a uint array stores the length first, then stores the elements of the array into random slots
   - mappings use their key provided to find things stored in memory



 - if you call an address that does not exist, the contract will execute anyway

 - if you create a struct it shares the data
 - sometimes ERC721 sets their own storage
 - it might mess up your storage

 there's a solution
 create a library

 https://github.com/mudgen/diamond-3-hardhat
 this the repo
