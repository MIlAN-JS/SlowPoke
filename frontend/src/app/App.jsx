import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router'
import useAuth from "../features/auth/hooks/useAuth.js"
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router'
import Loading from '../components/LoadingPage/Loading.jsx'


const App = () => {
 
  const {handleGetUser } = useAuth()
  const user = useSelector(state => state.auth.user)
  const error = useSelector(state => state.auth.error)
  const loading = useSelector(state => state.auth.loading)
 
  const navigate = useNavigate()
  

  useEffect(()=>{

    handleGetUser()

  },[])


  if(loading){
    return <Loading/>
  }




  
  return (
    <>

    <Outlet/>
    
    </>
  )
}

export default App