import { createContext } from 'react'

const initialState = {
  first: 'Matias',
  last: 'Sarrailh',
}

export type UserState = typeof initialState

export const context = createContext<typeof initialState>(initialState)
