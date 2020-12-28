import React from "react"
import styled from "styled-components"

export default function Typography(props) {
  
  Typography.propTypes = {
    Memorie: Object.required,
  }

  const TypographyText = styled.p`
    font-size: ${props.size === 'small' ? 12 : props.size === 'medium' ? 16 : 20}px;
  `

  return <TypographyText> {props.children} </TypographyText>
}
