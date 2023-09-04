import ProductItem from '../ProductItem'

export default function ProductsGrid( { products } ) {

  return products.map(product => (
    <div key={product.id} className="col-md-4 col-xs-6">
      <ProductItem {...product} />
    </div>
  ))
}
