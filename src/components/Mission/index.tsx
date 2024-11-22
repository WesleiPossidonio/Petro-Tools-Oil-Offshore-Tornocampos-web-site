import { useEffect } from 'react'
import { DiamondsFour, Lightbulb, RocketLaunch } from '@phosphor-icons/react'
import { TextRegular, TitleText } from '../typograph'
import { CardPrincipies, ContainerMission, ContainerTextCard } from './styled'

import Aos from 'aos'
import 'aos/dist/aos.css'

export const Mission = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ContainerMission>
      <CardPrincipies data-aos="fade-right" data-aos-duration="800">
        <Lightbulb size={55} />
        <ContainerTextCard>
          <TitleText size="m" color="bg">
            Nossa Visão
          </TitleText>

          <TextRegular size="sm">
            Transformamos necessidades em soluções eficientes, com foco em
            inovação, sustentabilidade e segurança, garantindo excelência e a
            plena satisfação de nossos clientes.
          </TextRegular>
        </ContainerTextCard>
      </CardPrincipies>

      <CardPrincipies data-aos="fade-up" data-aos-duration="900">
        <RocketLaunch size={55} />
        <ContainerTextCard>
          <TitleText size="m" color="bg">
            Nossa Missão
          </TitleText>

          <TextRegular size="sm">
            Ser referência em usinagem, caldeiraria, solda e mecânica, com
            qualidade e excelência no atendimento.
          </TextRegular>
        </ContainerTextCard>
      </CardPrincipies>

      <CardPrincipies data-aos="fade-left" data-aos-duration="1000">
        <DiamondsFour size={55} />
        <ContainerTextCard>
          <TitleText size="m" color="bg">
            Nossos Valores
          </TitleText>

          <TextRegular size="sm">
            Excelência em processos e produtos, com segurança, sustentabilidade
            e serviços de alta qualidade para a satisfação dos clientes.
          </TextRegular>
        </ContainerTextCard>
      </CardPrincipies>
    </ContainerMission>
  )
}
