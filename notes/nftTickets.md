first contract address 0x5FbDB2315678afecb367f032d93F642f64180aa3

what the structs look like:

sayy Hello [
  [
    'TicketOne',
    BigNumber { value: "0" },
    BigNumber { value: "6032022" },
    name: 'TicketOne',
    ticketIndex: BigNumber { value: "0" },
    date: BigNumber { value: "6032022" }
  ],
  [
    'TicketTwo',
    BigNumber { value: "1" },
    BigNumber { value: "7032022" },
    name: 'TicketTwo',
    ticketIndex: BigNumber { value: "1" },
    date: BigNumber { value: "7032022" }
  ],
  [
    'TicketThree',
    BigNumber { value: "2" },
    BigNumber { value: "8032022" },
    name: 'TicketThree',
    ticketIndex: BigNumber { value: "2" },
    date: BigNumber { value: "8032022" }
  ]
]

successfully test the contract to see the struct was initialized.

next steps:

 - display the struct attributes on a webpage
 - test the minting process
 - test checkifuserhasnft function
 - use the webpage to mint, and do conditional rendering if user has nft

 - add functionality in contract to:
    - have split ownership of an nft
    - split a single ticket pool into 1000 tickets are whatever
    - deploy contract with percent ownership
    - setup payment and distribution
    - transfer ticket to another user
    