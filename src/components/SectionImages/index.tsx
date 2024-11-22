import { useEffect } from 'react'
import { TextRegular, TitleText } from '../typograph'

import Aos from 'aos'
// import 'aos/dist/aos.css'

import {
  ContainerSectionImage,
  ContentImages,
  ContentText,
  Image,
} from './styled'

import ImgOne from '../../assets/ImgService1.webp'
import ImgTwo from '../../assets/ImgService2.webp'
import ImgThree from '../../assets/ImgService3.webp'
import ImgFour from '../../assets/ImgService4.webp'
import ImgFive from '../../assets/ImgService5.webp'
import ImgSix from '../../assets/ImgService6.webp'
import ImgSeven from '../../assets/ImgService7.webp'
import Imgeight from '../../assets/ImgService8.webp'

export const SectionImage = () => {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <ContainerSectionImage>
      <ContentText>
        <TitleText>Precisão em cada detalhe!</TitleText>
        <TextRegular>
          Veja de perto a excelência dos nossos serviços. Cada imagem é um
          compromisso com a qualidade e precisão que você procura!
        </TextRegular>
      </ContentText>

      <ContentImages>
        <Image src={ImgOne} alt="" data-aos="zoom-in" data-aos-duration="600" />
        <Image src={ImgTwo} alt="" data-aos="zoom-in" data-aos-duration="600" />
        <Image
          src={ImgThree}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <Image
          src={ImgFour}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <Image
          src={ImgFive}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <Image src={ImgSix} alt="" data-aos="zoom-in" data-aos-duration="600" />
        <Image
          src={ImgSeven}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="600"
        />
        <Image
          src={Imgeight}
          alt=""
          data-aos="zoom-in"
          data-aos-duration="600"
        />
      </ContentImages>
    </ContainerSectionImage>
  )
}
