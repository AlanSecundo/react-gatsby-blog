import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typography from "../components/Typography"
import { graphql } from "gatsby"

const BlogSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 680px;
  padding-top: 2rem;
`

const InternalLink = styled(AniLink)`
  color: ${({ theme }) => theme.text};
  font-weight: 300;
  :hover {
    border-bottom: 2px solid ${({ theme }) => theme.purpleSecondary};
    cursor: pointer;
  }
`

export default function BlogLayout({ data }) {
  
  return (
    <BlogSection>
      <InternalLink cover duration={1} direction="down" to={`/blog/`}>
        ← Voltar na listagem
      </InternalLink>
      <Typography size="small">
        <span>{data.contentfulBlogPost.publishDate}</span>
      </Typography>
      <h1>{data.contentfulBlogPost.title}</h1>
      <Typography size="large">
        {data.contentfulBlogPost.description.description}
      </Typography>
      <Typography size="medium">
        <div dangerouslySetInnerHTML={{ __html: data.contentfulBlogPost.body.childMarkdownRemark.html }} />
      </Typography>
    </BlogSection>
  )
}

export const query = graphql`
  query getBlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "DD MMM, YYYY", locale: "pt-br")
      body {
        childMarkdownRemark {
          html
        }
      }
      description {
        description
      }
    }
  }
`
