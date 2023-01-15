import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsPage = () => {

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
        <div className='page-title'><h1>Projects</h1></div>

        <div className='flex-col projects-page-wrapper'>
            {
                fakeProject.map( item => (
                    <ProjectCard data={item} />
                ))
            }
        </div>
    </div>
)
}

export default ProjectsPage