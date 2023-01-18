import Head from "next/head";
import React from 'react'

const Meta = ({description, title, keywords}) => {
  return (
    <div>
        <Head>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <title>{title}</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

    </div>
  )
}

export default Meta