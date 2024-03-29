import React, { useState } from 'react'
import { useEffect } from 'react'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'


const BlogPostCard = (props) => {
    const data = props.data;

    const [date, setDate] = useState(data['date'])
    const [title, setTitle] = useState(data['title'])
    const [content, setContent] = useState(data['description'])  
    const [link, setLink] = useState(data['url'])

    const isNew = param => {
      return param ? <div className='new-post-tag'><p>New!</p></div>: ''
    }

  return (
    <Link href={link}>
        <article className='home-article'>
          <div className='blog-post-card flex-col effect card-effect'>
          <p className='date' dateTime={data.date}>
              {format(parseISO(date), 'LLLL d, yyyy')}
          </p>
          <h3 className='bold effect'>{title}</h3>

          <p className='dark-text effect'>{content}</p>
          </div>
          {isNew(props.new)}
        </article>
    </Link> 
  )
}

export default BlogPostCard