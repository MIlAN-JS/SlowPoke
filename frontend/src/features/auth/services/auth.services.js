import axios from "axios"

const api = axios.create({
    baseURL : "http://localhost:3000/api/auth", 
    withCredentials : true
})



const registerUser = async({email , password , fullName , confirmPassword , gender })=>{

    try {

        const response = await api.post("/register", {emaili , password , fullName , confirmPassword , gender} )

        return response.data
        
    } catch (error) {

         console.log("cannot fetch user !!", error)
        
    }

}



export {
    registerUser
}