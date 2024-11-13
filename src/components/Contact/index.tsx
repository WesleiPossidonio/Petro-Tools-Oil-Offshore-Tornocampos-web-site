import { EnvelopeOpen, MapPinLine, PhoneCall } from '@phosphor-icons/react'
import { Input } from '../Input'
import { TextRegular, TitleText } from '../typograph'
import {
  BoxIcon,
  ContainerContact,
  ContentInfo,
  ContentText,
  Form,
  TextArea,
} from './styled'
import { Button } from '../Button'

export const ContactSection = () => {
  return (
    <ContainerContact>
      <Form>
        <Input placeholder="Nome:" />
        <Input placeholder="E-Mail:" />
        <Input placeholder="Telefone:" />
        <TextArea placeholder="Escreva a sua Dúvida" />
        <Button btnLarge={false} bgColor="bg">
          Enviar
        </Button>
      </Form>

      <ContentText>
        <TitleText size="s" color="bg">
          - Contatos
        </TitleText>
        <TitleText size="l">
          Fale Conosco e Faça Seu Projeto Acontecer
        </TitleText>
        <TextRegular>
          Estamos aqui para ouvir suas necessidades e oferecer soluções sob
          medida para o seu projeto.
        </TextRegular>

        <ContentInfo>
          <BoxIcon>
            <PhoneCall size={40} color="#0C8FCE" />
          </BoxIcon>
          <div>
            <TitleText size="s">Telefone</TitleText>
            <TextRegular size="sm">(22) 2765-1377</TextRegular>
          </div>
        </ContentInfo>

        <ContentInfo>
          <BoxIcon>
            <EnvelopeOpen size={40} color="#0C8FCE" />
          </BoxIcon>
          <div>
            <TitleText size="s">Email:</TitleText>
            <TextRegular size="sm">petro@petrotoolsoffshore.com.br</TextRegular>
          </div>
        </ContentInfo>

        <ContentInfo>
          <BoxIcon>
            <MapPinLine size={40} color="#0C8FCE" />
          </BoxIcon>
          <div>
            <TitleText size="s">Endereço:</TitleText>
            <TextRegular size="sm">
              Av. Pres. Kennedy, 996/1000 - Vila da Rainha, <br /> Campos dos
              Goytacazes - RJ, 28020-010
            </TextRegular>
          </div>
        </ContentInfo>
      </ContentText>
    </ContainerContact>
  )
}
