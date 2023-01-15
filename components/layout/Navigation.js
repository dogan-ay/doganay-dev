import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav>
        <Link href={'/'}>
            <p className='nav-active'>Home</p>
        </Link>
        <Link href={'/'}>
            <p className='dark-text'>Blog</p>
        </Link>
        <Link href={'/'}>
            <p className='dark-text'>Projects</p>
        </Link>
    </nav>
  )
}

export default Navigation