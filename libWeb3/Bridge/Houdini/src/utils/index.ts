import chains from "../../config/chains"
import { ERC20_ABI  } from "../../config/constants"
import { Balance, Network, Token } from "../../types"
import { ethers, Wallet, Contract, JsonRpcProvider } from "ethers"

/**
 * @dev Will fetch the RPC endpoint of the network specified in argument and connect the signer to that network
 * @returns A new instance of Wallet set for the new network 
 */
export const resolve_chain = ( signer: Wallet, network: Network ): Wallet => {

    const provider = resolve_provider( network )
    signer = new Wallet( signer.privateKey, provider )

    return signer
}

/**
 * @dev Find the network's details from the list ( ../config/chains.ts ) 
 */
export const resolve_provider = ( network: Network ): JsonRpcProvider => {

    const chain_info = Object.values( chains ).find(( item ) => network === item.name )

    const provider = new JsonRpcProvider( chain_info!.rpc[0] )

    return provider
}


export const get_balance = async( token: Token, signer: Wallet ): Promise<Balance> => {
    
    let balance: bigint;
    let decimals: number

    try {

        
        if ( token.address )
        {
            const erc20 = new Contract( token.address, ERC20_ABI, signer );
            balance = await erc20.balanceOf( signer.address );
            decimals = await erc20.decimals();
        }
        else
        {
            balance  = await signer.provider!.getBalance( signer.address )
            decimals = 18
        }

        let formated = ethers.formatUnits( balance , decimals );
        
        return { 
            big: balance,
            string: formated, 
            decimals: decimals
        };

    } catch (error) {

        throw( error )

    }

}

export const is_native = ( token: string ): boolean => {

    if ( token === "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE" ) return true

    return false
}