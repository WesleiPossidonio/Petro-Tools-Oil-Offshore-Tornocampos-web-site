import styled from 'styled-components'

export const ContainerAbout = styled.section`
  width: 100%;
  height: 35rem;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 2rem;
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

  background-color: red;
`

export const ContainerOurValues = styled.div`
  width: 11rem;
  height: 13rem;

  position: absolute;
  right: -3.5rem;

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
`
