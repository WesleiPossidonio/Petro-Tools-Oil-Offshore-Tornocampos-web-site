import styled from 'styled-components'

export const ContainerMission = styled.section`
  width: 100%;
  height: auto;

  padding: 2.5rem 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  text-align: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;

    div {
      padding: 0;
      flex-wrap: wrap;
    }
  }
`

export const CardPrincipies = styled.div`
  width: 100%;
  height: 16.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  border: 1px solid ${({ theme }) => theme.colors['base-white']};
  border-radius: 8px;

  background: ${({ theme }) => theme.colors['base-white']};

  box-shadow:
    rgba(0, 0, 0, 0.12) 0px 1px 3px,
    rgba(0, 0, 0, 0.24) 0px 1px 2px;

  cursor: pointer;
  transition: 0.2s ease-in-out;

  svg {
    color: ${({ theme }) => theme.colors['base-bg']};
  }

  &:hover {
    transform: translateY(-6px);
    border: 1px solid ${({ theme }) => theme.colors['base-secundary-bg']};

    svg {
      color: ${({ theme }) => theme.colors['base-secundary-bg']};
    }

    h1 {
      color: ${({ theme }) => theme.colors['base-text']};
    }
  }
`

export const ContainerTextCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  margin-top: 1rem;
`
