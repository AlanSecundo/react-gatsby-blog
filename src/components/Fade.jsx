import React from "react"
import styled, { keyframes } from "styled-components"

const FadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`

const FadeDiv = styled.div`
  .fade-in {
    -webkit-animation: ${FadeIn} 1s ease-in-out;
    animation: ${FadeIn} 1s ease-in-out;
  }
`

export default function Fade(props) {

  return (
    <FadeDiv>
      { props.children }
    </FadeDiv>
  )
} 