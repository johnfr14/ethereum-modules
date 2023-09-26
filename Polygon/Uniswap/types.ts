import { Contract, Wallet } from "ethers"
import { Token, Trade, Percent, JSBI, Pair } from "@uniswap/sdk"



export type ApproveTx = {
    Erc20: Contract, 
    spender: string, 
    amount: bigint,
    decimals: number
    network: 'TESTNET' | 'MAINNET' 
}

export type SwapTx = {
    signer: Wallet
    Router: Contract
    trade: Trade
    path: [string, string]
    slipage: Percent
    deadline: number
    network: 'TESTNET' | 'MAINNET' 
}

export type AddLiquidityTx = {
    signer: Wallet
    pool: Pair
    tokenA: Token
    tokenB: Token
    amountADesired: bigint
    amountBDesired: bigint
    amountAMin: bigint
    amountBMin: bigint
    to: string
    deadline: number
    network: 'TESTNET' | 'MAINNET' 
    Router: Contract
}

export type RemoveLiquidityTx = {
    signer: Wallet
    pool: Pair
    balanceLp: any
    liquidity: bigint
    amountAMin: bigint
    amountBMin: bigint
    to: string
    deadline: number
    stable: boolean
    percent: number
    network: 'TESTNET' | 'MAINNET'
    Router: Contract
}

export type SwapExactETHForTokens = {
    amountOutMin: JSBI
    path: string[] 
    to: string
    deadline: number
}

export type SwapETHForExactTokens = {
    amountOut: JSBI
    path: string[] 
    to: string
    deadline: number
}

export type SwapExactTokensForETH = {
    amountIn: JSBI
    amountOutMin: JSBI 
    path: string[] 
    to: string
    deadline: number
}

export type SwapTokensForExactETH = {
    amountOut: JSBI
    amountInMax: JSBI 
    path: string[] 
    to: string
    deadline: number
}

export type SwapExactTokensForTokens = {
    amountIn: JSBI
    amountOutMin: JSBI 
    path: string[] 
    to: string
    deadline: number
}

export type SwapTokensForExactTokens = {
    amountOut: JSBI
    amountInMax: JSBI 
    path: string[] 
    to: string
    deadline: number
}

export type AddLiquidity = {
    tokenA: string,
    tokenB: string,
    amountADesired: bigint,
    amountBDesired: bigint,
    amountAMin: bigint,
    amountBMin: bigint,
    to: string,
    deadline: number
}

export type AddLiquidityETH = {
    token: string,
    amountTokenDesired: bigint,
    amountTokenMin: bigint,
    amountETHMin: bigint,
    to: string,
    deadline: number
}

export type RemoveLiquidity = {
    tokenA: string
    tokenB: string
    liquidity: bigint
    amountAMin: bigint
    amountBMin: bigint
    to: string
    deadline: number
}

export type RemoveLiquidityETH = {
    token: string
    liquidity: bigint
    amountTokenMin: bigint
    amountETHMin: bigint
    to: string
    deadline: number
}