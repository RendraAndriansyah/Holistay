import { Router } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

const Error = () => {
    const [second, setSecond] = useState(5)
    const router = useRouter()

        setInterval(() => {
            setSecond(second -1)
        },1000)

    setTimeout(() => {
        router.push('/')
    },5000)
    

  return (
    <div className='h-screen w-screen bg-white flex justify-center pt-24'>
        <div>
            <h1 className='text-4xl text-alta-dark font-bold'>404 | Page Not Found</h1>
            <p className='text'>This page will bring you to AlterraBnB Homepage in {second} second</p>
        </div>
    </div>
  )
}


export default Error