import React from "react"
import styled, { css } from "styled-components"
import Typography from "./Typography"
import Logo from "./Logo"
import { useIntl } from "gatsby-plugin-intl"
import { lightTheme } from "../styles/theme"

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PurpleContainer = styled.div`
  background-color: ${({ theme }) => theme.purple};
  color: ${({ theme }) => theme.textWhite};
  flex-direction: column;
  ${FlexCenter}
  text-align: center;
  padding: 0rem 9rem 0rem 9rem;
  margin-top: -2px;

  @media (max-width: 800px) {
    max-width: 100%;
    padding: 2rem 1rem 0rem 1rem;
  }
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1180px;
  padding-bottom: 10px;
  font-weight: 300;
  font-size: 20px;
  line-height: 1.7;
  ${FlexCenter}
  flex-direction: column;
  text-align: center;

  @media (max-width: 800px) {
    max-width: 90%;
  }
`

export default function Footer({ props }) {
  const intl = useIntl()

  return (
    <PurpleContainer>
      <Container>
        <div>
          <Logo logoType="white" size={100} />
          <Typography size="medium" color={lightTheme.textWhite}>
            {intl.formatMessage({ id: "phrase" })}
          </Typography>
          <div>
            <Typography size="medium" color={lightTheme.textWhite}>
              {intl.formatMessage({ id: "technologys" })}
            </Typography>
          </div>
          <Typography size="small" color={lightTheme.textWhite}>
            {intl.formatMessage({ id: "developedByMe" })}
          </Typography>
        </div>
      </Container>
    </PurpleContainer>
  )
}
