import React from "react"
import styled from "styled-components"
import TagSvg from "../assets/tag.svg"

const TagIcon = styled(TagSvg)`
  width: 20px;
  height: 20px;
  margin-right: 8px;
`

const FlexCenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export default function Tags( props ) {

  Tags.propTypes = {
    tags: Array.isRequired,
  }

  function needComma(array, index) {
    if (array.length === index + 1) {
      return " "
    }
    return ","
  }

  return (
    <FlexCenterDiv>
      <TagIcon />
      <span>
        {props.tags.map((el, index, array) => (
          <span key={index}>
            {el}
            {needComma(array, index)}{" "}
          </span>
        ))}
      </span>
    </FlexCenterDiv>
  )
}
