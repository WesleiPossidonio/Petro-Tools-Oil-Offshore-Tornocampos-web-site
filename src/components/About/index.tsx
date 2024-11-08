import { TextRegular, TitleText } from '../typograph'
import ImageAbout from '../../assets/ImageAbout1 (1).jpg'
import {
  ContainerAbout,
  ContainerImage,
  ContainerOurValues,
  ContainerText,
  Image,
} from './styled'
import CountUp from 'react-countup'

export const About = () => {
  return (
    <ContainerAbout>
      <ContainerText>
        <TextRegular size="s" color="text" weight={700}>
          - Sobre Nós
        </TextRegular>

        <TitleText size="l">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </TitleText>

        <TextRegular size="s" id="text-about">
          A <strong>Petro Tools Oil Offshore/Tornocampos</strong>, é uma empresa{' '}
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

        <button>Saiba Mais!</button>
      </ContainerText>

      <ContainerImage>
        <Image src={ImageAbout} />

        <ContainerOurValues>
          <TitleText size="xl" color="text">
            +<CountUp end={1000} duration={10} />
          </TitleText>
        </ContainerOurValues>
      </ContainerImage>
    </ContainerAbout>
  )
}
