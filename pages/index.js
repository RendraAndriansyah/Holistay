import React from 'react'
import Router from 'next/router'
import Head from 'next/head'
import {BsFillCaretLeftFill} from 'react-icons/bs'


const App = () => {
  const nextPage = () =>{
    Router.push({pathname:`/auth/login`,query:{param:"ini param"}})
  }
  return (
    // Buat dashboard
    <div>
      <Head></Head>
    <div className="flex flex-row-reverse mx-16">
    <div className="rounded-box my-10">
    <label htmlFor="my-modal-4" className="btn bg-alta-dark" onClick={()=>{}}>ADD NEW</label>
    </div>
        <div className="my-10">
        <button className="mx-1 bg-slate-200 btn btn-ghost btn-box ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="form-control my-10">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
    </div>
    </div>
  )
}

export default App