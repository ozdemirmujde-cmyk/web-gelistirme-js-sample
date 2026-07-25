import { useNavigate } from 'react-router-dom'
import type { KeyboardEvent } from 'react'
import type { Product } from '../context/CatalogContext'

const ProductCard = ({
  product,
  isFavorite,
  onToggleFavorite,
}: {
  product: Product
  isFavorite: boolean
  onToggleFavorite: () => void
}) => {
  const navigate = useNavigate()

  const handleSelect = () => {
    navigate(`/product/${product.id}`, { state: { product } })
  }

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleSelect()
    }
  }

  return (
    <article className="product-card">
      <div
        className="card-body"
        onClick={handleSelect}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h3>{product.title}</h3>
          <p className="price">{product.price.toFixed(2)} TL</p>
        </div>
      </div>
      <div className="product-card-actions">
        <button
          type="button"
          className={`favorite-toggle ${isFavorite ? 'active' : ''}`}
          onClick={(event) => {
            event.stopPropagation()
            onToggleFavorite()
          }}
        >
          {isFavorite ? '♥ Favori' : '♡ Favori'}
        </button>
      </div>
    </article>
  )
}

export default ProductCard
