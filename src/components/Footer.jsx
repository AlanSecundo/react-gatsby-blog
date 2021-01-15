import React from "react"
import styled, { css } from "styled-components"
import Typography from "./Typography"
import Logo from "./Logo"
import { useIntl } from "gatsby-plugin-intl"

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const PurpleContainer = styled.div`
  background-color: var(--color-purple-primary);
  color: var(--color-white-primary);
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
    max-width: 90vw;
  }
`

export default function Footer({ props }) {
  const intl = useIntl()

  return (
    <PurpleContainer>
      <Container>
        <div>
          <Logo logoType="white" />
          <b>
            <Typography size="medium">
              {intl.formatMessage({ id: "phrase" })}
            </Typography>
          </b>
          <div>
            <Typography size="medium">
              {intl.formatMessage({ id: "technologys" })}
            </Typography>
          </div>
          <Typography size="small">
            {intl.formatMessage({ id: "developedByMe" })}
          </Typography>
        </div>
      </Container>
    </PurpleContainer>
  )
}
