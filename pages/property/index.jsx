import React, { useState } from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'

const DetailProperty = () => {
  const [isValid, setIsValid] = useState(false)

  const onReserve = () => {
    console.log('Reserve')
  }
  return (
    //detail property
    <Layout>
      <div className='mb-10 mx-10'>
        <div className="h-screen w-full grid place-items-center">
          <div className="hero-content">
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
                <div className='w-[40%] px-3 flex flex-col'>
                  <Image src={'/Home-1.jpg'} width={340} height={50} alt='gambar' className='pb-1'/>
                  <Image src={'/Home-1.jpg'} width={340} height={50} alt='gambar' className=''/>
                </div>
              </div>
              {/* <p className="py-2 text-black text-xl font-semibold">Fasilities : 2 guest - 2 bedrooom - 1 bath- fool kitchen</p>
              <p className="py-2 text-black font-semibold text-xl">Description : Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='p-10'>
              <p className="py-2 text-alta-dark text-xl font-semibold">Fasilities : 2 guest - 2 bedrooom - 1 bath- fool kitchen</p>
              <p className="py-2 text-alta-dark font-semibold text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident magni corporis voluptas odit, tenetur tempore voluptate mollitia illum minima harum. Sequi animi deserunt ipsum repellendus tempora error consectetur cumque alias? Vel, harum hic odio quasi dolore necessitatibus error libero facere. Pariatur, porro? Consectetur, voluptate laudantium! Iusto sint exercitationem labore consequuntur.</p>
          </div>
          <div className='flex flex-col items-end mx-10 py-5'>
            <div className='card w-96 h-48 p-5 border-2 border-alta-dark flex flex-col'>
              <h3 className='font-semibold text-black text-2xl'>$20.00/night</h3>
              <div className='flex w-full my-3 h-9'>
                <input type="date" placeholder='Checkin' name="checkin" id="checkin" className='text-alta-dark border-2 border-alta-dark w-[50%]'/>
                <input type="date" name="checkout" id="checkout" className='bg-white border-2 text-alta-dark date:text-alta-dark border-alta-dark w-[50%]'/>
              </div>
              <button className={`bg-alta-dark text-white h-9 rounded-lg ${isValid ? `hidden` : `block`}`} onClick={() => setIsValid(true)}>Check Validate</button>
              <button className={`bg-alta-dark text-white h-9 rounded-lg ${isValid ? `block` : `hidden`}`} onClick={() => onReserve()}>Reserve</button>
            </div>
            <div className={`card w-96 h-48 p-5 border-2 border-alta-dark flex flex-col divide-y-2 divide-alta-dark my-3 ${isValid ? `block` : `hidden`}`}>
              <h3 className='font-semibold text-black text-xl py-5'>$20.00 x 2 night</h3>
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
            <input type="radio" name="rating-2" className="mask mask-star-2 h-9 bg-orange-400" checked/><span className='text-alta-dark font-bold text-4xl mx-2'>4.81 - 12 Reviews</span>
          </div>  
            <div className='p-5'>
              <div className='flex items-center'>
                <img className="mask mask-circle h-20" src="https://placeimg.com/160/160/arch" />
                <span className='text-lg text-black font-semibold mx-5'>Giyas</span>
              </div>
              <p className='text-black my-3 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat modi pariatur voluptatum iure eum assumenda consectetur debitis, at rerum reprehenderit dignissimos distinctio tempora, voluptas magni temporibus reiciendis inventore. Ipsam quae recusandae necessitatibus labore, laboriosam obcaecati a. Sint, dolorem libero optio iure vero asperiores nihil molestias aliquid pariatur praesentium voluptatibus!</p>
            </div>
            <div className='p-5'>
              <div className='flex items-center'>
                <img className="mask mask-circle h-20" src="https://placeimg.com/160/160/arch" />
                <span className='text-lg text-black font-semibold mx-5'>Giyas</span>
              </div>
              <p className='text-black my-3 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat modi pariatur voluptatum iure eum assumenda consectetur debitis, at rerum reprehenderit dignissimos distinctio tempora, voluptas magni temporibus reiciendis inventore. Ipsam quae recusandae necessitatibus labore, laboriosam obcaecati a. Sint, dolorem libero optio iure vero asperiores nihil molestias aliquid pariatur praesentium voluptatibus!</p>
            </div>
            <div className='p-5'>
              <div className='flex items-center'>
                <img className="mask mask-circle h-20" src="https://placeimg.com/160/160/arch" />
                <span className='text-lg text-black font-semibold mx-5'>Giyas</span>
              </div>
              <p className='text-black my-3 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quaerat modi pariatur voluptatum iure eum assumenda consectetur debitis, at rerum reprehenderit dignissimos distinctio tempora, voluptas magni temporibus reiciendis inventore. Ipsam quae recusandae necessitatibus labore, laboriosam obcaecati a. Sint, dolorem libero optio iure vero asperiores nihil molestias aliquid pariatur praesentium voluptatibus!</p>
            </div>
        </div>
      </div>
      </Layout>
  )
}

export default DetailProperty