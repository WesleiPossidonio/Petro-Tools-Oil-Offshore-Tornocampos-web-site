import {
  About,
  CallAction,
  ContactSection,
  Footer,
  Header,
  Hero,
  Mission,
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
      <Mission />
      <CallAction />
      <SectionServices listServices={listServices} />
      <SectionImage />
      <ContactSection />
      <Footer />
    </ContainerPage>
  )
}
