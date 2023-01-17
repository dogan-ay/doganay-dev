import Home from "@/components/Home"
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { allProjects } from 'contentlayer/generated'

export async function getStaticProps() {
  let posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  posts = posts.slice(0,2)

  let projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  projects = projects.slice(0,2)

  return { props: { posts, projects } }
}


export default function Index({posts, projects}) {
  return (
    <Home blogData={posts} projectsData={projects}/>
  )
}
