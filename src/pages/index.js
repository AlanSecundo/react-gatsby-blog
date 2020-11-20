import React from "react"
import profileImage from "../assets/fotoAlan.png"
import styled from "styled-components"
import "../styles/global.css"

const Container = styled.div`
  color: white;
  background-color: #0f0f0ff2;
`

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1080px;
`

const Avatar = styled.img`
  border-radius: 500px;
  max-width: 48px;
  margin: 0px 10px 0px 10px;
`

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export default function Home() {
  return (
    <Container>
      <HeaderContainer>
        <DivRow>
          <Avatar
            src={profileImage}
            alt="Homem loiro com óculos de pé e segurando um mifrofone."
            title="Foto de perfil do Autor da página"
          />
          <h3>Alan Secundo</h3>
        </DivRow>
        <div>
          <span>Hello! | The Amazing Blog </span>
        </div>
        <div>
          <span>Socials</span>
        </div>
      </HeaderContainer>
    </Container>
  )
}
