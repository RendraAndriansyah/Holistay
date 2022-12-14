import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import axios from 'axios'
import {useRouter} from 'next/router'
import { useCookies } from 'react-cookie'
import Swal from 'sweetalert2'

const DetailProperty = () => {
  const [isValid, setIsValid] = useState(false)
  const [images, setImages] = useState('')
  const [comments, setComments] = useState('')
  const [property, setProperty] = useState('')
  const [users, setUsers] = useState('')
  const [cookie, setCookie] = useCookies()
  const auth = cookie.token
  const router = useRouter()
  // const id = 1
  const id = router.query?.param

  const getProperty = async() => {
    await axios.get(`https://irisminty.my.id/properties/${id}`,{headers: {"Authorization": `Bearer ${auth}`}})
    .then(res => {
      setProperty(res.data.data)
    })
    .catch(err => console.log(err))
  }
  const getImages = async() => {
    await axios.get(`https://irisminty.my.id/properties/${id}/images`, {headers: {"Authorization": `Bearer ${auth}`}})
    .then(res => {
      setImages(res.data.data)
    })
    .catch(err => console.log(err))
  }
  const getComments = async() => {
    await axios.get(`https://irisminty.my.id/properties/${id}/comments`, {headers: {"Authorization": `Bearer ${auth}`}})
    .then(res => {
      setComments(res.data.data)
    })
    .catch(err => console.log(err))
  }
  const getUsers = async() => {
    await axios.get(`https://irisminty.my.id/users`, {headers: {"Authorization": `Bearer ${auth}`}})
    .then(res => {
      setUsers(res.data.data)
    })
    .catch(err => console.log(err))
  }
  const onReserve = () => {
    console.log('Reserve')
  }

  useEffect(() => {
    getProperty()
    getComments()
    getImages()
    getUsers()
  },[])

  // console.log(users)
  return (
    //detail property
    <Layout>
      <div className='mb-10 mx-10'>
        <div className="h-screen w-full grid place-items-center">
          <div className="hero-content">
            <div className="">
              <h1 className="text-3xl font-bold text-black">{property.property_name}</h1>
              <h1 className="text-3xl font-bold text-alta-dark">{property.rating_average}</h1>
              <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              </div>
              <div className='flex h-[60vh] my-3'>
                <div className='w-[60%] px-3'>
                  <img src={property.image_thumbnail_url || '/Home-1.jpg'} width={800} height={100} alt='gambar'/>
                </div>
                <div className='w-[40%] px-3 flex flex-col h-full overflow-y-scroll'>
                  {images && images !== null ?
                    images?.map((image) => {
                      return  <img key={image.id} src={image.image_url} width={340} height={50} alt='gambar' className='pb-5 w-[340px] h-[200px]'/>
                    })
                    : <Image src={'/Home-1.jpg'} width={340} height={50} alt='gambar' className='pb-1'/>
                  }
                  {/* <Image src={'/Home-1.jpg'} width={340} height={50} alt='gambar' className='pb-1'/>
                  <Image src={'/Home-1.jpg'} width={340} height={50} alt='gambar' className=''/> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='p-10'>
              <p className="py-2 text-alta-dark text-xl font-semibold">Address : {property.address}</p>
              <p className="py-2 text-alta-dark text-xl font-semibold">Contact : {property.contact_number}</p>
              <p className="py-2 text-alta-dark text-xl font-semibold">Property Type : {property.property_type}</p>
              <p className="py-2 text-alta-dark text-xl font-semibold">Facilities : {property.facilities}</p>
              <p className="py-2 text-alta-dark font-semibold text-xl">Description : {property.description}.</p>
          </div>
          <div className='flex flex-col items-end mx-10 py-5'>
            <div className='card w-96 h-48 p-5 border-2 border-alta-dark flex flex-col'>
              <h3 className='font-semibold text-black text-2xl'>${property.price_per_night} /night</h3>
              <div className='flex w-full my-3 h-9'>
                <input type="date" placeholder='Checkin' name="checkin" id="checkin" className='bg-white text-alta-dark border-2 border-alta-dark w-[50%]'/>
                <input type="date" name="checkout" id="checkout" className='bg-white border-2 text-alta-dark date:text-alta-dark border-alta-dark w-[50%]'/>
              </div>
              <button className={`bg-alta-dark text-white h-9 rounded-lg ${isValid ? `hidden` : `block`}`} onClick={() => setIsValid(true)}>Check Validate</button>
              <button className={`bg-alta-dark text-white h-9 rounded-lg ${isValid ? `block` : `hidden`}`} onClick={() => onReserve()}>Reserve</button>
            </div>
            <div className={`card w-96 h-48 p-5 border-2 border-alta-dark flex flex-col divide-y-2 divide-alta-dark my-3 ${isValid ? `block` : `hidden`}`}>
              <h3 className='font-semibold text-black text-xl py-5'>${property.price_per_night} x 2 night</h3>
              <p className='font-semibold text-alta-dark text-2xl py-5 flex justify-between'>
                <span>Total</span>
                <span>$40.00</span>
              </p>
            </div>
          </div>
        </div>
       

        <div className='divider h-0.5 bg-alta-dark'></div>

        {/* Rating & Comments */}
        <div className='px-10 py-5'>
          <div className="rating rating-lg pb-8">
            <input type='radio' name="rating-2" className="mask mask-star-2 h-9 bg-orange-400" checked/><span className='text-alta-dark font-bold text-4xl mx-2'>{property.rating_average.toFixed(2)} - {comments?.length || `0`} Reviews</span>
          </div>
          {comments && comments !== null ?
            comments.map((comment) => {
              return(
                <div className='p-5' key={comment.id}>
                  {users ?
                    users.map(user => {
                      if(user.id === comment.user_id){
                        return(
                          <div className='flex items-center' key={user.id}>
                            <img className="mask mask-circle h-20" src={user.profile_image_url} />
                            <span className='text-lg text-black font-semibold mx-5'>{user.full_name}</span>
                          </div>
                        )
                      }
                    })
                    : <p>Loading...</p>
                  }
                  <div className="rating rating-md pt-5">
                    <input type="radio" name="rating-2" className="mask mask-star-2 h-9 bg-orange-400" checked/><span className='text-alta-dark font-bold text-xl mx-2'>{comment.rating.toFixed(2)}</span>
                  </div>
                  <h6 className='text-black my-3 text-lg capitalize'>{comment.comment}</h6>
                </div>
              )
            })
            : <p>Belum Ada Review...</p>
          }
        </div>
      </div>
      </Layout>
  )
}

export default DetailProperty