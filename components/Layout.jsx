import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (titlePage) => {
  return (
    <div>
        <Head>
            <title>Airbnb || {titlePage}</title>
        </Head>
        <div>
            <Navbar/>
        </div>
    </div>
  )
}

export default Layout