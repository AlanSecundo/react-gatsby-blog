import React, { useState } from "react"
import styled from "styled-components"
import Fade from "./Fade"
import { useIntl } from "gatsby-plugin-intl"
import { StaticImage } from "gatsby-plugin-image"

const SliderComponent = styled.div`
  display: flex;
  flex-direction: row;

  .slider-on {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    border: 2px solid #7510f7;
    background-color: #7510f7;
    margin: 0 3px 0 3px;
    transition: 0.3s;
    :hover {
      cursor: pointer;
    }
  }

  .slider-off {
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 100%;
    border: 2px solid #e4e4e4ab;
    margin: 0 3px 0 3px;
    transition: 0.3s;
    :hover {
      cursor: pointer;
    }
  }
`

const DivRow = styled.div`
  display: flex;
  flex-direction: row;
`

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Text = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  @media (max-width: 800px) {
    font-size: 13px;
  }
`

const SocialProofContainer = styled.div``

export default function Slider({ List }) {
  const [marked, setMarked] = useState(0)

  Slider.propTypes = {
    List: Array.isRequired,
  }

  const actived = value => {
    setMarked(value)
  }

  const intl = useIntl()

  const renderImage = () => {
    if (marked === 0) {
      return (
        <div className="fade-in">
          <StaticImage
            src="../images/guto.jpg"
            alt="Imagem do autor do feedback"
            width="150px"
            height="150px"
            style={{
              borderRadius: "100%",
            }}
          />
          <p>
            <b>Augusto Espinelli</b>
          </p>
          <Text>{intl.formatMessage({ id: "gutoFeedback" })}</Text>
        </div>
      )
    }
    if (marked === 1) {
      return (
        <div className="fade-in">
          <StaticImage
            src="../images/nath.jpg"
            alt="Imagem do autor do feedback"
            width="150px"
            height="150px"
            style={{
              borderRadius: "100%",
            }}
          />
          <p>
            <b>Nathalia Bruno</b>
          </p>
          <Text>{intl.formatMessage({ id: "nathFeedback" })}</Text>
        </div>
      )
    }

    return (
      <div className="fade-in">
        <StaticImage
          src="../images/fuji.jpg"
          alt="Imagem do autor do feedback"
          width="150px"
          height="150px"
          style={{
            borderRadius: "100%",
          }}
        />
        <p>
          <b>Rodrigo Fujioka</b>
        </p>
        <Text>{intl.formatMessage({ id: "fujiokaFeedback" })}</Text>
      </div>
    )
  }

  return (
    <Container>
      <DivRow>
        <Fade>
          <SocialProofContainer>{renderImage()}</SocialProofContainer>
        </Fade>
      </DivRow>
      <DivRow>
        {List.map((list, index) => (
          <SliderComponent key={index} onClick={() => actived(index)}>
            <div className={marked === index ? `slider-on` : `slider-off`} />
          </SliderComponent>
        ))}
      </DivRow>
    </Container>
  )
}
