import React from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'


const App = () => {
  const nextPage = () =>{
    Router.push({pathname:`/auth/login`,query:{param:"ini param"}})
  }
  return (
    // Buat dashboard
    // <div>
    //   <Head></Head>
    // <button onClick={()=>nextPage()}>test</button>
    // </div>
    <Layout titlePage='detail'></Layout>
  )
}

export default App