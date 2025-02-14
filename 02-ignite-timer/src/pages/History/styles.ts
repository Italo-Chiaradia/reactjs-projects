import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${props => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow-y: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding-block: 1rem;
      text-align: left;
      color: ${props => props.theme['gray-100']};
      font-size: .875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        border-top-left-radius: .5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
        border-top-right-radius: .5rem;
      }
    }

    td {
      background-color: ${props => props.theme['gray-700']};
      border-top: 4px solid ${props => props.theme['gray-800']};
      padding-block: 1rem;
      font-size: .875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%;
        padding-left: 1.5rem;
      }
      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  red: 'red-500',
  green: 'green-500',
} as const

interface StatusProps {
  statusColor: 'yellow' | 'red' | 'green';
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: .5rem;

  &::before {
    content: '';
    width: .5rem;
    height: .5rem;
    border-radius: 9999px;
    background-color: ${props => props.theme[STATUS_COLORS[props.statusColor]]};
  }
`
