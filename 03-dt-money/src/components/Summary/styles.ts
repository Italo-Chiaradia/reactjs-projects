import styled, { css } from 'styled-components'

export const SummaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  margin-top: -4rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

`

interface SummaryCardProps {
  variant?: 'green',
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${props => props.theme['gray-600']};
  padding: 1.5rem 2rem;
  border-radius: 6px;
  > header {
    display: flex;
    justify-content: space-between
  }
  > header > span {
    color: ${props => props.theme['gray-300']};
  }
  > strong {
    margin-top: .75rem;
    font-size: 2rem;
    line-height: 1.4;
  }

  ${props => props.variant === 'green' && css`
    background-color: ${props.theme['green-700']};  
  `}

`