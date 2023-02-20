import React from 'react'
import PersonalLinks from './PersonalLinks'

const HomePersonal = () => {
  return (
    <div className='home-personal flex-col'>
        <h1 className='home-title'>
            Hi, I am Doğan
        </h1>
        <h2>
            I buid software
        </h2>
        <p className='dark-text'>
          I am a curious and passionate software developer working in the field of web technologies.
        </p>
        <PersonalLinks/>
        
    </div>
  )
}

export default HomePersonal