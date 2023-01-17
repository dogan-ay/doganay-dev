import React from 'react'
import ProjectsPage from '@/components/ProjectsPage'
import { compareDesc, format, parseISO } from 'date-fns'
import { allProjects } from 'contentlayer/generated'

export async function getStaticProps() {
  const projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })
  return { props: { projects } }
}
const Projects = ({projects}) => {
  return (
    <ProjectsPage projectsData={projects}/>
  )
}

export default Projects