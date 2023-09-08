import { Provider, constants } from "starknet"
import { erc20_sol_abi } from "./abis/erc20Sol"
import { erc20_stark_abi } from "./abis/erc20Stark"
import { cross_address_abi } from "./abis/crossAddress"

export const STARKNET_TESTNET_PROVIDER = new Provider({ sequencer: { network: constants.NetworkName.SN_GOERLI } }) // for starknet "TESTNET" 1
export const STARKNET_MAINNET_PROVIDER = new Provider({ sequencer: { network: constants.NetworkName.SN_MAIN } }) // for starknet "MAINNET"

export const ERC20_SOL_ABI = erc20_sol_abi
export const ERC20_STARK_ABI = erc20_stark_abi
export const CROSS_ADDRESS_ABI = cross_address_abi

export const ORBITER = {
    "TESTNET": "0x6838e53488B9F75894a9fDF9feB509eE22c281dd",
}

export const ORBITER_CHAINID_TO_NETWORKID: { [key: number]: string } = {
    1: '1',         // "MAINNET"
    2: '42161',     // Arbitrum
    3: '1',         // zk
    4: '1',         // starknet
    5: '4',         // rinkeby
    6: '137',       // polygon
    7: '10',        // optimism
    8: '1',         // "MAINNET"
    9: '1',         // loopring
    10: '1088',     // metis
    510: '588',     // metis test
    11: '1',        // dydx
    22: '421611',   // arbitrum test
    33: '4',        // zktest
    44: '5',        // starknet(R)
    66: '80001',    // polygon(R)
    77: '69',       // optimism(K)
    88: '3',        // ropsten
    99: '5',        // loopring(G)
    511: '3',       // dydx(R)
    12: '13',       // ZKSpace "MAINNET"
    512: '133',     // ZKSpace "TESTNET"
    15: '56',       // BSC "MAINNET"
    515: '97',      // BSC "TESTNET"
    514: '280',     // ZkSync2(G)
    16: '42170',    // nova
    516: '421613',  // nova(G)
    517: '1402',    // po zkevm(G)
}

export const CHAIN_INDEX: any = {
    1: "eth",
    2: "arbitrum",
    22: "arbitrum",
    3: "zksync",
    33: "zksync",
    4: "starknet",
    44: "starknet",
    5: "eth",
    6: "polygon",
    66: "polygon",
    7: "optimism",
    77: "optimism",
    8: "immutablex",
    88: "immutablex",
    9: "loopring",
    99: "loopring",
    10: "metis",
    510: "metis",
    11: "dydx",
    511: "dydx",
    12: "zkspace",
    512: "zkspace",
    13: "boba",
    513: "boba",
    14: "zksync2",
    514: "zksync2",
    15: "bnbchain",
    515: "bnbchain",
    16: "arbitrum_nova",
    516: "arbitrum_nova",
    17: "polygon_zkevm",
    517: "polygon_zkevm",
    518: "scroll_l1_test",
    519: "scroll_l2_test",
    21: 'base',
    521: "base_test",
    23: 'linea',
    523: "linea_test",
    24: 'mantle',
    524: "mantle_test",
    25: "opbnb",
    30: "zora",
    530: "zora_test",
    599: "orbiter",
};
  
export const L1_TO_L2_MAKER_ADDRESSES: { [key: string]: any } = {
    '0x095d2918b03b2e86d68551dcf11302121fb626c9': {
      'MAINNET': '0x0411c2a2a4dc7b4d3a33424af3ede7e2e3b66691e22632803e37e2e0de450940',
      'TESTNET': '0x050e5ba067562e87b47d87542159e16a627e85b00de331a53b471cee1a4e5a4f',
    },
    '0x80c67432656d59144ceff962e8faf8926599bcf8': {
      'MAINNET': '0x07b393627bd514d2aa4c83e9f0c468939df15ea3c29980cd8e7be3ec847795f0',
      'TESTNET': '0x050e5ba067562e87b47d87542159e16a627e85b00de331a53b471cee1a4e5a4f',
    },
}

export const CROSS_ADDRESS: { [key: string]: string } = {
    1: '0xD9D74a29307cc6Fc8BF424ee4217f1A587FBc8Dc',
    2: '0xD9D74a29307cc6Fc8BF424ee4217f1A587FBc8Dc',
    4: '0x0173f81c529191726c6e7287e24626fe24760ac44dae2a1f7e02080230f8458b',
    5: '0xD9D74a29307cc6Fc8BF424ee4217f1A587FBc8Dc',
    6: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    7: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    14: '0xbf3922a0cebbcd718e715e83d9187cc4bba23f11',
    16: '0xD9D74a29307cc6Fc8BF424ee4217f1A587FBc8Dc',
    17: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    21: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    22: '0x1AC6a2965Bd55376ec27338F45cfBa55d8Ba380a',
    23: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    24: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    25: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    30: '0xd9d74a29307cc6fc8bf424ee4217f1a587fbc8dc',
    44: '0x0457bf9a97e854007039c43a6cc1a81464bd2a4b907594dabc9132c162563eb3',
    66: '0x40eC19690ebEd534e9b9C58e341727028cF143c0',
    77: '0x89EBCf7253f5E27b45E82cd228c977Fd03E47f54',
    514: '0x9147eE8678C27a2E677A84aB14F7303E451E99Fb',
    517: '0x99c0b2B824D7291E832DC9018B24CaA6B68673E2',
    524: '0xf1e276a6518dff455fdabfdc582591fda35797ea',
}

export const NETWORK_NAME_TO_ORBITERID: { [key: string]: any } = {
    "MAINNET": 
    {
        'ethereum': 1,
        'arbitrum': 2,
        "zksync": 3,
        'starknet': 4,
        'polygon': 6,
        "optimism": 7,
    },
    "TESTNET":
    {
        "ethereum": 5, // goerli
        'arbitrum': 22,
        "zksync": 33,
        'starknet': 44,
        'polygon': 66,
        "optimism": 77,

    },
}

export const NETWORK_NAME_TO_ID: { [key: string]: any } = {
    "MAINNET": 
    {
        'ethereum': 1,
        'arbitrum': 42161,
        'zk': 1,
        'starknet': 1,
        'rinkeby': 4,      
        'polygon': 137,    
        'optimism': 10,      
        'loopring': 1,       
        'metis': 1088,
        'dydx': 1,
        'zkspace': 13,
        'bsc': 56,
        'zksync2': 280,
        'nova': 87,
        'zkevm': 1402,
    },
    "TESTNET": {
        'metis-"TESTNET"': 588,
        'arbitrum': 421613,
        'zk': 4,
        'starknet': 5,
        'polygon': 80001,
        'optimism-kovan': 69,
        'ropsten': 3,
        'loopring': 5,
        'dydx': 3,
        'zkspace': 13,
        'bsc': 97,
        'nova': 42170,
    }
}

// Tokens
export const TOKENS: { [key: string]: any } = {
    'MAINNET': {
        eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        usdc:'0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8',
        dai:'0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3',
        wbtc:'0x03fe2b97c1fd336e750087d68b9b867997fd64a2661ff3ca5a7c771641e8e7ac',
        usdt:'0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8',
    },
    'TESTNET': {
        eth: '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7',
        dai: '0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9',
        usdc: '0x005a643907b9a4bc6a55e9069c4fd5fd1f5c79a22470690f75556c4736e34426', 
        tka: '0x02e2faab2cad8ecdde5e991798673ddcc08983b872304a66e5f99fbb24e14abc',
        tkb: '0x0250a29c8cd4d07a4db0516798fe86225e362439e769c9a0e1640d4a8ec12883',
    }
}

export const TICKER: {[key: string]: string} = {
    "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7": "ETH",
    "0x0000000000000000000000000000000000000000": "ETH",
    "0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa": "ETH",
    "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619": "ETH",
    "0x2170ed0880ac9a755fd29b2688956bd959f933f8": "ETH",
    "0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111": "ETH",

    "0x03e85bfbb8e2a42b7bead9e88e9a1b19dbccf661471061807292120462396ec9": "DAI",
    "0x00da114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3": "DAI",
    "0x6B175474E89094C44Da98b954EedeAC495271d0F": "DAI",
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1": "DAI",
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063": "DAI",

    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F": "USDT",
    "0xdac17f958d2ee523a2206206994597c13d831ec7": "USDT",
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9": "USDT",
    "0x94b008aA00579c1307B0EF2c499aD98a8ce58e58": "USDT",
    "0x1E4a5963aBFD975d8c9021ce480b42188849D41d": "USDT",
    "0x068f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8": "USDT",

    "0x176211869ca2b568f2a7d4ee941e073a821ee1ff": "USDC",
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48": "USDC",
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8": "USDC",
    "0x750ba8b76187092b0d1e87e28daaf484d1b5273b": "USDC",
    "0x7F5c764cBc14f9669B88837ca1490cCa17c31607": "USDC",
    "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4": "USDC",
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174": "USDC",
    "0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035": "USDC",
    "0x053c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8": "USDC",
}

