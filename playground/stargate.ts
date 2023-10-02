import { JsonRpcProvider, Wallet } from "ethers"
import Stargate from "../Bridge/Stargate"
import { log_balances } from "../Bridge/Stargate/log"
import { resolve_provider } from "../Bridge/Stargate/utils"
import { Chains } from "../Bridge/Stargate/types"
import dotenv from "dotenv"

dotenv.config()


const main = async() => {
    
    const { STARGATE_CHAIN_ID, TOKENS } = Stargate.Constant
    
    try {
        // Set up
        const fromChain: Chains = "ethereumTestnet"
        const toChain: Chains = "avalancheTestnet"

        const provider = resolve_provider( STARGATE_CHAIN_ID[ fromChain ] )
        const signer = new Wallet( process.env.ETH_PRIVATE_KEY!, provider )

        // console.log("account: ", signer.address)
        // await log_balances( signer, fromChain )
        // console.log("")

        
        await Stargate.bridge(
            signer,
            TOKENS[ fromChain ].usdc,
            TOKENS[ toChain ].dai,
            fromChain,
            toChain,
            '1',
            // { max: true }
        )


    } catch (error: any) {
  
        console.log(error)
        return (1)
  
    }
}
  
main()