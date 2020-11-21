import React from "react"
import profileImage from "../assets/fotoAlan.png"
import styled, { css } from "styled-components"
import InstagramIcon from "../assets/instagram.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import SpotifyIcon from "../assets/spotify.svg"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

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
  padding-top: 10px;
  padding-bottom: 10px;
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

const Title = styled.a`
  padding: 10px 10px;
  &:hover {
    color: rgb(161, 236, 247);
    border-color: rgb(161, 236, 247);
    border-bottom: 2px solid;
  }
`

const SvgStyle = css`
  width: 35px;
  height: 35px;
  fill: black;
  margin: 0px 3px 0px 3px;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.2);
  }
`
const LinkedIcon = styled(LinkedinIcon)`
  ${SvgStyle}
`
const InstaIcon = styled(InstagramIcon)`
  ${SvgStyle}
`
const SpotIcon = styled(SpotifyIcon)`
  ${SvgStyle}
`

// TOOGLE CSS

const DarkModeDiv = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -3px;

  &:before,
  &:after {
    box-sizing: border-box;
  }

  > label {
    position: relative;
    display: block;
    width: 45px;
    height: 25px;
    border-radius: 100px;
    background-color: rgb(37, 37, 37);
    overflow: hidden;
    cursor: pointer;

    &:before,
    &:after {
      display: block;
      position: absolute;
      content: "";
      width: 19px;
      height: 19px;
      border-radius: 50%;
      top: 3px;
      left: 3px;
      transition: 0.5s ease;
    }

    &:before {
      background-color: rgb(241, 110, 101);
    }

    &:after {
      background-color: rgb(37, 37, 37);
      left: -58px;
      transform: scale(0.00001);
    }

    > input {
      display: none;

      &:checked + label {
        &:before {
          background-color: rgb(1, 219, 198);
          transform: translateX(20px);
        }

        &:after {
          transform: translateX(75px) scale(1);
        }
      }
    }
  }
`

const DarkThemeLabel = styled.label``

export default function Header() {
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
          <Title href="/">Hello :)</Title>
          <span>|</span>
          <Title href="/blog">The Amazing Blog</Title>
        </div>
        <DivRow>
          <a href="https://www.instagram.com/alan.secundo/">
            <InstaIcon />
          </a>
          <a href="https://www.linkedin.com/in/alansecundo/">
            <LinkedIcon />
          </a>
          <a href="https://open.spotify.com/playlist/2pwLNddOouJITrbFWG82Kw">
            <SpotIcon />
          </a>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <DarkModeDiv>
                <input
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? "dark" : "light")
                  }
                  checked={theme === "dark"}
                />{" "}
                <DarkThemeLabel></DarkThemeLabel>
              </DarkModeDiv>
            )}
          </ThemeToggler>
        </DivRow>
      </HeaderContainer>
    </Container>
  )
}
