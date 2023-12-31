import { ethers } from "ethers";
import { is_native } from "../utils";
import { SwapTx, ExactInputSingle, ExactOutputSingle, ExactInput, ExactOutput, TradeType } from "../../types";


export const exec_swap = async( swapTx: SwapTx ): Promise<void> => {

    const { path, tradeType } = swapTx.trade
    const { EXACT_INPUT, EXACT_OUTPUT } = TradeType

    try {

        if ( path.length > 2 && tradeType === EXACT_INPUT )    await exactInput( swapTx )
        if ( path.length > 2 && tradeType === EXACT_OUTPUT )   await exactOutput( swapTx )
        if ( path.length === 2 && tradeType === EXACT_INPUT )  await exactInputSingle( swapTx )
        if ( path.length === 2 && tradeType === EXACT_OUTPUT ) await exactOutputSingle( swapTx )
        
    } catch (error) {

       throw( error )

    }
}


export const exactInputSingle = async( swapTx: SwapTx ): Promise<void> => {
    
    const { signer, trade, SwapRouter } = swapTx
    const { pool, amountIn, amountOut, amountOutMin, tokenIn, tokenOut, sqrtPriceLimitX96, deadline } = trade
    const value = is_native( tokenIn.address ) ? amountIn : BigInt( 0 )

    try {

        console.log(`\n\nSwapping exact ${ ethers.formatUnits( amountIn, tokenIn.decimals ) } ${ tokenIn.symbol } for ${ ethers.formatUnits( amountOut, tokenOut.decimals ) } ${ tokenOut.symbol }...`)      

        const txArgs: ExactInputSingle = { 
            tokenIn: tokenIn.address, 
            tokenOut: tokenOut.address, 
            fee: pool.fees,
            recipient: signer.address,
            deadline: deadline,
            amountIn: amountIn,
            amountOutMinimum: amountOutMin!,
            sqrtPriceLimitX96: sqrtPriceLimitX96,
        }
        const nonce = await signer.getNonce()

        const tx = await SwapRouter.exactInputSingle( txArgs, { value: value, nonce: nonce } )
        const receipt = await tx.wait()

        console.log("\nTransaction valided !")
        console.log("hash: ", tx.hash)
        console.log("fees: ", ethers.formatEther( receipt?.fee ?? '0' ), 'ETH')

    } catch (error) {
        
        throw( error )

    }
}

export const exactOutputSingle = async( swapTx: SwapTx ): Promise<void> => {

    const { signer, trade, SwapRouter } = swapTx
    const { amountIn, amountInMax, amountOut, tokenIn, tokenOut, sqrtPriceLimitX96, deadline, pool } = trade
    const value = is_native( tokenIn.address ) ? amountInMax : BigInt( 0 )

    try {
        
        console.log(`\n\nSwapping ${ ethers.formatUnits( amountIn, tokenIn.decimals ) } ${ tokenIn.symbol } for ${  ethers.formatUnits( amountOut, tokenOut.decimals ) } ${ tokenOut.symbol }...`)      

        const txArgs: ExactOutputSingle = { 
            tokenIn: tokenIn.address, 
            tokenOut: tokenOut.address, 
            fee: pool.fees,
            recipient: signer.address,
            deadline: deadline,
            amountOut: amountOut,
            amountInMaximum: amountInMax!,
            sqrtPriceLimitX96: sqrtPriceLimitX96,
        }
        const nonce = await signer.getNonce()

        const tx = await SwapRouter.exactOutputSingle( txArgs, { value: value, nonce: nonce } )
        const receipt = await tx.wait()

        console.log("\nTransaction valided !")
        console.log("hash: ", tx.hash)
        console.log("fees: ", ethers.formatEther( receipt?.fee ?? '0' ), 'ETH')

    } catch (error) {
        
        throw( error )

    }
}


export const exactInput = async( swapTx: SwapTx ): Promise<void> => {

    const { signer, trade, SwapRouter } = swapTx
    const { amountIn, amountOut, amountOutMin, path, tokenIn, tokenOut, deadline } = trade
    const value = is_native( tokenIn.address ) ? amountIn : BigInt( 0 )

    try {

        console.log(`\n\nSwapping ${ ethers.formatUnits( amountIn, tokenIn.decimals ) } ${ tokenIn.symbol } for ${  ethers.formatUnits( amountOut, tokenOut.decimals ) } ${ tokenOut.symbol }...`)      

        const txArgs: ExactInput = { 
            path: ethers.AbiCoder.defaultAbiCoder().encode( [ "address", "address"], path ),
            recipient: signer.address, 
            deadline, 
            amountIn: amountIn,
            amountOutMinimum: amountOutMin!
        }
        const nonce = await signer.getNonce()

        const tx = await SwapRouter.exactInput( txArgs, { value: value, nonce: nonce } )
        const receipt = await tx.wait()

        console.log("\nTransaction valided !")
        console.log("hash: ", tx.hash)
        console.log("fees: ", ethers.formatEther( receipt?.fee ?? '0' ), 'ETH')

    } catch (error) {
        
        throw( error )

    }
}

export const exactOutput = async( swapTx: SwapTx ): Promise<void> => {

    const { signer, trade, SwapRouter } = swapTx
    const { amountIn, amountInMax, amountOut, path, tokenIn, tokenOut, deadline } = trade
    const value = is_native( tokenIn.address ) ? amountInMax : BigInt( 0 )

    try {

        console.log(`\n\nSwapping ${ ethers.formatUnits( amountIn, tokenIn.decimals ) } ${ tokenIn.symbol } for ${  ethers.formatUnits( amountOut, tokenOut.decimals ) } ${ tokenOut.symbol }...`)      

        const txArgs: ExactOutput = { 
            path: ethers.AbiCoder.defaultAbiCoder().encode( [ "address", "address"], path ),
            recipient: signer.address, 
            deadline, 
            amountOut: amountOut,
            amountInMaximum: amountInMax!
        }
        const nonce = await signer.getNonce()

        const tx = await SwapRouter.exactOutput( txArgs, { value: value, nonce: nonce } )
        const receipt = await tx.wait()

        console.log("\nTransaction valided !")
        console.log("hash: ", tx.hash)
        console.log("fees: ", ethers.formatEther( receipt?.fee ?? '0' ), 'ETH')

    } catch (error) {
        
        throw( error )

    }
}