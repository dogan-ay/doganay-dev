import React from 'react'
import { format, parseISO } from 'date-fns'
import { allProjects } from 'contentlayer/generated' 
import Link from 'next/link'
import Meta from '@/components/Meta'


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
    <>
    <Meta description={project.description} title={project.title}/>
    <article className='project post-article'>
      <h2>{project.title}</h2>
      <div className="light-text mdx-body" dangerouslySetInnerHTML={{ __html: project.body.html }}></div>
      <h3>Screenshots</h3>
      <img src={`/${project.img}`}></img>
      <h3>Project</h3>
      {project.live ? <Link href={project.live}>
        <p className='light-text button'>{project.liveName} ⟶</p>
      </Link> : null}
      <Link href={project.deployment}>
        <p className='light-text button'>Github ⟶</p>
      </Link>
     
      <h3>Tech Stack</h3>
      <div className='flex' style={{flexWrap: 'wrap'}}>
        {project.tags.map( tag => <p className={`tech-tag ${tag}`}>{tag}</p>)}
      </div>
    </article>  
    </>

  )
}

export default Projects