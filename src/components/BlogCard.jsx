import React from "react"
import styled, { keyframes } from "styled-components"
import Typography from "./Typography"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getActualTheme } from "../utils/getActualTheme"
import Tags from "./Tags"

const Card = styled.div`
  background-color: transparent;
  max-width: 40rem;
  box-shadow: rgba(168, 166, 166, 0.527) 0px 1px 5px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  position: relative;
  margin: 25px auto 10px auto;
  border-radius: 4px;
  transition: all 0.1s ease-in-out;

  :hover {
    transform: scale(1.01);
    cursor: pointer;
  }

  @media (max-width: 800px) {
    max-width: 90vw;
  }
`

const Clockwise = keyframes`
  0% {
    top: -3px;
    left: 0;
  }
  12% {
    top: -2px;
    left: 2px;
  }
  25% {
    top: 0;
    left: 5px;    
  }
  37% {
    top: 2px;
    left: 2px;
  }
  50% {
    top: 3px;
    left: 0;    
  }
  62% {
    top: 2px;
    left: -2px;
  }
  75% {
    top: 0;
    left: -5px;
  }
  87% {
    top: -2px;
    left: -2px;
  }
  100% {
    top: -3px;
    left: 0;    
  }
`

const EffectDiv = styled.div`
  transition: all 0.4s ease-in-out;

  :hover {
    transform: scale(1.01);
    box-shadow: var(--color-purple-secondary) 0px 0px 3px 1px;
  }

  :hover::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--color-purple-secondary);
    border-radius: 4px;
    z-index: -1;
    animation: 0.7s ${Clockwise} 1;
  }
`

const InsideDiv = styled.div`
  background-color: var(--color-body);
  z-index: 1;
  padding: 5px 20px 25px 25px;
  border-radius: 4px;
`

const H1 = styled.h1`
  margin: 0px 0 -15px 0;
`

const Link = styled(AniLink)`
  all: unset;
  text-decoration: none;
  color: var(--color-text);
`

const GreySpan = styled.span`
  color: var(--color-grey-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`

export default function BlogCard(props) {
  function getUrl() {
    if (typeof window === "undefined") {
      return
    }
    return window.location.pathname
  }

  return (
    <Card>
      <Link
        cover
        duration={1}
        direction="down"
        bg={getActualTheme()}
        to={`${getUrl()}/post/${props.data.slug}`}
      >
        <EffectDiv>
          <InsideDiv>
            <Typography size="small">{props.data.publishDate}</Typography>
            <H1>{props.data.title}</H1>
            <Typography size="large">
              <GreySpan>{props.data.description.description}</GreySpan>
            </Typography>
            <br />
            <Tags tags={props.data.tags} />
          </InsideDiv>
        </EffectDiv>
      </Link>
    </Card>
  )
}
