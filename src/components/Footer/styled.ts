import styled from 'styled-components'

export const ContainerFooter = styled.footer`
  width: 100%;
  max-width: 100rem;
  height: 18rem;
  min-height: max-content;

  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  gap: 3rem;

  padding: 1rem 3.5rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1.5rem;

    margin-bottom: 2rem;
  }
`

export const ContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const BoxIcon = styled.span`
  width: 3rem;
  height: 3rem;

  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-gray-100']};
`

export const ImageLogo = styled.img`
  width: 13rem;
`

export const ContainerNavigate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentLink = styled(ContainerNavigate)`
  gap: 0.5rem;
`
