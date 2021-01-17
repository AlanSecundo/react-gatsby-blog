import React from "react"
import "../styles/_global.css"
import styled from "styled-components"

const MainLayout = styled.div`
  font-family: "Titillium Web", sans-serif;
  color: var(--color-text);
  background-color: var(--color-body);
  min-height: 100vh;
  line-height: 1.6;
`

export default function Layout(props) {

  return (
    <MainLayout>
        {props.children}
    </MainLayout>
  )
}
