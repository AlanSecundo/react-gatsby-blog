import React from "react"
import "../styles/_global.css"
import Header from "../components/Header"
import styled from "styled-components"

const MainLayout = styled.div`
  font-family: "Titillium Web", sans-serif;
  color: var(--color-text);
  background-color: var(--color-body);
`

export default function Layout(props) {

  return (
    <MainLayout>
      <Header />
        {props.children}
    </MainLayout>
  )
}
