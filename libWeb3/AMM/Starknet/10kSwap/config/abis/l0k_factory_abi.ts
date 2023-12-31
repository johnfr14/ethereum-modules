export default [
  {
    "data": [
      {
        "name": "token0",
        "type": "felt"
      },
      {
        "name": "token1",
        "type": "felt"
      },
      {
        "name": "pair",
        "type": "felt"
      },
      {
        "name": "index",
        "type": "felt"
      }
    ],
    "keys": [],
    "name": "PairCreated",
    "type": "event"
  },
  {
    "inputs": [
      {
        "name": "pairClass",
        "type": "felt"
      },
      {
        "name": "feeToSetter",
        "type": "felt"
      }
    ],
    "name": "constructor",
    "outputs": [],
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "feeTo",
    "outputs": [
      {
        "name": "feeTo",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeToSetter",
    "outputs": [
      {
        "name": "feeToSetter",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "token0",
        "type": "felt"
      },
      {
        "name": "token1",
        "type": "felt"
      }
    ],
    "name": "getPair",
    "outputs": [
      {
        "name": "pair",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "index",
        "type": "felt"
      }
    ],
    "name": "allPairs",
    "outputs": [
      {
        "name": "pair",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "allPairsLength",
    "outputs": [
      {
        "name": "length",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "tokenA",
        "type": "felt"
      },
      {
        "name": "tokenB",
        "type": "felt"
      }
    ],
    "name": "createPair",
    "outputs": [
      {
        "name": "pair",
        "type": "felt"
      }
    ],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "feeTo",
        "type": "felt"
      }
    ],
    "name": "setFeeTo",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "feeToSetter",
        "type": "felt"
      }
    ],
    "name": "setFeeToSetter",
    "outputs": [],
    "type": "function"
  }
]
