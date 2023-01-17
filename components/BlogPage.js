import React from 'react'
import HomeNewest from './HomeNewest'


const BlogPage = (props) => {
  const test = () => console.log(data)
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
    const data = props.data;
  return (
    <div>
        <div className='page-title'><h1>Blog</h1></div>
        <HomeNewest  more={'button'} category={'blog'} data={data} />
        {test()}
    </div>
  )
}

export default BlogPage