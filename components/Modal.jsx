import React,{useState} from 'react'
import axios from 'axios'
import {useCookies} from 'react-cookie'

const Modal = () => {
    const [mods,setModal]=useState()
    const [cookie]=useCookies()
    const [title,setTitle]=useState()
    const [comment,setComent]=useState()
    const [rating,setRating]=useState()

    const handleSubmit = async({idProp}) =>
     {  
      console.log("ini id prop",{idProp})
        await axios
        .post(`https://irisminty.my.id/comments`, 
        {
            'title': title,
            'comment': comment,
            'rating': Number(rating),
            'property_id': Number({idProp})
        } 
          , {headers : {authorization: `bearer ${cookie.token}`}}
          )
          .then(res => console.log(res))
          .catch(err => console.log(err))
    }

 

  return (
    <div>
    <p className='text-3xl text-center p-5 font-bold text-alta-dark'>Comments</p>
    <form className="mb-0 my-2 mx-3 " action="#" method="POST ">
    <div className="flex flex-col justify-items-center">
    <input
      type="text"
      className="border border-alta-dark p-2 rounded mb-5"
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
    />
    <input
      type="text"
      className="border border-alta-dark p-2 rounded mb-5"
      placeholder="Comment"
      value={comment}
      onChange={(e) => setComent(e.target.value)}
    />
    <input
      type="number"
      className="border border-alta-dark p-2 rounded mb-5"
      placeholder="Rating"
      value={rating}
      onChange={(e) => setRating(e.target.value)}
    />
    <button onClick={handleSubmit}  className="btn bg-alta-dark hover:text-alta-dark hover:bg-white">Save</button>
  </div>
  </form>
  </div>
  )
}

export default Modal