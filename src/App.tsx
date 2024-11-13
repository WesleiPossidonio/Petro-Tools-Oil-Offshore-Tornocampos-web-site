import { Home } from './Pages'
import { GlobalStyled } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/theme/default'

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultThemes}>
        <Home />
        <GlobalStyled />
      </ThemeProvider>
    </>
  )
}

export default App
