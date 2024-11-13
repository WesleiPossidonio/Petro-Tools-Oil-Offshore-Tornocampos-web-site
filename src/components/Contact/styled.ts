import styled from 'styled-components'

export const ContainerContact = styled.section`
  width: 100%;
  max-width: 100rem;
  height: 40rem;
  min-height: max-content;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  padding: 3rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors['base-white-100']};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1.5rem;
  }
`

export const ContentContact = styled.div``

export const Form = styled.form`
  width: 50%;
  height: 32rem;

  padding: 1.5rem;

  border-radius: 12px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  box-shadow:
    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-gray-100']};

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`

interface TextAreaProps {
  error?: string
}

export const TextArea = styled.textarea<TextAreaProps>`
  width: 100%;
  height: 8rem;

  padding: 0.5rem;
  border: 2px solid
    ${({ theme, error }) =>
      error !== undefined
        ? theme.colors['base-red']
        : theme.colors['base-white']};
  border-radius: 8px;

  font-size: 0.8835125rem;
  line-height: 1.3125rem;
  font-style: normal;
  font-weight: 400;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  background: ${({ theme }) => theme.colors['base-white']};

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-text']};
  }
  /* 
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors['base-bg']};
    border-radius: 8px;
  } */
`

export const ContentText = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.9rem;
`

export const BoxIcon = styled.span`
  width: 5rem;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 12px;

  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  background-color: ${({ theme }) => theme.colors['base-gray-100']};

  @media (max-width: 500px) {
    width: 4rem;
    height: 3rem;

    svg {
      width: 2.3rem;
    }
  }
`
