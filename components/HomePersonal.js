import React from 'react'
import PersonalLinks from './PersonalLinks'
import Link from 'next/link'

const HomePersonal = () => {
  return (
      <div className='home-personal flex-col '>
          <div className='hero-section flex'>
            <div className='hero-img'></div>
            <div className='hero-details flex-col'>
            <p className='dark-text'>Personal website by&nbsp;
              <Link href={'https://twitter.com/hereticdev/'}>Doğan Ay Şengül</Link>. <br/>
              I make software.</p>
            </div>
          </div>
          <PersonalLinks/>
        
      </div>
  )
}

export default HomePersonal