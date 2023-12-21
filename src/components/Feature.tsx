import React from 'react'
import Cat2 from '../assets/cat_2.jpg'
import Grocy from '../assets/grocy.jpg'
import ProductCard from './ProductCard'
const data=[
    {id:0,img:Cat2 , name:"Crunchy Crips",price:"300$"},
    {id:0,img:Cat2 , name:"Crunchy Crips",price:"300$"},
    {id:0,img:Cat2 , name:"Crunchy Crips",price:"300$"},
    {id:0,img:Cat2 , name:"Crunchy Crips",price:"300$"}
    


]
const Feature = () => {
  return (
    <div className='container pt-16'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl'>Fruits & vegetables</h3>
                <p className='text-gray-600 mt-2 max-w-[500px]'>
                   Enjoy the goodness of nature—buy fresh fruits and vegetables for a vibrant and healthy lifestyle.
                </p>
            </div>
            <div className='space-x-4 mt-8 lg:mt-0'>
                <button className='feature_btn'>Fruits</button>
                <button className='text-title_color hover:text-green-600'>Vegetables</button>
                <button className='text-title_color hover:text-green-600'>Bread & Bakery</button>


            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
             <div>
                <img src={Grocy} className='w-full h-full object_cover rounded-md '/>
             </div>
             {data.map(el => 
             <ProductCard 
             key={el.id}
             img={el.img}
             name={el.name}
             price={el.price}
             
             />)}
        </div>

    </div>
  )
}

export default Feature