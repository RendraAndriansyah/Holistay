import React from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { useCookies } from 'react-cookie'

const Navbar = () => {
  const [cookie, removeCookie] = useCookies();

  const onLogout = () => {
      removeCookie("name")
      removeCookie("token")
      Router.push({pathname:`/auth/login`})
  }
  return (
    <div className="navbar h-20 w-full bg-alta-dark px-20 py-4">
      <div className="flex-1">
        <a className="hover:scale-110" onClick={() => Router.push({pathname:`/`})}>
          <Image src={'/../public/logo-ALTA-v2@2x.png'} width={90} height={40} alt={'logo'}/> 
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://placeimg.com/80/80/people" />
            </div>
          </label>
          <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-alta-light rounded-box w-40">
            <li><a className='text-alta-dark' onClick={() => Router.push({pathname:`/user`})}>My Profile</a></li>
            <li><a className='text-alta-dark' onClick={() => Router.push({pathname:`/user/myproperties`})}>My Properties</a></li>
            <li><a className='text-alta-dark' onClick={() => Router.push({pathname:`/user/historytrip`})}>History Trip</a></li>
            <li><a className='text-alta-dark' onClick={() => onLogout()}>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar