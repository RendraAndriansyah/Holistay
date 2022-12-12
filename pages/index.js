import React from 'react'
import Router from 'next/router'
import Head from 'next/head'


const App = () => {
  const nextPage = () =>{
    Router.push({pathname:`/auth/login`,query:{param:"ini param"}})
  }
  return (
    <div>
      <Head></Head>
    <button onClick={()=>nextPage()}>test</button>
    </div>
  )
}

export default App