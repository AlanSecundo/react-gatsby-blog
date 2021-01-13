import React from "react"
import styled, { css } from "styled-components"

const defaultTypography = css`
  margin-top: 10px;
  margin-bottom: 5px;
`

const TypographySmall = styled.div`
  ${defaultTypography}
  font-size: 12px;
`
const TypographyMedium = styled.div`
  ${defaultTypography}
  font-size: 16px;
`

const TypographyLarge = styled.div`
  ${defaultTypography}
  font-size: 20px;
`

export default function Typography(props) {

  if (props.size === "large") {
    return <TypographyLarge> {props.children} </TypographyLarge>
  }

  if (props.size === "small") {
    return <TypographySmall> {props.children} </TypographySmall>
  }
  
  return <TypographyMedium> {props.children} </TypographyMedium>
}
