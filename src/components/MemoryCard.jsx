import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

const Layer = styled.div`
  border-radius: 10px;
  position: absolute;
  background-color: #2b0161ab;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  transition: all 0.4s ease-in-out;
  :hover {
    background-color: transparent;
    span {
      display: none;
    }
  }
`

const TextContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
`

const MainDiv = styled.div`
  background-repeat: no-repeat, repeat;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  position: relative;
`

export default function MemoryCard(props) {
  MemoryCard.propTypes = {
    memorie: Object.required,
  }

  const intl = useIntl()
  
  return (
    <MainDiv style={{ backgroundImage: `url(${props.memorie.image})` }}>
      <Layer>
        <TextContainer>
          <span>{intl.formatMessage({ id: props.memorie.title })}</span>
          <span>
            <b>{props.memorie.year}</b>
          </span>
        </TextContainer>
      </Layer>
    </MainDiv>
  )
}
