# Spor Ekipmanları Mini Katalog

Bu proje, React, Vite ve TypeScript kullanılarak geliştirilmiş bir mini spor ekipmanları katalog uygulamasıdır. Kullanıcılar ürün kartlarına tıklayarak detay sayfasına gidebilir, favori durumunu güncelleyebilir ve fotoğrafik SVG resimlerle ürünleri hızlıca inceleyebilir.

## Özellikler
- React Router ile sayfa yönlendirmesi (`/` ve `/product/:id`)
- Ürün kartları için grid görünümü
- Route `state` kullanılarak ürün verisinin detaya taşınması
- `src/data/products.json` üzerinden ürün verisi
- `public/assets` içindeki SVG varlıklarla görsel zenginlik
- Favori ekleme/kaldırma durumu

## Kullanılan Teknolojiler
- React 19.2.0
- Vite 7.2.4
- TypeScript 5.9.3
- React Router DOM 7.x

## Çalıştırma Adımları

### 1) Bağımlılıkları yükleyin
```bash
npm install
```

### 2) Geliştirme sunucusunu başlatın
```bash
npm run dev
```

### 3) Uygulamayı görüntüleyin
Tarayıcınızda aşağıdaki adrese gidin:
```text
http://localhost:5173
```

## Üretim İçin Build
```bash
npm run build
```

## Test
Bu proje için özel bir test komutu yoktur. Aşağıdaki adımlarla uygulamanın doğru çalıştığını kontrol edebilirsiniz:

1. `npm run dev` ile yerel sunucuyu başlatın.
2. `http://localhost:5173` adresine gidin.
3. Katalog sayfasında ürün kartları ve fiyatların doğru görüntülendiğini doğrulayın.
4. Bir ürüne tıklayarak detay sayfasına gidin ve `Favorilere Ekle` / `Favorilerden Kaldır` işlevinin çalıştığını kontrol edin.

## Deploy
Bu proje Vite ile hazırlandığı için herhangi bir statik site barındırma servisine kolayca deploy edilebilir.

Örnek adımlar:

```bash
npm run build
```

- `dist/` klasörü üretim dosyalarını içerir.
- `Netlify`, `Vercel` veya `GitHub Pages` gibi servislerde `dist/` dizinini deploy edin.

## Proje Yapısı
- `src/App.tsx`: Router ve sayfa düzeni
- `src/pages/catalog.tsx`: Ürün listesini grid halinde gösterir
- `src/pages/productDetail.tsx`: Seçilen ürünün detay sayfası
- `src/components/ProductCard.tsx`: Ürün kartları ve navigasyon
- `src/context/CatalogContext.tsx`: Ürün verisi ve favori durumu yönetimi
- `src/data/products.json`: Spor ekipmanları ürünleri
- `public/assets`: Ürün görselleri (SVG)

## Ekran Görüntüleri

![Katalog Sayfası](./screenshots/catalog.png)

![Ürün Detay Sayfası](./screenshots/product-1.png)
