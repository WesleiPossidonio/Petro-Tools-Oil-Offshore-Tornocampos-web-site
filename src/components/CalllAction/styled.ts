import styled from 'styled-components'
import BgImage from '../../assets/BgCallAction.webp'

export const ContainerCallAction = styled.section`
  width: 100%;
  height: 30rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  background-image: url(${BgImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`

export const ContentText = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  text-align: center;

  z-index: 3;

  @media (max-width: 768px) {
    max-width: 90%;
    gap: 0.5rem;

    #title {
      font-size: min(1.5rem, 3.5vw);
    }

    #title-text {
      font-size: min(2rem, 5.5vw);
    }
  }
`
