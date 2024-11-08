import { About, Header, Hero } from '../../components'
import { ContainerPage } from './styled'

export const Home = () => {
  return (
    <ContainerPage>
      <Header />
      <Hero />
      <About />
    </ContainerPage>
  )
}
