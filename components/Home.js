import React from 'react'
import HomePersonal from './HomePersonal'
import HomeNewest from './HomeNewest'

const Home = () => {

  const fakePost = [
    {
      date: '14/01/2023',
      title: 'Lorem Ipsum Dolor Sıt',
      content: 'Lorem ipsum dolor sit amei, lorem ipsum dolor sit amei. Lorem ipsum dolor amei, lorem ipsum dolor amei. '
    },
    {
      date: '14/01/2023',
      title: 'Lorem Ipsum Dolor Sıt',
      content: 'Lorem ipsum dolor sit amei, lorem ipsum dolor sit amei. Lorem ipsum dolor amei, lorem ipsum dolor amei. '
    }
    
  ]

  const fakeProject = [
    {
      tags: ['React', 'HTML', 'CSS'],
      title: 'Lorem Ipsum Dolor Sıt',
      content: 'Lorem ipsum dolor sit amei, lorem ipsum dolor sit amei. Lorem ipsum dolor amei, lorem ipsum dolor amei. '
    },
    {
      tags: ['React', 'HTML', 'CSS'],
      title: 'Lorem Ipsum Dolor Sıt',
      content: 'Lorem ipsum dolor sit amei, lorem ipsum dolor sit amei. Lorem ipsum dolor amei, lorem ipsum dolor amei. '
    }
    
  ]

  return (
    <div>
        <HomePersonal/>
        <HomeNewest more={'link'} link={'/blog'} data={fakePost} category={'blog'} />
        <HomeNewest more={'link'} link={'/projects'} data={fakeProject} category={'projects'} />

    </div>
  )
}

export default Home