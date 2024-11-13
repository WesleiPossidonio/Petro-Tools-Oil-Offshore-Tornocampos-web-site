// swiper Banner
import { Pagination, Autoplay } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'

import { Button } from '../Button'
import { TextRegular, TitleText } from '../typograph'
import {
  CardServices,
  ContainerSertvices,
  ContentText,
  ContentTextCard,
  ImgCard,
} from './styled'

type Services = {
  id: number
  title: string
  text: string
  iconSvg: string
}

interface SectionServicesProps {
  listServices: Services[]
}

export const SectionServices = ({ listServices }: SectionServicesProps) => {
  return (
    <ContainerSertvices>
      <ContentText>
        <TitleText size="l" color="text">
          Excelência em Usinagem e Caldeiraria <br /> Sob Medida
        </TitleText>
        <TextRegular size="m" color="text">
          Oferecemos soluções personalizadas e de alta precisão em usinagem e
          caldeiraria, garantindo qualidade, segurança e eficiência para atender
          às necessidades específicas de cada projeto.
        </TextRegular>

        <Button btnLarge bgColor="bg">
          Saiba Mais!
        </Button>
      </ContentText>

      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        {listServices.map((list) => {
          return (
            <CardServices key={list.id}>
              <ImgCard src={list.iconSvg} />
              <ContentTextCard>
                <TitleText size="s">{list.title}</TitleText>
                <TextRegular size="sm">{list.text}</TextRegular>
              </ContentTextCard>
            </CardServices>
          )
        })}
      </Swiper>
    </ContainerSertvices>
  )
}
