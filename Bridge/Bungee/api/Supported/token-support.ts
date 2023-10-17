import axios from "axios";
import dotenv from "dotenv"
import { SOCKET_V2_URL } from "../../config/constants";
import { AddressLike } from "ethers";
import { Token } from "../../type/types";

dotenv.config()

const ENDPOINT = "/supported/token-support"

/**
 * @return Returns the status of the bridging transaction if completed or pending.
 */
export const get_supported_token = async( chainId: number, address: AddressLike ): Promise<{ isSupported: boolean, token: Token }> => {

    const url = SOCKET_V2_URL + ENDPOINT
    const params = { chainId, address }
    const headers = {
        'API-KEY': process.env.SOCKET_APIKEY!,
        'Content-Type': 'application/json'
    }

    try {

        const res = await axios.get( url, { params, headers } )

        return res.data.result
        
    } catch (error) {
        
        throw( error )

    }
}