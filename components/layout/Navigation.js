import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <Link href={'/'}>
            <p className='highlight-text'>Home</p>
        </Link>
        <Link href={'/'}>
            <p className='highlight-text'>Blog</p>
        </Link>
        <Link href={'/'}>
            <p className='highlight-text'>Projects</p>
        </Link>
    </nav>
  )
}

export default Navigation