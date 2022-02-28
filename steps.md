https://github.com/ThePrimeagen/web3-smart-contracts


yard add -D hardhat

npx hardhat compile

yarn add -D @nomiclabs/hardhat-ethers ethers @nomiclabs/hardhat-waffle ethereum-waffle chai

yarn add --save-dev ts-node typescript

yarn add --save-dev chai @types/node @types/mocha @types/chai

nvm use 16

write helloworld.ts

npx hardhat test

write script

npx hardhat node

npx hardhat run scripts/deploy.ts --network localhost

this is listed in the node that's running
Contract call:       HelloWorld#hello
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  To:                  0x5fbdb2315678afecb367f032d93f642f64180aa3

    Contract deployment: HelloWorld
  Contract address:    0x5fbdb2315678afecb367f032d93f642f64180aa3
  Transaction:         0x4bb8ae5bfad73253de8acc88a807f35b0cc5b8c280a04a9a875dd9e5fdb90e92
  From:                0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266
  Value:               0 ETH
  Gas used:            135067 of 135067
  Block #1:            0xc5c07be6a0e968fb4d4a2d8de8d49b45d4fa1c4a24a83245d9f350bd77faf465



npx webpack

start vs code live server

everything worked

ContractFactory
To deploy a Contract, additional information is needed that is not available on a Contract object itself.

Mainly, the bytecode (more specifically the initcode) of a contract is required.

The Contract Factory sends a special type of transaction, an initcode transaction (i.e. the to field is null, and the data field is the initcode) where the initcode will be evaluated and the result becomes the new code to be deployed as a new contract.

with counter, we modified state, meaning that gas was used and a new block was created in order to deploy the contract

You can only get data out of 'view' and 'pure' functions
view - does not change state
pure - does not read or write state

public - anyone
private - only me
internal - me and subclasses
external - public but I can't call it


you can specify events!!!!!  this is it

every transaction has a log field that you can look up, you can see the entire history of events that take place

https://github.com/crytic/evm-opcodes
https://ethgasstation.info/

use hardhat gas reporter to find out how much your contract will cost on main net








