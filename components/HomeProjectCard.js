import React, { useState } from 'react'
import Link from 'next/link';

const HomeProjectCard = (props) => {
    const data = props.data;

    const [title, setTitle] = useState(data['title'])
    const [tags, setTags] = useState([...data['tags']])
    const [content, setContent] = useState(data['description'])
    const [link, setLink] = useState(data['url'])

  return (
    <Link href={link}>
        <div className='project-card card-effect flex-col'>
        <h4 className='mid-title effect'>{title}</h4>
        <div className='home-project-content flex-col effect'>
            <div className='flex'>
                {
                    tags.map(tag => (
                        <p className='mid-text effect'>{tag}, </p>
                    ))
                }
            </div>
            <div className='dark-line effect'></div>
            <p className='dark-text effect'>{content}</p>
        </div>
        </div>
    </Link>
  )
}

export default HomeProjectCard