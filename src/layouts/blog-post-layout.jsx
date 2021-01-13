import React from "react"
import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Typography from "../components/Typography"
import { graphql } from "gatsby"
import Tags from "../components/Tags"
import { DiscussionEmbed } from "disqus-react"

const BlogSection = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 680px;
  padding-top: 2rem;
  font-size: 1.1rem;
`

const InternalLink = styled(AniLink)`
  color: var(--color-text);
  font-weight: 300;
  :hover {
    border-bottom: 2px solid var(--color-purple-secondary);
    cursor: pointer;
  }
`

const PostContent = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  letter-spacing: 0.4px;
  line-height: 1.5em;
`

const Span = styled.span`
  color: var(--color-grey-primary);
`

const NextPreviousSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const NextPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`

const PreviousPost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

const SectionMargin = styled.div`
  min-height: 4rem;
`

export default function BlogLayout({ data, pageContext }) {
  let post = data.contentfulBlogPost

  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: post.title },
  }

  const { next, previous } = pageContext

  return (
    <BlogSection>
      <InternalLink cover duration={1} direction="down" to={`/blog/`}>
        ← Voltar na listagem
      </InternalLink>
      <Typography size="small">{post.publishDate}</Typography>
      <h1>{post.title}</h1>
      <Typography size="large">
        <Span>{post.description.description}</Span>
      </Typography>
      <Typography size="small">
        <Tags tags={post.tags} />
      </Typography>
      <PostContent>
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </PostContent>
      <hr />
      <NextPreviousSection>
        <SectionMargin>
          {previous === null ? null : (
            <PreviousPost>
              <Typography size="small">Anterior</Typography>
              <InternalLink
                cover
                duration={1}
                direction="down"
                to={`/blog/post/${previous.slug}`}
              >
                ← {previous.title}
              </InternalLink>
            </PreviousPost>
          )}
        </SectionMargin>
        <SectionMargin>
          {next === null ? null : (
            <NextPost>
              <Typography size="small">Próximo</Typography>
              <InternalLink
                cover
                duration={1}
                direction="down"
                to={`/blog/post/${next.slug}`}
              >
                {next.title} →
              </InternalLink>
            </NextPost>
          )}
        </SectionMargin>
      </NextPreviousSection>
      <DiscussionEmbed {...disqusConfig} />
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
      tags
      description {
        description
      }
    }
  }
`
