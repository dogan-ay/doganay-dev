import Head from "next/head";
import React from 'react'

const Meta = (props) => {
  const img = props.img ? props.img : '';

  return (
    <div>
        <Head>
            <meta name="description" content={props.description}/>
            <meta name="twitter:card" content="summary_large_image"></meta>
            <meta name="twitter:site" content="@hereticdev" />
            <meta name="twitter:creator" content="@hereticdev" />
            <meta name="twitter:title" content={props.title} />
            <meta name="twitter:description" content={props.description} />
            <meta name="twitter:image" content={img} />
            <meta property="og:type" content="article" />
            <meta property="og:title"  content={props.title}/>
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content="https://doganay.dev/" />
            <meta property="og:image" content={img} />

            <title>{props.title}</title>
            <link rel='icon' href='/favicon.ico'/>
        </Head>

    </div>
  )
}

export default Meta