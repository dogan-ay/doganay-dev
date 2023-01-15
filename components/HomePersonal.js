import React from 'react'
import PersonalLinks from './PersonalLinks'

const HomePersonal = () => {
  return (
    <div className='home-personal flex-col'>
        <h1>
            Hi, I am Doğan
        </h1>
        <h3>
            I buid software
        </h3>
        <p className='dark-text'>
            I'm a software engineer with experience in delivering clean, elegant and efficent code. Lorem ipsum dolor Sit amei
        </p>
        <PersonalLinks/>
        
    </div>
  )
}

export default HomePersonal