import { Chains, Fees } from "../types"

// V3 POOL

export const BEST_FEE_POOL: { [key in Chains]: any } = {

    polygon: {

      WMATIC_WETH: Fees.LOW,
      WMATIC_USDC: Fees.LOW,
      WMATIC_USDT: Fees.MEDIUM,
      WMATIC_DAI: Fees.MEDIUM,

      WETH_WMATIC: Fees.LOW,
      WETH_USDC: Fees.MEDIUM,
      WETH_USDT: Fees.MEDIUM,
      WETH_DAI: Fees.VERY_LOW,

      USDC_WMATIC: Fees.LOW,
      USDC_WETH: Fees.MEDIUM,
      USDC_USDT: Fees.VERY_LOW,
      USDC_DAI: Fees.VERY_LOW,

      USDT_WMATIC: Fees.MEDIUM,
      USDT_WETH: Fees.MEDIUM,
      USDT_USDC: Fees.VERY_LOW,
      USDT_DAI: Fees.VERY_LOW,

      DAI_WMATIC: Fees.MEDIUM,
      DAI_WETH: Fees.VERY_LOW,
      DAI_USDC: Fees.VERY_LOW,
      DAI_USDT: Fees.VERY_LOW,

    },
  
    arbitrum: {
  
        WETH_USDC: Fees.LOW,
        WETH_USDT: Fees.LOW,
        WETH_DAI: Fees.VERY_LOW,
  
        USDC_WETH: Fees.LOW,
        USDC_USDT: Fees.VERY_LOW,
        USDC_DAI: Fees.VERY_LOW,
  
        USDT_WETH: Fees.LOW,
        USDT_USDC: Fees.VERY_LOW,
        USDT_DAI: Fees.VERY_LOW,
  
        DAI_WETH: Fees.VERY_LOW,
        DAI_USDC: Fees.VERY_LOW,
        DAI_USDT: Fees.VERY_LOW,

    },
    
    optimism: {
          
        WETH_USDC: Fees.MEDIUM,
        WETH_USDT: Fees.MEDIUM,
        WETH_DAI: Fees.LOW,
  
        USDC_WETH: Fees.MEDIUM,
        USDC_USDT: Fees.LOW,
        USDC_DAI: Fees.LOW,
  
        USDT_WETH: Fees.MEDIUM,
        USDT_USDC: Fees.LOW,
        USDT_DAI: Fees.MEDIUM,
  
        DAI_WETH: Fees.LOW,
        DAI_USDC: Fees.LOW,
        DAI_USDT: Fees.MEDIUM,

    },
  
    ethereum: {
                  
        WETH_USDC: Fees.MEDIUM,
        WETH_USDT: Fees.LOW,
        WETH_DAI: Fees.VERY_LOW,
  
        USDC_WETH: Fees.MEDIUM,
        USDC_USDT: Fees.VERY_LOW,
        USDC_DAI: Fees.VERY_LOW,
  
        USDT_WETH: Fees.LOW,
        USDT_USDC: Fees.VERY_LOW,
        USDT_DAI: Fees.VERY_LOW,
  
        DAI_WETH: Fees.VERY_LOW,
        DAI_USDC: Fees.VERY_LOW,
        DAI_USDT: Fees.VERY_LOW,

    },
  
    avalanche: {       
        
        WAVAX_WETH: Fees.MEDIUM,
        WAVAX_USDC: Fees.LOW,
        WAVAX_USDT: Fees.MEDIUM,
        WAVAX_DAI: Fees.MEDIUM,

        WETH_WAVAX: Fees.MEDIUM,
        WETH_USDC: Fees.MEDIUM,
        WETH_USDT: Fees.LOW,
        WETH_DAI: Fees.BIG,
  
        USDC_WAVAX: Fees.LOW,
        USDC_WETH: Fees.MEDIUM,
        USDC_USDT: Fees.VERY_LOW,
        USDC_DAI: Fees.VERY_LOW,
  
        USDT_WAVAX: Fees.MEDIUM,
        USDT_WETH: Fees.LOW,
        USDT_USDC: Fees.VERY_LOW,
        USDT_DAI: Fees.VERY_LOW,
  
        DAI_WAVAX: Fees.MEDIUM,
        DAI_WETH: Fees.BIG,
        DAI_USDC: Fees.VERY_LOW,
        DAI_USDT: Fees.VERY_LOW,

    },
  
    bsc: {

        WBNB_WETH: Fees.MEDIUM,
        WBNB_USDC: Fees.MEDIUM,
        WBNB_USDT: Fees.LOW,
        WBNB_DAI: Fees.LOW,

        WETH_WBNB: Fees.MEDIUM,
        WETH_USDC: Fees.LOW,
        WETH_USDT: Fees.LOW,
        WETH_DAI: Fees.LOW,
  
        USDC_WBNB: Fees.MEDIUM,
        USDC_WETH: Fees.LOW,
        USDC_USDT: Fees.VERY_LOW,
        USDC_DAI: Fees.LOW,
  
        USDT_WBNB: Fees.LOW,
        USDT_WETH: Fees.LOW,
        USDT_USDC: Fees.VERY_LOW,
        USDT_DAI: Fees.VERY_LOW,
  
        DAI_WBNB: Fees.LOW,
        DAI_WETH: Fees.LOW,
        DAI_USDC: Fees.LOW,
        DAI_USDT: Fees.VERY_LOW,

    },
  
    ethereumTestnet: {},
    avalancheTestnet: {},
    polygonTestnet: {},
    arbitrumTestnet: {},
}