import { TextRegular, TitleText } from '../typograph'
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
        <Image src={ImgOne} alt="" />
        <Image src={ImgTwo} alt="" />
        <Image src={ImgThree} alt="" />
        <Image src={ImgFour} alt="" />
        <Image src={ImgFive} alt="" />
        <Image src={ImgSix} alt="" />
        <Image src={ImgSeven} alt="" />
        <Image src={Imgeight} alt="" />
      </ContentImages>
    </ContainerSectionImage>
  )
}
