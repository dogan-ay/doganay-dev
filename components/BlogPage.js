import React from 'react'
import HomeNewest from './HomeNewest'


const BlogPage = (props) => {
  
    const data = props.data;
  return (
    <div>
        <div className='page-title'><h1>Blog</h1></div>
        <HomeNewest  more={'button'} category={'blog'} data={data} />
    </div>
  )
}

export default BlogPage