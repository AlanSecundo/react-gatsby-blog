import React, { useState } from "react"
import styled, { css } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

// Lists

import { skillList } from "../utils/skillsList"
import { cardList } from "../utils/memoriesList"
import { companyList } from "../utils/Companys"
import { testimonials } from "../utils/testimonials"

// Internal Components

import Slider from "./Slider"
import SkillCard from "./SkillCard"
import MemoryCard from "./MemoryCard"
import ModalContact from "./ModalContact"

// Assets
import avataralan from "../assets/avataralan.svg"

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const RowSpaceBetween = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.7;
  ${FlexCenter}
  flex-direction: column;
  text-align: center;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`

const Article = styled.div`
  max-width: 50rem;
  display: relative;
  text-align: center;
  padding-top: 5rem;

  @media (max-width: 800px) {
    max-width: 20rem;
    padding-top: 0;
  }
`

const Avatar = styled(avataralan)`
  max-width: 250px;
  margin-top: 2rem;
  margin-bottom: 2rem;
`

const H1 = styled.h1`
  margin-bottom: 0px;
`

const PurpleContainer = styled.div`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.textWhite};
  flex-direction: column;
  ${FlexCenter}
  text-align: center;
  padding: 5rem 9rem 0rem 9rem;

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 2rem 1rem 0rem 1rem;
  }
`

const SkillsContainer = styled.div`
  border-radius: 6px;
  color: ${({ theme }) => theme.textHeader};
  background-color: ${({ theme }) => theme.body};
  box-shadow: 0 5px 5px 0 ${({ theme }) => theme.borderTheme},
    0 0 0 1px ${({ theme }) => theme.borderTheme};
  margin-top: -12rem;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  row-gap: 1rem;

  @media (max-width: 800px) {
    max-width: 100%;
    display: flex;
    flex-direction: column;
  }
`
const MemoryCardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 15rem;
  row-gap: 2rem;
  column-gap: 1rem;
  width: 100%;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    max-width: 100%;
  }
`

const Line = styled.div`
  ${FlexCenter}
  flex-direction: row;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    max-width: 100%;
  }
`
const LogoCompanys = styled.img`
  max-width: 200px;
  margin: 1rem 2rem 2rem 2rem;
`

const DarkBlueDiv = styled.div`
  width: 80vw;
  background-color: ${({ theme }) => theme.darkBlue};
  border-radius: 20px;
  margin-top: -10rem;
  font-size: 16px;

  @media (max-width: 800px) {
    width: 90vw;
  }
`

const ContactDiv = styled.div`
  height: 100%;
  ${RowSpaceBetween}
  padding: 1rem 0;

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 1rem;
  }
`

const Column = styled.div`
  width: 100%;
  ${FlexCenter}
  padding: 0.75rem;
`

const WhiteDiv = styled.div`
  height: 9rem;
`

const Button = styled.div`
  background-color: transparent;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.purple};
  padding: 12px 24px;
  transition: 0.5s;
  width: 50%;

  :hover {
    background-color: #7510f7;
    cursor: pointer;
  }
`

export default function Author() {
  const [contactModalState, setContactModalState] = useState(false)

  function changeModalState() {
    if (contactModalState === true) {
      setContactModalState(false)
    } else {
      setContactModalState(true)
    }
  }

  const intl = useIntl()

  return (
    <div>
      <Container>
        <Article>
          <H1>{intl.formatMessage({ id: "mainTitle" })}</H1>
          <span>{intl.formatMessage({ id: "subtitle" })}</span>
          <div>
            <Avatar />
          </div>
        </Article>
      </Container>
      <PurpleContainer>
        <Container>
          <h2>{intl.formatMessage({ id: "secondaryTitle" })}</h2>
          <p>{intl.formatMessage({ id: "personalText" })}</p>
        </Container>
        <WhiteDiv />
        <WhiteDiv />
      </PurpleContainer>
      <Container>
        <SkillsContainer>
          {skillList.map((skills, index) => {
            return <SkillCard key={index} SkillList={skills} />
          })}
        </SkillsContainer>
      </Container>
      <Container>
        <h2>{intl.formatMessage({ id: "personalSubtitle" })}</h2>
        <MemoryCardGrid>
          {cardList.map((memorie, index) => {
            return <MemoryCard Memorie={memorie} key={index} />
          })}
        </MemoryCardGrid>
      </Container>
      <Container>
        <h2>{intl.formatMessage({ id: "companysTitle" })}</h2>
        <Line>
          {companyList.map((company, index) => (
            <LogoCompanys key={index} src={company.source} alt={company.alt} />
          ))}
        </Line>
      </Container>
      <Container>
        <h2>{intl.formatMessage({ id: "linkedinTitle" })}</h2>
        <p>{intl.formatMessage({ id: "peopleSaid" })}</p>
        <Slider List={testimonials} />
        <WhiteDiv />
      </Container>
      <PurpleContainer>
        <Container>
          <DarkBlueDiv>
            <ContactDiv>
              <Column>
                <h2>Let's work Together</h2>
              </Column>
              <Column>
                <p>{intl.formatMessage({ id: "workTogether" })}</p>
              </Column>
              <Column>
                <Button onClick={changeModalState}>
                  {intl.formatMessage({ id: "contactTitle" })}
                </Button>
                <ModalContact
                  contactModalState={contactModalState}
                  closeModal={changeModalState}
                />
              </Column>
            </ContactDiv>
          </DarkBlueDiv>
        </Container>
      </PurpleContainer>
    </div>
  )
}
