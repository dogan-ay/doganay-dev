import Home from "@/components/Home"
import { compareDesc, format, parseISO } from 'date-fns'
import { allPosts } from 'contentlayer/generated'
import { allProjects } from 'contentlayer/generated'
import { allWorks } from 'contentlayer/generated'
import Meta from "@/components/Meta"

export async function getStaticProps() {
  let posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  posts = posts.slice(0,2)

  let projects = allProjects.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date))
  })

  projects = projects.slice(0,2)

  let works = allWorks.sort((a, b) => {
    return compareDesc(new Date(a.startDate), new Date(b.startDate))
  })

  return { props: { posts, projects, works } }
}


export default function Index({posts, projects, works}) {
  return (
    <>
      <Meta title={'Doğan Ay Şengül'} description={'Hi, I am Doğan'}/>
        <Home blogData={posts} projectsData={projects} workData={works} />
    </>
  )
}
