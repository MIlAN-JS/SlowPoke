import { useDispatch } from "react-redux";
import { getUser, loginUser, OauthLogin, registerUser } from "../services/auth.services";
import { setLoading , setUser, setError  } from "../state/authSlice";


const useAuth = ()=>{

  const dispatch = useDispatch()

  const handleRegister = async({email , password , userName})=>{

    try {

       dispatch(setLoading(true))
        const data = await registerUser({email, password , userName})
        dispatch(setUser(data.user))
        
    } catch (error) {
        setError(error)
        console.log(error , "error while regiser")
    }finally{
        dispatch(setLoading(false))
    }

  }
  const handleLogin = async({email , password })=>{ 

    try {

        dispatch(setLoading(true))
        const data = await loginUser({email, password })
        dispatch(setUser(data.user))
        
    } catch (error) {
       dispatch(setError(error))
        console.log(error , "error while login")
    }finally{
        dispatch(setLoading(false))
    }

  }

  const handleGetUser = async()=>{ 

    try {

        dispatch(setLoading(true))
        const data = await getUser()
        dispatch(setUser(data.user))
        
    } catch (error) {

   
       dispatch(setError({
        message : error?.response?.data?.message,
        success : error?.response?.data?.success
       }))
      
    }finally{
        dispatch(setLoading(false))
    }

  }


  const handleOauth = ()=>{
    try {

      OauthLogin()
      
    } catch (error) {
      dispatch(setError(error))
    }
  }
  

  return {
    handleRegister,
    handleLogin,
    handleGetUser, 
    handleOauth
  }

}

export default useAuth