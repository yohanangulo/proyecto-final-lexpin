import ProductItem from '../ProductItem'

export default function ProductsGrid() {
  const products = Array.from({ length: 12 })
  
  return products.map((product, i) => (
    <div key={'product' + i} className="col-md-4 col-xs-6">
      <ProductItem />
    </div>
  ))
}
