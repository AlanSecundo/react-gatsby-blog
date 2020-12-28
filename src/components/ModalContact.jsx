import React from "react"
import curriculumIcon from "../assets/curriculum.svg"
import email from "../assets/email.svg"
import whatsapp from "../assets/whatsapp.svg"
import videoIcon from "../assets/video.svg"
import Modal from "./Modal"
import styled, { css } from "styled-components"


const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const DivColumnCenter = styled.div`
  ${FlexCenter}
  flex-direction: column;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`

const AlignCenter = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: ${({ theme }) => theme.textHeader};
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SvgIcon = css`
  width: 30px;
  height: 30px;
  margin: 5px;
`

const LargeIcons = css`
  width: 80px;
  height: 80px;
`

const EmailIcon = styled(email)`
  ${SvgIcon}
`

const WhatsappIcon = styled(whatsapp)`
  ${SvgIcon}
`

const CurriculumIcon = styled(curriculumIcon)`
  ${LargeIcons}
`

const VideoIcon = styled(videoIcon)`
  ${LargeIcons}
`

export default function ModalContact(props) {

  function changeModalState() {
    props.closeModal();    
  }

  return (
    <Modal
      showModal={props.contactModalState}
      closeModal={changeModalState}
      title={"Informações"}
      button={"Anotado!"}
    >
      <Row>
        <List>
          <AlignCenter href="mailto:alan_secundo@hotmail.com" target="blank">
            <EmailIcon />
            <span>alan_secundo@hotmail.com</span>
          </AlignCenter>
          <AlignCenter
            href="https://api.whatsapp.com/send/?phone=44999576173&text&app_absent=0"
            target="blank"
          >
            <WhatsappIcon />
            <span>(44) 99957-6173</span>
          </AlignCenter>
        </List>
        <DivColumnCenter>
          <VideoIcon />
          <span>Vídeo de apresentação</span>
        </DivColumnCenter>
        <DivColumnCenter>
          <CurriculumIcon />
          <span>Currículo em PDF</span>
        </DivColumnCenter>
      </Row>
    </Modal>
  )
}
