import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2.5rem 0 7.5rem;
  background-color: ${({theme}) => theme['gray-900']}

`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  height: 3.125rem;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;

  > button {
    padding: 0 1.25rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme['white']};
    font-weight: bold;
    transition: all .1s;
    &:hover {
      background-color: ${props => props.theme['green-700']};
    }
  }
`
