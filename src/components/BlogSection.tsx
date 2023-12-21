import React from 'react'
import Blog_1 from '../assets/blog_1.jpg'
import Blog_2 from '../assets/blog_2.jpg'
import Blog_3 from '../assets/blog_3.jpg'
import BlogCard from './BlogCard'
const data=[
         {
            img:Blog_1,
            title:"About healthy food",
            date:"23 december 2023",
            comment:8
         },
         {
            img:Blog_2,
            title:"About healthy food",
            date:"23 december 2023",
            comment:8
         },
         {
            img:Blog_3,
            title:"About healthy food",
            date:"23 december 2023",
            comment:8
         },
]
const BlogSection = () => {
  return (
    <div className='container pt-16'>
      <h2 className='font-bold text-2xl'>Latest News</h2>
      <p className='text-title_color'>Stay informed with the latest news, providing real-time updates on global events and developments.</p>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8'>
        {data.map((el)=>(
            <BlogCard
            key={el.date}
            img={el.img}
            title={el.title}
            date={el.date}
            comment={el.comment}  
            />
        ))}
      </div>
    </div>
  )
}

export default BlogSection