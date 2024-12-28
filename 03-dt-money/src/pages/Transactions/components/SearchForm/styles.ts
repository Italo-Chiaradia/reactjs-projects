import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  width: 100%;
  max-width: 70rem;
  margin: 4rem auto 1rem;
  padding: 0 1.5rem;

  display: flex;
  gap: 1rem;

  > input {
    flex: 1;
    background-color: ${({theme}) => theme['gray-900']};
    color: ${({theme}) => theme['gray-500']};
    border: none;
    border-radius: 6px;
    padding: .75rem;

    &::placeholder {
      color: ${({theme}) => theme['gray-500']};
    }
  }
  > button {
    background-color: inherit;
    border: 1px solid ${({theme}) => theme['green-300']};
    color: ${({theme}) => theme['green-300']};
    border-radius: 6px;
    padding-left: 1.75rem;
    padding-right: 2rem;
    padding-block: 1rem;

    font-weight: bold;
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: .75rem;

    cursor: pointer;
    transition: all .2s;

    &:disabled {
      opacity: .7;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background-color: ${({theme}) => theme['green-300']};
      color: ${({theme}) => theme.white};
    }
  }
`
