import Link from 'next/link';
import React from 'react'
import { useState } from 'react';
import MoreLink from './MoreLink';

const ProjectCard = (props) => {
    const data = props.data;

    const [title, setTitle] = useState(data['title'])
    const [tags, setTags] = useState([...data['tags']])
    const [content, setContent] = useState(data['description'])  
    const [link, setLink] = useState(data['url'])


  return (
            <Link href={link}>
                <div className='project-card  card-effect flex'>
                <div className='project-img'>
                    <img src='/project.webp'></img>
                </div>
                <div className='project-card-content-container flex-col'>
                    <h4 className='mid-title effect'>{title}</h4>
                    <div className='home-project-content flex-col'>
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
                </div>
            </Link>
  )
}

export default ProjectCard