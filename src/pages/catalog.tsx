import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useCatalog } from '../context/CatalogContext'
import './catalog.css'

const CatalogPage = () => {
  const { products, favorites, toggleFavorite } = useCatalog()
  const [query, setQuery] = useState('')
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const filteredProducts = products.filter((product) => {
    const normalizedQuery = query.trim().toLowerCase()
    const matchesQuery =
      normalizedQuery.length === 0 ||
      product.title.toLowerCase().includes(normalizedQuery) ||
      product.description?.toLowerCase().includes(normalizedQuery)
    const matchesFavorite = !showFavoritesOnly || favorites.includes(product.id)
    return matchesQuery && matchesFavorite
  })

  return (
    <section className="catalog-page">
      <h1>Ürün Listesi</h1>
      <div className="catalog-controls">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ürün ara..."
          aria-label="Ürün arama"
        />
        <label>
          <input
            type="checkbox"
            checked={showFavoritesOnly}
            onChange={(event) => setShowFavoritesOnly(event.target.checked)}
          />
          Sadece favoriler
        </label>
        <div className="catalog-summary">
          {filteredProducts.length} ürün görüntüleniyor · {favorites.length} favori
        </div>
      </div>
      <div className="grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavorite={favorites.includes(product.id)}
            onToggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default CatalogPage
