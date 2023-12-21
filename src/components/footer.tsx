import React from 'react'
import FooterCard from './footerCard'
import {LiaShippingFastSolid ,LiaMoneyBillWaveSolid} from "react-icons/lia";
import {FiPhoneCall} from "react-icons/fi"
const data =[
    {
        title:"free shipping",
        icon:<LiaShippingFastSolid/>,
    },
    {
        title:"Best price",
        icon:<LiaMoneyBillWaveSolid/>
    },
    
    {
        title:" Support 24/7",
        icon:<FiPhoneCall/>,
    },
    {
        title:" Support 24/7",
        icon:<FiPhoneCall/>,
    },
]
const footer = () => {
  return (
    <div className='container pt-16 lg:pl-32 '>
        <div className='grid gap-8 grid-cols-2 lg:grid-cols-4 '>
            {data.map((el)=>(
                <FooterCard key={el.title} title={el.title} icon={el.icon}/>
            ))}
        </div>

    </div>
  )
}

export default footer