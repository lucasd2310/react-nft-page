import styled from 'styled-components'
import Typewriter from 'typewriter-effect'

export function TypeWriterText() {
  return (<Title>
    Aprende React creando proyectos
    <Typewriter
      options={{
        autoStart: true,
        loop: true,
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(`<span class="text-1">Divertidos</span>`)
          .pauseFor(500)
          .deleteAll()
          .typeString(`<span class="text-2">Increibles</span>`)
          .pauseFor(500)
          .deleteAll()
          .typeString(`<span class="text-3">Y reutilizables!</span>`)
          .pauseFor(500)
          .deleteAll()
          .start();
      }}
    />
  </Title>)
}

const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  width: 80%;
  color: ${(props) => props.theme.text};
  align-self: flex-start;
  transition: all 0.5s ease-in-out;
  span {
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', sans-serif;
  }
  .text-1 {
    color: blue;
  }
  .text-2 {
    color: orange;
  }
  .text-3 {
    color: red;
  }
  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 48em) {
    align-self: center;
    text-align: center;
  }
  @media (max-width: 40em) {
    width: 90%;
  }
`
