export default [
  {
    "members": [
      {
        "name": "low",
        "offset": 0,
        "type": "felt"
      },
      {
        "name": "high",
        "offset": 1,
        "type": "felt"
      }
    ],
    "name": "Uint256",
    "size": 2,
    "type": "struct"
  },
  {
    "data": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      },
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "keys": [],
    "name": "domain_to_addr_update",
    "type": "event"
  },
  {
    "data": [
      {
        "name": "address",
        "type": "felt"
      },
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "keys": [],
    "name": "addr_to_domain_update",
    "type": "event"
  },
  {
    "data": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      },
      {
        "name": "owner",
        "type": "Uint256"
      },
      {
        "name": "expiry",
        "type": "felt"
      }
    ],
    "keys": [],
    "name": "starknet_id_update",
    "type": "event"
  },
  {
    "data": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "keys": [],
    "name": "reset_subdomains_update",
    "type": "event"
  },
  {
    "inputs": [
      {
        "name": "starknetid_contract_addr",
        "type": "felt"
      },
      {
        "name": "pricing_contract_addr",
        "type": "felt"
      },
      {
        "name": "admin",
        "type": "felt"
      }
    ],
    "name": "constructor",
    "outputs": [],
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "name": "domain_to_address",
    "outputs": [
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "name": "domain_to_expiry",
    "outputs": [
      {
        "name": "expiry",
        "type": "felt"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "name": "address_to_domain",
    "outputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "name": "domain_to_token_id",
    "outputs": [
      {
        "name": "owner",
        "type": "Uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      },
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "name": "set_domain_to_address",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "name": "set_address_to_domain",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_hash",
        "type": "felt"
      }
    ],
    "name": "book_domain",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "token_id",
        "type": "Uint256"
      },
      {
        "name": "domain",
        "type": "felt"
      },
      {
        "name": "days",
        "type": "felt"
      },
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "name": "buy",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain",
        "type": "felt"
      },
      {
        "name": "days",
        "type": "felt"
      }
    ],
    "name": "renew",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      },
      {
        "name": "target_token_id",
        "type": "Uint256"
      }
    ],
    "name": "transfer_domain",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      }
    ],
    "name": "reset_subdomains",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "name": "set_admin",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "domain_len",
        "type": "felt"
      },
      {
        "name": "domain",
        "type": "felt*"
      },
      {
        "name": "token_id",
        "type": "Uint256"
      }
    ],
    "name": "set_domain_owner",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "address",
        "type": "felt"
      }
    ],
    "name": "set_pricing_contract",
    "outputs": [],
    "type": "function"
  },
  {
    "inputs": [
      {
        "name": "erc20",
        "type": "felt"
      },
      {
        "name": "amount",
        "type": "Uint256"
      }
    ],
    "name": "transfer_balance",
    "outputs": [],
    "type": "function"
  }
]
