import React from "react"
import "../styles/_global.css"
import Header from "../components/Header"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"
import { useDarkMode } from "../utils/darkModeLogic"
import Body from "../components/Body"
import { Helmet } from "react-helmet"

const GlobalDiv = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

export default function Home() {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalDiv>
        <Helmet>
          <html lang="en" />
          <meta charSet="utf-8" />
          <meta
            name="description"
            content="Um blog sobre tecnologias como React e Gatsby feitas para outros desenvolvedores aprenderem. Além disso, também acompanha uma página pessoal sobre mim"
          />
          <title>React Blog Alan Secundo</title>
        </Helmet>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Body theme={theme} />
      </GlobalDiv>
    </ThemeProvider>
  )
}
