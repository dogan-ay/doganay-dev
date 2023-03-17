import React from 'react'
import { format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import Meta from '@/components/Meta'
import hljs from 'highlight.js';
import { useEffect } from 'react';
import 'highlight.js/styles/nord.css';

export async function getStaticPaths() {
  const paths = allPosts.map((post) => post.url)
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const post = allPosts.find((post) => post.slug === params.slug)
  return {
    props: {
      post,
    },
  }
}

const blogpost = ({post}) => {

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <>
    <Meta description={post.description} title={post.title} keywords={''}/>
    <article>
      <h2>{post.title}</h2>
      <div className='blogpost-info'>
        <p className='post-info'>✏️ Doğan Ay Şengül</p>
         <p>·</p>
         <p className='post-info'>📅 {format(parseISO(post.date), 'LLLL d, yyyy')}</p>

         <p>·</p>
         <p className='post-info'>⏱️ {post.readingTime.text} </p>
        </div>
      <div className="light-text mdx-body" dangerouslySetInnerHTML={{ __html: post.body.html }}></div>

    </article>
    </>

    )
}

export default blogpost