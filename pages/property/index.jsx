import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'

const DetailProperty = () => {
  return (
    //detail property
      <div className="min-h-screen bg-alta-white w-screen grid place-items-center">
        <div className="hero-content bg-alta-light">
          <div className="">
            <h1 className="text-3xl font-bold text-black">Villa Premium A3</h1>
            <div className="rating">
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <div className='flex h-[60vh] my-3'>
              <div className='w-[60%] px-3'>
                <Image src={'/Home-1.jpg'} width={800} height={100} alt='gambar'/>
              </div>
              <div className='w-[40%] px-3 flex flex-col justify-between'>
                <Image src={'/Home-1.jpg'} width={300} height={50} alt='gambar' className=''/>
                <Image src={'/Home-1.jpg'} width={300} height={50} alt='gambar'/>
              </div>
            </div>
            <p className="py-2 text-black text-xl font-semibold">Fasilities : 2 guest - 2 bedrooom - 1 bath- fool kitchen</p>
            <p className="py-2 text-black font-semibold text-xl">Description : Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           
          </div>
        </div>
      </div>
  )
}

export default DetailProperty