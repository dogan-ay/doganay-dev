import React from 'react'
import { useState } from 'react';
import MoreLink from './MoreLink';

const ProjectCard = (props) => {
    const data = props.data;

    const [title, setTitle] = useState(data['title'])
    const [tags, setTags] = useState([...data['tags']])
    const [content, setContent] = useState(data['content'])

  return (
            <div className='project-card flex'>
                <div className='project-img'>
                    <img src='/project.webp'></img>
                </div>
                <div className='project-card-content-container flex-col'>
                    <h4 className='light-title'>{title}</h4>
                    <div className='home-project-content flex-col'>
                        <div className='flex'>
                        {
                                tags.map(tag => (
                                    <p className='mid-text'>{tag}, </p>
                                ))
                            }
                        </div>
                        <div className='dark-line'></div>
                        <p className='dark-text'>{content}</p>
                    </div>
                </div>
            </div>
  )
}

export default ProjectCard