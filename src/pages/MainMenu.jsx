import { Navigation } from '../components/Navigation'
import { Light } from '../styles/Themes'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { Home } from '../components/sections/Home'
import { About } from '../components/sections/About'
import { Roadmap } from '../components/sections/Roadmap'
import { Showcase } from '../components/sections/Showcase'
import { Team } from '../components/sections/Team'
import { Questions } from '../components/sections/Questions'

export function MainMenu() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navigation />
        <Home />
        <About />
        <Roadmap />
        <Showcase />
        <Team />
        <Questions />
      </ThemeProvider>
    </main>
  )
}
