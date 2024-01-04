import styled from 'styled-components'
import { Accordion } from '../Accordion'

export function Questions() {
  return (
    <Section id='questions'>
      <Title>Preguntas</Title>
      <Container>
        <Box>
          <Accordion title='¿Cómo crear una nueva cuenta?'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            eveniet voluptatum cum. Soluta omnis adipisci est molestiae odit
            delectus inventore aperiam! Exercitationem quas quisquam consequatur
            corrupti laboriosam, eius iusto illum.
          </Accordion>
          <Accordion title='¿Olvidaste tu contraseña?'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
            numquam voluptatem laudantium voluptas laboriosam impedit, repellat,
            aspernatur et est recusandae, iure explicabo!
          </Accordion>
          <Accordion title='¿Qué métodos de pago aceptan?'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            quam reprehenderit, veritatis ex aliquam in.
          </Accordion>
        </Box>
        <Box>
          <Accordion title='¿Hay un límite de Nfts que puedo comprar?'>
            Lorem, ipsum dolor sit, amet consectetur adipisicing elit.
          </Accordion>
          <Accordion title='¿Se crearán nuevos Nfts?'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
            numquam voluptatem laudantium voluptas laboriosam impedit, repellat,
            aspernatur et est recusandae, iure explicabo!
          </Accordion>
          <Accordion title='¿Qué es una Tarjeta Virtual?'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic libero
            nisi vero. Similique, quae eligendi officiis accusantium possimus
            ratione est culpa debitis fugiat delectus harum laborum laboriosam
            deleniti et doloribus quo sunt voluptas? Qui et eligendi consequatur
            nam repellendus expedita?
          </Accordion>
        </Box>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`
const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    align-self: center;
  }
  @media (max-width: 48em) {
    width: 90%;
  }
`
