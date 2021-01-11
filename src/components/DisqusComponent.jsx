import React from "react"
import { Disqus } from 'gatsby-plugin-disqus'

export default function DisqusComponent({ props }) {
  let disqusConfig = {
    url: `https://reactalanblog.netlify.app/blog/post/static-sites-are-great`,
    identifier: '123',
    title: 'Hellow',
    language: 'en'
  }

  return (
    <div>
      <Disqus disqusConfig={disqusConfig} />
    </div>
  )
}
