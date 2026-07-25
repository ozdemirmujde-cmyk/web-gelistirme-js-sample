import ProductCard from '../components/ProductCard'
import { useCatalog } from '../context/CatalogContext'
import './catalog.css'

const CatalogPage = () => {
  const { products } = useCatalog()

  return (
    <section className="catalog-page">
      <h1>Ürün Listesi</h1>
      <div className="grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}

export default CatalogPage
