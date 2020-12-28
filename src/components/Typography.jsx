import React from "react"
import styled from "styled-components"

export default function Typography(props) {
  Text.propTypes = {
    size: String.isRequired,
  }

  const Typography = styled.p`
    font-size: ${props.size === 'small' ? 12 : props.size === 'medium' ? 16 : 20}px;
  `

  return <Typography> {props.children} </Typography>
}
