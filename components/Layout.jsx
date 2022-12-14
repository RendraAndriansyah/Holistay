import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({children, titlePage}) => {
  return (
    <>
        <Head>
            <title>Airbnb || {titlePage}</title>
        </Head>
        <main className='w-full min-h-full flex flex-col justify-between bg-alta-light'>
            <Navbar/>
            <div className='flex-1'>{children}</div>
        </main>
    </>
  )
}

export default Layout