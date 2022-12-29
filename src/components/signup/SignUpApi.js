const serverURL = "http://192.168.0.118:8000";
const SignUpRequest = serverURL + "/signUp"

async function userSignUp(data) {
    console.log("arg",data)
    try {
        console.log(SignUpRequest)

        return await fetch(SignUpRequest,
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

module.exports = {userSignUp}