events!!!
https://docs.soliditylang.org/en/v0.8.9/abi-spec.html?highlight=event#events

Events are inheritable members of contracts. When you call them, they cause the arguments to be stored in the transaction’s log - a special data structure in the blockchain. These logs are associated with the address of the contract, are incorporated into the blockchain, and stay there as long as a block is accessible (forever as of now, but this might change with Serenity). The Log and its event data is not accessible from within contracts (not even from the contract that created them)



subscriptions

building a contracts that explores all the kinds of events you can have and UI to interact with it



