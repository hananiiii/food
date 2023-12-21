import React from 'react'
import Breakk from '../assets/breakfast.jpg'
import Egg from '../assets/egg.jpg'
import ProductCard from './ProductCard'
const data=[
    {id:0,img:Egg , name:"Frensh Egg Bread",price:"50$"},
    {id:0,img:Egg , name:"Frensh Egg Bread",price:"50$"},
    {id:0,img:Egg , name:"Frensh Egg Bread",price:"50$"},
    {id:0,img:Egg , name:"Frensh Egg Bread",price:"50$"}
    


]
const Breakfast = () => {
  return (
    <div className='container pt-16'>
        <div className='lg:flex justify-between items-center'>
            <div>
                <h3 className='font-medium text-2xl'>Breakfast</h3>
                <p className='text-gray-600 mt-2 max-w-[500px]'>
                  Revitalize your morning with a nutritious breakfast.
                </p>
            </div>
            <div className='space-x-4 mt-8 lg:mt-0'>
                <button className='feature_btn'>Eggs</button>
                <button className='text-title_color hover:text-green-600'>Snacks</button>
                <button className='text-title_color hover:text-green-600'>Coffee</button>
            </div>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2'>
             <div>
                <img src={Breakk} className='w-full h-full object_cover rounded-md '/>
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

export default Breakfast