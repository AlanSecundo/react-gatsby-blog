import React from 'react'
import '../styles/_global.css'
import Header from '../components/Header'
import { ThemeProvider } from 'styled-components'
import styled from "styled-components"
import { lightTheme, darkTheme } from '../styles/theme'
import { useDarkMode } from '../utils/darkModeLogic';
import Body from '../components/Body';

const GlobalDiv = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
`

export default function Home() {
  const [theme, toggleTheme] = useDarkMode();

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalDiv>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Body theme={theme} />
      </GlobalDiv>
    </ThemeProvider>
  )
}
