import React from "react"
import styled from "styled-components"

export default function Typography(props) {

  const TypographyText = styled.div`
    font-size: ${props.size === 'small' ? 12 : props.size === 'medium' ? 16 : 20}px;
    color: ${props.color === undefined ? ({ theme }) => theme.text : props.color};
    margin-top: 10px;
    margin-bottom: 5px;
  `

  return <TypographyText> {props.children} </TypographyText>
}
