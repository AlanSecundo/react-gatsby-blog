import React from "react"
import styled from "styled-components"

const SliderOn = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  background-color: #7510f7;
  border: 1px solid #7510f7;
  margin: 0 3px 0 3px;
  :hover {
    cursor: pointer;
  }
`

const SliderOff = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 100%;
  border: 2px solid #e4e4e4;
  margin: 0 3px 0 3px;
  :hover {
    cursor: pointer;
  }
`

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`



export default function Slider() {

  const actived = () => {
    return false;
  }

  return (
    <Container>
      
    </Container>
  )
}
