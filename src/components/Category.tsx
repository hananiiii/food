import React from 'react'
import Cat_1 from "../assets/cat_1.jpg"
import CategoryCard from './CategoryCard'
const data =[
    {
        id:0,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:2,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:3,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:4,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:5,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:6,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:7,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    },
    {
        id:8,
        name:"Frensh Fruits",
        count:"9 Products",
        img:Cat_1
    }
]
const Category = () => {
  return (
    <div className='container pt-16'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
             {data.map(el => 
             <CategoryCard 
                key={el.id}
                img={el.img}
                name={el.name}
                count={el.count} 
             />)}
        </div>
    </div>
  )
}

export default Category