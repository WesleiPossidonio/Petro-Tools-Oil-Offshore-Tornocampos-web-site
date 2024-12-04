import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react'

export const ContainerSertvices = styled.section`
  width: 100%;
  max-width: 100rem;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 3.5rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors['base-white-100']};

  .mySwiper {
    width: 100%;
    height: 25rem;
  }

  .swiper-wrapper {
    height: 90%;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const ContentText = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  align-self: flex-start;
  margin: 2rem 0;

  @media (max-width: 768px) {
    max-width: 85%;
  }
`

export const CardServices = styled(SwiperSlide)`
  width: 16.8rem;
  height: 20rem;

  padding: 1.5rem;
  border: 1px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 12px;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-white']};
  cursor: pointer;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['base-secundary-bg']};
  }
`

export const ImgCard = styled.img`
  width: 4.2rem;
`
export const ContentTextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 1rem;
`
