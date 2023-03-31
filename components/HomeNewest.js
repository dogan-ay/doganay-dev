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
    const homePage = props.homePage ?? false;

    const contentInit = (category, data) => {
        const content = []

        data?.map(item => (
         category == 'blog' ? 
         content.push(<BlogPostCard new={content.length <= 1 ? true : false} data={item}/>)  : 
         category == 'projects' ? 
         content.push(<HomeProjectCard data={item}/>) : 
         null
        ))

        return content;

    }
    
  return (
      <div className='home-newest flex-col'>
          <p className='frost-text'> { category == 'blog' ? '📝 Latest Articles' : category == 'projects' ? '🔥 Side Projects' : null}</p>
          {contentInit(category, data)}
          {more} {console.log(homePage)}
      </div>
  )
}

export default HomeNewest