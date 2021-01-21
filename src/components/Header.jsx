import React from "react"
import styled, { css } from "styled-components"
import InstagramIcon from "../assets/instagram.svg"
import LinkedinIcon from "../assets/linkedin.svg"
import SpotifyIcon from "../assets/spotify.svg"
import GithubIcon from "../assets/github.svg"
import Logo from "./Logo"
import { useIntl } from "gatsby-plugin-intl"
import BrazilIcon from "../assets/brazil.svg"
import USAIcon from "../assets/united-states.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { getActualTheme } from "../utils/getActualTheme"
import ToogleComponent from "./ToogleTheme"
import { isLanguageBR } from "../utils/isLanguageBr"

const Container = styled.div`
  color: var(--color-text);
  background-color: var(--color-body);
  transition: all 0.3s ease-in-out;
  font-family: "Titillium Web", sans-serif;
  font-weight: 700;
`

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding-top: 10px;
  padding-bottom: 10px;

  /* 
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
  row-gap: 1rem; */

  @media (max-width: 800px) {
    display: flex;
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
  ${flexCenter}
  cursor: pointer;
  margin: 0 0 0 10px;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
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
const GitIcon = styled(GithubIcon)`
  ${SvgStyle}
  ${SvgStyleHover}
`

const USIcon = styled(USAIcon)`
  ${SvgStyle}
`
const BRIcon = styled(BrazilIcon)`
  ${SvgStyle}
`

const LeftContainer = styled.div`
  ${flexCenter}
  justify-content: flex-start;
`

const CenterContainer = styled.div`
  ${flexCenter}
  justify-content: center;
`

const RightContainer = styled.div`
  ${flexCenter}
  justify-content: flex-end;
`

export default function Header(props) {
  Header.propTypes = {
    isArticle: Boolean.isRequired,
    actualSlug: String,
    otherLanguageSlug: String,
  }

  const intl = useIntl()

  function getUrl() {
    if (typeof window === "undefined") {
      return
    }

    let url = window.location.pathname

    if (isLanguageBR()) {
      url = url.replace("/br", "/en").replace("/artigos", "/articles")
    } else {
      url = url.replace("/en", "/br").replace("/articles", "/artigos")
    }

    if (props.isArticle) {
      return url.replace(props.actualSlug, props.otherLanguageSlug)
    }

    return url
  }

  return (
    <Container>
      <HeaderContainer>
        <LeftContainer>
          <DivRow>
            <Logo logoType={"purple"} />
          </DivRow>
        </LeftContainer>
        <CenterContainer>
          <div>
            <Links
              cover
              to={isLanguageBR() ? "/br" : "/en"}
              duration={0.5}
              direction="down"
              bg={getActualTheme()}
            >
              {intl.formatMessage({ id: "hello" })}
            </Links>
            <span>|</span>
            <Links
              cover
              to={isLanguageBR() ? "/br/artigos" : "/en/articles"}
              duration={0.5}
              direction="down"
              bg={getActualTheme()}
            >
              {intl.formatMessage({ id: "section" })}
            </Links>
          </div>
        </CenterContainer>
        <RightContainer>
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
            <a href="https://github.com/AlanSecundo" target="blank">
              <GitIcon />
            </a>
            <ToogleComponent />
            {/* <LinkLanguage
              cover
              duration={0.5}
              direction="down"
              bg={getActualTheme()}
              to={getUrl()}
            >
              <span>{intl.formatMessage({ id: "language" })}</span>
              {isLanguageBR() ? <BRIcon /> : <USIcon />}
            </LinkLanguage> */}
          </DivRow>
        </RightContainer>
      </HeaderContainer>
    </Container>
  )
}
