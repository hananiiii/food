import React from 'react'
import Banner_1 from '../assets/banner_1.jpg'
import Banner_2 from '../assets/banner_2.jpg'
const banner = () => {
  return (
    <div className='container pt-16'>
        <div className='grid sm:grid-cols-2 gap-4 sm:gap-8'>
            <div className='overflow-hidden rounded-lg'>
                <img
                src={Banner_1} 
                className='hover:scale-105 transition-transform'
                alt='banner'
                />
            </div>
            <div>
            <img
                src={Banner_2} 
                className='hover:scale-105 transition-transform'
                alt='banner'
                />
            </div>
        </div>

    </div>
  )
}

export default banner