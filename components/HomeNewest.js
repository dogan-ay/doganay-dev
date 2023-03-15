import React, { useState } from 'react'
import { useEffect } from 'react';
import BlogPostCard from './BlogPostCard';
import HomeProjectCard from './HomeProjectCard';
import MoreLink from './MoreLink';
import MoreButton from './MoreButton';

const HomeNewest = (props) => {
    const [data, setData] = useState(props.data);
    const [category, setCategory] = useState(props.category);
    const more = props.more == 'link' ? <MoreLink link={props.link}/> : props.more == 'button' ? <MoreButton/> : null;
    const contentInit = (category, data) => {
        const content = []

        data?.map(item => (
         category == 'blog' ? 
         content.push(<BlogPostCard data={item}/>)  : 
         category == 'projects' ? 
         content.push(<HomeProjectCard data={item}/>) : 
         null
        ))

        return content;

    }
    
    useEffect(() => {
    
        console.log(data, typeof data)
    }, [])
    
  return (
    <div className='container-width'>
      <div className='home-newest flex-col'>
          <p className='green-text'> { category == 'blog' ? '📝 New Posts' : category == 'projects' ? '🔥 New Projects' : null}</p>
          {contentInit(category, data)}
          {more}
      </div>
    </div>
  )
}

export default HomeNewest