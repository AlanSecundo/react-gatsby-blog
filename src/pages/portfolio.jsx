import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { projects } from "../utils/projects";

const Main = styled.div`
  max-width: 1080px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding: 10px 10px 30px 10px;

  @media(max-width: 800px) {
    padding: 10px 30px 20px 30px;
  }
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;

  @media(max-width: 800px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`

const Link = styled.a`
  all: unset;
  text-decoration: none;
`

const Card = styled.div`
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  box-shadow: var(--color-purple-secondary) 0px 0px 6px 1px;
  padding-bottom: 3px;

  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`

const Image = styled.img`
  position: relative;
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  height: 23vh;
  object-fit: cover;
  border-radius: 8px 8px 0px 0px;
`

const Subtitle = styled.p`
  color: var(--color-grey-primary);
  padding: 0px 10px;
  @media(max-width: 800px) {
    padding: 0px 5px;
  }
`

const Title = styled.h3`
  color: var(--color-text);
`

export default function Portfolio() {
  return (
    <div>
      <Header isArticle={false} />
      <Main>
        <Grid>
          {projects.map(el => (
            <Link href={el.link} target="_blank">
              <Card>
                <Image
                  src={el.img}
                  alt=""
                />
                <Title>{el.title}</Title>
                <Subtitle>
                  {el.description}
                </Subtitle>
              </Card>
            </Link>
          ))}
        </Grid>
      </Main>
    </div>
  )
}
