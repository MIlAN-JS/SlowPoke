import React from 'react'
import RegisterComp from '../components/RegisterComp'
import Loading from '../../../../components/LoadingPage/Loading'
import { useSelector } from 'react-redux'

const Register = () => {
   const loading = useSelector(state => state.auth.loading)
  return (
      <section className='register-page  lg:flex  items-center  justify-center gap-20 bg-[#0d1f26] ' >
    {/* <div className='relative hidden lg:flex  '>
      <h2 className='absolute  text-5xl font-bold text-[#4589A0] -rotate-30 left-5 -top-2'>混乱した !!</h2>
        <img src="/lyod.png" className='w-100 h-100  ' alt="" />
    </div> */}

      {loading ? <Loading/> :   <RegisterComp/>}
    
      </section>
  )
}

export default Register