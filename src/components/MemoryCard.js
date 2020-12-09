import React from "react"
import styled, { css } from "styled-components"

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

export default function MemoryCard({ Memorie }) {
  MemoryCard.propTypes = {
    Memorie: Object.required,
  }

  const MainDiv = styled.div`
    background-image: url(${Memorie.image});
    background-repeat: no-repeat, repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    position: relative;
  `

  return (
    <MainDiv>
      <Layer>
        <TextContainer>
          <span>{Memorie.title}</span>
          <span>
            <b>{Memorie.year}</b>
          </span>
        </TextContainer>
      </Layer>
    </MainDiv>
  )
}
