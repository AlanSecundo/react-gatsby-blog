import React from "react"
import styled, { css } from "styled-components"
import InstagramIcon from "../assets/instagram.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import SpotifyIcon from "../assets/spotify.svg"
import { string } from "prop-types"
import Logo from "./Logo"
import { useIntl } from "gatsby-plugin-intl"
import BrazilIcon from "../assets/brazil.svg"
import USAIcon from "../assets/united-states.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getActualTheme } from "../utils/getActualTheme"
import ToogleComponent from "./ToogleTheme"

const Container = styled.div`
  color: var(--color-text);
  background-color: var(--color-body);
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
  color: var(--color-text);
  min-height: 5rem;
  ${flexCenter}
  @media (max-width: 800px) {
    margin-top: 1rem;
  }
`

const Links = styled(AniLink)`
  padding: 10px 10px;
  color: var(--color-text);

  &:hover {
    color: var(--color-purple-primary);
    border-bottom: 2px solid var(--color-purple-primary);
  }
`

const LinkLanguage = styled(AniLink)`
  color: var(--color-text);
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

const ChangeLanguage = styled.div`
  ${flexCenter}
  cursor: pointer;
  margin: 0 0 0 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
`

export default function Header({ theme }) {
  Header.propTypes = {
    theme: string.isRequired,
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
          <ToogleComponent />
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
