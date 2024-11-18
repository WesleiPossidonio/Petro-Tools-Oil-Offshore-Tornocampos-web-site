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

        <BoxIcon
          href="https://www.instagram.com/tornocamposoffshore/"
          target="_blank"
        >
          <InstagramLogo size={32} />
        </BoxIcon>
      </ContainerLogo>

      <ContainerNavigate>
        <TitleText size="s">Navegação</TitleText>
        <ContentLink>
          <TextRegular>
            {' '}
            <a href="#home">Home</a>
          </TextRegular>
          <TextRegular>
            {' '}
            <a href="#about">Sobre Nós</a>
          </TextRegular>
          <TextRegular>
            {' '}
            <a href="#services">Serviços</a>
          </TextRegular>
          <TextRegular>
            {' '}
            <a href="#contact">Contatos</a>
          </TextRegular>
        </ContentLink>
      </ContainerNavigate>

      <ContainerNavigate>
        <TitleText size="s">Contatos</TitleText>
        <ContentLink>
          <TextRegular>
            <strong>Tel:</strong>{' '}
            <a href="tel:+55222765-1377">(22) 2765-1377</a>
          </TextRegular>
          <TextRegular>
            {' '}
            <strong>Email:</strong>{' '}
            <a href="mailto:petro@petrotoolsoffshore.com.br">
              petro@petrotoolsoffshore.com.br
            </a>
          </TextRegular>
          <TextRegular>
            <strong>Endereço:</strong>{' '}
            <a href="https://maps.app.goo.gl/FvcfEvQVrKsUwKV28" target="_blank">
              Av. Pres. Kennedy, 996/1000 - Vila da Rainha, <br /> Campos dos
              Goytacazes - RJ, 28020-010
            </a>
          </TextRegular>
        </ContentLink>
      </ContainerNavigate>
    </ContainerFooter>
  )
}
