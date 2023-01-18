import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsPage = (props) => {

    const projectsData = props.projectsData

  return (
    <div>
        <div className='page-title'><h1>Projects</h1></div>

        <div className='flex-col projects-page-wrapper'>
            {
                projectsData.map( item => (
                    <ProjectCard data={item} />
                ))
            }
        </div>
    </div>
)
}

export default ProjectsPage