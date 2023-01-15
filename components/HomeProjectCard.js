import React, { useState } from 'react'

const HomeProjectCard = (props) => {
    const data = props.data;

    const [title, setTitle] = useState(data['title'])
    const [tags, setTags] = useState([...data['tags']])
    const [content, setContent] = useState(data['content'])

  return (
    <div className='project-card flex-col'>
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
  )
}

export default HomeProjectCard