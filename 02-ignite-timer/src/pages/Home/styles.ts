import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: none;
  background-color: ${props => props.theme['green-500']};
  color: ${props => props.theme['gray-100']};
  padding: 1.0625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  &:disabled {
    opacity: .7;
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }
`
export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme['green-500']};

  &:not(:disabled):hover {
    background-color: ${props => props.theme['green-700']};
  }
`
export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${props => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${props => props.theme['red-700']};
  }
`
