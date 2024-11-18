import { DiamondsFour, Lightbulb, RocketLaunch } from '@phosphor-icons/react'
import { TextRegular, TitleText } from '../typograph'
import { CardPrincipies, ContainerMission, ContainerTextCard } from './styled'

export const Mission = () => {
  return (
    <ContainerMission>
      <CardPrincipies>
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

      <CardPrincipies>
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

      <CardPrincipies>
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
