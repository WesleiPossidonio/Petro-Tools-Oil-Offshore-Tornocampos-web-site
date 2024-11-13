import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  max-width: 100rem;
  height: 38rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 2rem;
  margin: 0 auto;

  @media (max-width: 850px) {
    flex-direction: column;
    gap: 4rem;
    padding: 3.5rem 1.5rem;
  }
`

export const ContainerText = styled.div`
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.3rem;
  margin-left: -4rem;

  #text-about {
    margin-top: 1rem;
  }

  @media (max-width: 850px) {
    max-width: 100%;
    margin-left: 0;
  }
`

export const ContentText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  margin-bottom: 1.5rem;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`

export const Image = styled.img`
  width: 20rem;
  height: 25rem;

  object-fit: cover;

  @media (max-width: 550px) {
    width: 15rem;
    height: 18rem;
    margin-right: 3rem;
  }
`

export const ContainerOurValues = styled.div`
  width: 11rem;
  height: 13rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  right: -3.5rem;

  text-align: center;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  background-color: ${({ theme }) => theme.colors['base-white']};

  &::after {
    content: '';
    position: absolute;
    right: -0.1rem;
    top: 17%;
    height: 65%;
    width: 4px;
    background-color: ${({ theme }) => theme.colors['base-bg']};
  }

  @media (max-width: 550px) {
    width: 9rem;
    height: 11rem;
    right: 0.5rem;
  }
`
