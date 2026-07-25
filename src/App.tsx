import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CatalogPage from './pages/catalog'
import ProductDetail from './pages/productDetail'
import { CatalogProvider } from './context/CatalogContext'

function App() {
  return (
    <CatalogProvider>
      <BrowserRouter>
        <header className="app-header">
          <nav>
            <Link to="/">Mini Katalog</Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </main>
      </BrowserRouter>
    </CatalogProvider>
  )
}

export default App
