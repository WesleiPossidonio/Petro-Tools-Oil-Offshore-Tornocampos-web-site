import { Home } from './Pages'
import { GlobalStyled } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/theme/default'
import { WhatsappButton } from './components'

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultThemes}>
        <WhatsappButton />
        <Home />
        <GlobalStyled />
      </ThemeProvider>
    </>
  )
}

export default App
