import React from 'react'
import { format, parseISO } from 'date-fns'
import { allProjects } from 'contentlayer/generated' 
import Link from 'next/link'

export async function getStaticPaths() {
    const paths = allProjects.map((project) => project.url)
    return {
      paths,
      fallback: false,
    }
  }
  
  export async function getStaticProps({ params }) {
    const project = allProjects.find((project) => project.slug === params.slug)
    return {
      props: {
        project,
      },
    }
  }

const Projects = ({project}) => {
  return (
    <article className='project'>
      <h2>{project.title}</h2>
      <div className="light-text" dangerouslySetInnerHTML={{ __html: project.body.html }}></div>
      <h3>Screenshots</h3>
      <img src='/project.webp'></img>
      <h3>Tech Stack</h3>
      <div className='flex'>
        {project.tags.map( tag => <p className={`tech-tag ${tag}`}>{tag}</p>)}
      </div>
      <h3>Project</h3>
      <Link href={'#'}>
        <p className='light-text button'>Github</p>
      </Link>
    </article>  
  )
}

export default Projects