import React from "react"
import "../styles/_global.css"
import Header from "../components/Header"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"
import { lightTheme, darkTheme } from "../styles/theme"
import { useDarkMode } from "../utils/darkModeLogic"

const MainLayout = styled.div`
  font-family: "Titillium Web", sans-serif;
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

export default function Layout(props) {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <MainLayout>
        <Header theme={theme} toggleTheme={toggleTheme} />
          {props.children}
      </MainLayout>
    </ThemeProvider>
  )
}
