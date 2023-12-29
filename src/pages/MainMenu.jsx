import { Navigation } from '../components/Navigation'
import { Light } from '../styles/Themes'
import { GlobalStyles } from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'

export function MainMenu() {
  return (
    <main>
      <GlobalStyles />
      <ThemeProvider theme={Light}>
        <Navigation />
      </ThemeProvider>
    </main>
  )
}
