import { Button } from '../Button'
import { TitleText } from '../typograph'
import { ContainerCallAction, ContentText } from './styled'

export const CallAction = () => {
  return (
    <ContainerCallAction>
      <ContentText>
        <TitleText size="s" color="white" id="title">
          Precisando de Serviços de Usinagem e Caldeiraria?
        </TitleText>

        <TitleText size="l" color="white" id="title-text">
          Precisa de peças personalizadas e duráveis? Nós entregamos com
          qualidade e precisão. Fale conosco!
        </TitleText>
      </ContentText>
      <Button btnLarge bgColor="white">
        Saiba Mais!
      </Button>
    </ContainerCallAction>
  )
}
