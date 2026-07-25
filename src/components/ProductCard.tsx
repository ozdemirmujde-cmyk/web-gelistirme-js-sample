import { useNavigate } from 'react-router-dom'
import type { Product } from '../context/CatalogContext'

const ProductCard = ({ product }: { product: Product }) => {
  const navigate = useNavigate()

  return (
    <article className="product-card" onClick={() => navigate(`/product/${product.id}`, { state: { product } })}>
      <button type="button" className="product-link">
        <img src={product.image} alt={product.title} />
        <div className="product-info">
          <h3>{product.title}</h3>
          <p className="price">{product.price.toFixed(2)} TL</p>
        </div>
      </button>
    </article>
  )
}

export default ProductCard
