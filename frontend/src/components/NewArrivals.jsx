import ProductItem from './ProductItem'

export default function NewArrivals() {
  const newArrivals = [1, 1, 1, 1]
  return (
    <>
      {newArrivals.map((newArr, i) => (
        <div key={i} className="col-md-3 col-xs-6">
          <ProductItem />
        </div>
      ))}
    </>
  )
}
