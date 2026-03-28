import React, { useEffect } from 'react'
import { Outlet } from 'react-router'
import useAuth from "../features/auth/hooks/useAuth.js"
import { useSelector } from 'react-redux'


const App = () => {
 
  const {handleGetUser } = useAuth()


  useEffect(()=>{

    handleGetUser()

  },[])



  
  return (
    <>

    <Outlet/>
    
    </>
  )
}

export default App