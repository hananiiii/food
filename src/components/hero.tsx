import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import Heroo from "../assets/hero.jpg";
import Heroo_2 from "../assets/hero_2.jpg"
import Heroo_3 from "../assets/hero_3.jpg"
const hero = () => {
  return (
    <div className='container mt-4'>
        <div className='grid xl:grid-cols-2 xl:grid-row-2 gap-8'>
           <div className='xl:col-span-2 xl:row-start-1 xl:row-end-[-1] relative'>
               <img src={Heroo} className='w-full h-full lg:h-[550px] object-cover rounded-lg '/>
            </div>
            <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[30%] -traslate-y-[50%] sm:space-y-4'>
                <p className='text-2xl '>100% original Dry fruits </p>
                <h2 className='text-2xl sm:text-4xl hidden lg:block md:text-6xl font-bold'>Dried Fruits Best Healthy</h2>
                <h2 className='text-2xl sm:text-4xl lg:hidden sm:block md:text-6xl font-bold'>Dried Fruits Best <br/> Healthy</h2>
                <p className='text-title_color text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>
                    18.99$
                </div>
                <div className='text-text_color bg-title_color  rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 cursor-pointer '>
                    Shop now <BsArrowRight/>
                </div>
            </div>
             <div className='relative mb-6 '>
                <img src={Heroo_2} className='w-full h-full object-cover rounded-lg'/>
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[15%] -traslate-y-[50%] sm:space-y-4'>
                
                <h2 className='text-2xl sm:text-4xl hidden lg:block md:text-6xl font-bold'>Best Yummy pizza</h2>
                <h2 className='text-2xl sm:text-4xl lg:hidden sm:block md:text-6xl font-bold'>Dried Fruits Best <br/> Healthy</h2>
                <p className='text-title_color text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>
                    25.99$
                </div>
                <div className='text-text_color bg-title_color  rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 cursor-pointer '>
                    Shop now <BsArrowRight/>
                </div>
            </div>
            </div>
            <div className='relative mb-6'>
                <img src={Heroo_3} className='w-full h-full object-cover rounded-lg'/>
                <div className='absolute max-w-[470px] sm:ml-16 ml-8 top-[15%] -traslate-y-[50%] sm:space-y-4'>
                
                <h2 className='text-2xl sm:text-4xl hidden lg:block md:text-6xl font-bold'>Best yummy chips</h2>
                <h2 className='text-2xl sm:text-4xl lg:hidden sm:block md:text-6xl font-bold'>Dried Fruits Best <br/> Healthy</h2>
                <p className='text-title_color text-xl pt-4 sm:pt-8 '>Starting At</p>
                <div className='font-medium text-red-600 text-2xl sm:text-4xl pb-4 sm:pb-8'>
                    12.99$
                </div>
                <div className='text-text_color bg-title_color  rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] sm:px-6 cursor-pointer '>
                    Shop now <BsArrowRight/>
                </div>
            </div>
            </div> 

        </div>

    </div>
  )
}

export default hero