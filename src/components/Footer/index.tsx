import { InstagramLogo } from '@phosphor-icons/react'
import Logo from '../../assets/Logo.png'
import { TextRegular, TitleText } from '../typograph'

import {
  BoxIcon,
  ContainerFooter,
  ContainerLogo,
  ContainerNavigate,
  ContentLink,
  ImageLogo,
} from './styled'

export const Footer = () => {
  return (
    <ContainerFooter>
      <ContainerLogo>
        <ImageLogo src={Logo} alt="Logo" />
        <TextRegular color="text" weight={500} size="s">
          Petro Tools Oil Offshore/Tornocampos <br /> © 2024 - Todos os
          direitos reservados.
        </TextRegular>
        <BoxIcon>
          <InstagramLogo size={32} />
        </BoxIcon>
      </ContainerLogo>

      <ContainerNavigate>
        <TitleText size="s">Navegação</TitleText>
        <ContentLink>
          <TextRegular>Home</TextRegular>
          <TextRegular>Sobre Nós</TextRegular>
          <TextRegular>Serviços</TextRegular>
          <TextRegular>Contatos</TextRegular>
        </ContentLink>
      </ContainerNavigate>

      <ContainerNavigate>
        <TitleText size="s">Contatos</TitleText>
        <ContentLink>
          <TextRegular>
            <strong>Tel:</strong> (22) 2765-1377
          </TextRegular>
          <TextRegular>
            {' '}
            <strong>Email:</strong> petro@petrotoolsoffshore.com.br
          </TextRegular>
          <TextRegular>
            <strong>Endereço:</strong> Av. Pres. Kennedy, 996/1000 - Vila da
            Rainha, <br /> Campos dos Goytacazes - RJ, 28020-010
          </TextRegular>
        </ContentLink>
      </ContainerNavigate>
    </ContainerFooter>
  )
}
