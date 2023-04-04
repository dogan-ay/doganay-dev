import React from 'react'
import ProjectsPage from '@/components/ProjectsPage'
import { compareDesc, format, parseISO } from 'date-fns'
import { allProjects } from 'contentlayer/generated'
import Meta from '@/components/Meta'

export async function getStaticProps() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { projects } }
}
const Projects = ({projects}) => {
  return (
    <>
        <Meta description={'All projects Doğan Ay Şengül'} title={'Projects - Doğan Ay Şengül'}/>
        <ProjectsPage projectsData={projects}/>
    </>
  )
}

export default Projects