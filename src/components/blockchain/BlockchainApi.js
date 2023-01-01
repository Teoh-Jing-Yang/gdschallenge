import { serverURL } from "../../../initRoute";

const GetBlockchain = serverURL + "/getBlockchain"

async function getBlockchain() {
    try {
        console.log(GetBlockchain)

        return await fetch(GetBlockchain,
            {
                method:'GET',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  }
            })
            .then(async (response) => await response.json())
            .then(async(json)=>{
                console.log("Here are the results",json)
                return json
            })
            .catch((error)=> {
                console.log(error)
            })
    } catch(error){
        console.log("Error")
        console.log(error)
    }
}

module.exports = {getBlockchain}