import ProductItem from "./ProductItem"

export default function BestSellers() {
  const bestSellers = [1, 2, 3, 4]
  return (
    <>
      {bestSellers.map((bestSeller, i) => (
        <div key={i} className="col-md-3 col-xs-6 animated-from-left">
          <ProductItem />
        </div>
      ))}
    </>
  )
}
