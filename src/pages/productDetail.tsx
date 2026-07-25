import { useLocation, useParams } from 'react-router-dom'
import { useCatalog } from '../context/CatalogContext'

const ProductDetail = () => {
  const { id } = useParams()
  const location = useLocation()
  const { products, favorites, toggleFavorite } = useCatalog()
  const savedProduct = location.state?.product
  const product = savedProduct ?? products.find((p) => p.id === id)

  if (!product) return <div>Ürün bulunamadı</div>

  const isFav = favorites.includes(product.id)

  return (
    <section className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
      <p className="price">{product.price.toFixed(2)} TL</p>
      <button onClick={() => toggleFavorite(product.id)}>{isFav ? 'Favorilerden Kaldır' : 'Favorilere Ekle'}</button>
    </section>
  )
}

export default ProductDetail
