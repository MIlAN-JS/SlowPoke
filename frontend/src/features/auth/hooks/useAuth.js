import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../services/auth.services";
import { setLoading , setUser, setError  } from "../state/authSlice";


const useAuth = ()=>{

  const disPatch = useDispatch()

  const handleRegister = async({email , password , userName})=>{

    try {


        const data = await registerUser({email, password , userName})
        console.log(data)
        setUser(data.user)
        
    } catch (error) {
        setError(error)
        console.log(error , "error while regiser")
    }

  }
  const handleLogin = async({email , password })=>{ 

    try {


        const data = await loginUser({email, password })
        console.log(data)
        setUser(data.user)
        
    } catch (error) {
        setError(error)
        console.log(error , "error while login")
    }

  }
  

  return {
    handleRegister
  }

}

export default useAuth