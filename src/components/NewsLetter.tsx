import React from 'react'
import {LuMailOpen} from "react-icons/lu";
const NewsLetter = () => {
  return (
    <div className='bg-green-600 mt-16'>
      <div className='container py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white'>
            <div className='flex flex-shrink-0 items-center gap-4'>
               <LuMailOpen className='text-[60px]'/>
               <div >
                <h3 className='text-xl sm:text-2xl dont-semibold'>
                    sign up to our newsletters
                </h3>
                <p>and receive 200 coupon for first shooping</p>
                </div>
            </div>
            <div className='w-full max-w-[500px] relative'>
                <input className='py-4 px-6 w-full rounded-full' type="text" placeholder='your email'/>
                <button className='bg-green-900 absolute top-[50%] right-2 translate-y-[-50%] py-2 px-4 rounded-full hover:bg-green-600'>Subscribe</button>
            </div>
      </div>
      </div>
   
  )
}

export default NewsLetter