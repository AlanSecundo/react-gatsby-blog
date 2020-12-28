import React from "react";
import styled, { keyframes } from "styled-components"


const Animatetop = keyframes`
  from {top: -300px; opacity: 0; }
  to {top: 0; opacity: 1; }
`
const ModalMain = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ModalContent = styled.div`
  position: relative;
  color: ${({ theme }) => theme.textHeader};
  background-color: ${({ theme }) => theme.body};
  width: 50%;
  border-radius: 5px;
  padding: 0px 30px 20px 30px;
  box-shadow: 1px 1px 5px 1px rgba(161, 158, 158, 0.301);
  animation-name: ${Animatetop};
  animation-duration: 0.5s;
  
  @media (max-width: 800px) {
    width: 80%;
  }
`
const SpaceBetweenDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Button = styled.div`
  color: ${({ theme }) => theme.textWhite};
  background-color: ${({ theme }) => theme.purple};
  padding: 7px 20px;
  border-radius: 50px;
  border: solid 1px ${({ theme }) => theme.purple};
  cursor: pointer;
  transition: 0.5s;
  
  :hover {
    background-color: transparent;
    color: ${({ theme }) => theme.purple};
  }
`

const ModalBody = styled.div`
  padding: 1rem 0 2rem 0;
`

export default function Modal(props) {
  Modal.propTypes = {
    showModal: Boolean.isRequired,
    title: String.isRequired,
    button: String.isRequired
  }

  function closeModal() {
    props.closeModal()
  }

  return props.showModal === false ? null : (
    <ModalMain>
      <ModalContent>
        <SpaceBetweenDiv>
          <h2>{props.title}</h2>
          <div />
        </SpaceBetweenDiv>
        <ModalBody>{props.children}</ModalBody>
        <SpaceBetweenDiv>
          <div />
          <Button onClick={closeModal}> {props.button} </Button>
        </SpaceBetweenDiv>
      </ModalContent>
    </ModalMain>
  )
}
