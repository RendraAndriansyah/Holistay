import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdEdit } from 'react-icons/md';
import { HiOutlineSelector } from 'react-icons/hi';
import { BiDetail } from 'react-icons/bi';
import { MdDeleteForever } from 'react-icons/md';

const Properties = () => {
  const [row, setRows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter,setFilter]= useState("All Class")
  const [filterStatus,setFilterStatus] = useState("All Status")
  const [filterCate,setFilterCate] = useState("All Category")




  // const getRows = async () => {
  //   await axios
  //     .get(``, {
  //       headers: {
  //         Authorization: `Bearer `,
  //       },
  //     })
  //     .then((res) => {
  //       setLoading(true);

  //       setRows(res.data.data);
  //     });
  // };

  

  // console.log("ini data dari api",row)
  // useEffect(() => {
  //   getRows();
  // }, []);
  return (
    //List My Properties
    <div className="bg-alta-white w-full h-full">
       <div className="bg-alta-white h-5/6 m-5">
          <div>
          <div className="flex flex-row-reverse mx-16">
            <div className="rounded-box my-2">
            <label htmlFor="my-modal-4" className="btn bg-alta-dark" onClick={()=>{("")}}>ADD NEW PROPERTIES</label>
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
                      <th>CONTACT</th>
                      <th>DETAIL</th>
                      <th>EDIT</th>
                      <th>DELETE</th>
                    </tr>
                  </thead>
                  {/* {row && loading === true ? (
                    map(() => {
                      return (
                        <tbody className="text-center">
                          <tr className="hover text-alta-dark">
                            <th></th>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                              <button onClick={() => ('')}>
                                <BiDetail />
                              </button>
                            </td>
                            <td>
                              <button onClick={() => ('')}>
                                <MdEdit />
                              </button>
                            </td>
                            <td>
                              <button>
                                <MdDeleteForever />
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <div>
                      <h1>Memuat......</h1>
                    </div>
                  )} */}
                </table>
              </div>
            </div>
            <div className="p-5">
              <p className="text-center pt-5 text-alta-dark">Showing 1 to 10</p>
            </div>
            <div className="btn-group flex  place-items-center justify-center gap-2">
              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark ">Prev</button>
              <button className="bg-white hover:text-white hover:bg-alta-dark border text-black btn-circle border-alta-dark">1</button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle  ">2</button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">3</button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">4</button>
              <button className="border-none  bg-white hover:text-white hover:bg-alta-dark btn-circle">5</button>

              <button className="btn hover:text-white hover:bg-alta-dark bg-white text-alta-dark">Next</button>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Properties