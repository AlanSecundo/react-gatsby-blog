import React from "react"
import BlogCard from "../components/BlogCard"
import styled, { css } from "styled-components"
import { graphql } from "gatsby"
import Typography from "../components/Typography"
import { useIntl } from "gatsby-plugin-intl"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getActualTheme } from "../utils/getActualTheme"


const ListBlogCard = styled.div`
  margin-top: 5rem;
  margin-bottom: 2rem;
`

const Footer = styled.div`
  width: 41rem;
  margin: 0px auto 10px auto;
`

const HR = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.purpleSecondary};
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const HoverTypography = styled(AniLink)`
  font-weight: 100;
  color: var(--color-text);
  :hover {
    cursor: pointer;
    border-bottom: 2px solid ${({ theme }) => theme.purpleSecondary};
  }
`
const FleboxStyle = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DivCenter = styled.div`
  ${FleboxStyle}
  justify-content: center;
`

const DivLeft = styled.div`
  ${FleboxStyle}
  justify-content: flex-start;
`

const DivRight = styled.div`
  ${FleboxStyle}
  justify-content: flex-end;
`

export default function Blog({ data }) {
  const intl = useIntl()

  function nextPageExist() {
    return data.allContentfulBlogPost.pageInfo.hasNextPage
  }

  function previousPageExist() {
    return data.allContentfulBlogPost.pageInfo.hasPreviousPage
  }

  return (
    <div>
      <ListBlogCard>
        {data.allContentfulBlogPost.edges.map((el, index) => (
          <BlogCard data={el.node} key={index}/>
        ))}
      </ListBlogCard>
      <Footer>
        <HR />
        <Grid>
          <DivLeft>
            <Typography size="medium">
              {previousPageExist() ? (
                <HoverTypography
                  cover
                  duration={1}
                  direction="down"
                  bg={getActualTheme()}
                  to={`/blog${
                    data.allContentfulBlogPost.pageInfo.currentPage - 1 <= 1
                      ? ""
                      : `/page/${
                          data.allContentfulBlogPost.pageInfo.currentPage - 1
                        }`
                  }`}
                >
                  ← {intl.formatMessage({ id: "previous" })}
                </HoverTypography>
              ) : null}
            </Typography>
          </DivLeft>
          <DivCenter>
            <Typography size="small">
              {data.allContentfulBlogPost.pageInfo.currentPage}{" "}
              {intl.formatMessage({ id: "of" })}{" "}
              {data.allContentfulBlogPost.pageInfo.pageCount}
            </Typography>
          </DivCenter>
          <DivRight>
            <Typography size="medium">
              {nextPageExist() ? (
                <HoverTypography
                  cover
                  duration={1}
                  direction="down"
                  bg={getActualTheme()}
                  to={`/blog/page/${
                    data.allContentfulBlogPost.pageInfo.currentPage + 1
                  }`}
                >
                  {intl.formatMessage({ id: "next" })} →
                </HoverTypography>
              ) : null}
            </Typography>
          </DivRight>
        </Grid>
      </Footer>
    </div>
  )
}

export const query = graphql`
  query blogQuery($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { fields: publishDate, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          description {
            description
          }
          publishDate(formatString: "DD MMM, YYYY", locale: "pt-br")
          title
          tags
        }
      }
      pageInfo {
        currentPage
        totalCount
        hasNextPage
        hasPreviousPage
        pageCount
      }
    }
  }
`
