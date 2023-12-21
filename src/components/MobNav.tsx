import React from 'react'
import { CiMenuBurger ,CiSearch,CiShoppingCart,CiUser} from "react-icons/ci";
import CartCountBudge from './CartCountBadge';
const MobNav = ({setShowCart}:any) => {
  return (
    <div className='sticky top-0 bg-white z-10'>
        <div className='container p-8 lg:hidden '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                <CiMenuBurger size={25} />
                <CiSearch  size={24} />
                </div>
                <h1 className=' text-3xl'>Logo</h1>
                <div className='flex gap-4 text-[30px]'>
                <CiUser />
                  <div className='relative cursor-pointer 'onClick={()=>setShowCart(true)} >
                       <CiShoppingCart /> 
                        <CartCountBudge size="w-[25px] h-[25px]"/>
                  </div>
                </div>

            </div>
        </div>

    </div>
  )
}

export default MobNav