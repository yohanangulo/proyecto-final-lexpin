import ProductItem from './ProductItem'

export default function NewArrivals() {
  const newArrivals = [1, 1, 1, 1]
  return (
    <>
      {newArrivals.map((newArr, i) => (
        <div key={newArr + i} className="col-md-3 col-xs-6">
          <ProductItem />
        </div>
      ))}
    </>
  )
}
