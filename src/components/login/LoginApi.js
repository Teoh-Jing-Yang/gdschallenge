import { serverURL } from "../../../initRoute";
console.log(serverURL)
const LoginRequest = serverURL + "/login"

async function userLogin(data) {
    console.log("arg",data)
    try {
        console.log(LoginRequest)

        return await fetch(LoginRequest,
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

module.exports = {userLogin}