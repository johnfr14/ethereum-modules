export default  [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_fallbackPoolFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_fallbackVotingRewardsFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_fallbackGaugeFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "_newManagedRewardsFactory",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "FallbackFactory",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidFactoriesToPoolFactory",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PathAlreadyApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "PathNotApproved",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "SameAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ZeroAddress",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "votingRewardsFactory",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "gaugeFactory",
        "type": "address"
      }
    ],
    "name": "Approve",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_newRewardsFactory",
        "type": "address"
      }
    ],
    "name": "SetManagedRewardsFactory",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "votingRewardsFactory",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "gaugeFactory",
        "type": "address"
      }
    ],
    "name": "Unapprove",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "votingRewardsFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "gaugeFactory",
        "type": "address"
      }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      }
    ],
    "name": "factoriesToPoolFactory",
    "outputs": [
      {
        "internalType": "address",
        "name": "votingRewardsFactory",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "gaugeFactory",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "fallbackPoolFactory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      }
    ],
    "name": "isPoolFactoryApproved",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "managedRewardsFactory",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "poolFactories",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "poolFactoriesLength",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newManagedRewardsFactory",
        "type": "address"
      }
    ],
    "name": "setManagedRewardsFactory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "poolFactory",
        "type": "address"
      }
    ],
    "name": "unapprove",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
]