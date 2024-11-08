//Images
import imgBannerOne from '../../assets/ImgOne.jpg'
import imgBannerTwo from '../../assets/ImgTwo.jpg'
import imgBannerThree from '../../assets/ImgThree.jpg'

//Components
import { ContainerMain, ContentSwiper, ContentText, ImgBanner } from './styled'
import { TextRegular, TitleText } from '..'

//Banner Swiper
import { Swiper } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export const Hero = () => {
  return (
    <ContainerMain id="home">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <ContentSwiper>
          <ImgBanner src={imgBannerOne} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Transporte Rápido, Seguro e com Total Confiabilidade!
            </TitleText>
            <TextRegular color="white">
              Oferecemos soluções logísticas completas para conectar seu negócio
              ao destino certo, com confiança e eficiência.
            </TextRegular>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerTwo} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Transporte Rápido, Seguro e com Total Confiabilidade!
            </TitleText>
            <TextRegular color="white">
              Oferecemos soluções logísticas completas para conectar seu negócio
              ao destino certo, com confiança e eficiência.
            </TextRegular>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerThree} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Transporte Rápido, Seguro e com Total Confiabilidade!
            </TitleText>
            <TextRegular color="white">
              Oferecemos soluções logísticas completas para conectar seu negócio
              ao destino certo, com confiança e eficiência.
            </TextRegular>
          </ContentText>
        </ContentSwiper>
      </Swiper>
    </ContainerMain>
  )
}
