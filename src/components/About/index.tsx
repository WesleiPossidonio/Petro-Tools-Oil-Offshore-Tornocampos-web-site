import CountUp from 'react-countup'

import { Button } from '../Button'
import { TextRegular, TitleText } from '../typograph'
import ImageAbout from '../../assets/ImageAbout1.jpg'
import {
  ContainerAbout,
  ContainerImage,
  ContainerOurValues,
  ContainerText,
  ContentText,
  Image,
} from './styled'
import { useEffect } from 'react'

import Aos from 'aos'

export const About = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ContainerAbout id="about">
      <ContainerText data-aos="fade-right" data-aos-duration="600">
        <TextRegular size="s" color="bg" weight={700}>
          - Sobre Nós
        </TextRegular>

        <TitleText size="l">
          Compromisso com a Qualidade e Inovação em Cada Projeto
        </TitleText>

        <ContentText>
          <TextRegular size="s" id="text-about">
            A <strong>Petro Tools Offshore/Tornocampos</strong>, é uma empresa
            fundada em 2003, que atua no mercado nacional no ramo de{' '}
            <strong>
              {' '}
              Usinagem e Caldeiraria com sua matriz em Campos/RJ e filial em
              Macaé/Rj
            </strong>
          </TextRegular>

          <TextRegular size="s" id="text-about">
            Nossa empresa dispõe de{' '}
            <strong> equipe qualificada com informações técnicas </strong>
            que diferenciam e possibilitam um atendimento direcionado e
            personalizado,{' '}
            <strong>
              possibilitando agilidade nos serviços prestados, para que sejam
              entregues de forma eficaz e rápida,{' '}
            </strong>{' '}
            buscando as melhores alternativas para os nossos clientes.
          </TextRegular>

          <TextRegular size="s" id="text-about">
            Acreditamos que grandes realizações são possíveis quando se dá
            importância necessária a{' '}
            <strong> pequenos detalhes no começo de cada atividade.</strong>
          </TextRegular>
        </ContentText>

        <Button btnLarge={false} bgColor="bg">
          <a
            href="https://api.whatsapp.com/send/?phone=5522997657098&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            Saiba Mais!
          </a>
        </Button>
      </ContainerText>

      <ContainerImage data-aos="fade-left" data-aos-duration="600">
        <Image src={ImageAbout} />

        <ContainerOurValues>
          <TitleText size="xl" color="text">
            +<CountUp end={20} duration={10} />
          </TitleText>
          <TextRegular size="m" weight={600}>
            Anos <br />
            no Mercado
          </TextRegular>
        </ContainerOurValues>
      </ContainerImage>
    </ContainerAbout>
  )
}
