import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/router'

const Navigation = () => {
  const router = useRouter();
  let path = router.asPath.split('/')
  path = path[1]

  return ( 
   
      <nav>
        <></>
          <Link href={'/'}>
              <p className={`nav-item  ${path == '' ? 'nav-active' : 'dark-text'}`}>Home</p>
              
          </Link>
          <Link href={'/blog'}>
              <p className={`nav-item ${path == 'blog' ? 'nav-active' : 'dark-text'}`}>Blog</p>
          </Link>
          <Link href={'/projects'}>
              <p className={`nav-item ${path == 'projects' ? 'nav-active' : 'dark-text'}`}>Projects</p>
          </Link>
      </nav>
  )
}

export default Navigation