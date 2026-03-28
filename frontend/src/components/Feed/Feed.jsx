import React from 'react'
import Loading from '../LoadingPage/Loading'
import { useSelector } from 'react-redux'

const Feed = () => {

  const loading = useSelector(state => state.auth.loading)

  return (

   loading ? <Loading/> :  <div>Feed</div>
  )
}

export default Feed