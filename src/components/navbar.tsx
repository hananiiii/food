import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import CartCountBudge from './CartCountBadge.tsx'; 
const navbar = ({setShowCart}:any) => {
  return (
    <div className=' sticky top-0 bg-white z-10'>
        <div className="container hidden lg:block">
            <div className="flex justify-between items-center p-8">
                <h1 className=' text-3xl font-medium text-title_color'>Logo</h1>
                <div className='relative w-full max-w-[500px] '>
                    <input 
                    type='text' 
                    placeholder='search'
                     className='bg-text_color text-title_color   border-none outline-none px-6 py-3 rounded-[30px] w-full' />
                    <CiSearch size={20} className='absolute top-0 right-0 mt-4 mr-5 text-title_color' />
                </div>
                <div className="flex gap-4">
                     <div className='icon_wrapper'>
                        <CiUser />
                     </div>
                     <div className='icon_wrapper relative cursor-pointer' onClick={() => setShowCart(true)}>
                        <CiShoppingCart /> 
                        <CartCountBudge size="w-[25px] h-[25px]"/>
                     </div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default navbar