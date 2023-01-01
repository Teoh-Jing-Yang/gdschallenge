import { serverURL } from "../../../initRoute";

const EnergyRequest = serverURL + "/energyRequest"
const GetEnergyForecast = serverURL + "/energyForecast"
const GetBiddingRange = serverURL + "/biddingRange"

async function biddingRange(data) {
    console.log("arg",data)
    try {
        console.log(GetBiddingRange)

        return await fetch(GetBiddingRange,
            {
                method:'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
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

async function energyForecast(data) {
    console.log("arg",data)
    try {
        console.log(GetEnergyForecast)

        return await fetch(GetEnergyForecast,
            {
                method:'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
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

async function energyRequest(data) {
    console.log("arg",data)
    try {
        console.log(EnergyRequest)

        return await fetch(EnergyRequest,
            {
                method:'POST',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(data)
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

module.exports = {energyRequest,energyForecast,biddingRange}