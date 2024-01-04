import styled from 'styled-components'
import GIF from '../assets/Home Video.mp4'

export default function CoverVideo() {
  return (
    <VideoContainer>
      <video src={GIF} typeof='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
  width: auto;
  video {
    width: 100%;
    height: auto;
    @media (max-width: 64em) {
      min-width: 40vh;
    }
  }
`
