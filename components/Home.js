import React, { useState } from 'react'
import HomePersonal from './HomePersonal'
import HomeNewest from './HomeNewest'
import { Work } from './Work';

const Home = (props) => {
  const blogData = props.blogData;
  const projectsData = props.projectsData;
  const workData = props.workData;
  
  return (
    <div>
        <HomePersonal/>       
        <HomeNewest more={'link'} link={'/blog'} data={blogData} category={'blog'}/>   
        <HomeNewest more={'link'} link={'/projects'} data={projectsData} category={'projects'} />
        <Work data={workData} />
    </div>
  )
}

export default Home