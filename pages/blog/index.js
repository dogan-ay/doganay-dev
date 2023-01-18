import React from 'react'
import BlogPage from '@/components/BlogPage'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Meta from '@/components/Meta'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}
const blogPage = ({posts}) => {
  return (
      <>
          <Meta description={'All blog posts Doğan Ay Şengül'} title={'Blog - Doğan Ay Şengül'} keywords={''}/>
          <BlogPage data={posts}/>
      </>
)
}

export default blogPage