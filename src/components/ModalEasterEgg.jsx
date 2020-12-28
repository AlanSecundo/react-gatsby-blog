import React from "react"
import Modal from "./Modal"
import reactGatsby from "../assets/reactGatsby.png"
import cssHtml from "../assets/cssHtml.png"
import styled from "styled-components"

const Image = styled.img`
  max-width: 15rem;
`

const GridColumn = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1rem;
  align-items: center;
  min-height: 10rem;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`

export default function ModalEasterEgg(props) {
  function changeModalState() {
    props.closeModal()
  }

  return (
    <Modal
      showModal={props.modalState}
      closeModal={changeModalState}
      title={"Técnologias usadas"}
      button={"Legal!"}
    >
      <GridColumn>
        <div>
          <Image src={cssHtml} alt="Css Logo e HTML Logo" />
        </div>
        <div>
          <Image src={reactGatsby} alt="React e Gatsby logo" />
        </div>
      </GridColumn>
    </Modal>
  )
}
