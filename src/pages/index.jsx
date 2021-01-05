import React from "react"
import "../styles/_global.css"
import Author from "../components/Author"
import { GatsbySeo } from "gatsby-plugin-next-seo"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
    <div>
      <GatsbySeo
        title={data.site.siteMetadata.title}
        description={data.site.siteMetadata.description}
        canonical={data.site.siteMetadata.siteUrl}
      />
      <Author />
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        siteUrl
        description
      }
    }
  }
`
