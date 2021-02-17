import blogImage from "../assets/logo-purple.png";
import rickAndMorty from "../assets/rickmorty-project.jpg";
import reduxImg from "../assets/redux-img.png";
import reactLifeCycle from "../assets/aprender-react.png";

export const projects = [
  {
    link: 'https://github.com/AlanSecundo/react-gatsby-blog',
    title: 'Alan Secundo Blog',
    description: 'Este é o codigo completo deste blog, desenvolvido em React, utilizando Gatsby.js.',
    img: blogImage,
  },
  {
    link: 'https://memory-game-rick-and-morty.netlify.app/',
    title: 'Jogo da memória - Rick and Morty Edition',
    description: 'Um simples jogo da memória com alguns personagens de Rick and Morty',
    img: rickAndMorty,
  },
  {
    link: 'https://redux-simple-example.netlify.app/',
    title: 'Redux - Exemplo simples e prático',
    description: 'Esta é uma aplicação básica usando Redux que busca ilustrar de forma simples a sua estrutura.',
    img: reduxImg,
  },
  {
    link: 'https://react-lifecycle-tutorial.netlify.app/',
    title: 'React LifeCycle',
    description: 'Este é um pequeno web app que ilustra cada passo de um ciclo de vida de componentes de classe em React.',
    img: reactLifeCycle,
  },
]