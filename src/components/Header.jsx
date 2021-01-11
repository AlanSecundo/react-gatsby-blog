import React from "react"
import styled, { css } from "styled-components"
import InstagramIcon from "../assets/instagram.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import SpotifyIcon from "../assets/spotify.svg"
import { func, string } from "prop-types"
import Logo from "./Logo"
import { useIntl } from "gatsby-plugin-intl"
import BrazilIcon from "../assets/brazil.svg"
import USAIcon from "../assets/united-states.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getActualTheme } from "../utils/getActualTheme"

const Container = styled.div`
  color: ${props => props.theme.textHeader};
  background-color: ${props => props.theme.backgroundHeader};
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
  max-width: 1180px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

const flexCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const DivRow = styled.div`
  color: ${({ theme }) => theme.textHeader};
  min-height: 5rem;
  ${flexCenter}
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`

const Links = styled(AniLink)`
  padding: 10px 10px;
  color: ${({ theme }) => theme.textHeader};

  &:hover {
    color: ${({ theme }) => theme.purple};
    border-bottom: 2px solid ${({ theme }) => theme.purple};
  }
`

const LinkLanguage = styled(AniLink)`
  color: ${({ theme }) => theme.textHeader};
`

const SvgStyleHover = css`
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
`
const SvgStyle = css`
  width: 28px;
  height: 28px;
  fill: black;
  margin: 0px 3px 0px 3px;
`
const LinkedIcon = styled(LinkedinIcon)`
  ${SvgStyle}
  ${SvgStyleHover}
`
const InstaIcon = styled(InstagramIcon)`
  ${SvgStyle}
  ${SvgStyleHover}
`
const SpotIcon = styled(SpotifyIcon)`
  ${SvgStyle}
  ${SvgStyleHover}
`
const USIcon = styled(USAIcon)`
  ${SvgStyle}
`
const BRIcon = styled(BrazilIcon)`
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
    background-color: ${({ theme }) => theme.purple};
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
      background-color: ${({ theme }) => theme.textWhite};
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

const HiddeLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`
const ChangeLanguage = styled.div`
  ${flexCenter}
  cursor: pointer;
  margin: 0 0 0 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

export default function Header({ theme, toggleTheme }) {
  Header.propTypes = {
    theme: string.isRequired,
    toogleTheme: func.isRequired,
  }

  const intl = useIntl()

  function isLanguageBR() {
    if (typeof window === "undefined") {
      return true
    }
    let url = window.location.href
    if (url.indexOf("/en") > -1) {
      return false
    }
    return true
  }

  return (
    <Container>
      <HeaderContainer>
        <DivRow>
          <Logo logoType={theme === "dark" ? "white" : "purple"} size={80} />
        </DivRow>
        <div>
          <Links
            cover
            to="/"
            duration={1}
            direction="down"
            bg={getActualTheme()}
          >
            {intl.formatMessage({ id: "hello" })}
          </Links>
          <span>|</span>
          <Links
            cover
            to="/blog"
            duration={1}
            direction="down"
            bg={getActualTheme()}
          >
            {intl.formatMessage({ id: "section" })}
          </Links>
        </div>
        <DivRow>
          <a href="https://www.instagram.com/alan.secundo/" target="blank">
            <InstaIcon />
          </a>
          <a href="https://www.linkedin.com/in/alansecundo/" target="blank">
            <LinkedIcon />
          </a>
          <a
            href="https://open.spotify.com/playlist/2pwLNddOouJITrbFWG82Kw"
            target="blank"
          >
            <SpotIcon />
          </a>
          <DarkModeDiv>
            <HiddeLabel htmlFor="slider">Slider modo noturno</HiddeLabel>
            <input
              name="slider"
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "dark"}
            />
            <span></span>
          </DarkModeDiv>
          <ChangeLanguage>
            <LinkLanguage
              cover
              duration={1}
              direction="down"
              bg={getActualTheme()}
              to={isLanguageBR() ? "/en" : "/"}
            >
              <span>{intl.formatMessage({ id: "language" })}</span>
            </LinkLanguage>
            {isLanguageBR() ? <BRIcon /> : <USIcon />}
          </ChangeLanguage>
        </DivRow>
      </HeaderContainer>
    </Container>
  )
}
