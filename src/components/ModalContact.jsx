import React from "react"
import curriculumIcon from "../assets/curriculum.svg"
import email from "../assets/email.svg"
import whatsapp from "../assets/whatsapp.svg"
import videoIcon from "../assets/video.svg"
import Modal from "./Modal"
import styled, { css } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"


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
  color: ${({ theme }) => theme.text};
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

  const intl = useIntl()

  function changeModalState() {
    props.closeModal();    
  }

  return (
    <Modal
      showModal={props.contactModalState}
      closeModal={changeModalState}
      title={intl.formatMessage({ id: "informations" })}
      button={intl.formatMessage({ id: "noted" })}
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
            <span>+55 (44) 99957-6173</span>
          </AlignCenter>
        </List>
        <DivColumnCenter>
          <VideoIcon />
          <span>{intl.formatMessage({ id: "videoPresentation" })}</span>
        </DivColumnCenter>
        <DivColumnCenter>
          <CurriculumIcon />
          <span>{intl.formatMessage({ id: "curriculumPDF" })}</span>
        </DivColumnCenter>
      </Row>
    </Modal>
  )
}
