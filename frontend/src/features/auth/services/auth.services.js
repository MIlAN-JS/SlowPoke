import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api/auth", 
    withCredentials : true
})



const registerUser = async({email , password , userName })=>{

    try {

        const response = await api.post("/register", {email , password , userName} )

        return response.data
        
    } catch (error) {

         console.log("cannot fetch user !!", error)
        
    }

}

const loginUser = async({email , password})=>{
    try {

        const response = await api.post("/login",{email, password})
        return response.data
        
    } catch (error) {
       
        console.log("cannot login user", error)

        return error
        
    }
}

const OauthLogin = ()=>{
    try {
    
         window.location.href = "http://localhost:3000/api/auth/google"
         
    } catch (error) {
        console.log("canot login with Oauth", error)
        return error
        
    }
}

const getUser = async()=>{


        const response = await api.get("/get-user")
        return response.data
        

       
}





export {
    registerUser, 
    loginUser, 
    OauthLogin,
    getUser
}