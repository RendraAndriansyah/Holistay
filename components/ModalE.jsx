import React, { useEffect } from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'
import { useState } from 'react'

const ModalE = () => {


    const [cookie]=useCookies()
    const [title,setTitle]=useState()
    const [comment,setComent]=useState()
    const [rating,setRating]=useState()


    const handleSubmit = async() =>
    {  
       await axios
       .put(`https://irisminty.my.id/comments`, 
       {
           'title': title,
           'comment': comment,
           'rating': Number(rating),
           'property_id': 1
       } 
         , {headers : {authorization: `bearer ${cookie.token}`}}
         )
         .then(res => console.log(res))
         .catch(err => console.log(err))
   }

   const getComment = () =>{
    axios
    .get('https://irisminty.my.id/comments', {headers : {authorization: `bearer ${cookie.token}`}}
    )
    .then(res => console.log(res))
    .catch(err => console.log(err))
   }

   useEffect(
    ()=>{getComment()},[]
   );


  return (
    <div>
    <p className='text-3xl text-center p-5 font-bold text-alta-dark'>Edit Comment</p>
    <form className="mb-0 my-2 mx-3 " action="#" method="POST ">
    <div className="flex flex-col justify-items-center">
    <input
      type="text"
      className="border border-alta-dark p-2 rounded mb-5"
      defaultValue={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      className="border border-alta-dark p-2 rounded mb-5"
      defaultValue={comment}
      onChange={(e) => setComent(e.target.value)}
    />
    <input
      type="number"
      className="border border-alta-dark p-2 rounded mb-5"
      defaultValue={rating}
      onChange={(e) => setRating(e.target.value)}
    />
    <button onClick={handleSubmit}  className="btn bg-alta-dark hover:text-alta-dark hover:bg-white">Save</button>
  </div>
  </form>
  </div>
  )
}

export default ModalE