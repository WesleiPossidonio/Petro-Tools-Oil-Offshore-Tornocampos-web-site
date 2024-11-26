//Images
import imgBanner from '../../assets/ImageBanner.jpg'
import imgBannerTwo from '../../assets/ImgTwo.jpg'

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
              <a
                href="https://api.whatsapp.com/send/?phone=5522997657098&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Solicitar Serviço!
              </a>
            </Button>
          </ContentText>
        </ContentSwiper>

        <ContentSwiper>
          <ImgBanner src={imgBanner} alt="" />

          <ContentText data-aos="fade-right" data-aos-duration="1000">
            <TitleText color="white" size="xl">
              Experiência e Tecnologia a Serviço da Sua Necessidade!
            </TitleText>
            <TextRegular color="white">
              Peças e estruturas sob medida, feitas para durar e superar os
              desafios do seu projeto.
            </TextRegular>

            <Button btnLarge={false} bgColor="white">
              <a
                href="https://api.whatsapp.com/send/?phone=5522997657098&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Solicitar Serviço!
              </a>
            </Button>
          </ContentText>
        </ContentSwiper>
      </Swiper>
    </ContainerMain>
  )
}
