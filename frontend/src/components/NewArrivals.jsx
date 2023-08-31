import ProductItem from './ProductItem'

export default function NewArrivals() {
  const newArrivals = [1]
  const uniqueArrivals = [...new Set(newArrivals)]
  return (
    <div className="d-flex flex-wrap">
      {uniqueArrivals.map((newArr) => (
        <div key={newArr} className="col-md-3 col-xs-6">
          <ProductItem />
        </div>
      ))}
    </div>
  )
}
