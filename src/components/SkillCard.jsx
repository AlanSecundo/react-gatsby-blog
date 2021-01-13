import React from "react"
import styled, { css } from "styled-components"
import { useIntl } from "gatsby-plugin-intl"

const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  border-bottom: 0px solid var(--color-border-theme);
  border-right: 1px solid var(--color-border-theme);
  padding: 2rem;

  @media (max-width: 800px) {
    flex-direction: column;
    border-bottom: 1px solid var(--color-border-theme);
  }
`
const IconStyle = css`
  width: 60px;
  height: 60px;
  fill: #7510f7;
`

const FlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

const List = styled.div`
  ${FlexCenter}
  flex-direction: column;
`

const PurpleP = styled.p`
  color: #7510f7;
  font-weight: 400;
`

export default function SkillCard({ SkillList }) {
  const IconStyled = styled(SkillList.icon)`
    ${IconStyle}
  `

  SkillCard.propTypes = {
    SkillList: Object.isRequired,
  }

  const intl = useIntl()

  return (
    <Column>
      <IconStyled />
      <p>
        <b>{intl.formatMessage({ id: SkillList.title })}</b>
      </p>
      <p>{intl.formatMessage({ id: SkillList.text })}</p>
      <PurpleP>{intl.formatMessage({ id: SkillList.subtitle })}</PurpleP>
      <List>
        {SkillList.list.map((skill, index) => {
          return <span key={index}>{skill}</span>
        })}
      </List>
    </Column>
  )
}
