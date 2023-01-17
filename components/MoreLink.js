import Link from 'next/link'
import React, { useState } from 'react'

const MoreLink = (props) => {
    const [link,setLink] = useState(props.link);

  return (
    <Link href={link}>
        <div className='more-button'>
            <p className='light-mini-text'>More</p>
            <p className='arrow'>⟶</p>
        </div>
    </Link>
  )
}

export default MoreLink