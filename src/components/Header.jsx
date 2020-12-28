import React from "react"
import styled, { css } from "styled-components"
import InstagramIcon from "../assets/instagram.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import SpotifyIcon from "../assets/spotify.svg"
import { func, string } from "prop-types"
import Logo from "./Logo"

const Container = styled.div`
  color: ${({ theme }) => theme.textHeader};
  background-color: ${({ theme }) => theme.backgroundHeader};
  transition: all 0.3s ease-in-out;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
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

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textHeader};
  min-height: 5rem;

  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`

const Title = styled.a`
  padding: 10px 10px;
  color: ${({ theme }) => theme.textHeader};

  &:hover {
    color: ${({theme}) => theme.purple};
    border-bottom: 2px solid ${({theme}) => theme.purple};
  }
`

const SvgStyle = css`
  width: 28px;
  height: 28px;
  fill: black;
  margin: 0px 3px 0px 3px;
  transition: all 0.2s ease-in-out;

  :hover {
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

const DarkModeDiv = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 28px;
  top: -2px;
  left: 3px;

  > input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  > span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.purple };
    -webkit-transition: 0.4s;
    transition: 0.4s;
    border-radius: 40px;

    :before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 6px;
      bottom: 4px;
      background-color: ${({ theme }) => theme.textWhite };
      border-radius: 40px;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }

  > input:checked + span {
    background-color: ${({ theme }) => theme.textWhite};
  }

  > input:checked + span:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
    background-color: transparent;
    box-shadow: inset -7px -1px 0 1px ${({ theme }) => theme.purple};
  }
`

export default function Header({ theme, toggleTheme }) {
  Header.propTypes = {
    theme: string.isRequired,
    toogleTheme: func.isRequired,
  }

  return (
    <Container>
      <HeaderContainer>
        <DivRow>
          <Logo logoType={ theme === "dark" ? "white" : "purple" } size={80} />
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
          <DarkModeDiv>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span></span>
          </DarkModeDiv>
        </DivRow>
      </HeaderContainer>
    </Container>
  )
}
