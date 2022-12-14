import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { FaRegEye } from 'react-icons/fa';
import { FaRegEyeSlash } from 'react-icons/fa';
import { useCookies } from 'react-cookie'
import Router from 'next/router';

export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [seePwd, setSeePwd] = useState(false)
  const [cookie, setCookie] = useCookies();
  
  return (
      <div className='min-h-screen w-screen bg-alta-light grid place-items-center'>
        <div className='rounded-[94px] w-[85vw] h-[90vh] bg-[#17345F] p-10 flex'>
          <div className='w-[50%] h-full relative p-10'>
            <div className='w-full flex justify-end items-center mt-10 ms-10 relative'>
              <h1 className='font-bold text-5xl text-alta-light w-[300px]'>Create new Experience with Airbnb</h1>
            </div>
            <Image src={'/../public/koper.png'} width={1200} height={800} className='absolute left-0 top-32' alt='gambar'/>
            {/* <img src={Koper} alt='koper' className='object-fill'/> */}
          </div>
          <div className='w-[50%] h-full flex justify-center items-center p-10'>
            <div className="card w-[433px] bg-alta-light shadow-xl p-5">
              <div className="card-body text-base">
              <div className="form-control w-full max-w-xs">
                <label className="label text-[#17345F]">
                  <span className="label-text text-[#17345F]">Email</span>
                </label>
                <input type="email" placeholder="your_email@mail.com" 
                  className="input input-bordered border-[#17345F] w-full bg-alta-light caret-text-[#17345F] text-17345F]"
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label ">
                  <span className="label-text text-[#17345F]">Password</span>
                </label>
                <div className='flex'>
                    <div className="relative w-full">
                        <div
                            className="absolute top-3 right-3 items-center"
                            onClick={() => setSeePwd(!seePwd)}>
                            {seePwd ? <FaRegEye /> : <FaRegEyeSlash />}
                        </div>
                        <input
                            type={seePwd ? `text` : 'password'}
                            className="input border-[#17345F] bg-alta-light caret-[#17345F] w-full caret-[#17345F]"
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
              </div>
              <a className='text-[#17345F] text-base'>Forgot Your Password?</a>
              <div className='flex justify-center'>
                <button className="bg-[#17345F] text-alta-light h-[40px] w-[110px] mt-10 rounded-lg">Login</button>
              </div>
              <p className='text-[#17345F] text-base mt-3'>Dont have an account ?
              <a className='font-semibold cursor-pointer' onClick={() => Router.push({pathname:`/auth/register`})}> Register</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
