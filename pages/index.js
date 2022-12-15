import React,{useState,useEffect} from 'react'
import Router from 'next/router'
import {HiOutlineSelector} from 'react-icons/hi'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'
import Layout from '../components/Layout'
import { useCookies } from 'react-cookie'




const App = () => {
  const [filter,setFilter]= useState("")
  const [filterCate,setFilterCate] = useState("")
  const [loading,setLoading]=useState(true)
  const [image,setImage]=useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [dataPerPage, setdataPerPage] = useState(3)
  const lastIndex = currentPage * dataPerPage
  const firstIndex = lastIndex - dataPerPage
  const current = image?.slice(firstIndex, lastIndex)
  const maxPage = Math.ceil(image?.length / dataPerPage)
  const pages = []
  const [cookie]=useCookies()


  for(let i = 1; i <= maxPage; i++){pages.push(i)}
  const disabled = currentPage === Math.ceil(image?.length / dataPerPage) ? true : false;
  const disableBack = currentPage === 1 ? true : false
  const paginateBack = () => {currentPage > 1 && setCurrentPage(currentPage - 1)}
  const paginateFront =() => setCurrentPage(currentPage + 1)


  const nextPage = (id) =>{
    Router.push({pathname:`/property`,query:{param:id}});
  }
  
 

  const handleSubmit = () =>{
      axios 
      .get(`https://irisminty.my.id/properties?property_name=&city=${filter}&property_type=${filterCate}`,
      {headers: {Authorization: `Bearer ${cookie.token}`},})
      .then((res)=>{
        setLoading(true);
        setImage(res.data.data)
      });
    
    
      } ;

      useEffect(() => {
        handleSubmit();
      }, [filter,filterCate]);
  
    
  return (
    // Buat dashboard
    <Layout titlePage={'Home'}>
    <div className="flex  mx-16 my-5">
      <h1 className='flex flex-1 text-5xl text-alta-dark font-bold'>STAYS</h1>
        <div className="flex-row-reverse">
        <button className="mx-1 bg-slate-200 btn btn-ghost btn-box ">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered" />
      </div>
    </div>
   
    <div className="border-b-2"></div>
            <div className="grid justify-end">
              <div className="mr-20 mt-5">
                <div className=" dropdown dropdown-bottom  rounded-box text-alta-dark">
                  <label tabIndex={0} className=" bg-white text-alta-dark m-1 btn hover:text-white hover:bg-alta-dark ">
                    {filter} <HiOutlineSelector className="mx-1" />
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 bg-base-100 rounded-box w-52">
                  <li>
                      <a onClick={() => setFilter('')}>ALL</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('jakarta')}>JAKARTA</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('bogor')}>BOGOR</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('bandung')}>BANDUNG</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('aceh')}>ACEH</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('surabaya')}>SURABAYA</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('bali')}>BALI</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('lombok')}>LOMBOK</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('sumba')}>SUMBA</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('semarang')}>SEMARANG</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('batam')}>BATAM</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('yogyakarta')}>YOGYAKARTA</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('MAKASAR')}>MAKASAR</a>
                    </li>
                    <li>
                      <a onClick={() => setFilter('PALEMBANG')}>PALEMBANG</a>
                    </li>
                  </ul>
                </div>
                <div className="dropdown dropdown-bottom  rounded-box text-alta-dark">
                  <label tabIndex={0} className="btn bg-white text-alta-dark m-1 hover:text-white hover:bg-alta-dark">
                    {filterCate} <HiOutlineSelector className="mx-1" />
                  </label>
                  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                      <a onClick={() => setFilterCate('')}>ALL</a>
                    </li>
                    <li>
                      <a onClick={() => setFilterCate('house')}>HOUSE</a>
                    </li>
                    <li>
                      <a onClick={() => setFilterCate('apartemen')}>APARTEMEN</a>
                    </li>
                    <li>
                      <a onClick={() => setFilterCate('guesthouse')}>GUEST HOUSE</a>
                    </li>
                    <li>
                      <a onClick={() => setFilterCate('hotel')}>HOTEL</a>
                    </li>
                  </ul>
                </div>
               
              </div>
            </div>
        
            {current && loading === true ? (current.map((item)=>{return(
              <div key={item?.id} className="card card-side hover:bg-slate-200" onClick={()=>{nextPage()}}>
                <img className='shadow-2xl m-4' width={200} src={item?.image_thumbnail_url} alt="Movie"/>
                <div className="card-body">
                  <h2 className="card-title">{item?.property_name}</h2>
                  <p className='flex flex-wrap gap-1'><AiFillStar size={30}/>{item?.rating_average}</p>
                  <div className="card-actions justify-start">
                  <h2 className="card-title">{item?.facilities}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-group flex  place-items-center justify-center gap-2">
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark " onClick={()=>paginateBack()}>Prev</button>
              {
                pages?.map((page,index) => {
                  return (
                  <button key={index} className="focus:bg-alta-dark focus:text-white border border-alta-dark bg-white hover:text-white hover:bg-alta-dark btn-circle"
                    onClick={() => setCurrentPage(page)}>{page}</button>
                  )
                })
              }
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark" onClick={()=>paginateFront()}>Next</button>   
            </div>
    </Layout>
  )
}

      <div className="p-5">
        <p className="text-center pt-5 text-alta-dark">
          Showing 1 to {maxPage}
        </p>
      </div>
      <div className="btn-group flex  place-items-center justify-center gap-2">
        <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark ">
          Prev
        </button>
        {pages?.map((page, index) => {
          return (
            <button
              key={index}
              className="peer peer-focus:bg-white focus:bg-alta-dark border border-alta-dark bg-white hover:text-white hover:bg-alta-dark btn-circle"
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })}
        <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark">
          Next
        </button>
      </div>
    </Layout>
  );
};

export default App;
