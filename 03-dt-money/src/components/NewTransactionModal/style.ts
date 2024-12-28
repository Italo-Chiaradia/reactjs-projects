import * as RadioGroup from "@radix-ui/react-radio-group";
import * as Dialog from "@radix-ui/react-dialog"
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, .75);
`

export const Content = styled(Dialog.Content) `
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${props => props.theme["gray-800"]};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    > input {
      border: none;
      border-radius: 6px;
      padding: 1rem;
      background-color: ${({theme}) => theme["gray-900"]};
      color: ${({theme}) => theme["gray-500"]};
      
      &:placeholder {
        color: ${({theme}) => theme["gray-500"]};
      }
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    input[type="number"] {
      appearance: textfield;
    }
    > button[type="submit"] {
      margin-top: 2.5rem;
      width: 100%;
      padding-block: 1rem;
      border: none;
      border-radius: 6px;
      background-color: ${({theme}) => theme["green-500"]};
      color: ${({theme}) => theme.white};
      cursor: pointer;
      font-weight: bold;
      transition: all .2s;
      &:disabled {
        opacity: .7;
        cursor: not-allowed;
      }
      &:not(:disabled):hover {
        background-color: ${({theme}) => theme["green-300"]};
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close) `
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  background-color: inherit;
  cursor: pointer;
  color: ${({theme}) => theme["gray-500"]};

  transition: all .1s;
  &:hover {
    color: ${({theme}) => theme["red-500"]};
  }
`

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 1rem;
  margin-top: .5rem;
`

interface TransactionTypeContainerProps {
  variant: 'income' | 'outcome',
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeContainerProps>`
  height: 3.6rem;
  background-color: ${({theme}) => theme["gray-700"]};
  color: ${({theme}) => theme["gray-300"]};
  border: none;
  border-radius: 6px; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  cursor: pointer;
  > svg {
    color: ${({theme, variant}) => 
      variant === 'income' 
      ? theme["green-500"] 
      : theme["red-500"]
    };
  }
  transition: all .2s;
  &:hover {
    background-color: ${({theme}) => theme["gray-600"]};
  }
  &[data-state="checked"] {
    color: ${({theme}) => theme.white};
    background-color: ${({theme, variant}) => 
      variant === 'income' 
      ? theme["green-500"] 
      : theme["red-500"]
    };
    > svg {
      color: ${({theme}) => theme.white};
    }
  }
`
