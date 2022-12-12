import React from 'react'
import { useRouter } from 'next/router'

const Login = () => {
  const router =  useRouter()
    return (
    <div>{router.query?.param}</div>
  )
}

export default Login