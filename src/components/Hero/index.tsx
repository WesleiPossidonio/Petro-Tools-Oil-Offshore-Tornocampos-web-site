//Images
import imgBannerTwo from '../../assets/ImgTwo.jpg'
import imgBannerThree from '../../assets/ImgThree.webp'

//Components
import { ContainerMain, ContentSwiper, ContentText, ImgBanner } from './styled'
import { Button, TextRegular, TitleText } from '..'

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
        {/* <ContentSwiper>
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
        </ContentSwiper> */}

        <ContentSwiper>
          <ImgBanner src={imgBannerTwo} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Soluções em Usinagem e Caldeiraria para Projetos Exigentes
            </TitleText>
            <TextRegular color="white">
              Qualidade, precisão e compromisso para entregar resultados à
              altura das suas expectativas.
            </TextRegular>

            <Button btnLarge={false} bgColor="white">
              Saiba Mais!
            </Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBannerThree} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Experiência e Tecnologia a Serviço da Sua Necessidade!
            </TitleText>
            <TextRegular color="white">
              Peças e estruturas sob medida, feitas para durar e superar os
              desafios do seu projeto.
            </TextRegular>

            <Button btnLarge={false} bgColor="white">
              Saiba Mais!
            </Button>
          </ContentText>
        </ContentSwiper>
      </Swiper>
    </ContainerMain>
  )
}
