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
    const [img, setImg] = useState(data['img'])

  return (
            <Link href={link}>
                <div className='project-card  project-mobile card-effect flex'>
                <div className='project-img'>
                    <img src={'/'+img}></img>
                </div>
                <div className='project-card-content-container flex-col'>
                    <h4 className='mid-title effect'>{title}</h4>
                    <div className='home-project-content flex-col'>
                        <div className='flex' style={{flexWrap: 'wrap', }}>
                        {
                                tags.map(tag => {
                                    if (tags.indexOf(tag) < tags.length -1) {
                                        return [<p className='mid-text effect'>{tag} </p>, <p className='mid-text effect'>·</p>]

                                    } else {
                                        return <p className='mid-text effect'>{tag}</p>

                                    }
                                })
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