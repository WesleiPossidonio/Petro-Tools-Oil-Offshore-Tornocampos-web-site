import { Home } from './Pages'
import { GlobalStyled } from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/theme/default'
import { WhatsappButton } from './components'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <>
      <ThemeProvider theme={DefaultThemes}>
        <WhatsappButton />
        <Home />
        <ToastContainer />
        <GlobalStyled />
      </ThemeProvider>
    </>
  )
}

export default App
