import React from "react"
import styled, { css } from "styled-components"
import avataralan from "../assets/avataralan.svg"
import SkillCard from "../components/SkillCard"
import MemoryCard from "../components/MemoryCard"
import { skillList } from "../utils/skillsList"
import { cardList } from "../utils/memoriesList"
import Slider from "../components/Slider"

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Titillium Web", sans-serif;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.7;
  ${FlexCenter}
  flex-direction: column;
  text-align: center;

  @media (max-width: 800px) {
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

const SocialProofAvatar = styled.img`
  max-width: 150px;
  border-radius: 100%;
`

const H1 = styled.h1`
  margin-bottom: 0px;
`

const PurpleContainer = styled.div`
  background-color: #7510f7;
  color: #fff;
  flex-direction: column;
  ${FlexCenter}
  text-align: center;
  padding: 5rem 18rem 16rem 18rem;

  @media (max-width: 800px) {
    max-width: 20rem;
    padding: 2rem 1rem 14rem 1rem;
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
    max-width: 80%;
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
`

export default function Body({ theme }) {
  Body.propTypes = {
    theme,
  }

  return (
    <div>
      <Container>
        <Article>
          <H1>Dev Front-end e Engenheiro de Software</H1>
          <span>
            Em uma busca constante de aprendizado e experiências com alegria e
            paixão no que eu faço
          </span>
          <div>
            <Avatar />
          </div>
        </Article>
      </Container>
      <PurpleContainer>
        <Container>
          <h2>Muito prazer ^^ Me chamo Alan Secundo</h2>
          <p>
            Meu primeiro contato com a área de Software foi em 2014, quando
            ingressei no curso de Engenharia de Software. Durante a graduação,
            fui professor de Excel, fiz iniciação científica, participei de
            diversos Hackathons e voluntáriados. Consegui minha primeira
            oportunidade no mercado de trabalho em 2017, desde então, atuei na
            grande maioria do tempo como Desenvolvedor Front-End, mas também
            como Gestor de Produtos e Scrum Master em alguns períodos. Em
            relação a minha pessoa, gosto muito de comunicação, inovação,
            autoconhecimento, desenvolvimento de software, e-sports e viagens.
          </p>
        </Container>
      </PurpleContainer>
      <Container>
        <SkillsContainer>
          {skillList.map((skills, index) => {
            return (
              <SkillCard key={index} SkillList={skills} />
            )
          })}
        </SkillsContainer>
      </Container>
      <Container>
        <h2>Algumas conquistas relacionadas a área das quais me orgulho</h2>

        <MemoryCardGrid>
          {
            cardList.map((memorie, index) => {
              return <MemoryCard Memorie={memorie} key={index} />
            })
          }
        </MemoryCardGrid>
      </Container>
      <Container>
          <h2>Testemunhos</h2>
          <p>Algumas coisas legais que pessoas que trabalharam comigo já falaram</p>
          <SocialProofAvatar src="https://media-exp1.licdn.com/dms/image/C4D03AQEnb_qHWP7GNw/profile-displayphoto-shrink_800_800/0/1569129926918?e=1613001600&v=beta&t=HzxPjvZLfIdkcuvcsPqBjAW67y6LEMU32LYypDPLYMY" />
          <p>Tive o prazer de conhecer e trabalhar com o Alan durante o evento do Ticnova 2018. Ele é um profissional altamente comunicativo que recomendo e gostaria de poder trabalhar com ele novamente.</p>
          <Slider />
      </Container>
    </div>
  )
}
