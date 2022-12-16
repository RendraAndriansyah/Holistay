import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from 'react-icons/md';
import { useCookies } from 'react-cookie';
import { BiDetail } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import Router from 'next/router'
import Layout from '../../components/Layout';

const Properties = () => {
  const [row, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(10);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const current = row?.slice(firstIndex, lastIndex);
  const maxPage = Math.ceil(row?.length / dataPerPage);
  const [cookie]=useCookies()
  const pages = [];
  const [idProp,setIdprop] = useState()
  
  for(let i = 1; i <= maxPage; i++){pages.push(i)}
  const disabled = currentPage === Math.ceil(row?.length / dataPerPage) ? true : false;
  const disableBack = currentPage === 1 ? true : false
  const paginateBack = () => {currentPage > 1 && setCurrentPage(currentPage - 1)}
  const paginateFront =() => setCurrentPage(currentPage + 1)




  const getRows = async () => {
    await axios
      .get(`https://irisminty.my.id/users/${cookie.id}/properties`,
      {headers : {authorization: `bearer ${cookie.token}`}})
      .then((res) => {
        setRows(res.data.data);
        setLoading(false);
      })
      .catch(err => console.log(err))
  };

 

  const cobaDelete = () =>{
    const numberId = Number(idProp)
 axios
  .delete(`https://irisminty.my.id/properties/${numberId}`,
  {headers : {authorization: `bearer ${cookie.token}`}})
  .then((res)=>{
    console.log(res)
  })
  .catch(err => console.log(err))
  }


  useEffect(() => {
    getRows();
  }, []);

  return (
    //List My Properties
    <Layout titlePage={'My Properties'}>
    <div className="bg-alta-white w-full h-screen">
       <div className="bg-alta-white h-5/6 m-5">
          <div>
          <div className="flex flex-row-reverse mx-16">
            <div className="rounded-box my-2">
            <label htmlFor="my-modal-4" className="btn bg-alta-dark" onClick={()=>{Router.push({pathname:`/user/addproperty`})}}>ADD NEW PROPERTIES</label>
            </div>
                
            </div>
            <div className="border-b-2"></div>
            

            <div className="my-10 mx-16 rounded-box min-h">
              <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                  <thead>
                    <tr className="text-center text-alta-dark">
                      <th>NO</th>
                      <th>PROPERTIES</th>
                      <th>PRICES</th>
                      <th>CITY</th>
                      <th>RATINGS</th>
                      <th>DETAIL</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {current && loading == false ? (
                      current.map((item) => (
                          <tr className="hover text-alta-dark" key={item.id}>
                            <th>{item.id}</th>
                            <td>{item.property_name}</td>
                            <td>{item.price_per_night}</td>
                            <td>{item.city}</td>
                            <td>{item.rating_average}</td>
                            <td>
                              <button onClick={() =>{Router.push({pathname:`/property`, query:{param : item.id}})}}>
                                <BiDetail />
                              </button>
                            </td>
                            <td>
                              <button onClick={() => Router.push({pathname : '/user/editproperty', query:{param : item.id}})}>
                                <MdEdit />
                              </button>
                            </td>
                            <td>
                              <button onClick={()=>{setIdprop(item.id),cobaDelete()}}>
                            
                                <MdDeleteForever />
                              </button>
                            </td>
                          </tr>
                        )
                      )
                    ) : (
                      <tr>
                        <td>Memuat......</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="btn-group flex  place-items-center justify-center gap-2">
            <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark " onClick={()=>paginateBack()}>
              Prev
            </button>
            {pages?.map((page, index) => {
              return (
                <button
                  key={index}
                  className="focus:bg-alta-dark focus:text-white border border-alta-dark bg-white hover:text-white hover:bg-alta-dark btn-circle"
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              );
            })}
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark" onClick={()=>paginateFront()}>Next</button>
            </div>
          </div>
        </div>
      
    </div>
    </Layout>
  )
}

export default Properties