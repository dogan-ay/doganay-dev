import React, { useState } from 'react'
import HomePersonal from './HomePersonal'
import HomeNewest from './HomeNewest'

const Home = (props) => {
  const blogData = props.blogData;
  const projectsData = props.projectsData;
  
  return (
    <div>
        <HomePersonal/>
        <HomeNewest more={'link'} link={'/blog'} data={blogData} category={'blog'} />
        <HomeNewest more={'link'} link={'/projects'} data={projectsData} category={'projects'} />
    </div>
  )
}

export default Home