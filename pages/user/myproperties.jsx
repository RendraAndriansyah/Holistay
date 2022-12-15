import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from 'react-icons/md';

import { BiDetail } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';
import Router from 'next/router'
import Layout from '../../components/Layout';

const Properties = () => {
  const [row, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setdataPerPage] = useState(2);
  const lastIndex = currentPage * dataPerPage;
  const firstIndex = lastIndex - dataPerPage;
  const current = row?.slice(firstIndex, lastIndex);
  const maxPage = Math.ceil(row?.length / dataPerPage);
  const pages = [];
  for (let i = 1; i <= maxPage; i++) {
    pages.push(i);
  }
  // const disabled = currentPage === Math.ceil(image?.length / dataPerPage) ? true : false;
  // const disableBack = currentPage === 1 ? true : false
  const paginateBack = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
  };
  const paginateFront = () => setCurrentPage(currentPage + 1);





  const getRows = async () => {
    await axios
      .get(`https://virtserver.swaggerhub.com/ACHMADQIZWINI4_1/GP3_Kelompok3/1.0.0/properties`)
      .then((res) => {
        setRows(res.data.data);
        setLoading(false);
      });
  };

  // console.log("ini data dari api",row)
  useEffect(() => {
    getRows();
  }, []);

  return (
    //List My Properties
    <Layout titlePage={'My Properties'}>
    <div className="bg-alta-white w-full h-full">
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
                              <button>
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
            <div className="p-5">
              <p className="text-center pt-5 text-alta-dark">Showing 1 to 10</p>
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
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark">Next</button>
            </div>
          </div>
        </div>
      
    </div>
    </Layout>
  )
}

export default Properties