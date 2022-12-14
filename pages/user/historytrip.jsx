import React,{useState,useEffect} from 'react'
import {HiOutlineSelector} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import Layout from '../../components/Layout'

const Historytrip = () => {
    const [filter,setFilter]= useState("CHECK IN DATE")
    const [filterCate,setFilterCate] = useState("CHECK OUT DATE")
    const [loading,setLoading]=useState(true)
    const [image,setImage]=useState()
  return (
    <Layout titlePage={'History Trip'}>
      <div className='m-auto w-[60vw]'>
            <div className="flex my-4">
        <h1 className='flex flex-1 text-5xl text-alta-dark font-bold'>TRIP</h1>
      </div>
      <div className="border-b-2"></div>
              <div className="grid">
                  <h1 className='text-alta-dark text-2xl font-bold my-2'>VILLA PREMIUM A3</h1>
                <div className="">
                  <div className=" dropdown dropdown-bottom  rounded-box text-alta-dark">
                    <label tabIndex={0} className="btn bg-slate-200 text-alta-dark m-1 btn hover:text-white hover:bg-alta-dark ">
                      {filter} <HiOutlineSelector size={20} className="mx-1" />
                    </label>
                  
                  </div>
                  <div className="dropdown dropdown-bottom  rounded-box text-alta-dark">
                    <label tabIndex={0} className="btn bg-slate-200 text-alta-dark m-1 hover:text-white hover:bg-alta-dark">
                      {filterCate} <HiOutlineSelector size={20} className="mx-1" />
                    </label>
                  </div>
                  <h1 className='text-alta-dark text-xl my-2'>$ 25 / 2 Night</h1>
                </div>
              </div>
              <div className='flex'>
              <h1 className='text-alta-dark text-3xl font-bold  flex-1'>Total Price : 50$</h1>
              <div className='flex-end'>
              <button className="btn bg-alta-dark">EDIT</button>
              <button className="btn bg-alta-dark ml-2">GIVE FEEDBACK</button>
              </div>
              </div>
              <div className="border-b-2 my-3"></div>
      </div>
    </Layout>
  )
}

export default Historytrip