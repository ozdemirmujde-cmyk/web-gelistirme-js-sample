import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import productsData from '../data/products.json'

export type Product = {
  id: string
  title: string
  price: number
  image: string
  description?: string
}

type CatalogContextType = {
  products: Product[]
  favorites: string[]
  toggleFavorite: (id: string) => void
}

const CatalogContext = createContext<CatalogContextType | undefined>(undefined)

export const CatalogProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([])
  const products: Product[] = productsData as Product[]

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]))
  }

  return (
    <CatalogContext.Provider value={{ products, favorites, toggleFavorite }}>
      {children}
    </CatalogContext.Provider>
  )
}

export const useCatalog = () => {
  const ctx = useContext(CatalogContext)
  if (!ctx) throw new Error('useCatalog must be used within CatalogProvider')
  return ctx
}

export default CatalogContext
