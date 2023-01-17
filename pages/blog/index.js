import React from 'react'
import BlogPage from '@/components/BlogPage'
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { posts } }
}
const blogPage = ({posts}) => {
  return (
    <BlogPage data={posts}/>
)
}

export default blogPage