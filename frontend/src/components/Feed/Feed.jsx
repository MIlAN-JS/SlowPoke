import React from 'react'
import Loading from '../LoadingPage/Loading'
import { useSelector } from 'react-redux'
import AsideBar from '../AsideBar/AsideBar'
import { Outlet } from 'react-router'

const Feed = () => {

  const loading = useSelector(state => state.auth.loading)

  return (

   loading ? <Loading/> : 
    <section className='feed bg-[#0a1a22] h-dvh w-full'>
      <AsideBar/>
      <Outlet/>
         

   </section>
  )
}

export default Feed