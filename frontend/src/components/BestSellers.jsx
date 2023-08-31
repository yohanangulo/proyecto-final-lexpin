import ProductItem from "./ProductItem"

export default function BestSellers() {
  const bestSellers = []
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
