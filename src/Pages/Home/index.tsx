import {
  About,
  CallAction,
  ContactSection,
  Footer,
  Header,
  Hero,
  SectionImage,
  SectionServices,
} from '../../components'
import { listServices } from '../../components/LIstServicesArray'
import { ContainerPage } from './styled'

export const Home = () => {
  return (
    <ContainerPage>
      <Header />
      <Hero />
      <About />
      <CallAction />
      <SectionServices listServices={listServices} />
      <SectionImage />
      <ContactSection />
      <Footer />
    </ContainerPage>
  )
}
