import { ReactNode, useEffect, useState, useCallback } from "react";
import { api } from "../services/api";
import { createContext } from "use-context-selector";

interface Transaction {
  id: number,
  description: string,
  type: 'income' | 'outcome',
  category: string,
  price: number,
  createdAt: string,
}

interface TransactionsContextType {
  transactions: Transaction[],
  fetchTransactions: (query?: string) => Promise<void>,
  createTransaction: (data: CreateTransactionInput) => Promise<void>,
}

interface TransactionsContextProviderProps {
  children: ReactNode,
}

interface CreateTransactionInput {
  description: string,
  price: number,
  category: string,
  type: 'income' | 'outcome',
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(
    async (query?: string) => {
      const response = await api.get('transactions', {
        params: {
          _sort: 'createdAt',
          _order: 'desc',
          q: query,
        }
      })
  
      setTransactions(response.data)
    },
    []
  )

  const createTransaction = useCallback(
    async (data: CreateTransactionInput) => {
      const { description, price, category, type } = data

      const response = await api.post('transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date(),
      })

      setTransactions((state) => {
        return [response.data, ...state]
      })
    },
    [] 
  )

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{
      transactions,
      fetchTransactions,
      createTransaction
    }}>
      { children }
    </TransactionsContext.Provider>
  )
}
