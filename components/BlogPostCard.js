import React, { useState } from 'react'
import { useEffect } from 'react'

const BlogPostCard = (props) => {
    const data = props.data;

    const [date, setDate] = useState(data['date'])
    const [title, setTitle] = useState(data['title'])
    const [content, setContent] = useState(data['content'])  

  return (
    <div className='blog-post-card flex-col'>
        <p className='date'>{date}</p>
        <h4 className='dark-title'>{title}</h4>
        <p className='dark-text'>{content}</p>
        <div className='dark-line'></div>
    </div>
  )
}

export default BlogPostCard