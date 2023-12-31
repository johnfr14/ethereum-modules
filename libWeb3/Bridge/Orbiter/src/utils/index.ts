import chains from "../../config/chains";
import { is_native_token } from "./transfer";
import { BridgeToken, ChainType, TxTransferArgs } from "../../types";
import { JsonRpcProvider, Contract as SolContract , Wallet, ethers } from "ethers";
import { MAINNET_PROVIDER, STARKNET_TESTNET_PROVIDER } from "../../config/constant";
import { Account, Contract as StarkContract, uint256, Provider, RpcProvider } from "starknet";

export const get_balance = async( signer: Account | Wallet, token: BridgeToken ): Promise<string> => 
{
    let balance: any;

    if ( is_native_token( token.address ) )
    {
        const provider = token.provider as JsonRpcProvider
        balance = await provider.getBalance( signer.address )
        return ethers.formatUnits( balance, token.precision )
    }
    
    if ( token.contract instanceof StarkContract || token.contract instanceof SolContract )
        balance = await token.contract.balanceOf( signer.address )

    if ( typeof balance === 'object')
        balance = uint256.uint256ToBN( balance.balance )

    return ethers.formatUnits( balance, token.precision )
}

/**
 * 
 * @param chainId   // Orbiter id 
 */
export const resolve_provider = ( orbiterId: number ): JsonRpcProvider | Provider | RpcProvider => {

    if ( orbiterId === 4 || orbiterId === 44)
        return orbiterId === 4 ? MAINNET_PROVIDER : STARKNET_TESTNET_PROVIDER

    const chain_info = <ChainType> Object.values( chains ).find(( item ) => parseInt( item.internalId ) === orbiterId )

    const provider = new JsonRpcProvider( chain_info!.rpc[0] )

    return provider
}

export const log_routes = ( txArgs: TxTransferArgs ) => {

    console.log("\nRoutes:")

    // From
    if ( txArgs.fromChain.name === "starknet" )
        console.log(`\tFrom ${ txArgs.fromChain.name}: ${ txArgs.starkSigner.address } => ${ txArgs.maker.makerAddress }`)
    else
        console.log(`\tFrom ${ txArgs.fromChain.name}: ${ txArgs.evmSigner.address } => ${ txArgs.maker.makerAddress }`)

    // To
    if ( txArgs.toChain.name === "starknet" )
        console.log(`\tTo ${ txArgs.toChain.name}: ${ txArgs.maker.sender } => ${ txArgs.starkSigner.address }`)
    else
        console.log(`\tTo ${ txArgs.toChain.name }: ${ txArgs.maker.sender } => ${ txArgs.evmSigner.address }`)
}

export const not_enough_balance = ( token: BridgeToken, amount: string, balance: string ): boolean  => {

    return ethers.parseUnits( amount, token.precision ) > ethers.parseUnits( balance, token.precision )
}