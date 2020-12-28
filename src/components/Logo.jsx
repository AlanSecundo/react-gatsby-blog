import React from "react"
import styled from "styled-components"
import purpleLogo from "../assets/logo-purple.png"
import greyLogo from "../assets/logo-grey.png"

export default function Logo({ logoType, size }) {
  Logo.propTypes = {
    logoType: String.isRequired,
    size: Number.isRequired,
  }

  const Avatar = styled.img`
    border-radius: 500px;
    width: ${size}px;
    margin: 0px 10px 0px 10px;
  `

  return (
    <Avatar
      src={logoType === "purple" ? purpleLogo : greyLogo}
      alt="Logotipo Alan React"
      title="Logotipo de empresa Alan Secundo"
    />
  )
}
