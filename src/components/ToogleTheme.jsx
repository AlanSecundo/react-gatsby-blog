import React, { useCallback, useState } from "react"
import styled from "styled-components"

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
    background-color: var(--color-purple-primary);
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
      background-color: var(--color-white-primary);
      border-radius: 40px;
      -webkit-transition: 0.3s;
      transition: 0.3s;
    }
  }

  > input:checked + span {
    background-color: var(--color-white-primary);
  }

  > input:checked + span:before {
    -webkit-transform: translateX(17px);
    -ms-transform: translateX(17px);
    transform: translateX(17px);
    background-color: transparent;
    box-shadow: inset -7px -1px 0 1px var(--color-purple-primary);
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

const ToogleComponent = () => {
  const [checked, setChecked] = useState(typeof window === "undefined" ? null : window.__theme === "dark")

  const toggleTheme = useCallback(
    e => {
      const isChecked = e.target.checked
      setChecked(isChecked)
      window.__setPreferredTheme(isChecked ? "dark" : "light")
    },
    [setChecked]
  )

  if (typeof window === "undefined") {
    return null;
  }

  return (
    <DarkModeDiv>
      <HiddeLabel htmlFor="slider">Slider modo noturno</HiddeLabel>
      <input
        name="slider"
        type="checkbox"
        onChange={toggleTheme}
        checked={checked}
      />
      <span></span>
    </DarkModeDiv>
  )
}

export default ToogleComponent
