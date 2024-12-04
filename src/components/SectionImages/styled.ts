import styled from 'styled-components'

export const ContainerSectionImage = styled.section`
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

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`

export const ContentText = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  text-align: center;

  h1 {
    font-size: min(2rem, 6.5vw);
  }

  @media (max-width: 768px) {
    max-width: 95%;
  }
`

export const ContentImages = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 15.5rem));
  gap: 2rem;
  justify-content: center;

  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(8rem, 12.5rem));
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fit, minmax(5rem, 9.5rem));
  }

  @media (max-width: 320px) {
    grid-template-columns: repeat(auto-fit, minmax(5rem, 8.3rem));
  }
`

export const Image = styled.img`
  width: 100%;
  height: 17rem;

  border-radius: 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 12.5rem;
  }

  @media (max-width: 500px) {
    height: 9.5rem;
  }

  @media (max-width: 320px) {
    height: 8.5rem;
  }
`
